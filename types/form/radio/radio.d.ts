import { LitElement } from "lit";
export declare class RadioField extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: boolean;
    required: boolean;
    id: string;
    name: string;
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "radio-field": RadioField;
    }
}
