import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./card.scss?inline";

@customElement(getComponent("card"))
export class Card extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const { classes } = useBemm(getComponent("card"), {
      return: "string",
    });
    return html` <article class="${classes({})}"></article> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-card": Card;
  }
}
