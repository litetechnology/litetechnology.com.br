export const breakpoints = {
    sm: 560,
    md: 768,
    lg: 1024,
} as const;

/** Media queries mobile-first: `${media.md} { ... }` aplica a partir de 768px. */
export const media = {
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
} as const;
