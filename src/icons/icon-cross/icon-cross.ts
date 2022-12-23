import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-cross"))
export class IconCross extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconCross" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m166.2 58.2-8.4-8.4L108 99.5 58.2 49.8l-8.4 8.4L99.5 108l-49.7 49.8 8.4 8.4 49.8-49.7 49.8 49.7 8.4-8.4-49.7-49.8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-cross": IconCross;
  }
}
