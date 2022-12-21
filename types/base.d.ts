export declare const components: {
    readonly text: `${string}-text`;
    readonly textarea: `${string}-textarea`;
    readonly stack: `${string}-stack`;
    readonly radio: `${string}-radio`;
    readonly checkbox: `${string}-checkbox`;
    readonly number: `${string}-number`;
    readonly select: `${string}-select`;
    readonly switch: `${string}-switch`;
};
export declare const getComponent: (component: keyof typeof components) => `${string}-text` | `${string}-textarea` | `${string}-stack` | `${string}-radio` | `${string}-checkbox` | `${string}-number` | `${string}-select` | `${string}-switch`;
