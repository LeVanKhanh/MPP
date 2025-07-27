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

// Theme toggle logic
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
    // Save preference
    localStorage.setItem('theme', theme);
    setIframeTheme(theme);
}

window.addEventListener('DOMContentLoaded', function() {
    // Set theme from saved preference and notify iframe
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    setTheme(theme);

    // Attach theme toggle button event
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.onclick = function() {
            const isDark = document.body.classList.toggle('dark-theme');
            const theme = isDark ? 'dark' : 'light';
            setTheme(theme);
        };
    }
});

function setIframeTheme(theme){
 // Tell the iframe to update its theme
    const iframe = document.querySelector('iframe[name="content-frame"]');
    if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({ type: 'set-theme', theme }, '*');
    }
}

// Set theme from saved preference, default to dark
(function() {
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
})();