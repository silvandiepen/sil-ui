import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-terminal"))
export class IconTerminal extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconTerminal" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<g>
	<path d="M41,50v116h134V50H41z M167,158H49V58h118V158z"/>
	<polygon points="65.8,110.8 86.7,90 65.8,69.2 60.2,74.8 75.3,90 60.2,105.2 	"/>
	<rect x="90" y="104" width="27" height="8"/>
</g>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-terminal": IconTerminal;
  }
}
