import { LitElement } from "lit";
export declare class SelectField extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    required: boolean;
    preview: boolean;
    items: {
        name: string;
        value: string;
    }[];
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "select-field": SelectField;
    }
}
