import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type ThemeName = "light" | "dark";

interface ThemeContextValue {
    theme: ThemeName;
    toggleTheme: () => void;
}

export const THEME_STORAGE_KEY = "litetechnology_theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function isThemeName(value: unknown): value is ThemeName {
    return value === "light" || value === "dark";
}

/** Lê o tema salvo; aceita também o formato antigo (objeto JSON com `title`). */
function readStoredTheme(): ThemeName | null {
    try {
        const raw = localStorage.getItem(THEME_STORAGE_KEY);
        if (!raw) return null;
        if (isThemeName(raw)) return raw;

        const parsed: unknown = JSON.parse(raw);
        if (isThemeName(parsed)) return parsed;
        if (parsed && typeof parsed === "object" && "title" in parsed && isThemeName(parsed.title)) {
            return parsed.title;
        }
    } catch {
        // storage indisponível ou valor inválido
    }
    return null;
}

function getInitialTheme(): ThemeName {
    const fromDom = document.documentElement.dataset.theme;
    if (isThemeName(fromDom)) return fromDom;

    return readStoredTheme() ?? (window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch {
            // ignora: o tema continua funcionando durante a sessão
        }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
    }, []);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme deve ser usado dentro de <ThemeProvider>.");
    }
    return context;
}
