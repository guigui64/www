import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Contact, {
  ContactForm,
  handle as handleContactForm,
} from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import Project from "../components/Project.tsx";
import { Translation } from "../i18n/types.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

type Data = {
  contactForm: ContactForm | null;
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(req, ctx) {
    return ctx.render({
      contactForm: handleContactForm(new URL(req.url).searchParams),
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

function Projects() {
  return (
    <section
      id="projects"
      class="scroll-mt-16 grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        {T.value!.titles.projects}
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Project
          title="guillaumecomte.deno.dev"
          href="https://guillaumecomte.deno.dev"
          text="Fresh, Preact, Deno, Tailwind"
          github="https://github.com/guigui64/website"
        />
        <Project
          title="React-UIs"
          href="https://guigui64.github.io/react-uis/"
          text="React, Vite, Daisy UI"
          github="https://github.com/guigui64/react-uis"
        />
        <Project
          title="Advent of JS/CSS"
          href="https://guigui64-advent-of-js-css.deno.dev/"
          text="2022 JS/CSS challenges (WIP)"
          github="https://github.com/guigui64/advent-of-js-css"
        />
        <Project
          title="stybulate"
          href="https://crates.io/crates/stybulate"
          text="Rust experiment"
          github="https://github.com/guigui64/stybulate"
        />
        <Project
          title="Bookfinder"
          href="https://guigui64.github.io/bookfinder/"
          text="React, Google books API"
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
      <main class="py-10 px-2 space-y-10 max-w-screen-lg mx-auto">
        <Me />
        <Projects />
        <Recommendations />
        <Contact data={props.data.contactForm} />
      </main>
      <Footer />
    </>
  );
}
