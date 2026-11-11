import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <AppRoutes />
        </ThemeProvider>
    );
}
