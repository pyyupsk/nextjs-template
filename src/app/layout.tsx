import type { Metadata } from "next";
import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const fontMono = FontMono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Next.js TypeScript Tailwind CSS Template",
    description: "A powerful starter template with Next.js, TypeScript, Tailwind CSS, and more.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.variable, fontMono.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
