import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import styles from "./select.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent('select'))
export class SelectField extends LitElement {
  static styles = unsafeCSS(styles);
  
  @property({ type: String })
  label = "";
  
  @property({ type: String })
  value = "";

  @property({ type: Boolean })
  required = false;
  
  @property({ type: Boolean })
  preview = false;

  @property({ type: Array })
  items = [{ name: '', value: ''}];


  handleChange(e: any) {
    this.value = e.target.value;
  }

  render() {
    const bemm = useBemm(getComponent('select'));
    console.log(this.items)
    return html`
      <div class="${bemm()}">
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        <select
          class="${bemm("control")}"
          value="${this.value}"
          @change="${this.handleChange}"
        >
        ${this.items.map(i => html`<option value="${i.value}">${i.name}</option>`)}
        </select>
        <label class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "select-field": SelectField;
  }
}
