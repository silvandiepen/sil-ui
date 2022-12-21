import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import styles from "./stack.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent('stack'))
export class FormStack extends LitElement {
  static styles = unsafeCSS(styles);

  @property()
  direction = "vertical";

  render() {
    const { classes } = useBemm(getComponent('stack'), { return: "string" });
    return html`
      <div class="${classes({}, { modifier: this.direction })}">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-stack": FormStack;
  }
}
