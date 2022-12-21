import { LitElement } from "lit";
export declare class TextField extends LitElement {
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
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "textarea-field": TextField;
    }
}
