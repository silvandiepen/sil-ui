import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";
import styles from "./switch.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent("switch"))
export class Switch extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String })
  label = "";

  @property({ type: String })
  labelOff = "";

  @property({ type: String })
  labelOn = "";

  @property({ type: Boolean })
  value = false;

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  id = "";

  handleChange(e: any) {
    this.value = !!e.target.checked;
  }

  render() {
    const bemm = useBemm(getComponent("switch"));
    return html`
      <div class="${bemm()}">
        <input
          id="switch"
          type="checkbox"
          class="${bemm("control")}"
          value="${this.value}"
          @input="${this.handleChange}"
        />
        <label for="switch" class="${bemm("label")}">
          <div class="${bemm("switch")}"></div>
          ${this.label}
          ${this.value ? html`<div>${this.labelOff}</div>` : html`<div>${this.labelOn}</div>`}
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
