import { LitElement } from "lit";
export declare class SelectField extends LitElement {
    static styles: import("lit").CSSResult;
    protected _touched: boolean;
    label: string;
    id: string;
    name: string;
    value: string;
    required: boolean;
    preview: boolean;
    items: {
        name: string;
        value: string;
    }[];
    requiredError: string;
    handleChange(e: any): void;
    hasError(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "select-field": SelectField;
    }
}
