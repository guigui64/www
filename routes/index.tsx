import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Me from "../components/Me.tsx";
import HomeNav from "../components/HomeNav.tsx";

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
    <section id="projects">
      <h1 class="text-3xl uppercase font-bold py-4">Projects</h1>
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
  return (
    <section id="recommendations">
      <h1 class="text-3xl uppercase font-bold py-4">They recommend me</h1>
      <p>Under construction...</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h1 class="text-3xl uppercase font-bold py-4">Contact</h1>
      <p>Want to get in touch? Please fill out this form.</p>
      <p>Under construction...</p>
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
      <HomeNav class="pl-4" />
      <main class="py-6 px-2 space-y-10 max-w-screen-lg mx-auto">
        <Me />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
}
