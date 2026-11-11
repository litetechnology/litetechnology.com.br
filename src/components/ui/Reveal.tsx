import styled from "styled-components";
import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

const RevealWrapper = styled.div<{ $visible: boolean; $delay: number }>`
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) => ($visible ? "none" : "translateY(16px)")};
    transition:
        opacity 600ms var(--ease-out) ${({ $delay }) => $delay}ms,
        transform 600ms var(--ease-out) ${({ $delay }) => $delay}ms;

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
    }
`;

interface RevealProps {
    children: ReactNode;
    /** Atraso da animação em milissegundos. */
    delay?: number;
    className?: string;
    /** Elemento renderizado (ex.: `li` dentro de listas). */
    as?: "div" | "li";
}

/** Faz o conteúdo surgir suavemente quando entra na tela. */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <RevealWrapper ref={ref} as={as} $visible={inView} $delay={delay} className={className}>
            {children}
        </RevealWrapper>
    );
}
