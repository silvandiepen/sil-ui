import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";
import styles from "./radio.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent('radio'))
export class RadioField extends LitElement {
  static styles = unsafeCSS(styles);
  
  @property({ type: String })
  label = "";
  
  @property({ type: Boolean })
  value = false;

  @property({ type: Boolean })
  required = false;
  
  @property({ type: String })
  id = "";
  
  @property({ type: String })
  name = "";


  handleChange(e: any) {
    this.value = e.target.value;
  }

  render() {
    const bemm = useBemm(getComponent('radio'));
    const id = useId({
      total: 8
    });
    const identifier = this.id ? this.id : `checkbox-${id()}`;

    return html`
      <div class="${bemm()}">
        <input
          id="${identifier}"
          name="${this.name}"
          type="radio"
          class="${bemm("control")}"
          value="${this.value}"
          @input="${this.handleChange}"
        />
        <label for="${identifier}" class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "radio-field": RadioField;
  }
}
