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
};
export declare const getComponent: (component: keyof typeof components) => `${string}-text` | `${string}-email` | `${string}-textarea` | `${string}-stack` | `${string}-radio` | `${string}-checkbox` | `${string}-number` | `${string}-select` | `${string}-switch` | `${string}-blockquote` | `${string}-card` | `${string}-button` | `${string}-menu-toggle`;
export declare const DefaultErrors: {
    required: string;
};
