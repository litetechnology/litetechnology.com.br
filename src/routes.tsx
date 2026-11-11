import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/landing/LandingPage";

const LinksPage = lazy(() => import("@/pages/links/LinksPage"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage"));

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/links" element={<LinksPage />} />
                    <Route path="/e/:code" element={<ErrorPage />} />
                    <Route path="*" element={<ErrorPage code={404} />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
