import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconHealth extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconHealth" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m140.3 102-20.6 41.2-17.6-97L68.6 102H36v12h39.4l20.5-34.2 18.4 101 33.4-66.8H171v-12z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-health": IconIconHealth;
  }
}
