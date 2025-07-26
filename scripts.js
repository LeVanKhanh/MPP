// JavaScript to toggle submenu visibility
document.querySelectorAll('.has-submenu > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('visible'); // Toggle visibility
        this.querySelector('.toggle-icon').classList.toggle('rotated'); // Rotate the toggle icon
    });
});

const routes = {
    '/home': 'pages/the-planet/about/about.html',
    '/agile': 'pages/Reading/Agile.html',
    '/leadership': 'subpage2.html',
    '/sharing': 'page3.html'
};

function loadRoute() {
    const hash = window.location.hash.replace('#', '') || '/home';
    const iframe = document.querySelector('iframe[name="content-frame"]');
    iframe.src = routes[hash] || routes['/home'];
}

// Listen for hash changes
window.addEventListener('hashchange', loadRoute);

// Load initial route
window.addEventListener('DOMContentLoaded', loadRoute);