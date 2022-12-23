import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconSearch extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconSearch" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M139 94.5C139 70 119 50 94.5 50S50 70 50 94.5 70 139 94.5 139 139 119 139 94.5zM94.5 131C74.4 131 58 114.6 58 94.5S74.4 58 94.5 58 131 74.4 131 94.5 114.6 131 94.5 131z"/><path d="m121.724 130.212 8.486-8.486 35.99 35.992-8.484 8.485z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-search": IconSearch;
  }
}
