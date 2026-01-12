// Mock data for areas and categories
const areaOptions = [
    { id: 1, name: 'Matemáticas' },
    { id: 2, name: 'Física' },
    { id: 3, name: 'Química' },
    { id: 4, name: 'Informática' },
    { id: 5, name: 'Robótica' }
];

const categoryOptions = {
    1: ['Álgebra', 'Geometría', 'Cálculo'],
    2: ['Mecánica', 'Termodinámica', 'Electromagnetismo'],
    3: ['Orgánica', 'Inorgánica', 'Analítica'],
    4: ['Programación', 'Redes', 'Base de Datos'],
    5: ['Arduino', 'Lego', 'Drones']
};

document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('newAnnouncementModal');
    const newAnnouncementBtn = document.getElementById('newAnnouncementBtn');
    const closeModal = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const announcementForm = document.querySelector('.announcement-form');

    // Add Area functionality
    const addAreaBtn = document.getElementById('addAreaBtn');
    const areasContainer = document.getElementById('areasContainer');

    // Add Requirement functionality
    const addRequirementBtn = document.getElementById('addRequirementBtn');
    const requirementsContainer = document.getElementById('requirementsContainer');

    // Add Contact functionality
    const addContactBtn = document.getElementById('addContactBtn');
    const contactsContainer = document.getElementById('contactsContainer');

    function openModal() {
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.remove('show');
        announcementForm.reset();
        // Clear dynamic content
        areasContainer.innerHTML = '';
        requirementsContainer.innerHTML = '';
        contactsContainer.innerHTML = '';
    }

    // Create area dropdown options HTML
    function createAreaOptions() {
        return areaOptions.map(area => 
            `<option value="${area.id}">${area.name}</option>`
        ).join('');
    }

    // Create category dropdown options HTML
    function createCategoryOptions(areaId) {
        return categoryOptions[areaId].map(category => 
            `<option value="${category}">${category}</option>`
        ).join('');
    }

    // Add new area entry
    function addAreaEntry() {
        const areaEntry = document.createElement('div');
        areaEntry.className = 'area-entry';
        areaEntry.innerHTML = `
            <div class="area-header">
                <select class="form-control area-select" required>
                    <option value="">Seleccionar Área</option>
                    ${createAreaOptions()}
                </select>
                <button type="button" class="remove-btn" onclick="this.closest('.area-entry').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="categories-container">
                <button type="button" class="btn btn-outline-primary btn-sm add-category-btn" disabled>
                    <i class="fas fa-plus"></i> Agregar Categoría
                </button>
            </div>
        `;

        // Add event listener for area selection
        const areaSelect = areaEntry.querySelector('.area-select');
        const categoriesContainer = areaEntry.querySelector('.categories-container');
        const addCategoryBtn = areaEntry.querySelector('.add-category-btn');

        areaSelect.addEventListener('change', function() {
            // Enable/disable add category button based on area selection
            addCategoryBtn.disabled = !this.value;
        });

        addCategoryBtn.addEventListener('click', function() {
            const areaId = areaSelect.value;
            if (areaId) {
                const categoryEntry = document.createElement('div');
                categoryEntry.className = 'category-entry';
                categoryEntry.innerHTML = `
                    <select class="form-control" required>
                        <option value="">Seleccionar Categoría</option>
                        ${createCategoryOptions(areaId)}
                    </select>
                    <button type="button" class="remove-btn" onclick="this.closest('.category-entry').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                categoriesContainer.insertBefore(categoryEntry, addCategoryBtn);
            }
        });

        areasContainer.appendChild(areaEntry);
    }

    // Add new requirement entry
    function addRequirementEntry() {
        const requirementEntry = document.createElement('div');
        requirementEntry.className = 'requirement-entry';
        requirementEntry.innerHTML = `
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Ingrese requisito" required>
                <button type="button" class="remove-btn" onclick="this.closest('.requirement-entry').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        requirementsContainer.appendChild(requirementEntry);
    }

    // Add new contact entry
    function addContactEntry() {
        const contactEntry = document.createElement('div');
        contactEntry.className = 'contact-entry';
        contactEntry.innerHTML = `
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Nombre del contacto" required>
                <input type="tel" class="form-control" placeholder="Número de teléfono" required>
                <button type="button" class="remove-btn" onclick="this.closest('.contact-entry').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        contactsContainer.appendChild(contactEntry);
    }

    // Event listeners
    newAnnouncementBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    addAreaBtn.addEventListener('click', addAreaEntry);
    addRequirementBtn.addEventListener('click', addRequirementEntry);
    addContactBtn.addEventListener('click', addContactEntry);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    announcementForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        closeModal();
    });

    // Toggle sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
            mainContent.classList.toggle('shifted');
        });
    }
});