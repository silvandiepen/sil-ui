import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconChevronUp extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconChevronUp" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m108 62.8-58.6 68.3 9.2 7.8L108 81.2l49.4 57.7 9.2-7.8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-chevron-up": IconChevronUp;
  }
}
