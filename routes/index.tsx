import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import { ComponentChildren } from "https://esm.sh/v102/preact@10.11.0/src/index";
import Me from "../components/Me.tsx";
import HomeNav from "../islands/HomeNav.tsx";

function Card({ children }: { children: ComponentChildren }) {
  return (
    <div class="w-36 h-full rounded-md flex items-center justify-center bg-gray-800 border-2 border-gray-400">
      <h1 class="text-lg font-medium text-white">
        {children}
      </h1>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <ul class="h-24 flex justify-start items-stretch gap-2 px-2 overflow-x-auto hide-scrollbar">
        {[...Array(40).keys()].map((k) => (
          <li>
            <Card>Project {k + 1}</Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Recommendations() {
  return (
    <section id="recommendations" class="h-64 flex justify-center items-center">
      <p>TODO recommendations</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" class="h-64 flex justify-center items-center">
      <p>TODO contact form</p>
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
      <main>
        <Me />
        <Projects />
        <Recommendations />
        <Contact />
      </main>
    </>
  );
}
