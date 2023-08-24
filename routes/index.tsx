import { PageProps } from "$fresh/server.ts";
import Contact from "../components/contact.tsx";
import Header from "../components/header.tsx";
import Hero from "../components/hero.tsx";
import Me from "../components/me.tsx";
import Project from "../islands/project.tsx";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

function Projects() {
  return (
    <section
      id="projects"
      class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
        {T.value!.titles.projects}
      </h1>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Project
          wip
          title="Garface"
          summary={T.value!.projects.garface}
          tech="Golang, Next.js 13 (App Router), NextAuth, Vercel Postgres, Prisma, Tailwind"
        />
        <Project
          title="guillaumecomte.deno.dev"
          href="https://guillaumecomte.deno.dev"
          summary={T.value!.projects.www}
          tech="Fresh, Preact, Deno, Tailwind"
          github="https://github.com/guigui64/website"
        />
        <Project
          title="React-UIs"
          href="https://guigui64.github.io/react-uis/"
          summary={T.value!.projects["react-uis"]}
          tech="React, Vite, Daisy UI"
          github="https://github.com/guigui64/react-uis"
        />
        <Project
          title="stybulate"
          href="https://crates.io/crates/stybulate"
          summary={T.value!.projects.stybulate}
          tech="Rust"
          github="https://github.com/guigui64/stybulate"
        />
        <Project
          title="Bookfinder"
          href="https://guigui64.github.io/bookfinder/"
          summary={T.value!.projects.bookfinder}
          tech="React, Google books API"
          github="https://github.com/guigui64/bookfinder"
        />
      </div>
    </section>
  );
}

function Recommendations() {
  return <section id="recommendations"></section>;
}

export default function Home(props: PageProps<null, State>) {
  const LINKS = [
    { name: props.state.t.titles.aboutme, href: "#about-me" },
    { name: props.state.t.titles.projects, href: "#projects" },
    { name: props.state.t.titles.contact, href: "#contact" },
  ];
  return (
    <>
      <Header active="/" left={LINKS} lang={props.state.lang} />
      <Hero />
      <main class="mx-auto max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-10">
          <Me />
          <Projects />
          <Recommendations />
          <Contact />
        </div>
      </main>
    </>
  );
}
