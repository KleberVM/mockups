document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('hidden');
    document.querySelector('.main-content').classList.toggle('expanded');
});