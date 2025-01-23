import type { Command } from '@/components/terminal';

export const commands: Command[] = [
    {
        command: 'git clone https://github.com/pyyupsk/nextjs-template.git',
        output: `Cloning into 'nextjs-template'...
remote: Enumerating objects: 167, done.
remote: Counting objects: 100% (167/167), done.
remote: Compressing objects: 100% (96/96), done.
remote: Total 167 (delta 66), reused 153 (delta 52), pack-reused 0 (from 0)
Receiving objects: 100% (167/167), 519.07 KiB | 3.76 MiB/s, done.
Resolving deltas: 100% (66/66), done.`,
    },
    {
        command: 'cd nextjs-template',
        output: "Navigating to 'nextjs-template'...",
    },
    {
        command: 'npm install',
        output: `> nextjs-template@0.1.0 prepare
> husky
 
added 618 packages, and audited 619 packages in 1m

212 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities`,
    },
    {
        command: 'npm run dev',
        output: `> nextjs-template@0.1.0 dev C:\\pyyupsk\\nextjs-template
> next dev --turbo

   ▲ Next.js 15.0.3 (Turbopack)
   - Local:        http://localhost:3000`,
    },
];
