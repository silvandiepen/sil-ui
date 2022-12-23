import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconChevronRight extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconChevronRight" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m84.9 49.4-7.8 9.2 57.7 49.4-57.7 49.4 7.8 9.2 68.3-58.6z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-chevron-right": IconChevronRight;
  }
}
