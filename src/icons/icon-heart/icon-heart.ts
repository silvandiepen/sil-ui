import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-heart")
export class IconHeart extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconHeart" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M135 48c-9.9 0-19.5 3.5-27 9.8-7.5-6.3-17.1-9.8-27-9.8-23.2 0-42 18.8-42 42 0 35.3 21.1 50.9 41.4 66 7.9 5.8 16 11.9 23.3 19.2l4.2 4.2 4.2-4.2c7.3-7.3 15.5-13.4 23.3-19.2 20.4-15.1 41.4-30.7 41.4-66 .2-23.2-18.6-42-41.8-42zm-6.6 98.4c-6.8 5-13.8 10.2-20.4 16.3-6.7-6.1-13.7-11.3-20.4-16.3C67.1 131.2 51 119.3 51 90c0-16.5 13.5-30 30-30 8.7 0 16.7 3.6 22.5 10.2l4.5 5.1 4.5-5.1C118.3 63.6 126.3 60 135 60c16.5 0 30 13.5 30 30 0 29.3-16.1 41.2-36.6 56.4z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-heart": IconHeart;
  }
}
