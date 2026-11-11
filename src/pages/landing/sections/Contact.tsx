import { useState, type FormEvent } from "react";
import styled, { keyframes } from "styled-components";
import { useForm } from "@formspree/react";
import { FiArrowRight, FiArrowUpRight, FiCheckCircle, FiLoader } from "react-icons/fi";
import { Button, Container, Eyebrow, Lead, Reveal, Section, SectionTitle, TextAreaField, TextField } from "@/components/ui";
import { FORMSPREE_FORM_ID, socialLinks } from "@/data/site";
import { media } from "@/styles/media";

const Layout = styled.div`
    display: grid;
    gap: 3rem;

    ${media.lg} {
        grid-template-columns: 1fr 1.05fr;
        gap: 5rem;
        align-items: start;
    }
`;

const Channels = styled.ul`
    display: grid;
    gap: .5rem;
    margin-top: 2.5rem;

    a {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .875rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background-color: var(--color-surface);
        transition:
            border-color var(--duration-fast) var(--ease-out),
            background-color var(--duration-fast) var(--ease-out);

        &:hover {
            border-color: var(--color-border-strong);
            background-color: var(--color-surface-2);

            .go {
                color: var(--color-text);
                transform: translate(2px, -2px);
            }
        }
    }

    .icon {
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: var(--radius-md);
        background-color: var(--color-accent-soft);
        color: var(--color-accent);
    }

    strong {
        display: block;
        font-size: .9375rem;
        font-weight: 550;
    }

    small {
        font-family: var(--font-mono);
        font-size: .75rem;
        color: var(--color-text-3);
    }

    .go {
        margin-left: auto;
        color: var(--color-text-3);
        transition:
            color var(--duration-fast) var(--ease-out),
            transform var(--duration-base) var(--ease-out);
    }
`;

const FormCard = styled.form`
    display: grid;
    gap: 1.25rem;
    padding: 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    background-color: var(--color-surface);
    box-shadow: 0 24px 48px -32px rgba(0, 0, 0, .45);

    ${media.sm} {
        padding: 2rem;
    }
`;

const Row = styled.div`
    display: grid;
    gap: 1.25rem;

    ${media.sm} {
        grid-template-columns: 1fr 1fr;
    }
`;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const Spinner = styled(FiLoader)`
    animation: ${spin} 1s linear infinite;
`;

const Status = styled.p<{ $tone: "success" | "error" }>`
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .875rem;
    color: ${({ $tone }) => ($tone === "success" ? "var(--color-success)" : "var(--color-error)")};
`;

const Note = styled.p`
    font-size: .75rem;
    text-align: center;
    color: var(--color-text-3);
`;

const contactChannels = [socialLinks.whatsapp, socialLinks.instagram, socialLinks.discord];

export function Contact() {
    const [state, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
    const [validated, setValidated] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            setValidated(true);
            form.querySelector<HTMLElement>(":invalid")?.focus();
            return;
        }

        await submitToFormspree(event);
        setValidated(false);
        form.reset();
    }

    const hasError = Boolean(state.errors && state.errors.getFormErrors().length + state.errors.getAllFieldErrors().length);

    return (
        <Section id="contato" aria-labelledby="contato-title">
            <Container>
                <Layout>
                    <Reveal>
                        <Eyebrow>Contato</Eyebrow>
                        <SectionTitle id="contato-title">Vamos tirar o seu projeto do papel.</SectionTitle>
                        <Lead>
                            Conte um pouco sobre o que você precisa. Respondemos rápido e, se fizer sentido, marcamos
                            uma conversa para entender os detalhes.
                        </Lead>

                        <Channels aria-label="Outros canais">
                            {contactChannels.map(({ label, handle, href, Icon }) => (
                                <li key={label}>
                                    <a href={href} target="_blank" rel="noreferrer noopener">
                                        <span className="icon">
                                            <Icon aria-hidden="true" />
                                        </span>
                                        <span>
                                            <strong>{label}</strong>
                                            <small>{handle}</small>
                                        </span>
                                        <FiArrowUpRight className="go" aria-hidden="true" />
                                    </a>
                                </li>
                            ))}
                        </Channels>
                    </Reveal>

                    <Reveal delay={120}>
                        <FormCard
                            onSubmit={handleSubmit}
                            noValidate
                            data-validated={validated}
                            aria-label="Formulário de contato"
                        >
                            <Row>
                                <TextField
                                    label="Nome"
                                    name="name"
                                    placeholder="Seu nome"
                                    autoComplete="name"
                                    required
                                    minLength={2}
                                    maxLength={60}
                                    pattern="^[a-zA-ZÀ-ÿ\s'.-]{2,60}$"
                                    errorMessage="Use de 2 a 60 caracteres, apenas letras."
                                />
                                <TextField
                                    label="Telefone"
                                    name="tel"
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="(31) 91234-5678"
                                    autoComplete="tel"
                                    pattern="^[0-9()+\s-]{10,20}$"
                                    errorMessage="Informe o número com DDD."
                                />
                            </Row>

                            <TextField
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="voce@empresa.com"
                                autoComplete="email"
                                required
                                errorMessage="Informe um e-mail válido."
                            />

                            <TextAreaField
                                label="Mensagem"
                                name="message"
                                placeholder="Como podemos te ajudar?"
                                required
                                minLength={10}
                                maxLength={1000}
                                rows={5}
                                errorMessage="Escreva de 10 a 1000 caracteres. Seja objetivo, entraremos em contato para os detalhes."
                            />

                            <Button type="submit" $size="lg" $block disabled={state.submitting}>
                                {state.submitting ? (
                                    <>
                                        <Spinner aria-hidden="true" /> Enviando…
                                    </>
                                ) : (
                                    <>
                                        Enviar mensagem <FiArrowRight className="arrow" aria-hidden="true" />
                                    </>
                                )}
                            </Button>

                            <div aria-live="polite">
                                {state.succeeded && !state.submitting && (
                                    <Status $tone="success">
                                        <FiCheckCircle aria-hidden="true" /> Mensagem enviada! Em breve entraremos em
                                        contato.
                                    </Status>
                                )}
                                {hasError && (
                                    <Status $tone="error">
                                        Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
                                    </Status>
                                )}
                            </div>

                            <Note>Seus dados são usados apenas para responder ao seu contato.</Note>
                        </FormCard>
                    </Reveal>
                </Layout>
            </Container>
        </Section>
    );
}
