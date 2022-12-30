import { LitElement, unsafeCSS, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./color-mode.scss?inline";

const colorModes = {
  DARK: "dark",
  LIGHT: "light",
};

type colorModes = typeof colorModes[keyof typeof colorModes];

@customElement(getComponent("colorMode"))
export class ColorMode extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  localMode = colorModes.LIGHT;

  @state()
  isDarkMode = false;

  render() {
    this.isDarkMode = window.matchMedia("prefers-color-scheme: dark").matches;
    this.localMode = this.isDarkMode ? "dark" : "light";

    const initColorMode = () => {
      this.localMode = localStorage.getItem("colorMode") || "light";
      setCurrentMode(
        this.localMode ? this.localMode : this.isDarkMode ? "dark" : "light"
      );
    };

    const setCurrentMode = (mode: colorModes) => {
      this.localMode = mode;
      localStorage.setItem("colorMode", this.localMode);
      document.body.setAttribute("color-mode", mode);
    };

    const switchMode = () => {
      console.log(`switching to ${this.localMode ? "darkMode" : "lightMode"}`);

      this.localMode == colorModes.DARK
        ? setCurrentMode(colorModes.LIGHT)
        : setCurrentMode(colorModes.DARK);
    };

    initColorMode();

    const { classes } = useBemm(getComponent("colorMode"), {
      return: "string",
    });
    return html`
      <button
        @click="${switchMode}"
        class="${classes({}, { m: this.localMode })}"
      >
        ${this.localMode}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-color-mode": ColorMode;
  }
}
