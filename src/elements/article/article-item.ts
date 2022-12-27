import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./article-item.scss?inline";

const ArticleItemType = {
  BLOCK: "block",
  BLOG: "blog",
  ICON: "icon",
};

@customElement(getComponent("articleItem"))
export class ArticleItem extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  image = "";

  @property({ type: String })
  title = "";

  @property({ type: String })
  link = "";

  @property({ type: String })
  excerpt = "";

  @property({ type: String })
  author = "";

  @property({ type: String })
  date = "";

  @property({ type: String })
  timestamp = "";

  @property({ type: String })
  icon = "?";

  @property({ type: String })
  type = ArticleItemType.BLOCK;

  render() {
    const { classes, bemm } = useBemm(getComponent("articleItem"), {
      return: "string",
    });

    const mainClasses = classes(
      {},
      { m: this.type },
      this.link && { m: "has-link" }
    );

    const iconImage = this.icon
      ? [".jpg", ".svg", ".gif", "png", ".jpeg", "http"].some((format) =>
          this.icon.includes(format)
        )
      : false;

    const icon = this.icon
      ? // Is it an image?
        iconImage
        ? // Then show the icon as an image
          html`<span
            class="${classes(
              { e: "icon-container" },
              { e: "icon-container", m: "has-image" }
            )}"
          >
            <span
              class="${bemm("icon")}"
              style="background-image: url(${this.icon})"
            ></span>
          </span>`
        : //otherwise just show the character
          html`<span class="${bemm("icon-container")}">
            <span class="${bemm("icon")}">${this.icon ? this.icon : "?"}</span>
          </span>`
      : // or just nothing, if no icon is set
        null;

    const handleClick = () => {
      if (this.link) window.location.href = this.link;
    };

    return html`
      <article class="${mainClasses}" @click="${handleClick}">
        <figure
          class="${classes(
            "image",
            !this.image && { e: "image", m: "no-image" },
            this.icon !== "?" && { e: "image", m: "has-icon" }
          )}"
        >
          ${this.image ? html`<img src="${this.image}" />` : null}
          ${!this.image ? icon : null}
        </figure>

        <div class="${bemm("detail")}">
          ${this.date
            ? html`<div class="${bemm("date")}">${this.date}</div>`
            : null}
          ${this.title
            ? html` <h3 class="${bemm("title")}">${this.title}</h3>`
            : null}
          ${this.excerpt
            ? html`<p class="${bemm("excerpt")}">${this.excerpt}</p>`
            : null}
          ${this.author
            ? html`<div class="${bemm("author")}">${this.author}</div>`
            : null}
          <slot></slot>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-article-item": ArticleItem;
  }
}
