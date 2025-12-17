var mainMenu = [
    {
        title: "Home",
        route: "pages/the-planet/about/about.html",
        hash: "#/home",
        icon: "fas fa-home",
        subItems: [],
    },
    {
        title: "Reading and Studying",
        icon: "fas fa-book",
        subItems: [
            {
                title: "Agile",
                icon: "fas fa-folder",
                subItems: [
                    {
                        title: "Agile Manifesto",
                        route: "pages/reading-studying/agile-software-development/agile-software-development.html",
                        hash: "#/agile-manifesto",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Scrum",
                        route: "pages/reading-studying/agile-software-development/scrum.html",
                        hash: "#/scrum",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                ],
            },
            {
                title: "Leadership",
                icon: "fas fa-folder",
                subItems: [
                    {
                        title: "Leadership",
                        route: "pages/reading-studying/leadership/leadership.html",
                        hash: "#/leadership",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Coaching",
                        route: "pages/reading-studying/leadership/coaching.html",
                        hash: "#/coaching",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Decision-making",
                        route: "pages/reading-studying/leadership/decision-making.html",
                        hash: "#/decision-making",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Delegation",
                        route: "pages/reading-studying/leadership/delegation.html",
                        hash: "#/delegation",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Time-management",
                        route: "pages/reading-studying/leadership/time-management.html",
                        hash: "#/time-management",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Assessment Leadership Skills",
                        route: "pages/reading-studying/leadership/assessment-leadership-skills.html",
                        hash: "#/assessment-leadership-skills",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Check List",
                        route: "pages/reading-studying/leadership/check-list.html",
                        hash: "#/check-list",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                ],
            },
            {
                title: "PMBOK Guide",
                icon: "fas fa-folder",
                subItems: [
                    {
                        title: "Introduction",
                        route: "pages/reading-studying/pmbok-guide/introduction.html",
                        hash: "#/pmbok-introduction",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                ],
            },
        ],
    },
    {
        title: "Writing and Opinion",
        icon: "fas fa-folder",
        subItems: [
            {
                title: "Values Creation",
                route: "pages/writing-opinion/values-creation.html",
                hash: "#/values-creation",
                icon: "fas fa-file-alt",
                subItems: [],
            },
        ],
    },
    {
        title: "Literature",
        icon: "fas fa-book-open",
        subItems: [
            {
                title: "Poetry",
                icon: "fas fa-folder",
                subItems: [
                    {
                        title: "Quê Hương (Giang Nam)",
                        route: "pages/literature/poetry/Que-huong-Giang-Nam.html",
                        hash: "#/que-huong-giang-nam",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                ],
            },
            {
                title: "Proverbs - Folk Songs",
                icon: "fas fa-folder",
                subItems: [
                    {
                        title: "Tát Nước Đầu Đình",
                        route: "pages/literature/proverbs-and-folk-songs/Tat-nuoc-dau-dinh.html",
                        hash: "#/tat-nuoc-dau-dinh",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                    {
                        title: "Trèo Lên Cây Bưởi Hái Hoa",
                        route: "pages/literature/proverbs-and-folk-songs/Treo-len-cay-buoi-hai-hoa.html",
                        hash: "#/treo-len-cay-buoi-hai-hoa",
                        icon: "fas fa-file-alt",
                        subItems: [],
                    },
                ],
            },
        ],
    },
];

/**
 * Generate menu HTML from menu definition
 * @param {Array} menu - Menu configuration array
 * @param {boolean} isOpen - Whether the menu group should be open (for top-level)
 * @returns {string} Generated HTML string
 */
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

/**
 * Initialize the menu on DOM ready
 */
function initializeMenu() {
    const menuContainer = document.querySelector('.menu');
    if (menuContainer && mainMenu) {
        menuContainer.innerHTML = generateMenuHTML(mainMenu, true);
    }
}