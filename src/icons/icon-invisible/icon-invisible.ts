import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-invisible"))
export class IconInvisible extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconInvisible" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M175.8 104.4c-.8-1.1-12.6-16.9-28.7-30l13.2-13.2-5.7-5.7-13.9 13.9C130.6 62.4 119.2 57 108 57c-32.5 0-66.4 45.5-67.8 47.4l-2.6 3.6 2.6 3.6c.8 1.1 12.6 16.9 28.7 30l-17.7 17.7 5.7 5.7 18.4-18.4c10.1 7 21.5 12.4 32.7 12.4 32.5 0 66.4-45.5 67.8-47.4l2.6-3.6-2.6-3.6zM52.6 108C63.4 94.5 88 69 108 69c7.7 0 16.1 3.8 24.1 9.2l-11.7 11.7c-3.5-2.4-7.8-3.9-12.5-3.9-12.1 0-22 9.9-22 22 0 4.6 1.4 8.9 3.9 12.5L77.4 133c-10.2-8.2-19.3-18.1-24.8-25zm69.4 0c0 7.7-6.3 14-14 14-2.4 0-4.7-.6-6.7-1.7l19-19c1.1 2 1.7 4.3 1.7 6.7zm-28 0c0-7.7 6.3-14 14-14 2.4 0 4.7.6 6.7 1.7l-19 19c-1.1-2-1.7-4.3-1.7-6.7zm14 39c-7.7 0-16.1-3.8-24.1-9.2l11.7-11.7c3.5 2.4 7.8 3.9 12.5 3.9 12.1 0 22-9.9 22-22 0-4.6-1.4-8.9-3.9-12.5L138.6 83c10.2 8.1 19.3 18.1 24.8 25-10.8 13.5-35.4 39-55.4 39z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-invisible": IconInvisible;
  }
}
