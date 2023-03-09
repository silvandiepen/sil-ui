import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-phone"))
export class IconPhone extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconPhone" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<g>
	<path d="M145,32H71c-6.6,0-12,5.4-12,12v128c0,6.6,5.4,12,12,12h74c6.6,0,12-5.4,12-12V44C157,37.4,151.6,32,145,32z M149,172
		c0,2.2-1.8,4-4,4H71c-2.2,0-4-1.8-4-4V44c0-2.2,1.8-4,4-4h74c2.2,0,4,1.8,4,4V172z"/>
	<path d="M117,41H99c-2.2,0-4,1.8-4,4s1.8,4,4,4h18c2.2,0,4-1.8,4-4S119.2,41,117,41z"/>
</g>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-phone": IconPhone;
  }
}
