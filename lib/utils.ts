import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const CANONICAL_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://jaycedotbin.me/'
    : 'http://localhost:3000'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
