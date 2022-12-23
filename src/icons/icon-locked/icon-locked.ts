import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-locked")
export class IconLocked extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconLocked" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M148 104V81c0-22.1-17.9-40-40-40S68 58.9 68 81v23H50v59c0 6.6 5.4 12 12 12h92c6.6 0 12-5.4 12-12v-59h-18zM76 81c0-17.6 14.4-32 32-32s32 14.4 32 32v23H76V81zm82 82c0 2.2-1.8 4-4 4H62c-2.2 0-4-1.8-4-4v-51h100v51z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-locked": IconLocked;
  }
}
