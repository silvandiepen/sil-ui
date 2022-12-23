import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-home")
export class IconHome extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconHome" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M192.2 76 108 21.7 23.8 76l6.4 10L41 79.1V175h134V79.1l10.8 6.9 6.4-10zM167 167H49V74l59-38 59 38v93z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-home": IconHome;
  }
}
