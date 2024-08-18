import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/utils/cn";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Next.js Template",
    description: "Next.js template by @pyyupsk",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "bg-background font-sans antialiased min-h-screen",
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <BackgroundBeams />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
