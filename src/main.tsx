import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { siteConfig } from "./data";

// Set document title and favicon from config
document.title = siteConfig.siteTitle;

const faviconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement;
if (faviconLink && siteConfig.favicon) {
    faviconLink.href = siteConfig.favicon;
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
