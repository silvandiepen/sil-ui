import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconArrowDown extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconArrowDown" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M135.3 126.3 114 147.5V54h-12v93.5l-21.3-21.2-8.4 8.4 35.7 35.8 35.7-35.8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-arrow-down": IconArrowDown;
  }
}
