import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-smaller")
export class IconSmaller extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconSmaller" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M63 123h21.5l-39.1 39.2 8.4 8.4L93 131.5V153h12v-42H63zM170.6 53.8l-8.4-8.4L123 84.5V63h-12v42h42V93h-21.5z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-smaller": IconSmaller;
  }
}
