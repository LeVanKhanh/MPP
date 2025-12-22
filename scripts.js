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

    // Menu generation functions
    function generateMenuHTML(menu, isOpen = false) {
        return menu.map(item => {
            if (item.subItems && item.subItems.length > 0) {
                // Parent with submenu
                return `
                    <li role="none">
                        <details class="submenu-group" ${isOpen ? 'open' : ''}>
                            <summary class="submenu-summary">
                                <i class="${item.icon}" aria-hidden="true"></i>
                                <span>${item.title}</span>
                            </summary>
                            <ul class="submenu" role="menu">
                                ${generateMenuHTML(item.subItems)}
                            </ul>
                        </details>
                    </li>
                `;
            } else {
                // Leaf node with link
                return `
                    <li role="none">
                        <a role="menuitem" href="${item.hash}" data-route="${item.route}">
                            <i class="${item.icon}" aria-hidden="true"></i> ${item.title}
                        </a>
                    </li>
                `;
            }
        }).join('');
    }

    function initializeMenu() {
        const menuContainer = document.querySelector('.menu');
        const currentLang = getCurrentLanguage();
        const menuData = currentLang === 'vn' ? (window.mainMenuVn || window.mainMenu) : window.mainMenu;
        
        if (menuContainer && menuData) {
            menuContainer.innerHTML = generateMenuHTML(menuData, true);
        }
    }

    // Language helpers
    function getCurrentLanguage() {
        const langToggle = document.getElementById('lang-toggle');
        return langToggle?.getAttribute('data-lang') || 'en';
    }

    function loadMenuScript(lang) {
        // Remove existing menu script
        const oldScript = document.querySelector('script[src*="main-menu"]');
        if (oldScript) {
            oldScript.remove();
        }

        // Clear menu container
        const menuRoot = sidebar ? sidebar.querySelector('.menu') : null;
        if (menuRoot) menuRoot.innerHTML = '';

        // Clear global menu variables
        if (window.menuItems) delete window.menuItems;
        if (window.initializeMenu) delete window.initializeMenu;

        // Load new menu script
        const script = document.createElement('script');
        script.src = lang === 'vn' ? 'main-menu-vn.js' : 'main-menu.js';
        script.onload = () => {
            // Re-initialize menu
            if (typeof initializeMenu === 'function') {
                initializeMenu();
            }
            // Re-attach navigation handlers
            attachNavHandlers();
            // Hide duplicate Home
            const menuHomeLi = document.querySelector('nav .menu a[href="#/home"]')?.closest('li');
            if (menuHomeLi) {
                menuHomeLi.classList.add('is-duplicate-home');
                menuHomeLi.style.display = 'none';
            }
            // Reload current route
            loadRouteFromHash();
        };
        document.body.appendChild(script);
    }

    function setLanguage(lang) {
        // Update toggle UI
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.setAttribute('data-lang', lang);
        }

        // Load menu script for new language
        loadMenuScript(lang);
    }

    // Language toggle button
    function initLanguageToggle() {
        const langToggle = document.getElementById('lang-toggle');
        if (!langToggle) return;
        
        // Set initial state
        const currentLang = getCurrentLanguage();
        langToggle.setAttribute('data-lang', currentLang);
        
        // Load initial menu script
        loadMenuScript(currentLang);
        
        // Toggle on click
        langToggle.addEventListener('click', () => {
            const current = getCurrentLanguage();
            const newLang = current === 'en' ? 'vn' : 'en';
            setLanguage(newLang);
        });
    }

    // Init on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
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
