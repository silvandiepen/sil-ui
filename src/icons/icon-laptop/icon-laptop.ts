import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconLaptop extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconLaptop" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M166 131V59H50v72h-9v14c0 6.6 5.4 12 12 12h110c6.6 0 12-5.4 12-12v-14h-9zM58 67h100v64H58V67zm109 78c0 2.2-1.8 4-4 4H53c-2.2 0-4-1.8-4-4v-6h118v6z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-laptop": IconIconLaptop;
  }
}
