import styled from "styled-components";

/** Grade sutil de fundo com fade radial, usada atrás do hero. */
export const GridBackground = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
        linear-gradient(to right, var(--color-grid) 1px, transparent 1px),
        linear-gradient(to bottom, var(--color-grid) 1px, transparent 1px);
    background-size: 48px 48px;
    background-position: center top;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 35%, #000 40%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 35%, #000 40%, transparent 100%);

    &::after {
        content: "";
        position: absolute;
        top: -10%;
        left: 50%;
        width: min(900px, 120%);
        aspect-ratio: 2 / 1;
        transform: translateX(-50%);
        background: radial-gradient(
            closest-side,
            color-mix(in srgb, var(--color-accent) 22%, transparent),
            color-mix(in srgb, var(--color-purple) 8%, transparent) 60%,
            transparent
        );
        filter: blur(40px);
    }
`;
