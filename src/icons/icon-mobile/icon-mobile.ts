import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-mobile")
export class IconMobile extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconMobile" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M136 39H80c-7.7 0-14 6.3-14 14v110c0 7.7 6.3 14 14 14h56c7.7 0 14-6.3 14-14V53c0-7.7-6.3-14-14-14zM80 51h56c1.1 0 2 .9 2 2v6H78v-6c0-1.1.9-2 2-2zm58 16v82H78V67h60zm-2 98H80c-1.1 0-2-.9-2-2v-6h60v6c0 1.1-.9 2-2 2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-mobile": IconMobile;
  }
}
