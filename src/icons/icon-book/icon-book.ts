import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconBook extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconBook" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M169.9 48c-21.4 0-42.7 5.1-61.9 14.8C88.8 53.1 67.5 48 46.1 48h-6.5v105.6h6.5c1.1 0 2.2 0 3.3.1v10.2h4.4c18.4 0 36.6 3.7 52.6 10.8l1.6.7 1.6-.7c16.1-7 34.3-10.8 52.6-10.8h4.4v-10.2c1.1 0 2.2-.1 3.3-.1h6.5V48h-6.5zm-5.5 93.7c-18.1.7-36 5.1-52.4 12.8V74.3c16.2-8.5 34.2-13.3 52.4-14.2v81.6zM51.6 60.1c18.2.8 36.2 5.7 52.4 14.2v80.2c-16.4-7.7-34.3-12-52.4-12.8V60.1zm5.8 94c7.6.7 15 2.1 22.3 4.1-7.3-1.3-14.8-2.1-22.3-2.3v-1.8zm101.2 1.8c-7.6.2-15.1 1-22.5 2.3 7.4-2.1 14.9-3.5 22.5-4.2v1.9z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-book": IconBook;
  }
}
