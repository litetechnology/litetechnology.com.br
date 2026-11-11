import styled from "styled-components";
import type { SVGProps } from "react";
import { Link } from "react-router-dom";

/** Logotipo "LITE" com o raio no lugar do "I". */
export function LogoLettering(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 343 94" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path fill="currentColor" d="M0 93.0909V0H25.2727V72.7273H62.9091V93.0909H0Z" />
            <path fill="currentColor" d="M159.03 20.3636V0H239.939V20.3636H211.939V93.0909H187.03V20.3636H159.03Z" />
            <path
                fill="currentColor"
                d="M275.05 93.0909V0H342.141V20.3636H300.323V36.3636H338.686V56.7273H300.323V72.7273H341.959V93.0909H275.05Z"
            />
            <path
                className="ray"
                fill="currentColor"
                d="M103.045 62.3223L78.8375 93.0909L130.678 53.2999L129.536 49.8298L116.748 50.5238L138.443 32.479L137.53 29.2402H125.654L144.837 0.0909424L100.761 37.5686L101.903 40.8074H110.125L86.3738 60.9342L87.7441 64.173L103.045 62.3223Z"
            />
        </svg>
    );
}

/** Símbolo da marca: chaves com o raio ao centro. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 500 443" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path d="M345.834 314.703V353.482C349.587 354.733 365.849 353.482 384.196 352.231C416.886 346.56 422.279 314.564 420.889 299.275C421.723 283.987 423.391 251.24 423.391 242.567C428.728 219.217 448.688 215.603 458 216.715V177.52C433.649 179.188 424.781 159.312 423.391 149.166C422.696 133.599 421.306 100.88 421.306 94.5422C421.306 86.6197 418.387 68.6899 415.886 64.1032C409.881 44.0885 380.582 37.695 366.683 37H345V76.1954C372.02 75.8618 378.775 86.6197 378.775 92.0403C378.775 101.214 379.192 125.481 380.86 149.166C380.86 180.021 401.708 191.697 408.797 197.117C388.449 206.124 381.694 231.17 380.86 242.567C379.887 257.578 377.941 289.935 377.941 299.275C377.941 308.616 366.822 313.453 361.262 314.703H345.834Z" />
            <path d="M153.173 78.2965L153.173 39.5181C149.454 38.2672 133.336 39.5181 115.151 40.769C82.7498 46.4399 77.4047 78.4355 78.7823 93.7245C77.9557 109.013 76.3026 141.76 76.3026 150.433C71.0126 173.783 51.23 177.397 42 176.285L42 215.48C66.1358 213.812 74.925 233.688 76.3026 243.834C76.9914 259.401 78.369 292.12 78.369 298.458C78.369 306.38 81.262 324.31 83.7417 328.897C89.693 348.911 118.733 355.305 132.509 356H154V316.805C127.219 317.138 120.524 306.38 120.524 300.96C120.524 291.786 120.111 267.519 118.458 243.834C118.458 212.979 97.7934 201.303 90.7675 195.883C110.936 186.876 117.631 161.83 118.458 150.433C119.422 135.422 121.351 103.065 121.351 93.7245C121.351 84.3843 132.371 79.5475 137.882 78.2965H153.173Z" />
            <path d="M200.417 354L195 369.642H295L299.167 374.293V385.285L295 388.667H155V406H345V388.667H328.75L314.167 354H200.417Z" />
            <path
                className="ray"
                d="M233.381 225.418L189 281L284.042 209.119L281.948 202.851L258.502 204.104L298.277 171.507L296.602 165.657H274.83L310 113L229.194 180.701L231.287 186.552H246.36L202.817 222.91L205.329 228.761L233.381 225.418Z"
            />
        </svg>
    );
}

const HomeLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    color: var(--color-text);

    svg {
        width: 4.5rem;
        height: auto;
    }

    .ray {
        transition: fill var(--duration-base) var(--ease-out);
    }

    &:hover .ray {
        fill: var(--color-accent);
    }
`;

export function LogoLink() {
    const scrollToTopIfHome = () => {
        if (window.location.pathname === "/") window.scrollTo({ top: 0 });
    };

    return (
        <HomeLink to="/" onClick={scrollToTopIfHome} aria-label="Lite Technology, página inicial">
            <LogoLettering />
        </HomeLink>
    );
}
