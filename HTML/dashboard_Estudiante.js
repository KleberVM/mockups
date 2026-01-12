document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        mainContent.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
    });
});