import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./article-overview.scss?inline";

@customElement(getComponent("articleOverview"))
export class ArticleOverview extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const { classes } = useBemm(getComponent("articleOverview"), {
      return: "string",
    });
    return html`
      <section class="${classes({})}">
        <slot></slot>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-article-overview": ArticleOverview;
  }
}
