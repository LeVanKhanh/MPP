// JavaScript to toggle submenu visibility
document.querySelectorAll('.has-submenu > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('visible'); // Toggle visibility
        this.querySelector('.toggle-icon').classList.toggle('rotated'); // Rotate the toggle icon
    });
});