'use client';

import { Terminal } from '@/components/terminal';
import { Button } from '@/components/ui/button';
import { commands } from '@/constants/commands';
import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <main className="container flex grow justify-center py-40">
                <motion.div
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl space-y-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Image
                        alt="Next.js Logo"
                        className="dark:invert"
                        height={37}
                        priority
                        src="/next.svg"
                        width={180}
                    />
                    <div className="space-y-1.5">
                        <h2 className="text-xl font-bold">TypeScript Tailwind CSS Template</h2>
                        <p className="text-muted-foreground">
                            A powerful starter template with Next.js, TypeScript, Tailwind CSS,
                            ESLint, Prettier, Husky, Lint-staged, Knip, Next-themes, and
                            Framer-motion.
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Button asChild>
                            <Link href="https://github.com/pyyupsk/nextjs-template">
                                <Github className="mr-1 size-4" /> View on GitHub
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="https://github.com/pyyupsk/nextjs-template#getting-started">
                                Get Started <ArrowRight className="ml-1 size-4" />
                            </Link>
                        </Button>
                    </div>
                    <Terminal commands={commands} />
                </motion.div>
            </main>

            <footer className="container py-3 text-center text-sm text-muted-foreground">
                <motion.p
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Created with ❤️ by{' '}
                    <a className="underline hover:text-primary" href="https://github.com/pyyupsk">
                        ファース
                    </a>
                </motion.p>
            </footer>
        </div>
    );
}
