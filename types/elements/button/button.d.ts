import { LitElement } from "lit";
export declare class Button extends LitElement {
    static styles: import("lit").CSSResult;
    icon: string;
    label: string;
    type: string;
    color: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-button": Button;
    }
}
