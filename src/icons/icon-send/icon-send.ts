import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-send")
export class IconSend extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconSend" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m38.1 90.6 55.7 31 31 55.7L162 53.4 38.1 90.6zM68.7 94 136 73.8l-37 37L68.7 94zm52.7 52.7-16.8-30.2 37-37-20.2 67.2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-send": IconSend;
  }
}
