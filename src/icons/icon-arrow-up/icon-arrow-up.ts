import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconArrowUp extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconArrowUp" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M143.7 81.3 108 45.5 72.3 81.3l8.4 8.4L102 68.5V162h12V68.5l21.3 21.2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-arrow-up": IconArrowUp;
  }
}
