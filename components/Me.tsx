import Balancer from "react-wrap-balancer";
import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "preact";
import { T } from "../state.ts";
import Button from "./Button.tsx";
import {
  IconFresh,
  IconGolang,
  IconLinux,
  IconNext,
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
      <div class="flex flex-col text-lg md:flex-row md:justify-between">
        <p class="text-gray-600 dark:text-gray-400 md:order-2 md:text-right">
          {props.date}
        </p>
        <h3 class="font-medium md:order-1">
          <Balancer>{props.title}</Balancer>
        </h3>
      </div>
      {props.text && (
        <p class="whitespace-pre-wrap text-gray-600 dark:text-gray-400">
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
    <div class="flex items-center justify-between gap-1 text-lg font-medium">
      {props.icon}
      <span class="flex-1">{props.title}</span>
      <span class="text-gray-600 dark:text-gray-400">{props.level}</span>
    </div>
  );
}

export default function Me() {
  const t = T.value!;
  return (
    <section id="about-me" class="relative scroll-mt-16">
      {/* TODO create CV and show button
      <Button class="absolute top-4 right-0">
        <a
          class="flex gap-1"
          href="/resume-guillaume-comte-en.pdf"
          target="_blank"
        >
          <FileDownload />Resume
        </a>
      </Button>
      */}
      <div class="lg:grid-cols-desktop grid grid-cols-1 gap-x-10 gap-y-6">
        <h1 class="whitespace-nowrap text-3xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.titles.aboutme}
        </h1>
        <div class="space-y-2">
          {t.me.intro.map((p) => (
            <p class="text-justify">{p}</p>
          ))}
        </div>
        <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.me.education.title}
        </h2>
        <ul class="space-y-2">
          {t.me.education.edux.map(({ title, date, text }) => (
            <li>
              <Edux {...{ title, date, text }} />
            </li>
          ))}
        </ul>
        <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.me.experience.title}
        </h2>
        <ul class="space-y-2">
          {t.me.experience.edux.map(({ title, date, text }) => (
            <li>
              <Edux {...{ title, date, text }} />
            </li>
          ))}
        </ul>
        <h2 class="text-xl font-bold uppercase text-gray-600 dark:text-gray-400 lg:text-right">
          {t.me.skills.title}
        </h2>
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3">
          <ul>
            <li>
              <Skill icon={IconReact} title="React" level={10} />
              <Skill icon={IconFresh} title="Fresh" level={9} />
              <Skill icon={IconNext} title="Next" level={8} />
            </li>
          </ul>
          <ul>
            <li>
              <Skill icon={IconTypescript} title="TypeScript" level={10} />
              <Skill icon={IconGolang} title="Golang" level={9} />
              <Skill icon={IconReact} title="Python" level={7} />
            </li>
          </ul>
          <ul>
            <li>
              <Skill icon={IconVim} title="(Neo)Vim" level={10} />
              <Skill icon={IconLinux} title="Linux/Bash" level={10} />
              <Skill icon={IconWindows} title="Office" level={7} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
