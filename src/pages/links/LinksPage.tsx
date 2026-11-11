import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { GridBackground, LogoMark, Reveal, ThemeToggle } from "@/components/ui";
import { linkItems, type LinkItem } from "@/data/links";

const Page = styled.main`
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    padding: 4rem 1rem 3rem;
    overflow: hidden;
`;

const Column = styled.div`
    width: 100%;
    max-width: 32rem;
    margin-inline: auto;
`;

const Profile = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        margin-top: 1.25rem;
        font-size: 1.75rem;
        letter-spacing: -.04em;
    }

    p {
        margin-top: .375rem;
        color: var(--color-text-2);
    }
`;

const Avatar = styled(Link)`
    display: grid;
    place-items: center;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: var(--radius-xl);
    background: linear-gradient(140deg, var(--color-accent), var(--color-purple));
    color: #fff;
    box-shadow: 0 16px 40px -16px var(--color-accent);
    transition: transform var(--duration-base) var(--ease-out);

    svg {
        width: 3.5rem;
        height: auto;
    }

    &:hover {
        transform: rotate(-4deg) scale(1.04);
    }
`;

const List = styled.ul`
    display: grid;
    gap: .625rem;
    margin-top: 2.5rem;
`;

const itemStyles = `
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .875rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    background-color: color-mix(in srgb, var(--color-surface) 85%, transparent);
    backdrop-filter: blur(6px);
    transition:
        border-color var(--duration-fast) var(--ease-out),
        background-color var(--duration-fast) var(--ease-out),
        transform var(--duration-fast) var(--ease-out);

    &:hover {
        border-color: var(--color-border-strong);
        background-color: var(--color-surface-2);
        transform: translateY(-1px);

        .go {
            color: var(--color-text);
            transform: translate(2px, -2px);
        }
    }

    .icon {
        display: grid;
        place-items: center;
        flex-shrink: 0;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--radius-md);
        background-color: var(--color-accent-soft);
        color: var(--color-accent);
    }

    strong {
        display: block;
        font-weight: 550;
    }

    small {
        font-size: .8125rem;
        color: var(--color-text-3);
    }

    .go {
        flex-shrink: 0;
        margin-left: auto;
        color: var(--color-text-3);
        transition: color var(--duration-fast) var(--ease-out), transform var(--duration-base) var(--ease-out);
    }
`;

const ExternalItem = styled.a`${itemStyles}`;
const InternalItem = styled(Link)`${itemStyles}`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    font-size: .8125rem;
    color: var(--color-text-3);
`;

function LinkContent({ label, description, Icon }: LinkItem) {
    return (
        <>
            <span className="icon">
                <Icon aria-hidden="true" />
            </span>
            <span>
                <strong>{label}</strong>
                <small>{description}</small>
            </span>
            <FiArrowUpRight className="go" aria-hidden="true" />
        </>
    );
}

export default function LinksPage() {
    return (
        <Page>
            <GridBackground aria-hidden="true" />

            <Column>
                <Reveal>
                    <Profile>
                        <Avatar to="/" aria-label="Ir para o site">
                            <LogoMark />
                        </Avatar>
                        <h1>Lite Technology</h1>
                        <p>A inovação na velocidade que você precisa.</p>
                    </Profile>
                </Reveal>

                <List>
                    {linkItems.map((item, index) => (
                        <Reveal as="li" key={item.label} delay={60 + index * 50}>
                            {item.internal ? (
                                <InternalItem to={item.href}>
                                    <LinkContent {...item} />
                                </InternalItem>
                            ) : (
                                <ExternalItem href={item.href} target="_blank" rel="noreferrer noopener">
                                    <LinkContent {...item} />
                                </ExternalItem>
                            )}
                        </Reveal>
                    ))}
                </List>

                <Footer>
                    <Link to="/">© {new Date().getFullYear()} Lite Technology</Link>
                    <ThemeToggle />
                </Footer>
            </Column>
        </Page>
    );
}
