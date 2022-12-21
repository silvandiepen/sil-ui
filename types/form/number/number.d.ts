import { LitElement } from "lit";
export declare class Number extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    value: string;
    placeholder: string;
    required: boolean;
    min: null;
    max: null;
    preview: boolean;
    increment: number;
    minMax(value: number): number;
    handleChange(e: any): void;
    increase(): void;
    decrease(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [key: string]: Number;
    }
}
