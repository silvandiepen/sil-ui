import { LitElement } from "lit";
export declare class FormStack extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * Label
     */
    direction: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "form-stack": FormStack;
    }
}
