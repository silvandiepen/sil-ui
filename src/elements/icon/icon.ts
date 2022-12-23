import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./icon.scss?inline";

@customElement(getComponent("icon"))
export class Icon extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  icon = "?";

  render() {
    const { classes, bemm } = useBemm(getComponent("icon"), {
      return: "string",
    });
    return html`
      <icon class="${classes({})}">
        <span class="${bemm("text")}">
          <slot></slot>
        </span>
      </icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon": Icon;
  }
}
