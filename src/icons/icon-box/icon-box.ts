import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-box"))
export class IconBox extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconBox" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m196 91.3-24.1-24.1-.9.4-63-27-63 27-.9-.4L20 91.3l19 8.1V148l69 29.6 69-29.6V99.5l19-8.2zm-69.1 21-11.9-12 55.1-23.6 11.9 12-55.1 23.6zM160.8 72 108 94.6 55.2 72 108 49.4 160.8 72zM45.9 76.7l55.1 23.6-11.9 11.9L34 88.7l11.9-12zm5.1 27.9 39.9 17.1 13.1-13.1v54.1L51 140v-35.4zM165 140l-53 22.7v-54.1l13.1 13.1 39.9-17.1V140z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-box": IconBox;
  }
}
