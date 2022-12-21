import { LitElement } from "lit";
export declare class Checkbox extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: boolean;
    required: boolean;
    id: string;
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [key: string]: Checkbox;
    }
}
