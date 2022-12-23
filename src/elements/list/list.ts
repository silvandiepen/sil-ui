import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./list.scss?inline";

@customElement(getComponent("list"))
export class List extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const { classes } = useBemm(getComponent("list"), {
      return: "string",
    });
    return html` <article class="${classes({})}"></article> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-list": List;
  }
}
