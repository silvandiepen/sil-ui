import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-laptop"))
export class IconLaptop extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconLaptop" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<path d="M175,138V71c0-6.6-5.4-12-12-12H62c-6.6,0-12,5.4-12,12v67H39v16c0,7.7,6.3,14,14,14h119c7.7,0,14-6.3,14-14v-16H175z
	 M58,71c0-2.2,1.8-4,4-4h101c2.2,0,4,1.8,4,4v67H58V71z M174,154c0,1.1-0.9,2-2,2H53c-1.1,0-2-0.9-2-2v-4h123V154z"/>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-laptop": IconLaptop;
  }
}
