import { LitElement } from "lit";
export declare class NumberField extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    placeholder: string;
    required: boolean;
    min: number;
    max: number;
    preview: boolean;
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "number-field": NumberField;
    }
}
