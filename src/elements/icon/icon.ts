import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { getComponent } from "../../base";
import { iconList } from "../../icons/list";

import styles from "./icon.scss?inline";

const componentName = getComponent("icon");

@customElement(componentName)
export class Icon extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  icon = "?";

  render() {
    const defaultIcon = html`<sil-icon-help></sil-icon-help>`;

    if (this.icon == "?") {
      console.warn("icon: Not icon defined");
      return defaultIcon;
    }
    if (!iconList.includes(`icon-${this.icon}`)) {
      console.warn(`icon: ${this.icon} does not exist`);
      return defaultIcon;
    }

    return html`<sil-${this.icon}></sil-${this.icon}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sil-icon': Icon;
  }
}
