import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-printer"))
export class IconPrinter extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconPrinter" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M158 84h-10V41H68v43H58c-5.5 0-10 4.5-10 10v46c0 5.5 4.5 10 10 10h10v25h80v-25h10c5.5 0 10-4.5 10-10V94c0-5.5-4.5-10-10-10zM76 49h64v35H76V49zm64 118H76v-37h64v37zm16-29h-8v-16H68v16h-8V96h96v42z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-printer": IconPrinter;
  }
}
