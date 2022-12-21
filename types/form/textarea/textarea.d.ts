import { LitElement } from "lit";
export declare class TextArea extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    required: boolean;
    placeholder: string;
    preview: boolean;
    handleChange(e: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-textarea": TextArea;
    }
}
