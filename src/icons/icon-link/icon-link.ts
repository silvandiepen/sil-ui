import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconLink extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconLink" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M136.5 48v12h11l-34.2 34.3 8.4 8.4L156 68.5v11h12V48z"/><path d="M158 154c0 2.2-1.8 4-4 4H62c-2.2 0-4-1.8-4-4V62c0-2.2 1.8-4 4-4h46v-8H62c-6.6 0-12 5.4-12 12v92c0 6.6 5.4 12 12 12h92c6.6 0 12-5.4 12-12v-46h-8v46z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-link": IconLink;
  }
}
