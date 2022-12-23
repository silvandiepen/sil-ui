import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconArrowLeft extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconArrowLeft" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M162 102H68.5l21.2-21.3-8.4-8.4L45.5 108l35.8 35.7 8.4-8.4L68.5 114H162z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-arrow-left": IconArrowLeft;
  }
}
