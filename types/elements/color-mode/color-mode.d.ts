import { LitElement } from "lit";
export declare class ColorMode extends LitElement {
    static styles: import("lit").CSSResult;
    localMode: string;
    isDarkMode: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-color-mode": ColorMode;
    }
}
