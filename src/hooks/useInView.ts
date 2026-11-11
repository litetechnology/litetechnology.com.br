import { useEffect, useRef, useState } from "react";

/**
 * Retorna `true` assim que o elemento entra na viewport (uma única vez).
 * Sem suporte a IntersectionObserver, o elemento é considerado visível.
 */
const DEFAULT_OPTIONS: IntersectionObserverInit = { rootMargin: "0px 0px -10% 0px" };

export function useInView<T extends Element>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry?.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, options);

        observer.observe(element);
        return () => observer.disconnect();
    }, [options]);

    return { ref, inView };
}
