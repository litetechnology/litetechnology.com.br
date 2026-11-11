import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonLink, GridBackground, LogoLink, ThemeToggle } from "@/components/ui";

interface ErrorInfo {
    title: string;
    description: string;
}

const errors: Record<number, ErrorInfo> = {
    400: { title: "Requisição inválida", description: "Os dados enviados não puderam ser processados." },
    404: { title: "Página não encontrada", description: "O endereço que você tentou acessar não existe ou foi movido." },
    500: { title: "Algo deu errado", description: "Ocorreu um erro inesperado. Tente novamente em instantes." },
};

const Page = styled.div`
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
`;

const Top = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
`;

const Main = styled.main`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem 6rem;
    text-align: center;
`;

const Code = styled.p`
    font-family: var(--font-mono);
    font-size: clamp(4.5rem, 3rem + 10vw, 9rem);
    font-weight: 500;
    line-height: 1;
    letter-spacing: -.06em;
    background: linear-gradient(180deg, var(--color-text) 20%, var(--color-text-3));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

const Title = styled.h1`
    margin-top: 1.5rem;
    font-size: clamp(1.5rem, 1rem + 2vw, 2.25rem);
`;

const Description = styled.p`
    max-width: 28rem;
    margin-top: .75rem;
    margin-bottom: 2rem;
    color: var(--color-text-2);
`;

export default function ErrorPage({ code }: { code?: number }) {
    const params = useParams<{ code: string }>();
    const parsed = Number.parseInt(params.code ?? "", 10);
    const status = Number.isNaN(parsed) ? (code ?? 500) : parsed;
    const info = errors[status] ?? errors[500];

    return (
        <Page>
            <GridBackground aria-hidden="true" />

            <Top>
                <LogoLink />
                <ThemeToggle />
            </Top>

            <Main>
                <Code>{status}</Code>
                <Title>{info.title}</Title>
                <Description>{info.description}</Description>
                <ButtonLink to="/" $variant="secondary">
                    <FiArrowLeft aria-hidden="true" /> Voltar ao início
                </ButtonLink>
            </Main>
        </Page>
    );
}
