import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconImport extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconImport" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M50 131v23c0 6.6 5.4 12 12 12h92c6.6 0 12-5.4 12-12v-23H50zm108 23c0 2.2-1.8 4-4 4H62c-2.2 0-4-1.8-4-4v-15h100v15zM130.2 103.2l-8.4-8.4-7.8 7.7V54h-12v48.5l-7.8-7.7-8.4 8.4 22.2 22.3z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-import": IconIconImport;
  }
}
