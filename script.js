// Query selectors
const themeButton = document.querySelector('#theme-btn')
const headTag = document.getElementsByTagName('head')[0]
const preferredColorScheme = localStorage.getItem('color-scheme')


function getCurrentColorScheme() {
    if (preferredColorScheme === null && window.matchMedia('(prefers-color-scheme: dark)')) {
        return localStorage.setItem('color-scheme', 'dark')

    } else if (preferredColorScheme === null && window.matchMedia('(prefers-color-scheme: light)')) {
        return localStorage.setItem('color-scheme', 'light')
    }

    return localStorage.getItem("color-scheme")
}

const currentColorScheme = getCurrentColorScheme()
function colorSchemeMetadata() {
    const colorScheme = document.createElement('meta')
    colorScheme.name = 'color-scheme'
    colorScheme.content = currentColorScheme
    headTag.insertBefore(colorScheme, headTag.children[2])

    return colorScheme
}
colorSchemeMetadata()

// TODO: Provide a better way to check the dark mode
function checkColorScheme() {
    let { content } = colorSchemeMetadata()
    if (content === 'light') {
        content = 'dark'
        themeButton.textContent = content
        localStorage.setItem('color-scheme', content)
    } else if (content === 'dark') {
        content = 'light'
        themeButton.textContent = content
        localStorage.setItem('color-scheme', content)
    }
}


themeButton.addEventListener('click', checkColorScheme)
