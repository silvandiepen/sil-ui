import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-check")
export class IconCheck extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconCheck" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m147.9 59.9-49.7 82.8-39.6-47.5-9.2 7.6 50.4 60.5 58.3-97.2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-check": IconCheck;
  }
}
