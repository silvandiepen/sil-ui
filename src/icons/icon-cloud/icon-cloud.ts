import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconCloud extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconCloud" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M167.2 94.7C163 72.9 144 57 121.5 57 102.7 57 86 68.2 78.8 85c-2.2-.7-4.5-1-6.8-1-11.4 0-20.9 8-23.4 18.6C38 105.1 30 114.6 30 126c0 13.2 10.8 24 24 24h103.5c15.7 0 28.5-12.8 28.5-28.5 0-12.2-7.7-22.8-18.8-26.8zm-9.7 43.3H54c-6.6 0-12-5.4-12-12s5.4-12 12-12h6v-6c0-6.6 5.4-12 12-12 2.4 0 4.8.8 6.9 2.2l7.1 4.9 2.1-8.3C92 79.6 105.7 69 121.5 69c17.8 0 32.5 13.3 34.3 31l.5 4.4 4.4.8c7.7 1.5 13.3 8.3 13.3 16.2 0 9.2-7.4 16.6-16.5 16.6z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-cloud": IconCloud;
  }
}
