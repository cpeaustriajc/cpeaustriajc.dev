class AppShell extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" })

        const test = document.createElement("p")
        this.textContent = "Hello, World!"
    }
}

customElements.define('app-shell', AppShell)