import { LitElement } from "lit";
export declare class Icon extends LitElement {
    static styles: import("lit").CSSResult;
    icon: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-icon": Icon;
    }
}
