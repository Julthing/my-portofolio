import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  metadataBase: new URL("https://zuldikaputra.dev"),
  title: "Portofolio - Zuldika Putra",
  description:
    "I am a software developer passionate about building modern, responsive, and user-friendly web applications.",
  keywords: [
    "frontend developer",
    "software developer",
    "web developer",
    "React",
    "Next.js",
    "Zuldika Putra",
    "portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Zuldika Putra" }],
  creator: "Zuldika Putra",
  icons: {
    icon: "/images/profile/foto_profile.jpeg",
    shortcut: "/images/profile/foto_profile.jpeg",
    apple: "/images/profile/foto_profile.jpeg",
  },
  openGraph: {
    title: "Portofolio - Zuldika Putra",
    description:
      "Software developer passionate about building modern web applications.",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/profile/foto_profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Zuldika Putra — Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio - Zuldika Putra",
    description: "Software developer passionate about building modern web applications.",
    images: ["/images/profile/foto_profile.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', t);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
