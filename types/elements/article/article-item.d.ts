import { LitElement } from "lit";
export declare class ArticleItem extends LitElement {
    static styles: import("lit").CSSResult;
    image: string;
    title: string;
    link: string;
    clickAction: () => void;
    excerpt: string;
    author: string;
    date: string;
    timestamp: string;
    icon: string;
    type: string;
    showImage: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "sil-article-item": ArticleItem;
    }
}
