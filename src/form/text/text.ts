import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent, DefaultErrors } from "../../base";
import styles from "./text.scss?inline";

@customElement(getComponent("text"))
export class Text extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  protected _touched = false;

  @property({ type: String })
  name = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  label = "";

  @property({ type: String })
  value = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  requiredError = DefaultErrors.required;

  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean })
  preview = false;

  handleChange(e: any) {
    this.value = e.target.value;
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && this.value == "";
  }

  render() {
    const { bemm, classes } = useBemm(getComponent("text"), {
      return: "string",
    });
    return html`
      <div
        class="${classes(
          {},
          !this._touched && { m: "is-pristine" },
          this._touched && { m: "is-touched" },
          this.hasError() && { m: "has-error" }
        )}"
      >
        ${this.hasError()
          ? html`<div class="${bemm("error")}">${this.requiredError}</div>`
          : null}
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        <div class="${bemm("input")}">
          <input
            ${this.name ? `name="${this.name}"` : null}
            ${this.id ? `id="${this.id}"` : null}
            type="text"
            class="${bemm("control")}"
            placeholder="${this.placeholder}"
            value="${this.value}"
            required="${this.required}"
            @input="${this.handleChange}"
            @blur="${this.handleChange}"
          />
        </div>
        <label ${this.id ? `for="${this.id}"` : 'for="nothing"'} class="${bemm("label")}"
          >${this.label}</label
        >
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-text": Text;
  }
}
