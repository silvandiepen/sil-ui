import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconFloppy extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconFloppy" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M48 48v98.5L69.5 168H168V48H48zm28 12h64v35H76V60zm55 96H85v-26h46v26zm25 0h-17v-34H77v34h-2.5L60 141.5V60h8v43h80V60h8v96z"/><path d="M95 135h8v18h-8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-floppy": IconIconFloppy;
  }
}
