const changeBgButton = document.getElementById('theme-switcher');
const body = document.body;

changeBgButton.addEventListener('click', () => {
    if (body.classList.contains('new-bg')) {
        body.classList.remove('new-bg');
        body.classList.add('original-bg');
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('original-bg');
        body.classList.add('new-bg');
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
