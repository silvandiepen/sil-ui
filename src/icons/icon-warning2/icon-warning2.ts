import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-warning2"))
export class IconWarning2 extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconWarning2" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M104 81h8v45h-8zM104 135h8v9h-8z"/><path d="M177.6 146.7 119.9 53c-2.6-4.2-7-6.7-11.9-6.7s-9.4 2.5-11.9 6.7l-57.7 93.7c-2.7 4.4-2.8 9.6-.3 14.1s7.2 7.2 12.2 7.2h115.4c5.2 0 9.7-2.7 12.2-7.2 2.5-4.4 2.4-9.9-.3-14.1zm-10.1 8.3c-.2.4-.7 1-1.8 1H50.3c-1 0-1.5-.7-1.7-1.1-.2-.4-.5-1.1 0-2l57.7-93.7c.5-.8 1.3-.9 1.7-.9s1.2.1 1.7 1l57.7 93.7c.5.8.3 1.6.1 2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-warning2": IconWarning2;
  }
}
