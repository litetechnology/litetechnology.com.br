import type { ComponentType, SVGProps } from "react";
import type { IconType } from "react-icons";
import { FiTarget, FiTrendingUp, FiZap } from "react-icons/fi";
import {
    FacebookBrand,
    GoogleAdsBrand,
    InstagramBrand,
    IotIconSvg,
    ServerIconSvg,
    TikTokBrand,
    WebIconSvg,
    WhatsAppBrand,
    XTwitterBrand,
} from "@/components/icons";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface Pillar {
    label: string;
    Icon: IconType;
}

export const pillars: readonly Pillar[] = [
    { label: "Qualidade", Icon: FiTarget },
    { label: "Agilidade", Icon: FiZap },
    { label: "Feito sob medida", Icon: FiTrendingUp },
];

export interface ServiceArea {
    title: string;
    description: string;
    icons: { label: string; Icon: SvgIcon }[];
    highlight?: { value: string; label: string };
}

export const serviceAreas: readonly ServiceArea[] = [
    {
        title: "Desenvolvimento de software",
        description:
            "Sites, sistemas web, servidores e soluções IoT construídos sob medida, com performance e código pensado para durar.",
        icons: [
            { label: "Servidores", Icon: ServerIconSvg },
            { label: "Web", Icon: WebIconSvg },
            { label: "IoT", Icon: IotIconSvg },
        ],
    },
    {
        title: "Social media",
        description:
            "Presença consistente nas redes onde o seu público está, com conteúdo que conversa com quem importa.",
        icons: [
            { label: "TikTok", Icon: TikTokBrand },
            { label: "Instagram", Icon: InstagramBrand },
            { label: "WhatsApp", Icon: WhatsAppBrand },
            { label: "X", Icon: XTwitterBrand },
        ],
    },
    {
        title: "Marketing",
        description: "Campanhas, tráfego pago e funis de venda que transformam visitantes em clientes.",
        icons: [
            { label: "Google Ads", Icon: GoogleAdsBrand },
            { label: "Facebook", Icon: FacebookBrand },
            { label: "TikTok", Icon: TikTokBrand },
        ],
        highlight: { value: "+20 mil", label: "leads gerados" },
    },
];

export interface Solution {
    title: string;
    description: string;
}

export interface SolutionCategory {
    id: string;
    label: string;
    solutions: Solution[];
}

export const solutionCategories: readonly SolutionCategory[] = [
    {
        id: "softwares",
        label: "Softwares",
        solutions: [
            {
                title: "Landing pages",
                description:
                    "Páginas de venda atraentes e performáticas, com foco em uma experiência intuitiva e eficiente.",
            },
            {
                title: "Site institucional",
                description: "Sua empresa precisa ser vista. Um lugar para o seu futuro cliente conhecer você.",
            },
            {
                title: "Sistemas completos",
                description:
                    "Gestão de colaboradores, estoque, vendas e o que mais o seu negócio precisar gerenciar.",
            },
            {
                title: "Automações comerciais",
                description:
                    "Bots para WhatsApp, Instagram e Discord que automatizam tarefas rotineiras e melhoram o atendimento.",
            },
        ],
    },
    {
        id: "marketing",
        label: "Marketing",
        solutions: [
            {
                title: "SEO",
                description:
                    "Otimizamos seu site para os mecanismos de busca (Search Engine Optimization) e, claro, para os usuários.",
            },
            {
                title: "Google Meu Negócio",
                description:
                    "Gerenciamos seu perfil para aumentar a visibilidade na web e a qualidade do tráfego para o seu site.",
            },
            {
                title: "Gestão de leads",
                description:
                    "Estratégias de captação e funis personalizados para atrair, engajar e converter leads qualificados.",
            },
        ],
    },
];

export interface ProcessStep {
    title: string;
    description: string;
}

export const processSteps: readonly ProcessStep[] = [
    {
        title: "Conversa",
        description: "Entendemos o seu negócio, seus objetivos e o prazo que você precisa.",
    },
    {
        title: "Proposta",
        description: "Escopo, cronograma e orçamento claros, sem surpresas no caminho.",
    },
    {
        title: "Construção",
        description: "Desenvolvemos com entregas parciais para você acompanhar cada etapa.",
    },
    {
        title: "Entrega e evolução",
        description: "Publicamos, medimos os resultados e seguimos evoluindo junto com você.",
    },
];
