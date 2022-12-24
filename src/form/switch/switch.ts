import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";

import styles from "./switch.scss?inline";
import { getComponent, DefaultErrors } from "../../base";

@customElement(getComponent("switch"))
export class Switch extends LitElement {
  static styles = unsafeCSS(styles);
  @state()
  protected _touched = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  labelOff = "";

  @property({ type: String })
  labelOn = "";

  @property({ type: Boolean })
  value = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  requiredError = DefaultErrors.required;

  handleChange(e: any) {
    this.value = !!e.target.checked;
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && !!!this.value;
  }
  render() {
    const bemm = useBemm(getComponent("switch"), {
      return: "string",
    });
    const id = useId({
      total: 8,
    });
    const identifier = this.id ? this.id : `checkbox-${id()}`;

    return html`
      <div class="${bemm()}">
        ${this.hasError()
          ? html`<div class="${bemm("error")}">${this.requiredError}</div>`
          : null}
        <input
          id="${identifier}"
          type="checkbox"
          class="${bemm("control")}"
          value="${this.value}"
          @input="${this.handleChange}"
        />
        <label for="${identifier}" class="${bemm("label")}">
          <div class="${bemm("switch")}"></div>
          ${this.label}
          ${this.value
            ? html`<div>${this.labelOff}</div>`
            : html`<div>${this.labelOn}</div>`}
        </label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: Switch;
  }
}
