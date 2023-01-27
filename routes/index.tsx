import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Contact, {
  ContactForm,
  handler as contactHandler,
} from "../components/Contact.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import Project from "../components/Project.tsx";

export const handler = contactHandler;

function Projects() {
  return (
    <section
      id="projects"
      class="scroll-mt-16 grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        Projects
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

const LINKS = [
  { name: "About me", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Home(props: PageProps<ContactForm | null>) {
  return (
    <>
      <Head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
      </Head>
      <Header active="/" left={LINKS} />
      <Hero />
      <main class="py-10 px-2 space-y-10 max-w-screen-lg mx-auto">
        <Me />
        <Projects />
        <Recommendations />
        <Contact data={props.data} />
      </main>
    </>
  );
}
