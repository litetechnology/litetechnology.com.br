import { useId, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

const Label = styled.label`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .5rem;
    font-size: .875rem;
    font-weight: 550;

    small {
        font-family: var(--font-mono);
        font-size: .6875rem;
        font-weight: 400;
        color: var(--color-text-3);
    }
`;

const controlStyles = css`
    width: 100%;
    padding: .75rem .875rem;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    background-color: var(--color-bg);
    font-size: .9375rem;
    transition:
        border-color var(--duration-fast) var(--ease-out),
        box-shadow var(--duration-fast) var(--ease-out);

    &::placeholder {
        color: var(--color-text-3);
    }

    &:hover {
        border-color: var(--color-border-strong);
    }

    &:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px var(--color-accent-soft);
    }

    /* O erro só aparece depois de uma tentativa de envio. */
    form[data-validated="true"] &:invalid {
        border-color: var(--color-error);
    }
`;

const Input = styled.input`${controlStyles}`;

const Textarea = styled.textarea`
    ${controlStyles}
    min-height: 8rem;
    max-height: 22rem;
    resize: vertical;
`;

const Feedback = styled.p`
    display: none;
    font-size: .8125rem;
    color: var(--color-error);

    form[data-validated="true"] :invalid ~ & {
        display: block;
    }
`;

interface FieldShellProps {
    id: string;
    label: string;
    required?: boolean;
    errorMessage?: string;
    children: ReactNode;
}

function FieldShell({ id, label, required, errorMessage = "Verifique este campo.", children }: FieldShellProps) {
    return (
        <FieldWrapper>
            <Label htmlFor={id}>
                {label}
                {!required && <small>opcional</small>}
            </Label>
            {children}
            <Feedback id={`${id}-error`}>{errorMessage}</Feedback>
        </FieldWrapper>
    );
}

interface CommonProps {
    label: string;
    name: string;
    /** Mensagem exibida quando o campo é inválido. */
    errorMessage?: string;
}

export type TextFieldProps = CommonProps & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id">;

export function TextField({ label, errorMessage, ...inputProps }: TextFieldProps) {
    const id = useId();

    return (
        <FieldShell id={id} label={label} required={inputProps.required} errorMessage={errorMessage}>
            <Input id={id} aria-describedby={`${id}-error`} {...inputProps} />
        </FieldShell>
    );
}

export type TextAreaFieldProps = CommonProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id">;

export function TextAreaField({ label, errorMessage, ...textareaProps }: TextAreaFieldProps) {
    const id = useId();

    return (
        <FieldShell id={id} label={label} required={textareaProps.required} errorMessage={errorMessage}>
            <Textarea id={id} aria-describedby={`${id}-error`} {...textareaProps} />
        </FieldShell>
    );
}
