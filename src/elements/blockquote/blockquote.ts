import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./blockquote.scss?inline";

@customElement(getComponent("blockquote"))
export class Blockquote extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const { classes } = useBemm(getComponent("blockquote"), {
      return: "string",
    });
    return html` <article class="${classes({})}"></article> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-blockquote": Blockquote;
  }
}
