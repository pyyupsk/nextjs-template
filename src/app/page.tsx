"use client";

import { Terminal } from "@/components/terminal";
import { Button } from "@/components/ui/button";
import { commands } from "@/constants/commands";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <main className="flex-grow flex justify-center container py-40">
                <motion.div
                    className="max-w-xl space-y-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Image
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                        className="dark:invert"
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
                                <Github className="mr-1 h-4 w-4" /> View on GitHub
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="https://github.com/pyyupsk/nextjs-template#getting-started">
                                Get Started <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <Terminal commands={commands} />
                </motion.div>
            </main>

            <footer className="p-4 text-center text-sm text-muted-foreground">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Created with ❤️ by{" "}
                    <a href="https://github.com/pyyupsk" className="underline hover:text-primary">
                        ファース
                    </a>
                </motion.p>
            </footer>
        </div>
    );
}
