window.addEventListener('DOMContentLoaded', () => {
    applyTheme(localStorage.getItem('theme'));
    applyFontSize(localStorage.getItem('font-size'));
    applyPalette(localStorage.getItem('palette'));
});

// Listen for theme, font size and palette change messages from parent
window.addEventListener('message', ({ data }) => {
    if (!data?.type) return;

    if (data.type === 'set-theme') {
        applyTheme(data.theme);
    } else if (data.type === 'set-font-size') {
        applyFontSize(data.size);
    } else if (data.type === 'set-palette') {
        applyPalette(data.palette);
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

function applyPalette(palette) {
    const valid = ['paper', 'indigo', 'sage', 'clay'];
    const normalized = valid.includes(palette) ? palette : 'paper';
    document.body.classList.remove(...valid.map(p => `palette-${p}`));
    document.body.classList.add(`palette-${normalized}`);
}
