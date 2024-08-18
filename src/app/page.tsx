import { Card } from "@/components/card";
import { MdiGithub } from "@/components/icons/MdiGithub";
import { Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <a
                    className="fixed left-0 top-0 flex gap-2 p-8 lg:static lg:p-0 text-center justify-center"
                    href="https://github.com/pyyupsk/nextjs-template"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MdiGithub className="w-6 h-6" />
                    <span className="text-md font-semibold">pyyupsk/nextjs-template</span>
                </a>

                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/next.svg"
                            alt="Next.js Logo"
                            width={100}
                            height={21}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] flex-col">
                <h1 className="text-6xl font-bold text-center text-primary">
                    Next.js <Highlight>Template</Highlight>
                </h1>
                <p className="text-center text-lg max-w-[500px] mt-5">
                    A simple Next.js project with TypeScript, ESLint, Prettier, Husky, and
                    lint-staged configurations.
                </p>{" "}
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-10">
                <Card
                    title="Next.js Docs"
                    description="Find in-depth information about Next.js features and API."
                    link="https://nextjs.org/docs"
                />
                <Card
                    title="Shadcn/ui"
                    description="A set of accessible and reusable components for React."
                    link="https://ui.shadcn.com/docs"
                />
                <Card
                    title="Aceternity UI"
                    description="Use trending website components hassle-free."
                    link="https://ui.aceternity.com/"
                />
                <Card
                    title="Framer Motion"
                    description="An animation library for React and Next.js."
                    link="https://www.framer.com/motion/"
                />
            </div>
        </main>
    );
}
