import { LitElement } from "lit";
export declare class TextField extends LitElement {
    /**
     * Label
     */
    label: string;
    /**
     * Value
     */
    value: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "text-field": TextField;
    }
}
