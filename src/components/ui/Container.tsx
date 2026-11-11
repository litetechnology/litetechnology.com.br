import styled from "styled-components";
import { media } from "@/styles/media";

export const Container = styled.div`
    width: 100%;
    max-width: calc(var(--container) + var(--gutter) * 2);
    margin-inline: auto;
    padding-inline: 1rem;

    ${media.sm} {
        padding-inline: var(--gutter);
    }
`;

export const Section = styled.section`
    position: relative;
    padding-block: 5rem;

    ${media.md} {
        padding-block: 7.5rem;
    }
`;
