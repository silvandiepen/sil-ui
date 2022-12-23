import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-settings"))
export class IconSettings extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconSettings" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M60 132.5V45H48v87.5c-4.2 2.2-7 6.5-7 11.5s2.8 9.3 7 11.5V171h12v-15.5c4.2-2.2 7-6.5 7-11.5s-2.8-9.3-7-11.5zM54 149c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM114 69.5V45h-12v24.5c-4.2 2.2-7 6.5-7 11.5s2.8 9.3 7 11.5V171h12V92.5c4.2-2.2 7-6.5 7-11.5s-2.8-9.3-7-11.5zM108 86c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM175 117c0-5-2.8-9.3-7-11.5V45h-12v60.5c-4.2 2.2-7 6.5-7 11.5s2.8 9.3 7 11.5V171h12v-42.5c4.2-2.2 7-6.5 7-11.5zm-13 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-settings": IconSettings;
  }
}
