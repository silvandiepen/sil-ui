import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-apps"))
export class IconApps extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconApps" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<g>
	<path d="M95,41H49c-4.4,0-8,3.6-8,8v46c0,4.4,3.6,8,8,8h46c4.4,0,8-3.6,8-8V49C103,44.6,99.4,41,95,41z M95,95H49l0-46h0h46V95z"/>
	<path d="M167,41h-46c-4.4,0-8,3.6-8,8v46c0,4.4,3.6,8,8,8h46c4.4,0,8-3.6,8-8V49C175,44.6,171.4,41,167,41z M167,95h-46l0-46h0h46
		V95z"/>
	<path d="M167,113h-46c-4.4,0-8,3.6-8,8v46c0,4.4,3.6,8,8,8h46c4.4,0,8-3.6,8-8v-46C175,116.6,171.4,113,167,113z M167,167h-46l0-46
		h0h46V167z"/>
	<path d="M95,113H49c-4.4,0-8,3.6-8,8v46c0,4.4,3.6,8,8,8h46c4.4,0,8-3.6,8-8v-46C103,116.6,99.4,113,95,113z M95,167H49l0-46h0h46
		V167z"/>
</g>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-apps": IconApps;
  }
}
