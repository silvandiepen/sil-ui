import { LitElement } from "lit";
export declare class TextArea extends LitElement {
    static styles: import("lit").CSSResult;
    protected _touched: boolean;
    label: string;
    value: string;
    required: boolean;
    requiredError: string;
    placeholder: string;
    preview: boolean;
    resize: boolean;
    autoSize(e: any): void;
    handleChange(e: any): void;
    typeWriter(): void;
    hasError(): boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-textarea": TextArea;
    }
}
