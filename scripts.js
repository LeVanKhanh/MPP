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

    // Sidebar collapse toggle (header button)
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }

    function highlightActive(hash) {
        const links = Array.from(document.querySelectorAll('nav .menu a[data-route]'));
        links.forEach(l => l.classList.remove('active'));
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
        const links = Array.from(document.querySelectorAll('nav .menu a[data-route]'));
        links.forEach(link => {
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

    // Language helpers
    function getCurrentLanguage() {
        // Check localStorage first
        const stored = localStorage.getItem('language');
        if (stored === 'vn' || stored === 'en') return stored;
        
        // Check hash for language indicator
        const hash = window.location.hash || '';
        if (hash.includes('-vn.html')) return 'vn';
        
        // Default to English
        return 'en';
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        location.reload();
    }

    // Language toggle button
    function initLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (!langToggle) return;
        
        // Set initial state
        const currentLang = getCurrentLanguage();
        langToggle.setAttribute('data-lang', currentLang);
        
        // Toggle on click
        langToggle.addEventListener('click', () => {
            const current = getCurrentLanguage();
            const newLang = current === 'en' ? 'vn' : 'en';
            setLanguage(newLang);
        });
    }

    // Init on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
        // Initialize menu from main-menu.js
        if (typeof initializeMenu === 'function') {
            initializeMenu();
        }
        initTheme();
        initThemeToggle();
        initLanguageToggle();
        initExpandMain();
        attachNavHandlers();
        // Hide duplicate Home in menu (header provides Home)
        const menuHomeLi = document.querySelector('nav .menu a[href="#/home"]')?.closest('li');
        if (menuHomeLi) {
            menuHomeLi.classList.add('is-duplicate-home');
            menuHomeLi.style.display = 'none';
        }
        // Sidebar menu search toggle and filtering (header inline)
        const searchContainer = sidebar ? sidebar.querySelector('.menu-header') : null;
        const searchToggle = document.getElementById('menu-search-toggle');
        const searchInput = document.getElementById('menu-search-input');
        const menuRoot = sidebar ? sidebar.querySelector('.menu') : null;
        const headerHome = sidebar ? sidebar.querySelector('.menu-header .menu-home') : null;

        if (searchContainer && searchToggle && searchInput && menuRoot) {
            const showSearch = () => {
                searchContainer.classList.add('active');
                searchToggle.setAttribute('aria-expanded', 'true');
                searchToggle.setAttribute('title', 'Close search');
                // Use fa-times for broad Font Awesome compatibility
                searchToggle.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
                searchInput.value = '';
                // focus after layout update
                setTimeout(() => searchInput.focus(), 0);
                filterMenu('');
            };

            const hideSearch = () => {
                searchContainer.classList.remove('active');
                searchToggle.setAttribute('aria-expanded', 'false');
                searchToggle.setAttribute('title', 'Search menu');
                searchToggle.innerHTML = '<i class="fas fa-search" aria-hidden="true"></i>';
                searchInput.blur();
                searchInput.value = '';
                filterMenu('');
            };

            const filterMenu = (query) => {
                const q = (query || '').trim().toLowerCase();
                const items = Array.from(menuRoot.querySelectorAll('li'));
                if (!q) {
                    items.forEach(li => {
                        if (li.classList.contains('is-duplicate-home')) {
                            li.style.display = 'none';
                            return;
                        }
                        li.style.display = '';
                        li.removeAttribute('data-match');
                    });
                    return;
                }

            items.forEach(li => {
                if (li.classList.contains('is-duplicate-home')) {
                    li.style.display = 'none';
                    return;
                }
                const label = (li.querySelector('a')?.textContent || li.textContent || '').trim().toLowerCase();
                const match = label.includes(q);
                li.dataset.match = match ? '1' : '0';
                li.style.display = match ? '' : 'none';
            });

                // Ensure parents are shown if any descendant matches
                items.forEach(li => {
                    const childVisible = Array.from(li.querySelectorAll('li')).some(child => child.style.display !== 'none');
                    if (childVisible) li.style.display = '';
                });
            };

            searchToggle.addEventListener('click', () => {
                if (searchContainer.classList.contains('active')) {
                    hideSearch();
                } else {
                    showSearch();
                }
            });

            searchInput.addEventListener('input', (e) => {
                filterMenu(e.target.value);
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    hideSearch();
                }
            });
            // Header Home link routing
            if (headerHome) {
                headerHome.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = headerHome.getAttribute('href') || '#/home';
                    if (window.location.hash !== href) {
                        window.location.hash = href;
                    } else {
                        loadRouteFromHash();
                    }
                });
            }
        }
        // Load route after wiring header
        loadRouteFromHash();
    });

    // Respond to hash changes
    window.addEventListener('hashchange', loadRouteFromHash);
})();

// Theme toggle logic
// Removed legacy duplicate initializations and consolidated logic above