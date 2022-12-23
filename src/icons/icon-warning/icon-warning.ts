import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-warning")
export class IconWarning extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconWarning" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M104 81h8v45h-8zM104 135h8v9h-8z"/><path d="M108 48c-33.1 0-60 26.9-60 60s26.9 60 60 60 60-26.9 60-60-26.9-60-60-60zm0 108c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-warning": IconWarning;
  }
}
