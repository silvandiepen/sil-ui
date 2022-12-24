import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useBemm } from "bemm";

import styles from "./options.scss?inline";
import { getComponent } from "../../base";

@customElement(getComponent("options"))
export class Options extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Array })
  items = [{ name: "", value: "" }];

  @property({ type: Boolean })
  multiple = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  id = "";

  render() {
    const { classes, bemm } = useBemm(getComponent("options"), {
      return: "string",
    });

    if (this.multiple) {
      return html`
        <div class="${classes({}, { m: "multiple" })}">
    ${this.label ? html`<label class="${bemm("label")}">${this.label}</label>` : null}
          <div class="${bemm("list")}">
            ${this.items.map(
              (i) =>
                html`<span>hoiii</span>
                <sil-checkbox
                  value="${i.value}"
                  label="${i.name}"
                  name="${this.name}
                ></sil-checkbox>`
            )}
          </div>
        </div>
      `;
    } else {
      return html`
        <div class="${classes({}, { m: "single" })}">
          ${this.label ? html`<label class="${bemm("label")}">${this.label}</label>` : null}
          <div class="${bemm("list")}">
            ${this.items.map(
              (i) =>
                html`<span>test</span><sil-radio
                  value="${i.value}"
                  label="${i.name}"
                  name="${this.name}
                ></sil-radio>`
            )}
          </div>
        </div>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-options": Options;
  }
}
