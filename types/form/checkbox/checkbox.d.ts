import { LitElement } from "lit";
export declare class Checkbox extends LitElement {
    static styles: import("lit").CSSResult;
    protected _touched: boolean;
    name: string;
    id: string;
    label: string;
    value: boolean;
    required: boolean;
    requiredError: string;
    handleChange(e: any): void;
    hasError(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [key: string]: Checkbox;
    }
}
