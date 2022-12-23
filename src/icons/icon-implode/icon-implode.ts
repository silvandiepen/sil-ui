import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconImplode extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconImplode" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M153 123v-12h-42v42h12v-21.5l39.2 39.1 8.4-8.4-39.1-39.2zM93 84.5 53.8 45.4l-8.4 8.4L84.5 93H63v12h42V63H93zM63 123h21.5l-39.1 39.2 8.4 8.4L93 131.5V153h12v-42H63zM153 93h-21.5l39.1-39.2-8.4-8.4L123 84.5V63h-12v42h42z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-implode": IconImplode;
  }
}
