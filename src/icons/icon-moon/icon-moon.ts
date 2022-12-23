import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconMoon extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconMoon" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M105 108c0-18.7 11-35.9 28-43.6l12-5.5-12-5.5c-8-3.6-16.4-5.4-25-5.4-33.1 0-60 26.9-60 60s26.9 60 60 60c8.5 0 16.9-1.8 25-5.4l12.1-5.4-12-5.5c-17.1-7.8-28.1-25-28.1-43.7zm3 48c-26.5 0-48-21.5-48-48s21.5-48 48-48c2.7 0 5.4.2 8.1.7C101.7 71.9 93 89.3 93 108c0 18.7 8.7 36.1 23.1 47.3-2.7.5-5.4.7-8.1.7z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-moon": IconMoon;
  }
}
