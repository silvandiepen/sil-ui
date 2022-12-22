import { LitElement } from "lit";
export declare class Text extends LitElement {
    static styles: import("lit").CSSResult;
    protected _touched: boolean;
    name: string;
    id: string;
    label: string;
    value: string;
    required: boolean;
    requiredError: string;
    placeholder: string;
    preview: boolean;
    handleChange(e: any): void;
    hasError(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-text": Text;
    }
}
