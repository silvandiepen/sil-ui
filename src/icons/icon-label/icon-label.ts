import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconLabel extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconLabel" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M140 48H76c-5.5 0-10 4.5-10 10v116l42-31.5 42 31.5V58c0-5.5-4.5-10-10-10zm-2 102-30-22.5L78 150V60h60v90z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-label": IconLabel;
  }
}
