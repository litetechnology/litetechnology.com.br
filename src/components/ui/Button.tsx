import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
    $variant?: ButtonVariant;
    $size?: ButtonSize;
    $block?: boolean;
}

const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
    sm: css`
        height: 2.25rem;
        padding-inline: .875rem;
        font-size: .875rem;
    `,
    md: css`
        height: 2.75rem;
        padding-inline: 1.25rem;
        font-size: .9375rem;
    `,
    lg: css`
        height: 3.25rem;
        padding-inline: 1.5rem;
        font-size: 1rem;
    `,
};

const variants: Record<ButtonVariant, ReturnType<typeof css>> = {
    primary: css`
        color: var(--color-on-accent);
        background-color: var(--color-accent);
        border-color: var(--color-accent);
        box-shadow: 0 1px 0 rgba(255, 255, 255, .12) inset, 0 8px 24px -12px var(--color-accent);

        &:hover:not(:disabled) {
            background-color: var(--color-accent-hover);
            border-color: var(--color-accent-hover);
        }
    `,
    secondary: css`
        color: var(--color-text);
        background-color: var(--color-surface);
        border-color: var(--color-border);

        &:hover:not(:disabled) {
            border-color: var(--color-border-strong);
            background-color: var(--color-surface-2);
        }
    `,
    ghost: css`
        color: var(--color-text-2);
        background-color: transparent;
        border-color: transparent;

        &:hover:not(:disabled) {
            color: var(--color-text);
            background-color: var(--color-surface-2);
        }
    `,
};

const buttonStyles = css<ButtonStyleProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: ${({ $block }) => ($block ? "100%" : "auto")};
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    font-weight: 550;
    letter-spacing: -.01em;
    white-space: nowrap;
    transition:
        background-color var(--duration-fast) var(--ease-out),
        border-color var(--duration-fast) var(--ease-out),
        color var(--duration-fast) var(--ease-out),
        transform var(--duration-fast) var(--ease-out);

    ${({ $size = "md" }) => sizes[$size]}
    ${({ $variant = "primary" }) => variants[$variant]}

    svg {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
        transition: transform var(--duration-base) var(--ease-out);
    }

    &:hover:not(:disabled) svg.arrow {
        transform: translateX(3px);
    }

    &:active:not(:disabled) {
        transform: translateY(1px);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: .6;
    }
`;

export const Button = styled.button<ButtonStyleProps>`${buttonStyles}`;
export const ButtonAnchor = styled.a<ButtonStyleProps>`${buttonStyles}`;
export const ButtonLink = styled(Link)<ButtonStyleProps>`${buttonStyles}`;
