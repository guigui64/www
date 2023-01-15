import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "https://esm.sh/v102/preact@10.11.0/src/index";

function About() {
  return (
    <>
      <a
        class="hover:(text-gray-900 dark:text-gray-100) flex gap-1"
        href="/resume-guillaume-comte-en.pdf"
        target="_blank"
      >
        <FileDownload />Get my resume
      </a>
      <div class="h-64 flex justify-center items-center">
        <p>TODO about me</p>
      </div>
    </>
  );
}

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
    <ul class="h-24 flex justify-start items-stretch gap-2 px-2 overflow-x-auto hide-scrollbar">
      {[...Array(40).keys()].map((k) => (
        <li>
          <Card>Project {k + 1}</Card>
        </li>
      ))}
    </ul>
  );
}

function Recommendations() {
  return (
    <div class="h-64 flex justify-center items-center">
      <p>TODO recommendations</p>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" class="h-64 flex justify-center items-center">
      <p>TODO contact form</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
      </Head>
      <Hero />
      <About />
      <Projects />
      <Recommendations />
      <Contact />
    </>
  );
}
