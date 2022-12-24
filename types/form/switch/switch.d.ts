import { LitElement } from "lit";
export declare class Switch extends LitElement {
    static styles: import("lit").CSSResult;
    protected _touched: boolean;
    label: string;
    name: string;
    id: string;
    labelOff: string;
    labelOn: string;
    value: boolean;
    required: boolean;
    requiredError: string;
    handleChange(e: any): void;
    hasError(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [key: string]: Switch;
    }
}
