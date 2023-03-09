import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-camera"))
export class IconCamera extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconCamera" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<g>
	<path d="M163,57h-26.5l-5.8-11.6c-1.4-2.7-4.1-4.4-7.2-4.4H92.5c-3,0-5.8,1.7-7.2,4.4L79.5,57H53c-7.7,0-14,6.3-14,14v74
		c0,7.7,6.3,14,14,14h110c7.7,0,14-6.3,14-14V71C177,63.3,170.7,57,163,57z M92.5,49h31.1l4,8H88.5L92.5,49z M165,145
		c0,1.1-0.9,2-2,2H53c-1.1,0-2-0.9-2-2V71c0-1.1,0.9-2,2-2h110c1.1,0,2,0.9,2,2V145z"/>
	<path d="M108,77c-17.1,0-31,13.9-31,31s13.9,31,31,31s31-13.9,31-31S125.1,77,108,77z M108,131c-12.7,0-23-10.3-23-23
		s10.3-23,23-23s23,10.3,23,23S120.7,131,108,131z"/>
</g>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-camera": IconCamera;
  }
}
