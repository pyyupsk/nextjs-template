import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { JetBrains_Mono as FontMono, Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = FontMono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
    description: 'A powerful starter template with Next.js, TypeScript, Tailwind CSS, and more.',
    icons: [{ rel: 'icon', url: '/favicon.svg' }],
    title: 'Next.js TypeScript Tailwind CSS Template',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.variable, fontMono.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
