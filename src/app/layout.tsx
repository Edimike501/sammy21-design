import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sammy | Lead Graphic Designer & Brand Identity Architect",
  description:
    "Ultra-sleek portfolio of Sammy — Lead Graphic Designer crafting modern, conversion-focused brand identities, packaging, and high-impact marketing visuals for world-class brands.",
  keywords: [
    "Lead Graphic Designer",
    "Brand Identity",
    "Luxury Packaging",
    "Design Director",
    "Visual Identity System",
    "Creative Direction",
  ],
  authors: [{ name: "Sammy" }],
  openGraph: {
    title: "Sammy — Lead Graphic Designer & Brand Identity Architect",
    description:
      "Transforming Ideas into Striking Visuals & Strategic Brand Identities.",
    url: "https://sammy.design",
    siteName: "Sammy Design Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${plusJakartaSans.variable} font-body antialiased bg-white dark:bg-[#0D0714] text-[#0F172A] dark:text-[#F8FAFC] selection:bg-purple-600 selection:text-white transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
