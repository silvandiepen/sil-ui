import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import styles from "./number.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent('number'))
export class NumberField extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  label = "";

  @property({ type: String || Number })
  value = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Number })
  min = -1;

  @property({ type: Number })
  max = -1;

  @property({ type: Boolean })
  preview = false;

  handleChange(e: any) {
    this.value = e.target.value;
  }

  render() {
    const { bemm, classes } = useBemm(getComponent('number'));
    return html`
      <div class="${classes({})}">
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        <input
          type="number"
          class="${bemm("control")}"
          ${this.min > -1 ? 'min="' + this.min + '"' : null}
          ${this.max > -1 ? 'max="' + this.max + '"' : null}
          value="${this.value}"
          @input="${this.handleChange}"
        />
        <label class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "number-field": NumberField;
  }
}
