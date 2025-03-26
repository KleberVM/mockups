document.addEventListener('DOMContentLoaded', function() {
    let areaCounter = 1;

    // Handle area selection
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('area-select')) {
            const areaGroup = e.target.closest('.area-group');
            const categoriaGradoRow = areaGroup.querySelector('.categoria-grado-row');
            
            if (e.target.value) {
                categoriaGradoRow.style.display = 'flex';
                // Here you would typically load the corresponding categorias and grados
                loadCategoriesAndGrades(e.target.value, areaGroup.id);
            } else {
                categoriaGradoRow.style.display = 'none';
            }
        }
    });

    // Add new area
    document.querySelector('.btn-add-area').addEventListener('click', function() {
        areaCounter++;
        const newAreaGroup = document.createElement('div');
        newAreaGroup.className = 'area-group';
        newAreaGroup.id = `area-group-${areaCounter}`;
        
        newAreaGroup.innerHTML = `
            <button type="button" class="btn-remove-area" title="Eliminar área">
                <i class="fas fa-times-circle"></i>
            </button>
            <div class="form-row">
                <div class="input-group area-selection">
                    <label for="area-${areaCounter}"><i class="fas fa-book"></i> Área</label>
                    <div class="input-with-icon">
                        <select id="area-${areaCounter}" class="area-select" required>
                            <option value="">Seleccionar Área</option>
                            <option value="matematicas">Matemáticas</option>
                            <option value="fisica">Física</option>
                        </select>
                        <span class="error-message"></span>
                    </div>
                </div>
            </div>
            <div class="form-row categoria-grado-row" style="display: none;">
                <div class="input-group">
                    <label for="categoria-${areaCounter}">
                        <i class="fas fa-layer-group"></i> Categoría
                    </label>
                    <div class="input-with-icon">
                        <select id="categoria-${areaCounter}" required>
                            <option value="">Seleccionar Categoría</option>
                        </select>
                        <span class="error-message"></span>
                    </div>
                </div>
                <div class="input-group">
                    <label for="grado-${areaCounter}">
                        <i class="fas fa-graduation-cap"></i> Grado
                    </label>
                    <div class="input-with-icon">
                        <select id="grado-${areaCounter}" required>
                            <option value="">Seleccionar Grado</option>
                        </select>
                        <span class="error-message"></span>
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.areas-container').appendChild(newAreaGroup);
    });

    // Remove area
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-remove-area')) {
            e.target.closest('.area-group').remove();
        }
    });

    function loadCategoriesAndGrades(areaValue, groupId) {
        // Add your logic to load categories and grades based on the selected area
        // This is where you would make an API call to get the data
    }

    document.addEventListener('DOMContentLoaded', function() {
        let tutorCounter = 1;
    
        document.getElementById('addTutor').addEventListener('click', function() {
            tutorCounter++;
            
            const tutorContainer = document.querySelector('.tutor-container');
            const newTutorRow = document.createElement('div');
            newTutorRow.className = 'form-row';
            newTutorRow.innerHTML = `
                <div class="input-group">
                    <label for="tokenTutor${tutorCounter}">
                        <i class="fas fa-key"></i> Token del Tutor
                    </label>
                    <div class="input-with-icon">
                        <input type="text" id="tokenTutor${tutorCounter}" 
                               placeholder="Ingrese el token del tutor" required>
                        <span class="error-message"></span>
                        <button type="button" class="btn-remove-tutor">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
            
            tutorContainer.appendChild(newTutorRow);
        });
    
        // Remove tutor input when clicking the remove button
        document.addEventListener('click', function(e) {
            if (e.target.closest('.btn-remove-tutor')) {
                e.target.closest('.form-row').remove();
            }
        });
    });
});

document.getElementById('generatePayment').addEventListener('click', function() {
    // Here you would typically make an API call to generate the payment order
    // For demo purposes, we'll just enable the download button and show the upload section
    document.getElementById('downloadPayment').disabled = false;
    document.querySelector('.upload-receipt').style.display = 'block';
});

document.getElementById('downloadPayment').addEventListener('click', function() {
    // Here you would typically trigger the download of the payment order
    console.log('Downloading payment order...');
});
