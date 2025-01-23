'use client';

import { Terminal } from '@/components/terminal';
import { Button } from '@/components/ui/button';
import { commands } from '@/constants/commands';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Github } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="container mx-auto flex grow flex-col items-center justify-center px-4 py-16 text-center">
                <motion.h1
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 text-4xl font-bold md:text-6xl"
                    initial={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    TypeScript Tailwind CSS Template
                </motion.h1>

                <motion.p
                    animate={{ opacity: 1 }}
                    className="mx-auto mb-10 max-w-3xl text-xl"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    A powerful starter template with Next.js, TypeScript, Tailwind CSS, ESLint,
                    Prettier, Husky, Lint-staged, Knip, Next-themes, and Framer-motion.
                </motion.p>

                <div className="mb-12 flex gap-4">
                    <Link href="https://github.com/pyyupsk/nextjs-template" target="_blank">
                        <Button className="group" variant="outline">
                            <Github className="mr-2 size-5" />
                            View on GitHub
                        </Button>
                    </Link>

                    <Button className="group">
                        Get Started
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="w-full max-w-4xl">
                    <Terminal
                        className="shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                        commands={commands}
                    />
                </div>
            </div>

            <footer className="border-t py-6 text-center">
                <div className="flex items-center justify-center gap-2">
                    Created with ❤️ by{' '}
                    <a className="font-semibold underline" href="https://github.com/pyyupsk">
                        ファース
                    </a>
                </div>
            </footer>
        </div>
    );
}
