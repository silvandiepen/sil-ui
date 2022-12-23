import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";




@customElement("sil-icon-graph")
export class IconGraph extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconGraph" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M45 156h126v12H45zM80.5 95h-35v53h35V95zm-8 45h-19v-37h19v37zM125.5 59h-35v89h35V59zm-8 81h-19V67h19v73zM170.5 113h-35v35h35v-35zm-8 27h-19v-19h19v19z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-graph": IconGraph;
  }
}
