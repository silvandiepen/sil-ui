import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIntegrations extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconIntegrations" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M166 122.6V86h-4c-2.8 0-5-2.2-5-5s2.2-5 5-5h4V50h-18.6c-1.7-5.2-6.6-9-12.4-9s-10.7 3.8-12.4 9H86v4c0 2.8-2.2 5-5 5s-5-2.2-5-5v-4H50v18.6c-5.2 1.7-9 6.6-9 12.4s3.8 10.7 9 12.4V130h4c2.8 0 5 2.2 5 5s-2.2 5-5 5h-4v26h18.6c1.7 5.2 6.6 9 12.4 9s10.7-3.8 12.4-9H130v-4c0-2.8 2.2-5 5-5s5 2.2 5 5v4h26v-18.6c5.2-1.7 9-6.6 9-12.4s-3.8-10.7-9-12.4zM112 58h18v-4c0-2.8 2.2-5 5-5s5 2.2 5 5v4h18v10.6c-5.2 1.7-9 6.6-9 12.4s3.8 10.7 9 12.4V104h-18v4c0 2.8-2.2 5-5 5s-5-2.2-5-5v-4h-18V93.4c5.2-1.7 9-6.6 9-12.4s-3.8-10.7-9-12.4V58zM54 86c-2.8 0-5-2.2-5-5s2.2-5 5-5h4V58h10.6c1.7 5.2 6.6 9 12.4 9s10.7-3.8 12.4-9H104v18h4c2.8 0 5 2.2 5 5s-2.2 5-5 5h-4v18H93.4c-1.7-5.2-6.6-9-12.4-9s-10.7 3.8-12.4 9H58V86h-4zm50 72H86v4c0 2.8-2.2 5-5 5s-5-2.2-5-5v-4H58v-10.6c5.2-1.7 9-6.6 9-12.4s-3.8-10.7-9-12.4V112h18v-4c0-2.8 2.2-5 5-5s5 2.2 5 5v4h18v10.6c-5.2 1.7-9 6.6-9 12.4s3.8 10.7 9 12.4V158zm58-18h-4v18h-10.6c-1.7-5.2-6.6-9-12.4-9s-10.7 3.8-12.4 9H112v-18h-4c-2.8 0-5-2.2-5-5s2.2-5 5-5h4v-18h10.6c1.7 5.2 6.6 9 12.4 9s10.7-3.8 12.4-9H158v18h4c2.8 0 5 2.2 5 5s-2.2 5-5 5z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-integrations": IconIntegrations;
  }
}
