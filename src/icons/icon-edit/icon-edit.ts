import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-edit"))
export class IconEdit extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconEdit" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M173.8 70.1c-2.2-6.6-5.8-12.4-10.6-17.2-4.8-4.8-10.6-8.4-17.2-10.6l-14-4.7L38.4 131v46.7h46.7l93.5-93.5-4.8-14.1zm-94.1 80.2-14-14-11.7-3.9 63.7-63.7 13.7 4.5 11.4 11.4 4.6 13.9-63.7 63.7-4-11.9zm-29.3-10.6 10.9 3.6 11.4 11.4 3.6 11H50.4v-26zm103.2-47.5-3.9-11.9-14-14-11.7-3.9 11.2-11.2 7 2.3c4.8 1.6 9.1 4.3 12.6 7.8s6.1 7.7 7.8 12.6L165 81l-11.4 11.2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-edit": IconEdit;
  }
}
