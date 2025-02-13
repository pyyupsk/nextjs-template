import type { Command } from '@/components/terminal';

export const commands: Command[] = [
  {
    command: 'git clone https://github.com/pyyupsk/nextjs-template.git',
    output: `Cloning into 'nextjs-template'...
remote: Enumerating objects: 241, done.
remote: Counting objects: 100% (241/241), done.
remote: Compressing objects: 100% (135/135), done.
remote: Total 241 (delta 102), reused 214 (delta 75), pack-reused 0 (from 0)
Receiving objects: 100% (241/241), 629.49 KiB | 4.37 MiB/s, done.
Resolving deltas: 100% (102/102), done.`,
  },
  {
    command: 'cd nextjs-template',
    output: "Navigating to 'nextjs-template'...",
  },
  {
    command: 'npm install',
    output: `> nextjs-template@0.1.0 prepare
> husky


added 609 packages, and audited 610 packages in 7s

207 packages are looking for funding
  run \`npm fund\` for details

found 0 vulnerabilities`,
  },
  {
    command: 'npm run dev',
    output: `> nextjs-template@0.1.0 dev
> next dev --turbo

   ▲ Next.js 15.1.6 (Turbopack)
   - Local:        http://localhost:3000
   - Network:      http://192.168.1.107:3000
   
Ready to go! with Next.js TypeScript Tailwind CSS Template`,
  },
];
