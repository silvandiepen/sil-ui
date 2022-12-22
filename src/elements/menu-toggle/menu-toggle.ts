import { LitElement, unsafeCSS, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { useBemm } from "bemm";

import { getComponent } from "../../base";
import styles from "./menu-toggle.scss?inline";

@customElement(getComponent("menuToggle"))
export class MenuToggle extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  active = false;

  toggle() {
    this.active = !this.active;
    const event = new CustomEvent("menu", {
      bubbles: true,
      detail: { active: this.active },
    });
    this.dispatchEvent(event);

    this.setAttribute('active', `${this.active}`);
  }

  render() {
    const { classes, bemm } = useBemm(getComponent("menuToggle"), {
      return: "string",
    });
    return html`
      <button
        class="${classes({}, this.active ? { m: "active" } : null)}"
        @click="${this.toggle}"
        aria-label="Toggle menu"
      >
        <span class="${bemm("bar")}"></span>
        <span class="${bemm("bar")}"></span>
        <span class="${bemm("bar")}"></span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sil-menu-toggle": MenuToggle;
  }
}
