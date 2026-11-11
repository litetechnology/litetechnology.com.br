import styled from "styled-components";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/theme/ThemeProvider";

const ToggleButton = styled.button`
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
    width: 2.25rem;
    height: 2.25rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-2);
    transition:
        color var(--duration-fast) var(--ease-out),
        border-color var(--duration-fast) var(--ease-out),
        background-color var(--duration-fast) var(--ease-out);

    &:hover {
        color: var(--color-text);
        border-color: var(--color-border-strong);
        background-color: var(--color-surface-2);
    }

    svg {
        width: 1rem;
        height: 1rem;
    }
`;

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const nextLabel = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

    return (
        <ToggleButton type="button" onClick={toggleTheme} aria-label={nextLabel} title={nextLabel}>
            {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </ToggleButton>
    );
}
