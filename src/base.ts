const base = {
  prefix: "sil",
};
export const components = {
  text: `${base.prefix}-text`,
  email: `${base.prefix}-email`,
  textarea: `${base.prefix}-textarea`,
  stack: `${base.prefix}-stack`,
  radio: `${base.prefix}-radio`,
  checkbox: `${base.prefix}-checkbox`,
  number: `${base.prefix}-number`,
  select: `${base.prefix}-select`,
  switch: `${base.prefix}-switch`,
  blockquote: `${base.prefix}-blockquote`,
  card: `${base.prefix}-card`,
  button: `${base.prefix}-button`,
  menuToggle: `${base.prefix}-menu-toggle`,
} as const;

export const getComponent = (component: keyof typeof components) => {
  return components[component];
};

export const DefaultErrors = {
  required: "This is a required field",
};
