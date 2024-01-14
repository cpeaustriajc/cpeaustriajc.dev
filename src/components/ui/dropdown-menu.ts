import { cva } from "cva";

export const dropdownMenuItem = cva({
  base: [
    "inline-flex h-9 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
    "focus-visible:ring-ring  focus-visible:outline-none focus-visible:ring-1",
    "hover:bg-primary",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
});
