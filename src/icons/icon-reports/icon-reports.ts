import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-reports"))
export class IconReports extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconReports" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M146.5 39c-2.2-4.2-6.5-7-11.5-7H81c-5 0-9.3 2.8-11.5 7H48v138h120V39h-21.5zM81 40h54c2.8 0 5 2.2 5 5s-2.2 5-5 5H81c-2.8 0-5-2.2-5-5s2.2-5 5-5zm75 125H60V51h9.5c2.2 4.2 6.5 7 11.5 7h54c5 0 9.3-2.8 11.5-7h9.5v114z"/><path d="M72 86h72v8H72zM72 104h72v8H72zM72 122h72v8H72z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-reports": IconReports;
  }
}
