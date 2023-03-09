import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-person"))
export class IconPerson extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconPerson" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		

	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}
	.st1{fill:none;stroke:#000000;stroke-width:8;stroke-miterlimit:10;}

<path d="M127,116.2c12.5-6.8,21-20,21-35.2c0-22.1-17.9-40-40-40S68,58.9,68,81c0,15.2,8.5,28.4,21,35.2c-22.7,7.9-39,29.5-39,54.8
	v2.5l2.2,1.1C53,175,71.5,184,108,184s55-9,55.8-9.4l2.2-1.1V171C166,145.7,149.7,124.1,127,116.2z M76,81c0-17.6,14.4-32,32-32
	s32,14.4,32,32s-14.4,32-32,32S76,98.6,76,81z M108,176c-27.4,0-44.1-5.4-49.9-7.6C59.4,142,81.3,121,108,121s48.6,21,49.9,47.4
	C152.1,170.6,135.4,176,108,176z"/>

	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-person": IconPerson;
  }
}
