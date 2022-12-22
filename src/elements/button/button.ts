import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./button.scss?inline";

@customElement(getComponent("button"))
export class Button extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const { classes } = useBemm(getComponent("button"), {
      return: "string",
    });
    return html` <button class="${classes({})}"></button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-button": Button;
  }
}
