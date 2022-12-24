import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";

import styles from "./checkbox.scss?inline";
import { getComponent, DefaultErrors } from "../../base";

@customElement(getComponent("checkbox"))
export class Checkbox extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  protected _touched = false;

  @property({ type: String })
  name = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  label = "";

  @property({ type: Boolean })
  value = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  requiredError = DefaultErrors.required;

  handleChange(e: any) {
    this.value = e.target.value;
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && !!!this.value;
  }

  render() {
    const { bemm, classes } = useBemm(getComponent("checkbox"), {
      return: "string",
    });
    const id = useId({
      total: 8,
    });
    const identifier = this.id ? this.id : `checkbox-${id()}`;

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
        <input
          id="${identifier}"
          ${this.name ? `name="${this.name}"` : null}
          type="checkbox"
          class="${bemm("control")}"
          value="${this.value}"
          @input="${this.handleChange}"
          @blur="${this.handleChange}"
        />
        <label for="${identifier}" class="${bemm("label")}"
          >${this.label}</label
        >
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: Checkbox;
  }
}
