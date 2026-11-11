import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { Badge, ButtonAnchor, Container, GridBackground, Reveal } from "@/components/ui";
import { pillars } from "@/data/services";
import { media } from "@/styles/media";

const HeroSection = styled.section`
    position: relative;
    isolation: isolate;
    overflow: hidden;
    margin-top: calc(var(--header-height) * -1);
    padding-top: calc(var(--header-height) + 5rem);
    padding-bottom: 1rem;

    ${media.md} {
        padding-top: calc(var(--header-height) + 8rem);
        padding-bottom: 2rem;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > .pillars {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`;

const Title = styled.h1`
    max-width: 15ch;
    margin-top: 1.75rem;
    font-size: clamp(2.5rem, 1.4rem + 5.4vw, 5.5rem);
    letter-spacing: -.055em;
    line-height: 1;

    em {
        font-style: normal;
        background: linear-gradient(100deg, var(--color-accent) 10%, var(--color-purple) 90%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
`;

const Subtitle = styled.p`
    max-width: 36rem;
    margin-top: 1.5rem;
    font-size: 1.0625rem;
    color: var(--color-text-2);

    ${media.md} {
        font-size: 1.1875rem;
    }
`;

const Actions = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: .75rem;
    margin-top: 2.5rem;
`;

const PillarList = styled.ul`
    display: grid;
    width: 100%;
    max-width: 48rem;
    margin-top: 4.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    background-color: color-mix(in srgb, var(--color-surface) 70%, transparent);
    backdrop-filter: blur(6px);

    ${media.sm} {
        grid-template-columns: repeat(3, 1fr);
    }

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .625rem;
        padding: 1rem 1.25rem;
        font-size: .9375rem;
        font-weight: 500;
        color: var(--color-text);
    }

    li + li {
        border-top: 1px solid var(--color-border);

        ${media.sm} {
            border-top: none;
            border-left: 1px solid var(--color-border);
        }
    }

    svg {
        flex-shrink: 0;
        width: 1.125rem;
        height: 1.125rem;
        color: var(--color-accent);
    }
`;

export function Hero() {
    return (
        <HeroSection aria-labelledby="hero-title">
            <GridBackground aria-hidden="true" />

            <Container>
                <Content>
                    <Reveal>
                        <Badge>Software · Social media · Marketing</Badge>
                    </Reveal>

                    <Reveal delay={80}>
                        <Title id="hero-title">
                            Tecnologia na <em>velocidade</em> que o seu negócio precisa.
                        </Title>
                    </Reveal>

                    <Reveal delay={160}>
                        <Subtitle>
                            A Lite Technology une desenvolvimento, design e criatividade para tirar ideias do papel e
                            fazer o seu negócio crescer online.
                        </Subtitle>
                    </Reveal>

                    <Reveal delay={240}>
                        <Actions>
                            <ButtonAnchor href="#contato" $size="lg">
                                Solicitar orçamento <FiArrowRight className="arrow" aria-hidden="true" />
                            </ButtonAnchor>
                            <ButtonAnchor href="#solucoes" $size="lg" $variant="secondary">
                                Ver soluções
                            </ButtonAnchor>
                        </Actions>
                    </Reveal>

                    <Reveal delay={320} className="pillars">
                        <PillarList aria-label="Nossos diferenciais">
                            {pillars.map(({ label, Icon }) => (
                                <li key={label}>
                                    <Icon aria-hidden="true" />
                                    {label}
                                </li>
                            ))}
                        </PillarList>
                    </Reveal>
                </Content>
            </Container>
        </HeroSection>
    );
}
