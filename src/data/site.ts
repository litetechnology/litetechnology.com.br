import type { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const FORMSPREE_FORM_ID = "mzbqndwl";

export interface SocialLink {
    label: string;
    href: string;
    Icon: IconType;
    /** Texto curto exibido abaixo do nome do canal. */
    handle: string;
}

export const socialLinks = {
    whatsapp: {
        label: "WhatsApp",
        handle: "Resposta rápida",
        href: "https://wa.me/message/REEAHEE2K24EO1",
        Icon: FaWhatsapp,
    },
    instagram: {
        label: "Instagram",
        handle: "@litetechnology",
        href: "https://www.instagram.com/litetechnology/",
        Icon: FaInstagram,
    },
    discord: {
        label: "Discord",
        handle: "Comunidade",
        href: "https://discord.gg/JwPqa3a23X",
        Icon: FaDiscord,
    },
    github: {
        label: "GitHub",
        handle: "lite-technology",
        href: "https://github.com/lite-technology",
        Icon: FaGithub,
    },
} satisfies Record<string, SocialLink>;

export interface NavItem {
    id: string;
    label: string;
}

/** Seções da landing page que aparecem no menu. */
export const navItems: readonly NavItem[] = [
    { id: "servicos", label: "Serviços" },
    { id: "solucoes", label: "Soluções" },
    { id: "processo", label: "Processo" },
    { id: "contato", label: "Contato" },
];
