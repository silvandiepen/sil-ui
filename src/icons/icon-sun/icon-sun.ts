import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-sun")
export class IconSun extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconSun" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M108 66c-23.2 0-42 18.8-42 42s18.8 42 42 42 42-18.8 42-42-18.8-42-42-42zm0 72c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30zM36 104h18v8H36zM162 104h18v8h-18zM104 36h8v18h-8zM104 162h8v18h-8zM54.33 156.078l12.727-12.73 5.657 5.656-12.726 12.73zM143.43 66.993l12.73-12.726 5.656 5.658-12.73 12.726zM54.257 59.985l5.657-5.657L72.64 67.056l-5.656 5.657zM143.426 149.015l5.657-5.657 12.728 12.728-5.657 5.657z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-sun": IconSun;
  }
}
