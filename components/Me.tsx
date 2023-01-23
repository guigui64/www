import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "preact";
import Button from "./Button.tsx";
import {
  IconFresh,
  IconGolang,
  IconLinux,
  IconReact,
  IconSvelte,
  IconTypescript,
  IconVim,
  IconWindows,
} from "./Icons.tsx";

type EduxProps = {
  title: string;
  date: string;
  text?: string;
};
function Edux(props: EduxProps) {
  return (
    <div>
      <div class="text-lg flex flex-col md:justify-between md:flex-row">
        <p class="md:order-2 text-gray-600 dark:text-gray-400">
          {props.date}
        </p>
        <h4 class="font-medium md:order-1">{props.title}</h4>
      </div>
      {props.text && (
        <p class="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
          {props.text}
        </p>
      )}
    </div>
  );
}

type SkillProps = {
  icon: ComponentChildren;
  title: string;
  level: number;
};
function Skill(props: SkillProps) {
  return (
    <div class="text-lg font-medium flex gap-1 justify-between items-center">
      {props.icon}
      <span class="flex-1">{props.title}</span>
      <span class="text-gray-600 dark:text-gray-400">{props.level}</span>
    </div>
  );
}

export default function Me() {
  return (
    <section
      id="about-me"
      class="scroll-mt-16 relative"
    >
      {/* TODO create CV and show button */}
      <Button class="hidden absolute top-4 right-0">
        <a
          class="flex gap-1"
          href="/resume-guillaume-comte-en.pdf"
          target="_blank"
        >
          <FileDownload />Resume
        </a>
      </Button>
      <div class="grid lg:grid-cols-desktop grid-cols-1 gap-x-10 gap-y-6">
        <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 whitespace-nowrap lg:text-right">
          About me
        </h1>
        <div class="space-y-2">
          <p>
            Bonjour! I'm a passionate Full Stack Web Developer. You can find
            here some of my experience and skills as well as a form to contact
            me. I am looking forward to meet you!
          </p>
          <p>
            I live in Toulouse (France) with my wife and son. I love playing
            Squash, Padel, Tennis and Basketball. I also like video games,
            reading and watching movies and TV shows (but who doesn't?).
          </p>
        </div>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Education
        </h2>
        <ul>
          <li>
            <Edux
              title="Institut Supérieur de l'Aéronautique et de l'Espace, Toulouse"
              date="September 2010 - September 2013"
              text={`Master's degree in Aerospace, Aeronautical and Space Engineering
2 years at ENSICA - 1 year at SUPAERO`}
            />
          </li>
        </ul>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Experience
        </h2>
        <ul class="space-y-2">
          <li>
            <Edux
              title="Airbus Defence and Space, Toulouse"
              date="June 2016 - present"
              text={`Senior Software Architect
Satellite Simulator Web GUI - React, Typescript, Golang, ZeroMQ, Protobuf`}
            />
          </li>
          <li>
            <Edux
              title="Atos (for the French Navy), Toulon"
              date="September 2013 - May 2016"
              text={`Software Developer
Tactical Data Link - Java, Spring, Ant`}
            />
          </li>
        </ul>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Skills
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <ul>
            <li>
              <Skill icon={IconReact} title="React" level={10} />
              <Skill
                icon={IconFresh}
                title="Fresh"
                level={10}
              />
              <Skill icon={IconSvelte} title="Svelte" level={7} />
            </li>
          </ul>
          <ul>
            <li>
              <Skill
                icon={IconTypescript}
                title="Typescript"
                level={10}
              />
              <Skill
                icon={IconGolang}
                title="Golang"
                level={9}
              />
              <Skill icon={IconReact} title="Python" level={7} />
            </li>
          </ul>
          <ul>
            <li>
              <Skill icon={IconVim} title="(Neo)Vim" level={10} />
              <Skill icon={IconLinux} title="Linux/Bash" level={9} />
              <Skill icon={IconWindows} title="Office" level={7} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
