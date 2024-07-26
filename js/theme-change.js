const themeSwitchers = document.querySelectorAll('.bottom-theme-btn')

themeSwitchers.forEach(switcher => {
    switcher.addEventListener("click", function() {
        applyTheme(this.dataset.theme)
        localStorage.setItem("theme", this.dataset.theme)
    })
})

function applyTheme(themeName) {
    const themeUrl = `./css/theme-${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme')

if (activeTheme == null) {
    applyTheme("dark")
}
else {
    applyTheme(activeTheme)
}