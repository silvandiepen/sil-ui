import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconArrowRight extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconArrowRight" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m134.7 72.3-8.4 8.4 21.2 21.3H54v12h93.5l-21.2 21.3 8.4 8.4 35.8-35.7z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-arrow-right": IconIconArrowRight;
  }
}
