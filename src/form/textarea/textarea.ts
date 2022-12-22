import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent, DefaultErrors } from "../../base";
import styles from "./textarea.scss?inline";

@customElement(getComponent("textarea"))
export class TextArea extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  protected _touched = false;

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

  @property({ type: Boolean })
  resize = true;

  autoSize(e: any) {
    e.target.style.height = 0;
    e.target.style.height = e.target.scrollHeight + "px";
  }

  handleChange(e: any) {
    this.value = e.target.value;
    if (this.resize) this.autoSize(e);
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && this.value == "";
  }

  render() {
    const { bemm, classes } = useBemm(getComponent("textarea"), {
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
          <textarea
            id="${this.id}"
            class="${bemm("control")}"
            placeholder="${this.placeholder}"
            value="${this.value}"
            required="${this.required}"
            @input="${this.handleChange}"
            @blur="${this.handleChange}"
          ></textarea>
        </div>
        <label for="${this.id}" class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-textarea": TextArea;
  }
}
