import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-more"))
export class IconMore extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconMore" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M63 95c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM108 95c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM153 95c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13-5.8-13-13-13zm0 18c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-more": IconMore;
  }
}
