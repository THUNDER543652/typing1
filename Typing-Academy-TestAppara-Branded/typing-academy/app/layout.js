import "./globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Typing Academy | TestAppara",
  description: "Build typing skills through beginner, intermediate and advanced lessons with TestAppara Typing Academy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try { const t = localStorage.getItem("tw-theme"); document.documentElement.dataset.theme = t === "light" ? "light" : "dark"; } catch (e) { document.documentElement.dataset.theme = "dark"; }` }} />
      </head>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
