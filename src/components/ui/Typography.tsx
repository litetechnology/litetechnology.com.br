import styled from "styled-components";
import type { ReactNode } from "react";
import { media } from "@/styles/media";
import { Reveal } from "./Reveal";

/** Rótulo em fonte mono, caixa alta, usado acima dos títulos de seção. */
export const Eyebrow = styled.span`
    display: inline-block;
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: .75rem;
    font-weight: 500;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--color-accent);
`;

export const SectionTitle = styled.h2`
    font-size: clamp(2rem, 1.2rem + 3.2vw, 3.25rem);
    letter-spacing: -.04em;
`;

export const Lead = styled.p`
    max-width: 38rem;
    margin-top: 1.25rem;
    font-size: 1.0625rem;
    color: var(--color-text-2);

    ${media.md} {
        font-size: 1.125rem;
    }
`;

export const Muted = styled.span`
    color: var(--color-text-3);
`;

const HeadingWrapper = styled.header<{ $center?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: ${({ $center }) => ($center ? "center" : "flex-start")};
    margin-bottom: 3rem;
    text-align: ${({ $center }) => ($center ? "center" : "left")};

    ${Lead} {
        margin-inline: ${({ $center }) => ($center ? "auto" : "0")};
    }

    ${media.md} {
        margin-bottom: 4rem;
    }
`;

interface SectionHeadingProps {
    eyebrow: string;
    title: ReactNode;
    description?: ReactNode;
    center?: boolean;
    id?: string;
}

export function SectionHeading({ eyebrow, title, description, center, id }: SectionHeadingProps) {
    return (
        <Reveal>
            <HeadingWrapper $center={center}>
                <Eyebrow>{eyebrow}</Eyebrow>
                <SectionTitle id={id}>{title}</SectionTitle>
                {description && <Lead>{description}</Lead>}
            </HeadingWrapper>
        </Reveal>
    );
}
