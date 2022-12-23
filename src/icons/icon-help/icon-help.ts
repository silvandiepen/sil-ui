import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-help"))
export class IconHelp extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconHelp" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M104 135h8v9h-8z"/><path d="M108 48c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60zm0 108c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/><path d="M110.4 77.1c-6.2-.7-12.4 1.3-17.1 5.5C88.7 86.8 86 92.7 86 99h8c0-4 1.7-7.8 4.7-10.5s6.9-3.9 10.9-3.5c6.4.7 11.6 5.8 12.3 12.3.7 6.3-2.7 12.1-8.5 14.5-5.7 2.5-9.4 7.9-9.4 13.9v.2h8v-.2c0-2.8 1.8-5.3 4.5-6.5 8.9-3.6 14.4-13 13.4-22.7-1.2-10.1-9.4-18.3-19.5-19.4z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-help": IconHelp;
  }
}
