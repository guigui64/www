import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import HomeNav from "../components/HomeNav.tsx";
import Button from "../components/Button.tsx";
import { ComponentChildren } from "preact";

/* function Card({ children }: { children: ComponentChildren }) {
  return (
    <div class="w-36 h-full rounded-md flex items-center justify-center bg-gray-800 border-2 border-gray-400">
      <h1 class="text-lg font-medium text-white">
        {children}
      </h1>
    </div>
  );
} */

type ProjectProps = {
  title: string;
  href: string;
  text: string;
  github?: string;
};

function Project(props: ProjectProps) {
  return (
    <div class="space-y-2 rounded-md px-3 py-2 bg-gray-800 shadow-lg">
      <h2 class="text-center uppercase text-lg font-bold">
        <a href={props.href} target="_blank">
          {props.title}
        </a>
      </h2>
      <div class="flex justify-between items-center">
        <p class="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
          {props.text}
        </p>
        {props.github &&
          (
            <a
              class="text-sm uppercase text-gray-200 hover:(underline text-white)"
              href={props.github}
              target="_blank"
            >
              Github
            </a>
          )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      class="scroll-mt-20 grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        Projects
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-3">
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
      {
        /*
      <ul class="h-24 flex justify-start items-stretch gap-2 px-2 overflow-x-auto hide-scrollbar">
        {[...Array(40).keys()].map((k) => (
          <li>
            <Card>Project {k + 1}</Card>
          </li>
        ))}
      </ul>
      */
      }
    </section>
  );
}

function Recommendations() {
  return <section id="recommendations"></section>;
}

function Contact() {
  return (
    <section
      id="contact"
      class="scroll-mt-20 grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        Contact
      </h1>
      <div>
        <p>Want to get in touch? Please fill out this form.</p>
        <form class="mt-3 space-y-3">
          <div class="space-y-1">
            <label for="email">Email</label>
            <input
              disabled
              type="text"
              id="email"
              name="email"
              placeholder="email"
              required
              class="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 2) disabled:(opacity-50 cursor-not-allowed)"
            />
          </div>
          <div class="space-y-1">
            <label for="message">Message</label>
            <textarea
              disabled
              id="message"
              name="message"
              required
              minLength={100}
              maxLength={10000}
              class="w-full rounded px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 2) disabled:(opacity-50 cursor-not-allowed)"
              label="message"
            />
          </div>
          <input
            disabled
            type="submit"
            class="cursor-pointer px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded border(gray-500 2) hover:(bg-gray-200 dark:bg-gray-700) active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed)"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
      </Head>
      <Hero />
      <HomeNav />
      <main class="py-10 px-2 space-y-10 max-w-screen-lg mx-auto">
        <Me />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
}
