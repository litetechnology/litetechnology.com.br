import styled, { keyframes } from "styled-components";
import type { ReactNode } from "react";

const pulse = keyframes`
    0%   { box-shadow: 0 0 0 0 var(--color-accent); }
    70%  { box-shadow: 0 0 0 6px transparent; }
    100% { box-shadow: 0 0 0 0 transparent; }
`;

const BadgeStyled = styled.span`
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    padding: .375rem .875rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    background-color: color-mix(in srgb, var(--color-surface) 80%, transparent);
    backdrop-filter: blur(6px);
    font-family: var(--font-mono);
    font-size: .75rem;
    font-weight: 500;
    color: var(--color-text-2);
`;

const Dot = styled.span`
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    background-color: var(--color-accent);
    animation: ${pulse} 2s infinite;
`;

export function Badge({ children }: { children: ReactNode }) {
    return (
        <BadgeStyled>
            <Dot aria-hidden="true" />
            {children}
        </BadgeStyled>
    );
}
