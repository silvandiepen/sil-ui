import { LitElement } from "lit";
export declare class MenuToggle extends LitElement {
    static styles: import("lit").CSSResult;
    active: boolean;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-menu-toggle": MenuToggle;
    }
}
