import styled from "styled-components";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { processSteps } from "@/data/services";
import { media } from "@/styles/media";

const Steps = styled.ol`
    display: grid;
    gap: 2rem;
    counter-reset: step;

    ${media.md} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.lg} {
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
    }
`;

const Step = styled.div`
    position: relative;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);

    &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        width: 2.5rem;
        height: 1px;
        background-color: var(--color-accent);
    }

    span {
        font-family: var(--font-mono);
        font-size: .75rem;
        color: var(--color-text-3);
    }

    h3 {
        margin-top: .75rem;
        font-size: 1.25rem;
        letter-spacing: -.02em;
    }

    p {
        margin-top: .5rem;
        font-size: .9375rem;
        color: var(--color-text-2);
    }
`;

export function Process() {
    return (
        <Section id="processo" aria-labelledby="processo-title">
            <Container>
                <SectionHeading
                    id="processo-title"
                    eyebrow="Como trabalhamos"
                    title={
                        <>
                            Do primeiro contato
                            <br />
                            à entrega.
                        </>
                    }
                />

                <Steps>
                    {processSteps.map((step, index) => (
                        <Reveal as="li" key={step.title} delay={index * 90}>
                            <Step>
                                <span>Etapa {String(index + 1).padStart(2, "0")}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </Step>
                        </Reveal>
                    ))}
                </Steps>
            </Container>
        </Section>
    );
}
