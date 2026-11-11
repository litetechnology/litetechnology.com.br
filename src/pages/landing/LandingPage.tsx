import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Process } from "./sections/Process";
import { Services } from "./sections/Services";
import { Solutions } from "./sections/Solutions";

export default function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Solutions />
                <Process />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
