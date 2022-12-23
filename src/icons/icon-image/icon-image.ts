import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconImage extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconImage" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M163 39H53c-7.7 0-14 6.3-14 14v110c0 7.7 6.3 14 14 14h110c7.7 0 14-6.3 14-14V53c0-7.7-6.3-14-14-14zM51 163V53c0-1.1.9-2 2-2h110c1.1 0 2 .9 2 2v70.3l-30.4-30.4L80.5 165H53c-1.1 0-2-.9-2-2zm112 2H90.5l44.9-59.9 29.6 29.6V163c0 1.1-.9 2-2 2z"/><path d="M81 103c12.1 0 22-9.9 22-22s-9.9-22-22-22-22 9.9-22 22 9.9 22 22 22zm0-36c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-image": IconIconImage;
  }
}
