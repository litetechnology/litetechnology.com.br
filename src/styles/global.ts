import { createGlobalStyle } from "styled-components";

/**
 * Tokens de design expostos como CSS custom properties.
 * O tema é trocado pelo atributo `data-theme` no <html>, o que evita
 * re-renderizar a árvore inteira e permite aplicar o tema antes do React montar.
 */
export const GlobalStyle = createGlobalStyle`
:root {
    --font-sans: "Geist", system-ui, -apple-system, "Segoe UI", sans-serif;
    --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;

    --radius-sm: .375rem;
    --radius-md: .5rem;
    --radius-lg: .75rem;
    --radius-xl: 1rem;
    --radius-full: 9999px;

    --ease-out: cubic-bezier(.2, 0, 0, 1);
    --duration-fast: 150ms;
    --duration-base: 250ms;

    --container: 1180px;
    --gutter: 1.5rem;
    --header-height: 4rem;

    color-scheme: dark;
    --color-bg: #0b0c0e;
    --color-surface: #121417;
    --color-surface-2: #1a1d21;
    --color-border: #23272d;
    --color-border-strong: #353a42;
    --color-text: #f2f1ee;
    --color-text-2: #9aa0a9;
    --color-text-3: #6b717a;
    --color-accent: #3d6bff;
    --color-accent-hover: #5b83ff;
    --color-accent-soft: rgba(61, 107, 255, .12);
    --color-on-accent: #ffffff;
    --color-purple: #9546fa;
    --color-success: #4cc38a;
    --color-error: #ff6b6b;
    --color-grid: rgba(255, 255, 255, .045);
}

:root[data-theme="light"] {
    color-scheme: light;
    --color-bg: #fcfcfb;
    --color-surface: #ffffff;
    --color-surface-2: #f4f4f2;
    --color-border: #e3e5e8;
    --color-border-strong: #c9cdd3;
    --color-text: #16181b;
    --color-text-2: #5e646e;
    --color-text-3: #8a9099;
    --color-accent: #0047ff;
    --color-accent-hover: #0039cc;
    --color-accent-soft: rgba(0, 71, 255, .08);
    --color-on-accent: #ffffff;
    --color-success: #1a7548;
    --color-error: #c42f3a;
    --color-grid: rgba(22, 24, 27, .05);
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: calc(var(--header-height) + 1.5rem);
    -webkit-text-size-adjust: 100%;
}

body {
    min-height: 100vh;
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-bg);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    transition: background-color var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out);
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 650;
    line-height: 1.1;
    letter-spacing: -.03em;
    text-wrap: balance;
}

p {
    text-wrap: pretty;
}

img, svg {
    display: block;
    max-width: 100%;
}

ul, ol {
    list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

button, input, textarea, select {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
}

button {
    cursor: pointer;
}

:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
}

::selection {
    color: var(--color-on-accent);
    background-color: var(--color-accent);
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background-color: var(--color-bg);
}

::-webkit-scrollbar-thumb {
    border: 2px solid var(--color-bg);
    border-radius: var(--radius-full);
    background-color: var(--color-border-strong);
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    *, *::before, *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
`;
