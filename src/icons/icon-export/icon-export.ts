import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-export")
export class IconExport extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconExport" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M50 131v23c0 6.6 5.4 12 12 12h92c6.6 0 12-5.4 12-12v-23H50zm108 23c0 2.2-1.8 4-4 4H62c-2.2 0-4-1.8-4-4v-15h100v15zM102 68.5V117h12V68.5l7.8 7.7 8.4-8.4L108 45.5 85.8 67.8l8.4 8.4z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-export": IconExport;
  }
}
