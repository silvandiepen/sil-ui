import { LitElement } from "lit";
export declare class NumberField extends LitElement {
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
     * Min
     */
    min: number;
    /**
     * Max
     */
    max: number;
    /**
     * Preview
     */
    preview: boolean;
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "number-field": NumberField;
    }
}
