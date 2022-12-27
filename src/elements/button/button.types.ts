export const ButtonType = {
  DEFAULT: "default",
  GHOST: "ghost",
};
export type ButtonType = typeof ButtonType[keyof typeof ButtonType];

export const ButtonColor = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
};
export type ButtonColor = typeof ButtonColor[keyof typeof ButtonColor];
