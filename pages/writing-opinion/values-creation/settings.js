let valueCreationSettings = {
    title: "Tạo lập giá trị",
    description: "Khám phá cách tạo lập giá trị thông qua triết lý cá nhân và hành động có ý nghĩa.",
    author: "Phù Du",
    published: "2026-01-31",
};

// Format date from ISO format (YYYY-MM-DD) to "MMM DD YYYY"
function formatPublishedDate(isoDate) {
    const date = new Date(isoDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
}

// Create dynamic innerHTML for page-meta
function createPageMetaHTML(settings) {
    let html = '';
    
    if (settings.published) {
        const formattedDate = formatPublishedDate(settings.published);
        html += `Published: <time datetime="${settings.published}">${formattedDate}</time>`;
    }
    
    if (settings.author) {
        if (html) html += ' | ';
        html += `Author: <span class="author">${settings.author}</span>`;
    }
    
    return html;
}

// Update the page-meta element with dynamic content
function updatePageMeta() {
    if (typeof valueCreationSettings !== 'undefined') {
        const pageMetaElement = document.querySelector('.page-meta');
        if (pageMetaElement) {
            pageMetaElement.innerHTML = createPageMetaHTML(valueCreationSettings);
        }
    }
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updatePageMeta);
} else {
    updatePageMeta();
}