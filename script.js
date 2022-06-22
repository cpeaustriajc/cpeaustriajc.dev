const colorSchemeStorageKey = 'color-scheme'
const theme = document.querySelector('#theme-switch')
const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

function getColorPreference() {
    if (localStorage.getItem(colorSchemeStorageKey)) {
        return localStorage.getItem(colorSchemeStorageKey)
    } else {
        return preferredColorScheme.matches ? 'dark' : 'light'
    }
}

function setColorPreference() {
    localStorage.setItem(colorSchemeStorageKey, theme.value)
    reflectColorPreference()
}

function reflectColorPreference() {
    document.documentElement.setAttribute('data-theme', getColorPreference())

    theme?.setAttribute('aria-label', theme.value)
    theme.textContent = getColorPreference()
}

function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'

    setColorPreference()
}

preferredColorScheme.addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setColorPreference()
})

window.onload = () => {
    reflectColorPreference()

    document.querySelector('#theme-switch').addEventListener('click', onClick)
}

