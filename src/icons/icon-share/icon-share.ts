import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-share"))
export class IconShare extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconShare" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M50 131v23c0 6.6 5.4 12 12 12h92c6.6 0 12-5.4 12-12v-23H50zm108 23c0 2.2-1.8 4-4 4H62c-2.2 0-4-1.8-4-4v-15h100v15zM87 101.4c0-7.9 6.5-14.4 14.4-14.4h28.1l-7.8 7.8 8.5 8.5L152.5 81l-22.2-22.2-8.5 8.5 7.8 7.8h-28.1C86.8 75 75 86.8 75 101.4V117h12v-15.6z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-share": IconShare;
  }
}
