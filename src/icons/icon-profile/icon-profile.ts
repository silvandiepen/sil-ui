import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponent } from "../../base";




@customElement(getComponent("icon"))
export class IconIconProfile extends LitElement {
  

  render() {
    return html`
     <svg version="1.1" id="IconProfile" x="0px" y="0px"
	 viewBox="0 0 216 216" style="enable-background:new 0 0 216 216;" xml:space="preserve">
		<path d="M108 30c-43 0-78 35-78 78s35 78 78 78 78-35 78-78-35-78-78-78zM67.1 159.7C68.3 138.2 86.2 121 108 121s39.7 17.2 40.9 38.7c-11.3 8.9-25.5 14.3-40.9 14.3s-29.7-5.4-40.9-14.3zM85 90c0-12.7 10.3-23 23-23s23 10.3 23 23-10.3 23-23 23-23-10.3-23-23zm71.2 63.1c-3.2-17.1-15.3-31.2-31.3-37.1 8.5-5.5 14.1-15.1 14.1-26 0-17.1-13.9-31-31-31S77 72.9 77 90c0 10.9 5.6 20.5 14.1 26-16 5.9-28.1 19.9-31.3 37.1C48.8 141.2 42 125.4 42 108c0-36.4 29.6-66 66-66s66 29.6 66 66c0 17.4-6.8 33.2-17.8 45.1z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon-profile": IconIconProfile;
  }
}
