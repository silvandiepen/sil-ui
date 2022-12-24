import { LitElement, unsafeCSS, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { useBemm } from "bemm";
import { useId } from "@sil/id";
import styles from "./number.scss?inline";
import { getComponent, DefaultErrors } from "../../base";

@customElement(getComponent("number"))
export class Number extends LitElement {
  static styles = unsafeCSS(styles);

  @state()
  protected _touched = false;

  @property({ type: String })
  label = "";

  @property({ type: String || Number })
  value = "";

  @property({ type: String })
  placeholder = "";

  @property({ type: Boolean })
  required = false;

  @property({ type: String })
  requiredError = DefaultErrors.required;

  @property({ type: Number || null })
  min = null;

  @property({ type: Number || null })
  max = null;

  @property({ type: Boolean })
  preview = false;

  @property({ type: Number })
  increment = 1;

  minMax(value: number) {
    if (this.min !== null && value < this.min) return this.min;
    if (this.max !== null && value > this.max) return this.max;
    return value;
  }

  handleChange(e: any) {
    this.value = e.target.value;
    this._touched = true;
  }

  hasError() {
    return this.required && this._touched && this.value == "";
  }

  increase() {
    const value = !isNaN(parseInt(this.value)) ? this.value : "0";
    this.value = `${this.minMax(parseInt(value) + this.increment)}`;
  }
  decrease() {
    const value = !isNaN(parseInt(this.value)) ? this.value : "0";
    this.value = `${this.minMax(parseInt(value) - this.increment)}`;
  }

  render() {
    const { bemm, classes } = useBemm(getComponent("number"), {
      return: "string",
    });
    const id = useId({ total: 10 });
    const identifier = this.id ? this.id : `checkbox-${id()}`;


    return html`
      <div
        class="${classes(
          {},
          !this._touched && { m: "is-pristine" },
          this._touched && { m: "is-touched" },
          this.hasError() && { m: "has-error" }
        )}"
      >
        ${this.hasError()
          ? html`<div class="${bemm("error")}">${this.requiredError}</div>`
          : null}
        ${this.preview
          ? `<div class="${bemm("preview")}">${this.value}</div>`
          : null}
        <div class="${bemm("input")}">
          <div class="${bemm("controls")}">
            <button class="${bemm("up")}" @click="${this.increase}"></button>
            <button class="${bemm("down")}" @click="${this.decrease}"></button>
          </div>
          <input
            type="number"
            id="${identifier}"
            class="${bemm("control")}"
            ${this.min !== null ? 'min="' + this.min + '"' : null}
            ${this.max !== null ? 'max="' + this.max + '"' : null}
            value="${this.value}"
            required="${this.required}"
            @input="${this.handleChange}"
            @blur="${this.handleChange}"
          />
        </div>
        <label for="${identifier}" class="${bemm("label")}">${this.label}</label>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [key: string]: Number;
  }
}
