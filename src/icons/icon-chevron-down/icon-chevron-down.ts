import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconChevronDown extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconChevronDown" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M157.4 77.1 108 134.8 58.6 77.1l-9.2 7.8 58.6 68.3 58.6-68.3z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-chevron-down": IconChevronDown;
  }
}
