import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-burger"))
export class IconBurger extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconBurger" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<path d="M170,100.2c3.1-2.4,5-6.1,5-10.2c0-6.2-4.3-11.3-10.1-12.7C158.3,60.9,142.4,50,124.5,50H91.5c-17.9,0-33.8,10.9-40.4,27.3
	C45.3,78.7,41,83.8,41,90c0,4.2,2,7.9,5,10.2c-3.1,3.2-5,7.5-5,12.3s1.9,9.1,5,12.3c-3.1,2.4-5,6.1-5,10.2c0,5.9,3.9,10.8,9.3,12.4
	C51.9,157.9,61,166,72,166h72c11,0,20.1-8.1,21.7-18.6c5.4-1.6,9.3-6.6,9.3-12.4c0-4.2-2-7.9-5-10.2c3.1-3.2,5-7.5,5-12.3
	S173.1,103.4,170,100.2z M54,95c-2.8,0-5-2.2-5-5s2.2-5,5-5h108c2.8,0,5,2.2,5,5s-2.2,5-5,5h-4.5h-99H54z M157.5,103
	c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5h-99c-5.2,0-9.5-4.3-9.5-9.5s4.3-9.5,9.5-9.5H157.5z M91.5,58h33.1c13.4,0,25.4,7.4,31.4,19
	H60C66.1,65.4,78.1,58,91.5,58z M144,158H72c-6.3,0-11.7-4.2-13.4-10h98.8C155.7,153.8,150.3,158,144,158z M162,140H54
	c-2.8,0-5-2.2-5-5s2.2-5,5-5h4.5h99h4.5c2.8,0,5,2.2,5,5S164.8,140,162,140z"/>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-burger": IconBurger;
  }
}
