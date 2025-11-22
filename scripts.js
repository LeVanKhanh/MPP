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
    '/agile': 'pages/Reading/Agile/Agile.html',
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

document.addEventListener('DOMContentLoaded', function() {
    const expandBtn = document.getElementById('expand-main');
    const main = document.getElementById('main-content');
    let expanded = false;

    expandBtn.addEventListener('click', function() {
        expanded = !expanded;
        main.classList.toggle('expanded', expanded);
        document.body.classList.toggle('expanded-main', expanded);
        // Change icon
        expandBtn.innerHTML = expanded
            ? '<i class="fas fa-compress"></i>'
            : '<i class="fas fa-expand"></i>';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const toggleIcon = sidebarToggle.querySelector('.toggle-icon');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        // Change icon based on state
        if (sidebar.classList.contains('collapsed')) {
            toggleIcon.classList.remove('fa-chevron-left');
            toggleIcon.classList.add('fa-chevron-right');
        } else {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
    });
});

function loadRouteFromNav(route) {
    const iframe = document.querySelector('iframe[name="content-frame"]');
    if (iframe) {
        iframe.src = route;
    }
}

// Replace route object usage with data-route driven loader
function loadRouteFromHash() {
    const iframe = document.querySelector('iframe[name="content-frame"]');
    if (!iframe) return;

    const hash = window.location.hash || '#/home';
    // Find link with matching href (exact match)
    const link = document.querySelector(`nav .menu a[href="${hash}"]`);

    if (link && link.dataset && link.dataset.route) {
        iframe.src = link.dataset.route;
        return;
    }

    // Fallback: first nav link with data-route or default about page
    const firstRoute = document.querySelector('nav .menu a[data-route]');
    iframe.src = firstRoute ? firstRoute.dataset.route : 'pages/the-planet/about/about.html';
}

// Attach click handlers to nav links that have data-route so they load iframe and update hash
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('nav .menu a[data-route]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const route = this.dataset.route;
            const href = this.getAttribute('href') || '';
            const iframe = document.querySelector('iframe[name="content-frame"]');
            if (route && iframe) {
                iframe.src = route;
                if (href) window.location.hash = href;
            }
        });
    });

    // Load initial route based on current hash
    loadRouteFromHash();
});

// Update iframe when user navigates browser history or manually changes hash
window.addEventListener('hashchange', loadRouteFromHash);