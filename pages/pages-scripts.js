window.addEventListener('DOMContentLoaded', () => {
    applyTheme(localStorage.getItem('theme'));
    applyFontSize(localStorage.getItem('font-size'));
});

// Listen for theme and font size change messages from parent
window.addEventListener('message', ({ data }) => {
    if (!data?.type) return;

    if (data.type === 'set-theme') {
        applyTheme(data.theme);
    } else if (data.type === 'set-font-size') {
        applyFontSize(data.size);
    }
});

function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
}

function applyFontSize(size) {
    const valid = ['larger', 'large', 'default'];
    const normalized = valid.includes(size) ? size : 'default';
    document.body.classList.remove('font-size-default', 'font-size-larger', 'font-size-large');
    document.body.classList.add(`font-size-${normalized}`);
}