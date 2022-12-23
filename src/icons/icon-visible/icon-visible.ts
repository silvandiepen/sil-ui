import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconVisible extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconVisible" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M175.8 104.4C174.4 102.5 140.5 57 108 57s-66.4 45.5-67.8 47.4l-2.6 3.6 2.6 3.6c1.4 1.9 35.4 47.4 67.8 47.4s66.4-45.5 67.8-47.4l2.6-3.6-2.6-3.6zM108 147c-20 0-44.6-25.5-55.4-39C63.4 94.5 88 69 108 69s44.6 25.5 55.4 39c-10.8 13.5-35.4 39-55.4 39z"/><path d="M108 86c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22zm0 36c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-visible": IconVisible;
  }
}
