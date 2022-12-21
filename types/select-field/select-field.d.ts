import { LitElement } from "lit";
export declare class SelectField extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Label
     */
    label: string;
    /**
     * Value
     */
    value: string;
    /**
     * Preview
     */
    preview: boolean;
    /**
     * Preview
     */
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
