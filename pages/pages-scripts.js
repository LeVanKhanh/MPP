window.addEventListener('DOMContentLoaded', function() {
    setTheme();
    setFontSize();
});

// Listen for theme and font size change messages from parent
window.addEventListener('message', function(event) {
    if (!event.data || !event.data.type) return;

    if (event.data.type === 'set-theme') {
        if (event.data.theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    if (event.data.type === 'set-font-size') {
        applyFontSize(event.data.size);
    }
});

function setTheme() {
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

function applyFontSize(size) {
    document.body.classList.remove('font-size-larger', 'font-size-large');
    if (size === 'larger') {
        document.body.classList.add('font-size-larger');
    } else if (size === 'large') {
        document.body.classList.add('font-size-large');
    }
}

function setFontSize() {
    const size = localStorage.getItem('font-size') || 'default';
    applyFontSize(size);
}