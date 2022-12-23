import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconDocument extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconDocument" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M81 95h54v8H81zM81 113h54v8H81zM81 131h54v8H81zM81 149h54v8H81zM81 77h27v8H81z"/><path d="M128.5 39H71c-7.7 0-14 6.3-14 14v119c0 7.7 6.3 14 14 14h74c7.7 0 14-6.3 14-14V69.5L128.5 39zm1.5 18.5L140.5 68H130V57.5zM145 174H71c-1.1 0-2-.9-2-2V53c0-1.1.9-2 2-2h51v25h25v96c0 1.1-.9 2-2 2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-document": IconIconDocument;
  }
}