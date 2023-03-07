import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-dribbble"))
export class IconDribbble extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconDribbble" x="0px" y="0px"
	 viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
		
<path d="M6.1,23.9c0-3.2,0.8-6.2,2.4-9c1.6-2.7,3.8-4.9,6.5-6.5C17.8,6.8,20.8,6,24,6c3.2,0,6.2,0.8,9,2.4c2.7,1.6,4.9,3.8,6.5,6.5
	c1.6,2.7,2.4,5.7,2.4,9s-0.8,6.2-2.4,9c-1.6,2.7-3.8,4.9-6.5,6.5c-2.7,1.6-5.7,2.4-9,2.4c-3.2,0-6.2-0.8-9-2.4
	c-2.7-1.6-4.9-3.8-6.5-6.5C6.9,30.1,6.1,27.1,6.1,23.9z M9.1,23.9c0,3.7,1.3,7,3.8,9.8c1.1-2.2,3-4.4,5.4-6.4c2.5-2,4.9-3.3,7.3-3.8
	c-0.4-0.8-0.7-1.6-1-2.3c-4.1,1.3-8.5,2-13.3,2c-0.9,0-1.6,0-2.1,0c0,0.1,0,0.2,0,0.4C9.1,23.7,9.1,23.8,9.1,23.9z M9.5,20.2
	c0.5,0,1.3,0.1,2.3,0.1c4,0,7.8-0.5,11.3-1.6c-1.8-3.2-3.8-5.9-6-8.1c-1.9,1-3.5,2.3-4.8,4C11,16.3,10.1,18.2,9.5,20.2z M14.9,35.7
	c2.7,2.1,5.7,3.1,9.1,3.1c1.8,0,3.5-0.3,5.3-1c-0.5-4.1-1.4-8-2.8-11.8c-2.2,0.5-4.4,1.7-6.6,3.6C17.6,31.5,15.9,33.5,14.9,35.7z
	 M20.4,9.5c2.1,2.2,4,4.9,5.8,8.1c3.2-1.4,5.7-3.1,7.3-5.2C30.8,10.1,27.6,9,24,9C22.8,9,21.6,9.1,20.4,9.5z M27.5,20.1
	c0.4,0.8,0.8,1.7,1.2,2.9c1.8-0.2,3.7-0.3,5.8-0.3c1.5,0,2.9,0,4.4,0.1c-0.2-3.2-1.4-6.1-3.5-8.7C33.8,16.5,31.2,18.5,27.5,20.1z
	 M29.6,25.5c1.2,3.5,2,7.2,2.5,10.9c1.9-1.2,3.4-2.8,4.6-4.7c1.2-1.9,1.9-4,2.1-6.2c-1.7-0.1-3.3-0.2-4.8-0.2
	C32.7,25.4,31.3,25.4,29.6,25.5z"/>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-dribbble": IconDribbble;
  }
}
