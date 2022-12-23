import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-copy"))
export class IconCopy extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconCopy" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M158 68h-26V40c0-5.5-4.5-10-10-10H49c-5.5 0-10 4.5-10 10v100c0 5.5 4.5 10 10 10h28v26c0 4.4 3.6 8 8 8h73c4.4 0 8-3.6 8-8V76c0-4.4-3.6-8-8-8zM51 42h69v96H51V42zm107 134H85v-26h37c5.5 0 10-4.5 10-10V76h26v100z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-copy": IconCopy;
  }
}
