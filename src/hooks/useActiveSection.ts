import { useEffect, useState } from "react";

/** Observa as seções pelo `id` e retorna a que está ocupando o centro da tela. */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: "-45% 0px -50% 0px" },
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [ids]);

    return active;
}
