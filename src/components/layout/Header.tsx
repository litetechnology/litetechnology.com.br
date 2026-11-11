import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { ButtonAnchor, Container, LogoLink, ThemeToggle } from "@/components/ui";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navItems } from "@/data/site";
import { media } from "@/styles/media";

const HeaderBar = styled.header<{ $scrolled: boolean }>`
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? "var(--color-border)" : "transparent")};
    background-color: ${({ $scrolled }) =>
        $scrolled ? "color-mix(in srgb, var(--color-bg) 78%, transparent)" : "transparent"};
    backdrop-filter: ${({ $scrolled }) => ($scrolled ? "saturate(180%) blur(12px)" : "none")};
    transition:
        background-color var(--duration-base) var(--ease-out),
        border-color var(--duration-base) var(--ease-out);
`;

const Inner = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    height: var(--header-height);
`;

const Nav = styled.nav`
    display: none;

    ${media.md} {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    ul {
        display: flex;
        gap: .25rem;
    }
`;

const NavLink = styled.a<{ $active: boolean }>`
    display: block;
    padding: .375rem .75rem;
    border-radius: var(--radius-md);
    font-size: .875rem;
    font-weight: 500;
    color: ${({ $active }) => ($active ? "var(--color-text)" : "var(--color-text-2)")};
    background-color: ${({ $active }) => ($active ? "var(--color-surface-2)" : "transparent")};
    transition:
        color var(--duration-fast) var(--ease-out),
        background-color var(--duration-fast) var(--ease-out);

    &:hover {
        color: var(--color-text);
    }
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

const sectionIds = navItems.map((item) => item.id);

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const active = useActiveSection(sectionIds);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <HeaderBar $scrolled={scrolled}>
            <Inner>
                <LogoLink />

                <Nav aria-label="Seções">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    href={`#${item.id}`}
                                    $active={active === item.id}
                                    aria-current={active === item.id ? "true" : undefined}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </Nav>

                <Actions>
                    <ButtonAnchor href="#contato" $size="sm">
                        Orçamento <FiArrowRight className="arrow" aria-hidden="true" />
                    </ButtonAnchor>
                    <ThemeToggle />
                </Actions>
            </Inner>
        </HeaderBar>
    );
}
