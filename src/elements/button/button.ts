import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import { ButtonType, ButtonColor } from "./button.types";
import { getComponent } from "../../base";
import styles from "./button.scss?inline";

@customElement(getComponent("button"))
export class Button extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  icon = "";

  @property({ type: String })
  label = "";

  @property({ type: ButtonType })
  type = ButtonType.DEFAULT;

  @property({ type: ButtonType })
  color = ButtonColor.DEFAULT;

  render() {
    const { classes, bemm } = useBemm(getComponent("button"), {
      return: "string",
    });

    const mainClasses = classes(
      "",
      {
        m: this.type,
      },
      {
        m: this.color == ButtonColor.DEFAULT ? null : this.color,
      }
    );

    return html`
      <button class="${mainClasses}">
        <span class="${bemm("text")}">
          ${this.label}
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
