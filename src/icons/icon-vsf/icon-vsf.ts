import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconVsf extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconVsf" x="0px" y="0px"
	 viewBox="0 0 240 240" style="enable-background:new 0 0 240 240;" xml:space="preserve">
		

	.st0{fill:#02C652;}

<path class="st0" d="M109.4,21.1c-1.9,1.2-3.7,3-7.5,6.7c-3.7,3.7-5.6,5.6-6.7,7.5c-3.9,6.3-3.9,14.2,0,20.4c1.2,1.9,3,3.7,6.7,7.5
	l0,0c3.7,3.7,5.6,5.6,7.5,6.7c6.3,3.9,14.2,3.9,20.4,0c1.9-1.2,3.7-3,7.5-6.7c3.7-3.7,5.6-5.6,6.7-7.5c3.9-6.3,3.9-14.2,0-20.4
	c-1.2-1.9-3-3.7-6.7-7.5c-3.7-3.7-5.6-5.6-7.5-6.7C123.6,17.2,115.7,17.2,109.4,21.1z"/>
<path class="st0" d="M133.8,137.3L177,94.1c1.8-1.8,3.9-3.2,6.3-4.2c2.3-1,4.8-1.5,7.4-1.5c2.5,0,5,0.5,7.4,1.5
	c2.3,1,4.5,2.4,6.3,4.2l21.7,21.7c-0.1,0.1-106,106-106,106l-106-106c0.3-0.3,12-12,21.9-21.9c1.8-1.8,3.9-3.2,6.2-4.2
	c2.3-1,4.8-1.5,7.4-1.5c2.5,0,5,0.5,7.4,1.5c2.3,1,4.5,2.4,6.2,4.2l43.4,43.4c1.8,1.8,3.9,3.2,6.3,4.2c2.3,1,4.8,1.5,7.4,1.5
	c2.5,0,5-0.5,7.4-1.5C129.9,140.5,132.1,139.1,133.8,137.3z"/>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-vsf": IconIconVsf;
  }
}
