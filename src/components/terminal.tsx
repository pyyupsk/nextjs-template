"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export interface Command {
    command: string;
    output?: string;
}

interface TerminalProps {
    commands?: Command[];
    className?: string;
}

export function Terminal({ commands = [], className }: TerminalProps) {
    const [copied, setCopied] = useState<number | null>(null);
    const [currentCommand, setCurrentCommand] = useState(0);
    const [showOutput, setShowOutput] = useState(false);

    const copyCommand = useCallback((index: number, command: string) => {
        navigator.clipboard.writeText(command);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    }, []);

    useEffect(() => {
        if (currentCommand < commands.length) {
            const timer = setTimeout(() => {
                setShowOutput(true);
                if (currentCommand < commands.length - 1) {
                    const nextTimer = setTimeout(
                        () => {
                            setCurrentCommand((prev) => prev + 1);
                            setShowOutput(false);
                        },
                        1000 + (commands[currentCommand]?.output?.length || 0) * 10,
                    );
                    return () => clearTimeout(nextTimer);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [currentCommand, commands]);

    return (
        <div
            className={cn(
                "rounded-lg bg-card text-card-foreground overflow-hidden border",
                className,
            )}
        >
            <div className="flex items-center gap-3 border-b px-4 py-3">
                <div className="flex gap-1">
                    <div className="h-3.5 w-3.5 rounded-full bg-secondary" />
                    <div className="h-3.5 w-3.5 rounded-full bg-secondary" />
                    <div className="h-3.5 w-3.5 rounded-full bg-secondary" />
                </div>
            </div>
            <div className="p-4 text-sm font-mono">
                <AnimatePresence initial={false}>
                    {commands.slice(0, currentCommand + 1).map((command, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 first:mt-0"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-emerald-400">~</span>
                                <span>{command.command}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="ml-auto h-8 w-8 text-muted-foreground hover:text-foreground"
                                    onClick={() => copyCommand(index, command.command)}
                                >
                                    <Check
                                        className={cn(
                                            "h-4 w-4 transition absolute",
                                            copied === index
                                                ? "opacity-100 scale-100"
                                                : "opacity-0 scale-0",
                                        )}
                                    />
                                    <Copy
                                        className={cn(
                                            "h-4 w-4 transition absolute",
                                            copied === index
                                                ? "opacity-0 scale-0"
                                                : "opacity-100 scale-100",
                                        )}
                                    />
                                    <span className="sr-only">Copy command</span>
                                </Button>
                            </div>
                            {showOutput && index === currentCommand && command.output && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="mt-2 text-muted-foreground whitespace-pre-wrap"
                                >
                                    {command.output}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
