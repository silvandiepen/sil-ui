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
  icon: `${base.prefix}-icon`,
  list: `${base.prefix}-list`,
  options: `${base.prefix}-options`,
  articleLink: `${base.prefix}-article-link`,
  articleItem: `${base.prefix}-article-item`,
  articleOverview: `${base.prefix}-article-overview`,
} as const;

export const getComponent = (component: keyof typeof components) => {
  return components[component];
};
export const getComponentName = (component: string) => {
  return `${base.prefix}-${component}`;
};

export const DefaultErrors = {
  required: "This is a required field",
};
