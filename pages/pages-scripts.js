window.addEventListener('DOMContentLoaded', function() {
    setTheme();
});

// Listen for theme change messages from parent
window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'set-theme') {
        if (event.data.theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
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