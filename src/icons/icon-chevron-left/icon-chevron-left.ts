import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-chevron-left")
export class IconChevronLeft extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconChevronLeft" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m138.9 58.6-7.8-9.2L62.8 108l68.3 58.6 7.8-9.2L81.2 108z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-chevron-left": IconChevronLeft;
  }
}
