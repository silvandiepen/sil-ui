import { LitElement, unsafeCSS, html } from "lit";
import { customElement } from "lit/decorators.js";
import { getComponentName } from "../../base";

import styles from "../../elements/icon/icon.scss?inline";
const styleData = `.b{fill:#f8bcd6;}.c{fill:#fbd8e7;}.d{fill:#ffdb77;}.e{fill:#ffe8af;}.f{fill:#f390bb;}.g{fill:#a0ce5b;}.h{fill:#332b27;}.i{fill:#cce29d;}.j{fill:#61534d;}`+styles;

@customElement(getComponentName("icon-icon"))
export class IconIcon extends LitElement {
  static styles = unsafeCSS(styleData);

  render() {
    return html`
     <svg class="sil-icon" version="1.1" id="IconIcon" x="0px" y="0px"
	 viewBox="0 0 156 171" style="enable-background:new 0 0 156 171;" xml:space="preserve">
		<defs>.b{fill:#f8bcd6;}.c{fill:#fbd8e7;}.d{fill:#ffdb77;}.e{fill:#ffe8af;}.f{fill:#f390bb;}.g{fill:#a0ce5b;}.h{fill:#332b27;}.i{fill:#cce29d;}.j{fill:#61534d;}</defs><g><path class="f" d="M20.76,139.3c-10.95-5.48-17.76-16.49-17.76-28.73V36.71L63.63,6.39c4.44-2.22,9.41-3.39,14.37-3.39s9.93,1.17,14.37,3.39l60.63,30.32V110.56c0,12.25-6.8,23.26-17.76,28.73l-57.24,28.62-57.24-28.62Z"/><path class="h" d="M78,6c4.46,0,8.93,1.02,13.02,3.07l58.98,29.49V110.56c0,11.03-6.23,21.12-16.1,26.05l-55.9,27.95-55.9-27.95c-9.87-4.93-16.1-15.02-16.1-26.05V38.56L64.98,9.07c4.1-2.05,8.56-3.07,13.02-3.07m0-6c-5.42,0-10.86,1.28-15.71,3.71L3.32,33.2l-3.32,1.66V110.56c0,13.39,7.44,25.43,19.42,31.42l55.9,27.95,2.68,1.34,2.68-1.34,55.9-27.95c11.98-5.99,19.42-18.03,19.42-31.42V34.85l-3.32-1.66L93.71,3.71c-4.85-2.43-10.28-3.71-15.71-3.71h0Z"/></g><polygon class="h" points="6 56.56 6 74.56 78 110.56 150 74.56 150 56.56 78 92.56 6 56.56"/><path class="b" d="M6,38.56l72,36,72-36L91.02,9.07c-8.2-4.1-17.85-4.1-26.05,0L6,38.56Z"/><polygon class="h" points="6 92.56 6 110.56 78 146.56 150 110.56 150 92.56 78 128.56 6 92.56"/><polygon class="g" points="6 74.56 6 92.56 78 128.56 150 92.56 150 74.56 78 110.56 6 74.56"/><path class="d" d="M6,110.56h0c0,11.03,6.23,21.12,16.1,26.05l55.9,27.95,55.9-27.95c9.87-4.93,16.1-15.02,16.1-26.05h0l-72,36L6,110.56Z"/><polygon class="i" points="78 110.56 78 128.56 150 92.56 150 74.56 78 110.56"/><polygon class="j" points="78 128.56 78 146.56 150 110.56 150 92.56 78 128.56"/><polygon class="j" points="78 92.56 78 110.56 150 74.56 150 56.56 78 92.56"/><polygon class="b" points="78 74.56 78 92.56 150 56.56 150 38.56 78 74.56"/><path class="c" d="M6,38.56l72,36,72-36L91.02,9.07c-8.2-4.1-17.85-4.1-26.05,0L6,38.56Z"/><path class="e" d="M78,146.56v18l55.9-27.95c9.87-4.93,16.1-15.02,16.1-26.05h0l-72,36Z"/>
	</svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-icon-icon": IconIcon;
  }
}
