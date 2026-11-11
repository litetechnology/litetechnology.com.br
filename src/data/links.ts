import type { IconType } from "react-icons";
import { FiBriefcase, FiGlobe, FiUsers } from "react-icons/fi";
import { socialLinks } from "./site";

export interface LinkItem {
    label: string;
    description: string;
    href: string;
    Icon: IconType;
    /** `true` para links internos do site (usam o roteador). */
    internal?: boolean;
}

export const linkItems: readonly LinkItem[] = [
    {
        label: "Fale com a gente",
        description: "Contato direto pelo WhatsApp",
        href: socialLinks.whatsapp.href,
        Icon: socialLinks.whatsapp.Icon,
    },
    {
        label: "Site",
        description: "Conheça nossas soluções",
        href: "/",
        Icon: FiGlobe,
        internal: true,
    },
    {
        label: "Comunidade no Discord",
        description: "Converse com o time e outros devs",
        href: socialLinks.discord.href,
        Icon: socialLinks.discord.Icon,
    },
    {
        label: "Instagram",
        description: socialLinks.instagram.handle,
        href: socialLinks.instagram.href,
        Icon: socialLinks.instagram.Icon,
    },
    {
        label: "Seja um parceiro",
        description: "Formulário de parceria",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScnl2kt5qPR4tbVyCqVqtmQdNY-l88deZM_Jz8gja1Mo6CdeQ/viewform?usp=sf_link",
        Icon: FiUsers,
    },
    {
        label: "É um prestador de serviço?",
        description: "Cadastre-se para trabalhar com a gente",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSebZDvoFF8KQitUrUKnBUr312ZLG-IcPHFotH7Po28BZiqU6A/viewform?usp=sf_link",
        Icon: FiBriefcase,
    },
    {
        label: "GitHub",
        description: socialLinks.github.handle,
        href: socialLinks.github.href,
        Icon: socialLinks.github.Icon,
    },
];
