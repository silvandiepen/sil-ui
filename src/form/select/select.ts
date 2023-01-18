import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";

import styles from "./select.scss?inline";
import { getComponent, DefaultErrors } from "../../base";

interface Item {
  name: String;
  value: String | Number;
}

interface ItemGroup {
  label: String;
  items: Item[];
}

@customElement(getComponent("select"))
export class SelectField extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  protected _touched = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  id = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  value = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: Boolean })
  preview = false;

  @property({ type: Array })
  items =
    ([{ label: "", items: [{ name: "", value: "" }] }] as ItemGroup[]) ||
    ([{ name: "", value: "" }] as Item[]);

  @property({ type: String })
  requiredError = DefaultErrors.required;

  handleChange(e: any) {
    this.value = e.target.value;
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && !!!this.value;
  }

  render() {
    const { bemm, classes } = useBemm(getComponent("select"), {
      return: "string",
    });
    const id = useId({ total: 8 });
    const identifier = this.id ? this.id : `checkbox-${id()}`;

    const isGrouped = (): boolean => {
      return !!this.items[0]?.label;
    };

    const singleItems = (): Item[] => {
      return this.items as unknown as Item[];
    };

    const groupitems = (): ItemGroup[] => {
      return this.items as ItemGroup[];
    };

    return html`
      <div
        class="${classes(
          {},
          !this._touched && { m: "is-pristine" },
          this._touched && { m: "is-touched" },
          this.hasError() && { m: "has-error" }
        )}"
      >
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        ${this.hasError()
          ? html`<div class="${bemm("error")}">${this.requiredError}</div>`
          : null}
        <div class="${bemm("input")}">
          <select
            id="${identifier}"
            class="${bemm("control")}"
            value="${this.value}"
            @change="${this.handleChange}"
          >
            ${isGrouped()
              ? (groupitems() as ItemGroup[]).map(
                  (g: ItemGroup) => html`<optgroup label="${g.label}">
                    ${g.items.map(
                      (i) => html`<option value="${i.value}">${i.name}</option>`
                    )}
                  </optgroup>`
                )
              : (singleItems() as Item[]).map(
                  (i: Item) =>
                    html`<option value="${i.value}">${i.name}</option>`
                )}
          </select>
        </div>
        <label class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "select-field": SelectField;
  }
}
