import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconComment extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconComment" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M160.7 136.8c4.8-8.7 7.3-18.6 7.3-28.8 0-33.1-26.9-60-60-60s-60 26.9-60 60 26.9 60 60 60c10 0 19.9-2.5 28.7-7.3l34.2 10.3-10.2-34.2zm-7.6 16.3-17.9-5.4-2.3 1.4c-7.6 4.5-16.2 7-24.9 7-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48c0 9-2.3 17.3-6.9 24.9l-1.4 2.3 5.4 17.8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-comment": IconComment;
  }
}
