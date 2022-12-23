import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = styles;

@customElement(getComponentName("icon-team"))
export class IconTeam extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconTeam" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M170.7 101.3c5.6-4.3 9.2-11.1 9.2-18.7 0-13-10.6-23.6-23.6-23.6-7.3 0-13.8 3.3-18.2 8.6C133 56 121.4 48 108 48s-25 8-30.1 19.6C73.5 62.3 67 59 59.7 59c-13 0-23.6 10.6-23.6 23.6 0 7.6 3.6 14.3 9.2 18.7C32.2 106.9 23 119.9 23 135h8c0-15.8 12.9-28.7 28.7-28.7 6.5 0 12.6 2.2 17.6 6C65 121.6 57 136.4 57 153h12c0-21.5 17.5-39 39-39s39 17.5 39 39h12c0-16.6-8-31.4-20.3-40.7 5-3.9 11.1-6 17.6-6 15.8 0 28.7 12.9 28.7 28.7h8c0-15.1-9.2-28.1-22.3-33.7zM156.3 67c8.6 0 15.6 7 15.6 15.6s-7 15.6-15.6 15.6c-8 0-14.6-6-15.5-13.8.1-1.1.2-2.3.2-3.4v-1.2c1.3-7.3 7.7-12.8 15.3-12.8zM108 60c11.6 0 21 9.4 21 21s-9.4 21-21 21-21-9.4-21-21 9.4-21 21-21zm-48.3 7c7.6 0 14 5.5 15.3 12.8V81c0 1.2.1 2.3.2 3.4-.9 7.7-7.5 13.8-15.5 13.8-8.6 0-15.6-7-15.6-15.6S51.1 67 59.7 67zm24.7 40.8c-3-2.7-6.5-5-10.3-6.6 1.8-1.4 3.4-3 4.7-4.9 2.1 3.9 4.9 7.3 8.3 10.1-.9.5-1.8 1-2.7 1.4zm44.5-1.3c3.4-2.8 6.2-6.2 8.3-10.1 1.3 1.8 2.9 3.4 4.7 4.8-3.7 1.6-7.2 3.8-10.2 6.6-1-.5-1.9-.9-2.8-1.3z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-team": IconTeam;
  }
}
