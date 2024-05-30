import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./lib/theme.ts";
import CacheProvider from "./components/MuiCaching.tsx";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <CacheProvider>
         <App />
         <CssBaseline />
      </CacheProvider>
   </ThemeProvider>
);
