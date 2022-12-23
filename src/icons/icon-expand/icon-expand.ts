import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-expand"))
export class IconExpand extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconExpand" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m160.4 151.9-39.2-39.1-8.4 8.4 39.1 39.2h-21.5v12h42v-42h-12zM85.6 55.6v-12h-42v42h12V64.1l39.2 39.1 8.4-8.4-39.1-39.2zM94.8 112.8l-39.2 39.1v-21.5h-12v42h42v-12H64.1l39.1-39.2zM130.4 43.6v12h21.5l-39.1 39.2 8.4 8.4 39.2-39.1v21.5h12v-42z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-expand": IconExpand;
  }
}
