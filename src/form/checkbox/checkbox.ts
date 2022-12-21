import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import styles from "./checkbox.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent('checkbox'))
export class Checkbox extends LitElement {
  static styles = unsafeCSS(styles);
  
  @property({ type: String })
  label = "";
  
  @property({ type: Boolean })
  value = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  id = "";


  handleChange(e: any) {
    this.value = e.target.value;
  }

  render() {
    const bemm = useBemm(getComponent('checkbox'));
    return html`
      <div class="${bemm()}">
        <input
          id="check"
          type="checkbox"
          class="${bemm("control")}"
          value="${this.value}"
          @input="${this.handleChange}"
        />
        <label for="check" class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key:string]: Checkbox;
  }
}
