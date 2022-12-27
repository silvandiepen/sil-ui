export declare const components: {
    readonly text: `${string}-text`;
    readonly email: `${string}-email`;
    readonly textarea: `${string}-textarea`;
    readonly stack: `${string}-stack`;
    readonly radio: `${string}-radio`;
    readonly checkbox: `${string}-checkbox`;
    readonly number: `${string}-number`;
    readonly select: `${string}-select`;
    readonly switch: `${string}-switch`;
    readonly blockquote: `${string}-blockquote`;
    readonly card: `${string}-card`;
    readonly button: `${string}-button`;
    readonly menuToggle: `${string}-menu-toggle`;
    readonly icon: `${string}-icon`;
    readonly list: `${string}-list`;
    readonly options: `${string}-options`;
    readonly articleLink: `${string}-article-link`;
    readonly articleItem: `${string}-article-item`;
    readonly articleOverview: `${string}-article-overview`;
};
export declare const getComponent: (component: keyof typeof components) => `${string}-text` | `${string}-email` | `${string}-textarea` | `${string}-stack` | `${string}-radio` | `${string}-checkbox` | `${string}-number` | `${string}-select` | `${string}-switch` | `${string}-blockquote` | `${string}-card` | `${string}-button` | `${string}-menu-toggle` | `${string}-icon` | `${string}-list` | `${string}-options` | `${string}-article-link` | `${string}-article-item` | `${string}-article-overview`;
export declare const getComponentName: (component: string) => string;
export declare const DefaultErrors: {
    required: string;
};
