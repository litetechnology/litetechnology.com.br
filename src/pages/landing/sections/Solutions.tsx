import { useId, useState, type KeyboardEvent } from "react";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { solutionCategories } from "@/data/services";
import { media } from "@/styles/media";

const SolutionsSection = styled(Section)`
    border-block: 1px solid var(--color-border);
    background-color: var(--color-surface);
`;

const Tabs = styled.div`
    display: inline-flex;
    gap: .25rem;
    margin-bottom: 1.5rem;
    padding: .25rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: var(--color-bg);
`;

const Tab = styled.button<{ $active: boolean }>`
    padding: .5rem 1rem;
    border-radius: var(--radius-md);
    font-size: .875rem;
    font-weight: 550;
    color: ${({ $active }) => ($active ? "var(--color-text)" : "var(--color-text-2)")};
    background-color: ${({ $active }) => ($active ? "var(--color-surface-2)" : "transparent")};
    box-shadow: ${({ $active }) => ($active ? "0 0 0 1px var(--color-border)" : "none")};
    transition:
        color var(--duration-fast) var(--ease-out),
        background-color var(--duration-fast) var(--ease-out);

    &:hover {
        color: var(--color-text);
    }

    span {
        margin-left: .375rem;
        font-family: var(--font-mono);
        font-size: .75rem;
        color: var(--color-text-3);
    }
`;

const List = styled.ul`
    display: grid;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    background-color: var(--color-bg);
    overflow: hidden;

    ${media.md} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.25rem;
    padding: 1.75rem;
    border-bottom: 1px solid var(--color-border);
    transition: background-color var(--duration-base) var(--ease-out);

    &:hover {
        background-color: var(--color-surface);
    }

    ${media.md} {
        padding: 2rem;

        &:nth-child(odd) {
            border-right: 1px solid var(--color-border);
        }
    }

    /* remove a borda inferior da última linha (1 ou 2 colunas) */
    &:last-child {
        border-bottom: none;
    }

    ${media.md} {
        &:nth-last-child(2):nth-child(odd) {
            border-bottom: none;
        }
    }

    span {
        font-family: var(--font-mono);
        font-size: .8125rem;
        line-height: 1.9;
        color: var(--color-accent);
    }

    h3 {
        font-size: 1.1875rem;
        letter-spacing: -.02em;
    }

    p {
        margin-top: .5rem;
        font-size: .9375rem;
        color: var(--color-text-2);
    }
`;

const Cta = styled.a`
    display: inline-flex;
    align-items: center;
    gap: .375rem;
    margin-top: 2rem;
    font-weight: 550;
    color: var(--color-accent);

    svg {
        transition: transform var(--duration-base) var(--ease-out);
    }

    &:hover svg {
        transform: translate(2px, -2px);
    }
`;

export function Solutions() {
    const [activeId, setActiveId] = useState(solutionCategories[0].id);
    const baseId = useId();
    const active = solutionCategories.find((category) => category.id === activeId) ?? solutionCategories[0];

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        const current = solutionCategories.findIndex((category) => category.id === activeId);
        const step = event.key === "ArrowRight" ? 1 : -1;
        const next = solutionCategories[(current + step + solutionCategories.length) % solutionCategories.length];

        setActiveId(next.id);
        document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
    };

    return (
        <SolutionsSection id="solucoes" aria-labelledby="solucoes-title">
            <Container>
                <SectionHeading
                    id="solucoes-title"
                    eyebrow="Soluções"
                    title="Do site ao sistema completo."
                    description="Escolha por onde começar. Cada projeto é adaptado à realidade do seu negócio."
                />

                <Reveal>
                    <Tabs role="tablist" aria-label="Categorias de soluções" onKeyDown={handleKeyDown}>
                        {solutionCategories.map((category) => {
                            const selected = category.id === activeId;
                            return (
                                <Tab
                                    key={category.id}
                                    id={`${baseId}-tab-${category.id}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls={`${baseId}-panel`}
                                    tabIndex={selected ? 0 : -1}
                                    $active={selected}
                                    onClick={() => setActiveId(category.id)}
                                >
                                    {category.label}
                                    <span>{category.solutions.length}</span>
                                </Tab>
                            );
                        })}
                    </Tabs>

                    <List
                        id={`${baseId}-panel`}
                        role="tabpanel"
                        aria-labelledby={`${baseId}-tab-${active.id}`}
                    >
                        {active.solutions.map((solution, index) => (
                            <Item key={solution.title}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h3>{solution.title}</h3>
                                    <p>{solution.description}</p>
                                </div>
                            </Item>
                        ))}
                    </List>

                    <Cta href="#contato">
                        Não encontrou o que precisa? Fale com a gente <FiArrowUpRight aria-hidden="true" />
                    </Cta>
                </Reveal>
            </Container>
        </SolutionsSection>
    );
}
