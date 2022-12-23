import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconBackspace extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconBackspace" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="m70 68-30 40 30 40h96V68H70zm88 72H74l-24-32 24-32h84v64z"/><path d="m112.2 130.2 13.8-13.7 13.8 13.7 8.4-8.4-13.7-13.8 13.7-13.8-8.4-8.4L126 99.5l-13.8-13.7-8.4 8.4 13.7 13.8-13.7 13.8z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-backspace": IconBackspace;
  }
}
