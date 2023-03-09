import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-tablet"))
export class IconTablet extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconTablet" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<g>
	<path d="M172,50H44c-6.6,0-12,5.4-12,12v92c0,6.6,5.4,12,12,12h128c6.6,0,12-5.4,12-12V62C184,55.4,178.6,50,172,50z M176,154
		c0,2.2-1.8,4-4,4H44c-2.2,0-4-1.8-4-4V62c0-2.2,1.8-4,4-4h128c2.2,0,4,1.8,4,4V154z"/>
	<path d="M48.7,106.5c-0.1-0.2-0.2-0.5-0.4-0.7c-0.2-0.2-0.3-0.4-0.5-0.6c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.1-0.5-0.3-0.7-0.4
		c-0.2-0.1-0.5-0.2-0.8-0.2c-1.3-0.3-2.7,0.2-3.6,1.1c-0.2,0.2-0.4,0.4-0.5,0.6c-0.1,0.2-0.3,0.5-0.4,0.7c-0.1,0.2-0.2,0.5-0.2,0.8
		c0,0.3-0.1,0.5-0.1,0.8c0,0.3,0,0.5,0.1,0.8s0.1,0.5,0.2,0.8c0.1,0.2,0.2,0.5,0.4,0.7c0.1,0.2,0.3,0.4,0.5,0.6
		c0.8,0.7,1.8,1.2,2.8,1.2c0.3,0,0.5,0,0.8-0.1c0.3-0.1,0.5-0.1,0.8-0.2c0.2-0.1,0.5-0.2,0.7-0.4c0.2-0.1,0.4-0.3,0.6-0.5
		c0.2-0.2,0.3-0.4,0.5-0.6c0.1-0.2,0.3-0.5,0.4-0.7c0.1-0.2,0.2-0.5,0.2-0.8s0.1-0.5,0.1-0.8c0-0.3,0-0.5-0.1-0.8
		C48.9,107,48.8,106.7,48.7,106.5z"/>
</g>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-tablet": IconTablet;
  }
}
