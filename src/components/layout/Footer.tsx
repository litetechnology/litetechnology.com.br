import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, LogoLettering, ThemeToggle } from "@/components/ui";
import { navItems, socialLinks } from "@/data/site";
import { media } from "@/styles/media";

const FooterStyled = styled.footer`
    border-top: 1px solid var(--color-border);
    background-color: var(--color-surface);
`;

const Top = styled.div`
    display: grid;
    gap: 2.5rem;
    padding-block: 3.5rem;

    ${media.md} {
        grid-template-columns: 1.4fr 1fr 1fr;
    }
`;

const Brand = styled.div`
    svg {
        width: 5rem;
        height: auto;
        margin-bottom: 1rem;
        color: var(--color-text);
    }

    p {
        max-width: 22rem;
        font-size: .9375rem;
        color: var(--color-text-2);
    }
`;

const Column = styled.div`
    h2 {
        margin-bottom: 1rem;
        font-family: var(--font-mono);
        font-size: .75rem;
        font-weight: 500;
        letter-spacing: .12em;
        text-transform: uppercase;
        color: var(--color-text-3);
    }

    ul {
        display: grid;
        gap: .625rem;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: .5rem;
        font-size: .9375rem;
        color: var(--color-text-2);
        transition: color var(--duration-fast) var(--ease-out);

        &:hover {
            color: var(--color-text);
        }
    }
`;

const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 1.5rem;
    border-top: 1px solid var(--color-border);
    font-size: .8125rem;
    color: var(--color-text-3);
`;

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <FooterStyled>
            <Container>
                <Top>
                    <Brand>
                        <LogoLettering />
                        <p>Desenvolvimento, design e criatividade para o seu negócio crescer.</p>
                    </Brand>

                    <Column>
                        <h2>Navegação</h2>
                        <ul>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`/#${item.id}`}>{item.label}</a>
                                </li>
                            ))}
                            <li>
                                <Link to="/links">Links</Link>
                            </li>
                        </ul>
                    </Column>

                    <Column>
                        <h2>Redes</h2>
                        <ul>
                            {Object.values(socialLinks).map(({ label, href, Icon }) => (
                                <li key={label}>
                                    <a href={href} target="_blank" rel="noreferrer noopener">
                                        <Icon aria-hidden="true" /> {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Column>
                </Top>

                <Bottom>
                    <span>© {year} Lite Technology. Todos os direitos reservados.</span>
                    <ThemeToggle />
                </Bottom>
            </Container>
        </FooterStyled>
    );
}
