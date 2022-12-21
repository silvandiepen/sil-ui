const base = {
  prefix: "sil",
};
export const components = {
  text: `${base.prefix}-text`,
  textarea: `${base.prefix}-textarea`,
  stack: `${base.prefix}-stack`,
  radio: `${base.prefix}-radio`,
  checkbox: `${base.prefix}-checkbox`,
  number: `${base.prefix}-number`,
  select: `${base.prefix}-select`,
} as const;

export const getComponent = (component: keyof typeof components) => {
  return components[component];
};
