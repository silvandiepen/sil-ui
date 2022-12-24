import { LitElement } from "lit";
export declare class Options extends LitElement {
    static styles: import("lit").CSSResult;
    items: {
        name: string;
        value: string;
    }[];
    multiple: boolean;
    label: string;
    name: string;
    id: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "form-options": Options;
    }
}
