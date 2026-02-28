// My Personal Planet - Main Application Script
(function () {
    'use strict';

    // ========== Constants & Configuration ==========
    const CONFIG = {
        DEFAULT_THEME: 'dark',
        DEFAULT_LANG: 'en',
        DEFAULT_ROUTE: 'pages/the-planet/about/about.html',
        MENU_SCRIPTS: {
            en: 'main-menu.js',
            vn: 'main-menu-vn.js'
        }
    };

    // ========== DOM Elements Cache ==========
    const elements = {
        body: document.body,
        themeToggle: document.getElementById('theme-toggle'),
        langToggle: document.getElementById('lang-toggle'),
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebar-toggle'),
        iframe: document.querySelector('iframe[name="content-frame"]')
    };

    // ========== Utility Functions ==========
    const utils = {
        getUrlParam: (param) => new URLSearchParams(window.location.search).get(param),

        updateUrlParam: (param, value) => {
            const url = new URL(window.location);
            url.searchParams.set(param, value);
            window.history.replaceState({}, '', url);
        },

        isValidLanguage: (lang) => lang === 'vn' || lang === 'en'
    };

    // ========== Theme Management ==========
    const themeManager = {
        getCurrent() {
            return localStorage.getItem('theme') || CONFIG.DEFAULT_THEME;
        },

        pushToIframe(theme) {
            elements.iframe?.contentWindow?.postMessage({ type: 'set-theme', theme }, '*');
        },

        set(theme) {
            elements.body.classList.toggle('dark-theme', theme === 'dark');
            localStorage.setItem('theme', theme);
            this.pushToIframe(theme);
        },

        init() {
            this.set(this.getCurrent());
        },

        toggle() {
            this.set(elements.body.classList.contains('dark-theme') ? 'light' : 'dark');
        }
    };

    // ========== Font Size Management ==========
    const fontSizeManager = {
        classes: {
            default: 'font-size-default',
            larger: 'font-size-larger',
            large: 'font-size-large'
        },

        getCurrent() {
            return localStorage.getItem('font-size') || 'default';
        },

        pushToIframe(size) {
            elements.iframe?.contentWindow?.postMessage({ type: 'set-font-size', size }, '*');
        },

        apply(size) {
            const normalized = size in this.classes ? size : 'default';
            elements.body.classList.remove(...Object.values(this.classes));
            elements.body.classList.add(this.classes[normalized]);
            localStorage.setItem('font-size', normalized);
            this.pushToIframe(normalized);
            this.updateSelectClass(normalized);
        },

        updateSelectClass(size) {
            const select = document.getElementById('font-size-select');
            if (!select) return;
            select.classList.remove(...Object.values(this.classes));
            select.classList.add(`font-size-${size}`);
        },

        init() {
            const select = document.getElementById('font-size-select');
            if (!select) return;

            const current = this.getCurrent();
            select.value = current;
            this.apply(current);

            select.addEventListener('change', () => this.apply(select.value || 'default'));
        }
    };

    // ========== Navigation & Routing ==========
    const router = {
        highlightActive(hash) {
            document.querySelectorAll('nav .menu a[data-route]').forEach(link => link.classList.remove('active'));
            document.querySelector(`nav .menu a[href="${hash}"]`)?.classList.add('active');
        },

        openParents(link) {
            let el = link?.closest('.submenu-group');
            while (el) {
                if (el.tagName.toLowerCase() === 'details') el.open = true;
                el = el.parentElement?.closest('.submenu-group');
            }
        },

        loadFromHash() {
            const hash = window.location.hash || '#/home';
            const link = document.querySelector(`nav .menu a[href="${hash}"]`);

            if (link?.dataset?.route) {
                if (elements.iframe) elements.iframe.src = link.dataset.route;
                this.openParents(link);
                this.highlightActive(hash);
                return;
            }

            // Fallback
            const firstRoute = document.querySelector('nav .menu a[data-route]');
            const defaultRoute = firstRoute?.dataset.route || CONFIG.DEFAULT_ROUTE;
            if (elements.iframe) elements.iframe.src = defaultRoute;
            if (firstRoute) {
                this.openParents(firstRoute);
                this.highlightActive(firstRoute.getAttribute('href'));
            }
        },

        attachHandlers() {
            document.querySelectorAll('nav .menu a[data-route]').forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href') || '';
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        window.location.hash !== href ? window.location.hash = href : this.loadFromHash();
                    }
                });
            });
        }
    };

    // ========== UI Controls ==========
    const uiControls = {
        initExpandMain() {
            const expandBtn = document.getElementById('expand-main');
            const main = document.getElementById('main-content');
            if (!expandBtn || !main) return;

            let expanded = utils.getUrlParam('expanded') === 'true';

            const toggleExpand = (shouldExpand) => {
                expanded = shouldExpand;
                main.classList.toggle('expanded', expanded);
                elements.body.classList.toggle('expanded-main', expanded);
                expandBtn.innerHTML = expanded
                    ? '<i class="fas fa-compress"></i>'
                    : '<i class="fas fa-expand"></i>';
                utils.updateUrlParam('expanded', expanded);
            };

            if (expanded) toggleExpand(true);

            expandBtn.addEventListener('click', () => toggleExpand(!expanded));

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && expanded) toggleExpand(false);
            });
        },

        initSidebarToggle() {
            elements.sidebarToggle?.addEventListener('click', () => {
                elements.sidebar.classList.toggle('collapsed');
            });
        }
    };

    // ========== Menu Generation ==========
    const menuManager = {
        generateHTML(menu) {
            return menu.map(item => {
                if (item.subItems?.length > 0) {
                    return `
                        <li role="none">
                            <details class="submenu-group">
                                <summary class="submenu-summary">
                                    <i class="${item.icon}" aria-hidden="true"></i>
                                    <span>${item.title}</span>
                                </summary>
                                <ul class="submenu" role="menu">
                                    ${this.generateHTML(item.subItems)}
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
        },

        render() {
            const menuContainer = document.querySelector('.menu');
            const currentLang = languageManager.getCurrent();
            const menuData = currentLang === 'vn' ? (window.mainMenuVn || window.mainMenu) : window.mainMenu;

            if (menuContainer && menuData) {
                menuContainer.innerHTML = this.generateHTML(menuData);
            }
        },

        collapseAll() {
            document.querySelectorAll('nav .menu details.submenu-group').forEach(detail => detail.open = false);
        },

        hideDuplicateHome() {
            const menuHomeLi = document.querySelector('nav .menu a[href="#/home"]')?.closest('li');
            if (menuHomeLi) {
                menuHomeLi.classList.add('is-duplicate-home');
                menuHomeLi.style.display = 'none';
            }
        },

        reinitialize() {
            this.render();
            this.collapseAll();
            router.attachHandlers();
            this.hideDuplicateHome();
            router.loadFromHash();
        }
    };

    // ========== Language Management ==========
    const languageManager = {
        getFromURL() {
            const lang = utils.getUrlParam('lang');
            return utils.isValidLanguage(lang) ? lang : null;
        },

        getCurrent() {
            return this.getFromURL() || elements.langToggle?.getAttribute('data-lang') || CONFIG.DEFAULT_LANG;
        },

        loadScript(lang) {
            // Remove existing menu script
            document.querySelector('script[src*="main-menu"]')?.remove();

            // Clear menu
            const menuRoot = elements.sidebar?.querySelector('.menu');
            if (menuRoot) menuRoot.innerHTML = '';

            // Clear global variables (set to undefined instead of delete to avoid errors)
            if (window.menuItems) window.menuItems = undefined;
            if (window.mainMenu) window.mainMenu = undefined;
            if (window.mainMenuVn) window.mainMenuVn = undefined;

            // Load new menu script
            const script = document.createElement('script');
            script.src = CONFIG.MENU_SCRIPTS[lang] || CONFIG.MENU_SCRIPTS.en;
            script.onload = () => menuManager.reinitialize();
            document.body.appendChild(script);
        },

        set(lang) {
            elements.langToggle?.setAttribute('data-lang', lang);
            utils.updateUrlParam('lang', lang);
            this.loadScript(lang);
        },

        init() {
            if (!elements.langToggle) return;
            
            const currentLang = this.getCurrent();
            elements.langToggle.setAttribute('data-lang', currentLang);
            this.loadScript(currentLang);
            
            elements.langToggle.addEventListener('click', () => {
                const newLang = this.getCurrent() === 'en' ? 'vn' : 'en';
                this.set(newLang);
            });
        }
    };

    // ========== Search Functionality ==========
    const searchManager = {
        init() {
            if (!elements.sidebar) return;

            const searchContainer = elements.sidebar.querySelector('.menu-header');
            const searchToggle = document.getElementById('menu-search-toggle');
            const searchInput = document.getElementById('menu-search-input');
            const menuRoot = elements.sidebar.querySelector('.menu');
            const headerHome = elements.sidebar.querySelector('.menu-header .menu-home');

            if (!searchContainer || !searchToggle || !searchInput || !menuRoot) return;

            const setSearchVisible = (visible) => {
                searchContainer.classList.toggle('active', visible);
                searchToggle.setAttribute('aria-expanded', String(visible));
                if (visible) {
                    searchToggle.setAttribute('title', 'Close search');
                    searchToggle.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
                    searchInput.value = '';
                    setTimeout(() => searchInput.focus(), 0);
                } else {
                    searchToggle.setAttribute('title', 'Search menu');
                    searchToggle.innerHTML = '<i class="fas fa-search" aria-hidden="true"></i>';
                    searchInput.blur();
                    searchInput.value = '';
                }
                this.filter('');
            };

            searchToggle.addEventListener('click', () => {
                setSearchVisible(!searchContainer.classList.contains('active'));
            });

            searchInput.addEventListener('input', (e) => this.filter(e.target.value));

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') setSearchVisible(false);
            });

            // Header Home link routing
            if (headerHome) {
                headerHome.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = headerHome.getAttribute('href') || '#/home';
                    window.location.hash !== href ? window.location.hash = href : router.loadFromHash();
                });
            }
        },

        filter(query) {
            const menuRoot = elements.sidebar?.querySelector('.menu');
            if (!menuRoot) return;

            const q = (query || '').trim().toLowerCase();
            const items = Array.from(menuRoot.querySelectorAll('li'));
            const isDuplicateHome = (li) => li.classList.contains('is-duplicate-home');

            if (!q) {
                items.forEach(li => {
                    li.style.display = isDuplicateHome(li) ? 'none' : '';
                    li.removeAttribute('data-match');
                });
                return;
            }

            items.forEach(li => {
                if (isDuplicateHome(li)) { li.style.display = 'none'; return; }
                const label = (li.querySelector('a')?.textContent || li.textContent || '').trim().toLowerCase();
                const match = label.includes(q);
                li.dataset.match = match ? '1' : '0';
                li.style.display = match ? '' : 'none';
            });

            // Ensure parents are shown if any descendant matches
            items.forEach(li => {
                if (Array.from(li.querySelectorAll('li')).some(child => child.style.display !== 'none')) {
                    li.style.display = '';
                }
            });
        }
    };

    // ========== Application Initialization ==========
    window.addEventListener('DOMContentLoaded', () => {
        themeManager.init();
        fontSizeManager.init();
        languageManager.init();
        uiControls.initSidebarToggle();
        uiControls.initExpandMain();
        searchManager.init();
        
        elements.themeToggle?.addEventListener('click', () => themeManager.toggle());

        window.addEventListener('hashchange', () => router.loadFromHash());

        elements.iframe?.addEventListener('load', () => {
            themeManager.pushToIframe(themeManager.getCurrent());
            fontSizeManager.pushToIframe(fontSizeManager.getCurrent());
        });
    });
})();
