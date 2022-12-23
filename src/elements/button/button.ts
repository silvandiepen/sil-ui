import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./button.scss?inline";

@customElement(getComponent("button"))
export class Button extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  icon = "";

  render() {
    const { classes, bemm } = useBemm(getComponent("icon"), {
      return: "string",
    });
    return html`
      <button class="${classes({})}">
        <span class="${bemm("text")}">
          <slot></slot>
        </span>
        ${this.icon ? html`<sil-icon icon="${this.icon}"` : null}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-button": Button;
  }
}
