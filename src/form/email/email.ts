import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";

import { getComponent } from "../../base";
import styles from "./email.scss?inline";

@customElement(getComponent("email"))
export class Email extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  label = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  value = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean })
  preview = false;

  handleChange(e: any) {
    this.value = e.target.value;
  }

  render() {
    const bemm = useBemm(getComponent("email"));
    const id = useId({ total: 10 });
    const identifier = this.id ? this.id : `checkbox-${id()}`;

    return html`
      <div class="${bemm()}">
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        <div class="${bemm("input")}">
          <input
            type="email"
            id="${identifier}"
            class="${bemm("control")}"
            placeholder="${this.placeholder}"
            value="${this.value}"
            @input="${this.handleChange}"
          />
        </div>
        <label for="${identifier}" class="${bemm("label")}"
          >${this.label}</label
        >
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-email": Email;
  }
}
