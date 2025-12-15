// Refactored for details/summary sidebar, hash routing, and theme sync
(function () {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const iframe = document.querySelector('iframe[name="content-frame"]');

    // Theme helpers
    function pushIframeTheme(theme) {
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: 'set-theme', theme }, '*');
        }
    }

    function setTheme(theme) {
        const isDark = theme === 'dark';
        body.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        pushIframeTheme(isDark ? 'dark' : 'light');
    }

    function initTheme() {
        const saved = localStorage.getItem('theme') || 'dark';
        setTheme(saved);
    }

    // Sidebar collapse toggle
    if (sidebarToggle) {
        const toggleIcon = sidebarToggle.querySelector('.toggle-icon');
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
            if (toggleIcon) {
                if (sidebar.classList.contains('collapsed')) {
                    toggleIcon.classList.remove('fa-chevron-left');
                    toggleIcon.classList.add('fa-chevron-right');
                } else {
                    toggleIcon.classList.remove('fa-chevron-right');
                    toggleIcon.classList.add('fa-chevron-left');
                }
            }
        });
    }

    // Active link highlight
    const navLinks = Array.from(document.querySelectorAll('nav .menu a[data-route]'));
    function highlightActive(hash) {
        navLinks.forEach(l => l.classList.remove('active'));
        const current = document.querySelector(`nav .menu a[href="${hash}"]`);
        if (current) current.classList.add('active');
    }

    // Ensure parent details are opened for a given link
    function openParents(link) {
        let el = link?.closest('.submenu-group') || null;
        while (el) {
            if (el.tagName.toLowerCase() === 'details') el.open = true;
            el = el.parentElement?.closest('.submenu-group') || null;
        }
    }

    // Routing based on hash + data-route
    function loadRouteFromHash() {
        const hash = window.location.hash || '#/home';
        const link = document.querySelector(`nav .menu a[href="${hash}"]`);
        if (link && link.dataset && link.dataset.route) {
            if (iframe) iframe.src = link.dataset.route;
            openParents(link);
            highlightActive(hash);
            return;
        }
        // Fallback: default to first route or about page
        const firstRoute = document.querySelector('nav .menu a[data-route]');
        if (iframe) iframe.src = firstRoute ? firstRoute.dataset.route : 'pages/the-planet/about/about.html';
        if (firstRoute) {
            openParents(firstRoute);
            highlightActive(firstRoute.getAttribute('href'));
        }
    }

    // Click handlers: ensure hash updates and route loads immediately
    function attachNavHandlers() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href') || '';
                if (href.startsWith('#')) {
                    e.preventDefault();
                    if (window.location.hash !== href) {
                        window.location.hash = href;
                    } else {
                        // same hash clicked, force reload
                        loadRouteFromHash();
                    }
                }
            });
        });
    }

    // Expand main button
    function initExpandMain() {
        const expandBtn = document.getElementById('expand-main');
        const main = document.getElementById('main-content');
        if (!expandBtn || !main) return;
        let expanded = false;
        expandBtn.addEventListener('click', function () {
            expanded = !expanded;
            main.classList.toggle('expanded', expanded);
            document.body.classList.toggle('expanded-main', expanded);
            // Change icon
            expandBtn.innerHTML = expanded
                ? '<i class="fas fa-compress"></i>'
                : '<i class="fas fa-expand"></i>';
        });
    }

    // Theme toggle button
    function initThemeToggle() {
        if (!themeToggleBtn) return;
        themeToggleBtn.addEventListener('click', () => {
            const isDark = !body.classList.contains('dark-theme');
            setTheme(isDark ? 'dark' : 'light');
        });
    }

    // Init on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
        initTheme();
        initThemeToggle();
        initExpandMain();
        attachNavHandlers();
        loadRouteFromHash();
    });

    // Respond to hash changes
    window.addEventListener('hashchange', loadRouteFromHash);
})();

// Theme toggle logic
// Removed legacy duplicate initializations and consolidated logic above