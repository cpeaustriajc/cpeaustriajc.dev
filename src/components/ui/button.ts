import { cva } from "cva";

export const button = cva({
  base: [
    "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium leading-6 text-foreground shadow-[0_0_16px_4px] shadow-primary ring-1 ring-primary transition-all duration-500",
    "hover:bg-primary hover:ring-primary",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  ],
  variants: {},
});
