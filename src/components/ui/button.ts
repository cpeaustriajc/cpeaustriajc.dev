import { cva } from "cva";

export const button = cva({
  base: [
    "ring-1 ring-primary transition-all duration-500",
    "hover:bg-primary hover:ring-primary",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  ],
  variants: {},
});
