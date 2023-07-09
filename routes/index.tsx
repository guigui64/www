import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import Project from "../islands/Project.tsx";
import { Translation } from "../i18n/types.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

type Data = {
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

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
          summary="An app for designing GARMIN watch faces"
          tech="Next 13 (App Router), NextAuth, Vercel Postgres, Prisma, Tailwind"
        />
        <Project
          title="guillaumecomte.deno.dev"
          href="https://guillaumecomte.deno.dev"
          summary="My portfolio"
          tech="Fresh, Preact, Deno, Tailwind"
          github="https://github.com/guigui64/website"
        />
        <Project
          title="React-UIs"
          href="https://guigui64.github.io/react-uis/"
          summary="Comparator for React UI libraries"
          tech="React, Vite, Daisy UI"
          github="https://github.com/guigui64/react-uis"
        />
        {/* <Project */}
        {/*   title="Advent of JS/CSS" */}
        {/*   href="https://guigui64-advent-of-js-css.deno.dev/" */}
        {/*   tech="2022 JS/CSS challenges (WIP)" */}
        {/*   github="https://github.com/guigui64/advent-of-js-css" */}
        {/* /> */}
        <Project
          title="stybulate"
          href="https://crates.io/crates/stybulate"
          summary="Rust experiment"
          tech="Rust"
          github="https://github.com/guigui64/stybulate"
        />
        <Project
          title="Bookfinder"
          href="https://guigui64.github.io/bookfinder/"
          summary="Simple example app"
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

export default function Home(props: PageProps<Data>) {
  T.value = props.data.t;
  const LINKS = [
    { name: props.data.t.titles.aboutme, href: "#about-me" },
    { name: props.data.t.titles.projects, href: "#projects" },
    { name: props.data.t.titles.contact, href: "#contact" },
  ];
  return (
    <>
      <Head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Guillaume Comte - Full Stack Web Developer - Portfolio"
        />
      </Head>
      <Header active="/" left={LINKS} lang={props.data.lang} />
      <Hero />
      <main class="mx-auto max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-10">
          <Me />
          <Projects />
          <Recommendations />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
