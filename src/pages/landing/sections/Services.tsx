import styled from "styled-components";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { serviceAreas, type ServiceArea } from "@/data/services";
import { media } from "@/styles/media";

const Grid = styled.div`
    display: grid;
    gap: 1rem;

    ${media.lg} {
        grid-template-columns: repeat(3, 1fr);
    }

    > div {
        display: flex;
    }
`;

const Card = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.75rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    background-color: var(--color-surface);
    overflow: hidden;
    transition:
        border-color var(--duration-base) var(--ease-out),
        transform var(--duration-base) var(--ease-out);

    &::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
        opacity: 0;
        transition: opacity var(--duration-base) var(--ease-out);
    }

    &:hover {
        border-color: var(--color-border-strong);
        transform: translateY(-2px);

        &::before {
            opacity: 1;
        }
    }

    ${media.md} {
        padding: 2rem;
    }
`;

const Index = styled.span`
    font-family: var(--font-mono);
    font-size: .75rem;
    color: var(--color-text-3);
`;

const Title = styled.h3`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    letter-spacing: -.03em;
`;

const Description = styled.p`
    margin-top: .75rem;
    color: var(--color-text-2);
`;

const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.25rem;
    margin-top: auto;
    padding-top: 2.5rem;
`;

const IconRow = styled.ul`
    display: flex;
    gap: .5rem;

    li {
        display: grid;
        place-items: center;
        width: 2.75rem;
        height: 2.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background-color: var(--color-surface-2);
        color: var(--color-text);
    }

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

const Highlight = styled.p`
    text-align: right;

    strong {
        display: block;
        font-size: 1.75rem;
        font-weight: 650;
        letter-spacing: -.04em;
        line-height: 1;
        color: var(--color-accent);
    }

    span {
        font-family: var(--font-mono);
        font-size: .75rem;
        color: var(--color-text-3);
    }
`;

function ServiceCard({ area, index }: { area: ServiceArea; index: number }) {
    return (
        <Card>
            <Index>{String(index + 1).padStart(2, "0")}</Index>
            <Title>{area.title}</Title>
            <Description>{area.description}</Description>

            <Footer>
                <IconRow aria-label="Plataformas">
                    {area.icons.map(({ label, Icon }) => (
                        <li key={label} title={label}>
                            <Icon />
                        </li>
                    ))}
                </IconRow>

                {area.highlight && (
                    <Highlight>
                        <strong>{area.highlight.value}</strong>
                        <span>{area.highlight.label}</span>
                    </Highlight>
                )}
            </Footer>
        </Card>
    );
}

export function Services() {
    return (
        <Section id="servicos" aria-labelledby="servicos-title">
            <Container>
                <SectionHeading
                    id="servicos-title"
                    eyebrow="O que fazemos"
                    title={
                        <>
                            Três frentes.
                            <br />
                            Um só time.
                        </>
                    }
                    description="Do código à campanha: cuidamos de tudo o que a sua marca precisa para crescer no digital, com um time que conversa entre si."
                />

                <Grid>
                    {serviceAreas.map((area, index) => (
                        <Reveal key={area.title} delay={index * 90}>
                            <ServiceCard area={area} index={index} />
                        </Reveal>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
}
