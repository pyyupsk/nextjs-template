'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

export type Command = {
  command: string;
  output?: string;
};

type TerminalProps = {
  className?: string;
  commands?: Command[];
};

export function Terminal({ className, commands = [] }: TerminalProps) {
  const [copied, setCopied] = useState<null | number>(null);
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
        'bg-card text-card-foreground overflow-hidden rounded-xl border shadow-xs',
        className,
      )}
    >
      <div className="bg-background flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-2">
          <TerminalIcon className="size-5" />
          <span className="text-sm font-medium">Terminal</span>
        </div>
        <div className="flex gap-1">
          <div className="size-3 rounded-full bg-red-400" />
          <div className="size-3 rounded-full bg-yellow-400" />
          <div className="size-3 rounded-full bg-green-400" />
        </div>
      </div>
      <div className="min-h-[350px] p-4 font-mono text-sm">
        <AnimatePresence initial={false}>
          {commands.slice(0, currentCommand + 1).map((command, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="group"
              exit={{ opacity: 0, y: -20 }}
              initial={{ opacity: 0, y: 20 }}
              key={index}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-500">❯</span>
                <span className="grow text-start">{command.command}</span>
                <Button
                  className="ml-auto"
                  onClick={() => copyCommand(index, command.command)}
                  size="icon"
                  variant="ghost"
                >
                  <Check
                    className={cn(
                      'absolute h-4 w-4 text-green-500 transition',
                      copied === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
                    )}
                  />
                  <Copy
                    className={cn(
                      'absolute h-4 w-4 transition',
                      copied === index ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
                    )}
                  />
                  <span className="sr-only">Copy command</span>
                </Button>
              </div>
              {showOutput && index === currentCommand && command.output && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="text-muted-foreground mt-2 text-start whitespace-pre-wrap"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
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
