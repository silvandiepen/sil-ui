import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconDesktop extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconDesktop" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M166 129V59H50v70H39v16c0 7.7 6.3 14 14 14h110c7.7 0 14-6.3 14-14v-16h-11zM58 67h100v62H58V67zm107 78c0 1.1-.9 2-2 2H53c-1.1 0-2-.9-2-2v-4h114v4z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-desktop": IconDesktop;
  }
}
