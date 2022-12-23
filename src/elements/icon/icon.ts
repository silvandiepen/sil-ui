import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { getComponent } from "../../base";
import styles from "./icon.scss?inline";

@customElement(getComponent("icon"))
export class Icon extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  icon = "?";

  render() {
    import(`./icon-${this.icon}.js`);
    return html`<sil-icon-${this.icon}>${this.icon}</sil-icon-${this.icon}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon": Icon;
  }
}
