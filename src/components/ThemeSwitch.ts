import { LitElement, html, supportsAdoptingStyleSheets } from "lit";
import { property, customElement } from "lit/decorators.js";

export const tagName = "theme-switch";

@customElement("theme-switch")
export class ThemeSwitch extends LitElement {
  private _doc = document.firstElementChild;

  @property({ type: String, reflect: true, attribute: "theme" })
  theme = "light";

  @property({ type: Boolean, reflect: true, attribute: "remember-setting" })
  rememberSetting = false;

  render() {
    return html`
      <button
        @click=${this._toggleTheme}
        title=${`Enable ${this.theme === "dark" ? "Light" : "Dark"} Theme`}
      >
        ${this.theme === "dark" ? "Light" : "Dark"}
      </button>
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._getCurrentTheme();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private _getCurrentTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    this.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    if (localStorageTheme !== null) {
      this.theme = localStorageTheme;
    }

    this._setCurrentTheme();
  }

  private _setCurrentTheme() {
    if (this.theme === "light") {
      this._doc!.setAttribute("data-theme", "light");
    } else {
      this._doc!.setAttribute("data-theme", "dark");
    }
  }

  private _toggleTheme() {
    if (this.theme === "light") {
      this.theme = "dark";
      this._doc!.setAttribute("data-theme", "dark");
    } else {
      this.theme = "light";
      this._doc!.setAttribute("data-theme", "light");
    }

    if (this.rememberSetting) {
      localStorage.setItem("theme", `${this.theme}`);
    }
  }
}
