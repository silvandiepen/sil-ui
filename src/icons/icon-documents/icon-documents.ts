import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-documents")
export class IconDocuments extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconDocuments" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M158 59h-8V49c0-5.5-4.5-10-10-10H67c-5.5 0-10 4.5-10 10v100c0 5.5 4.5 10 10 10h10v8c0 4.4 3.6 8 8 8h73c4.4 0 8-3.6 8-8V67c0-4.4-3.6-8-8-8zm-89-8h69v96H69V51zm89 116H85v-8h55c5.5 0 10-4.5 10-10V67h8v100z"/><path d="M81 95h45v8H81zM81 113h45v8H81zM81 131h45v8H81zM81 77h27v8H81z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-documents": IconDocuments;
  }
}
