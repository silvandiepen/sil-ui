import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconLab extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconLab" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M161.6 147.7 132 88.6V74.5c4.2-2.2 7-6.5 7-11.5 0-7.2-5.8-13-13-13H90c-7.2 0-13 5.8-13 13 0 5 2.8 9.3 7 11.5v14.1l-29.5 59.1c-2.2 4.4-2 9.5.6 13.6 2.6 4.2 7 6.7 11.9 6.7h82c4.8 0 9.3-2.5 11.9-6.6 2.6-4.2 2.8-9.3.7-13.7zM90 58h36c2.8 0 5 2.2 5 5 0 1.1-.4 2.2-1 3H86c-.6-.8-1-1.9-1-3 0-2.8 2.2-5 5-5zm6 33.4V78h24v13.4l10.8 21.6c-8.9-.9-17.5 4.7-25 9.6-11.9 7.7-19.5 12-27.6 4.3L96 91.4zm54.7 63.6c-.2.4-.7 1-1.7 1H66.9c-.9 0-1.4-.6-1.7-1-.2-.4-.5-1.1-.1-2l9.4-18.7c4.2 3.4 8.4 4.7 12.5 4.7 8.2 0 16.2-5.2 23.1-9.7 11-7.2 18.4-11.4 25.9-5.8l14.7 29.5c.5.9.2 1.7 0 2z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-lab": IconIconLab;
  }
}
