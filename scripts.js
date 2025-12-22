// Refactored for details/summary sidebar, hash routing, and theme sync
(function () {
    // DOM Elements Cache
    const elements = {
        body: document.body,
        themeToggle: document.getElementById('theme-toggle'),
        langToggle: document.getElementById('lang-toggle'),
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebar-toggle'),
        iframe: document.querySelector('iframe[name="content-frame"]')
    };

    // ========== Theme Management ==========
    function pushIframeTheme(theme) {
        if (elements.iframe?.contentWindow) {
            elements.iframe.contentWindow.postMessage({ type: 'set-theme', theme }, '*');
        }
    }

    function setTheme(theme) {
        const isDark = theme === 'dark';
        elements.body.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        pushIframeTheme(isDark ? 'dark' : 'light');
    }

    function initTheme() {
        const saved = localStorage.getItem('theme') || 'dark';
        setTheme(saved);
    }

    function initThemeToggle() {
        if (!elements.themeToggle) return;
        elements.themeToggle.addEventListener('click', () => {
            const isDark = !elements.body.classList.contains('dark-theme');
            setTheme(isDark ? 'dark' : 'light');
        });
    }

    // ========== Sidebar Management ==========
    function initSidebarToggle() {
        if (!elements.sidebarToggle) return;
        elements.sidebarToggle.addEventListener('click', () => {
            elements.sidebar.classList.toggle('collapsed');
        });
    }

    // ========== Navigation & Routing ==========
    function highlightActive(hash) {
        const links = document.querySelectorAll('nav .menu a[data-route]');
        links.forEach(link => link.classList.remove('active'));
        const current = document.querySelector(`nav .menu a[href="${hash}"]`);
        if (current) current.classList.add('active');
    }

    function openParents(link) {
        let el = link?.closest('.submenu-group');
        while (el) {
            if (el.tagName.toLowerCase() === 'details') el.open = true;
            el = el.parentElement?.closest('.submenu-group');
        }
    }

    function loadRouteFromHash() {
        const hash = window.location.hash || '#/home';
        const link = document.querySelector(`nav .menu a[href="${hash}"]`);
        
        if (link?.dataset?.route) {
            if (elements.iframe) elements.iframe.src = link.dataset.route;
            openParents(link);
            highlightActive(hash);
            return;
        }
        
        // Fallback
        const firstRoute = document.querySelector('nav .menu a[data-route]');
        const defaultRoute = firstRoute?.dataset.route || 'pages/the-planet/about/about.html';
        if (elements.iframe) elements.iframe.src = defaultRoute;
        if (firstRoute) {
            openParents(firstRoute);
            highlightActive(firstRoute.getAttribute('href'));
        }
    }

    function attachNavHandlers() {
        const links = document.querySelectorAll('nav .menu a[data-route]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href') || '';
                if (href.startsWith('#')) {
                    e.preventDefault();
                    window.location.hash !== href ? window.location.hash = href : loadRouteFromHash();
                }
            });
        });
    }

    // ========== Expand Main Button ==========
    function initExpandMain() {
        const expandBtn = document.getElementById('expand-main');
        const main = document.getElementById('main-content');
        if (!expandBtn || !main) return;
        
        let expanded = false;
        expandBtn.addEventListener('click', () => {
            expanded = !expanded;
            main.classList.toggle('expanded', expanded);
            elements.body.classList.toggle('expanded-main', expanded);
            expandBtn.innerHTML = expanded
                ? '<i class="fas fa-compress"></i>'
                : '<i class="fas fa-expand"></i>';
        });
    }

    // ========== Menu Generation ==========
    function generateMenuHTML(menu, isOpen = false) {
        return menu.map(item => {
            if (item.subItems?.length > 0) {
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
            }
            return `
                <li role="none">
                    <a role="menuitem" href="${item.hash}" data-route="${item.route}">
                        <i class="${item.icon}" aria-hidden="true"></i> ${item.title}
                    </a>
                </li>
            `;
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

    function hideDuplicateHome() {
        const menuHomeLi = document.querySelector('nav .menu a[href="#/home"]')?.closest('li');
        if (menuHomeLi) {
            menuHomeLi.classList.add('is-duplicate-home');
            menuHomeLi.style.display = 'none';
        }
    }

    function reinitializeMenuAfterLoad() {
        initializeMenu();
        attachNavHandlers();
        hideDuplicateHome();
        loadRouteFromHash();
    }

    // ========== Language Management ==========
    function getCurrentLanguage() {
        return elements.langToggle?.getAttribute('data-lang') || 'en';
    }

    function loadMenuScript(lang) {
        // Remove existing menu script
        const oldScript = document.querySelector('script[src*="main-menu"]');
        if (oldScript) oldScript.remove();

        // Clear menu
        const menuRoot = elements.sidebar?.querySelector('.menu');
        if (menuRoot) menuRoot.innerHTML = '';

        // Clear global variables
        if (window.menuItems) delete window.menuItems;
        if (window.initializeMenu) delete window.initializeMenu;

        // Load new menu script
        const script = document.createElement('script');
        script.src = lang === 'vn' ? 'main-menu-vn.js' : 'main-menu.js';
        script.onload = reinitializeMenuAfterLoad;
        document.body.appendChild(script);
    }

    function setLanguage(lang) {
        if (elements.langToggle) {
            elements.langToggle.setAttribute('data-lang', lang);
        }
        loadMenuScript(lang);
    }

    function initLanguageToggle() {
        if (!elements.langToggle) return;
        
        const currentLang = getCurrentLanguage();
        elements.langToggle.setAttribute('data-lang', currentLang);
        loadMenuScript(currentLang);
        
        elements.langToggle.addEventListener('click', () => {
            const newLang = getCurrentLanguage() === 'en' ? 'vn' : 'en';
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
