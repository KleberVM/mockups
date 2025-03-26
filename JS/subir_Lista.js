document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const studentTable = document.getElementById('studentTable');
    const tableBody = document.getElementById('studentTableBody');
    const searchInput = document.getElementById('searchStudent');
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadModal = document.getElementById('uploadModal');
    const detailsModal = document.getElementById('detailsModal');
    const processingOverlay = document.querySelector('.processing-overlay');
    
    let students = []; // Will store the student data
    
    // Sort states
    let sortState = {
        name: 'none',
        date: 'none',
        status: 'none'
    };

    // File Upload Handling
    document.getElementById('excelFile').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!validateFile(file)) return;
        
        processExcelFile(file);
    });

    // File Validation
    function validateFile(file) {
        const validTypes = ['.xlsx', '.csv'];
        const maxSize = 10 * 1024 * 1024; // 10MB
        
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        
        if (!validTypes.includes(fileExtension)) {
            showError('Solo se permiten archivos .xlsx o .csv (máx. 10MB)');
            return false;
        }
        
        if (file.size > maxSize) {
            showError('El archivo excede el tamaño máximo permitido (10MB)');
            return false;
        }
        
        return true;
    }

    // Process Excel File
    async function processExcelFile(file) {
        processingOverlay.style.display = 'flex';
        
        try {
            // Here you would implement the actual file processing
            // For demonstration, we'll use a timeout to simulate processing
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Validate data and show errors
            const results = await validateData(file);
            
            if (results.valid.length > 0) {
                updateTable(results.valid);
                showSuccess(`¡Lista cargada con éxito! Se registraron ${results.valid.length} competidores`);
            }
            
            if (results.errors.length > 0) {
                showErrorSummary(results.errors);
            }
            
        } catch (error) {
            showError('Error al procesar el archivo');
        } finally {
            processingOverlay.style.display = 'none';
            closeModal(uploadModal);
        }
    }

    // Data Validation
    function validateData(data) {
        // This would be implemented according to your backend validation
        // For now, returning a mock response
        return {
            valid: [],
            errors: []
        };
    }

    // Table Management
    function updateTable(students) {
        tableBody.innerHTML = students.map(student => `
            <tr>
                <td>${student.fullName}</td>
                <td>${student.registrationDate}</td>
                <td>
                    <span class="status-badge status-${student.status.toLowerCase()}">
                        ${student.status}
                    </span>
                </td>
                <td class="table-actions">
                    <button class="btn-view" onclick="viewStudent(${student.id})">
                        <i class="fas fa-eye"></i> Ver
                    </button>
                    <button class="btn-delete" onclick="deleteStudent(${student.id})">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </td>
            </tr>
        `).join('');
    }

    // Search Functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredStudents = students.filter(student => 
            student.fullName.toLowerCase().includes(searchTerm)
        );
        updateTable(filteredStudents);
    });

    // Sorting Functionality
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sortType = this.dataset.sort;
            updateSortState(sortType);
            sortStudents(sortType);
        });
    });

    // Print Functionality
    document.getElementById('printBtn').addEventListener('click', function() {
        window.print();
    });

    // Utility Functions
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        // Add error message to DOM
    }

    function showSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        // Add success message to DOM
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Initialize the page
    function init() {
        // Check if there are existing students
        if (students.length === 0) {
            tableBody.innerHTML = `
                <tr class="empty-state">
                    <td colspan="4">
                        <i class="fas fa-inbox"></i>
                        <p>No hay estudiantes registrados</p>
                    </td>
                </tr>
            `;
        }
    }

    init();
});
document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const uploadModal = document.getElementById('uploadModal');
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadInitialBtn = document.getElementById('uploadInitialBtn');
    const closeButtons = document.querySelectorAll('.close-btn, .btn-cancel');
    
    // Function to open modal
    function openUploadModal() {
        uploadModal.style.display = 'block';
    }
    
    // Function to close modal
    function closeUploadModal() {
        uploadModal.style.display = 'none';
    }
    
    // Add click event listeners
    uploadBtn.addEventListener('click', openUploadModal);
    uploadInitialBtn.addEventListener('click', openUploadModal);
    
    // Close modal when clicking close button or cancel
    closeButtons.forEach(button => {
        button.addEventListener('click', closeUploadModal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === uploadModal) {
            closeUploadModal();
        }
    });
});