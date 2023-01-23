import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import HomeNav from "../components/HomeNav.tsx";
import Button from "../components/Button.tsx";

/* function Card({ children }: { children: ComponentChildren }) {
  return (
    <div class="w-36 h-full rounded-md flex items-center justify-center bg-gray-800 border-2 border-gray-400">
      <h1 class="text-lg font-medium text-white">
        {children}
      </h1>
    </div>
  );
} */

function Projects() {
  return (
    <section
      id="projects"
      class="grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        Projects
      </h1>
      <p>Under construction...</p>
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
      class="grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
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
