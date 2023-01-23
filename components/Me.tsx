import FileDownload from "@tabler/icons/file-download.tsx";
import { ComponentChildren } from "preact";
import Button from "./Button.tsx";

type EduxProps = {
  title: string;
  date: string;
  text?: string;
};
function Edux(props: EduxProps) {
  return (
    <div>
      <div class="text-lg font-medium flex flex-col md:justify-between md:flex-row">
        <p class="md:order-2 text-gray-600 dark:text-gray-400">
          {props.date}
        </p>
        <h4 class="md:order-1">{props.title}</h4>
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
            Bonjour! I was born on 24.07.1990 in Pau (South West of France) and
            I am a freelance Full Stack Web developer. I love my job and am
            looking forward to meet you if you want to work with me.
          </p>
          <p>
            I live in Toulouse. I have a beautiful wife and an adorable son. I
            love playing Squash, Padel, Tennis and Basketball. I also like video
            games, reading and watching movies and TV shows (but who doesn't?).
          </p>
        </div>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Education
        </h2>
        <ul>
          <li>
            <Edux
              title="Institut Supérieur de l'Aéronautique et de l'Espace, Toulouse"
              date="2010 - 2013"
              text="Master's degree in Aerospace, Aeronautical and Space Engineering"
            />
          </li>
        </ul>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Experience
        </h2>
        <ul>
          <li>
            <Edux
              title="Airbus Defence and Space, Toulouse"
              date="2016 - present"
              text="Senior Software Architect"
            />
          </li>
          <li>
            <Edux
              title="Atos, Toulon"
              date="2013 - 2016"
              text="Software Developer"
            />
          </li>
        </ul>
        <h2 class="text-xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
          Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                title="Typescript/Javascript"
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

const IconFresh = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-lemon-2"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18 4a2 2 0 0 1 1.185 3.611c1.55 2.94 .873 6.917 -1.892 9.682c-2.765 2.765 -6.743 3.442 -9.682 1.892a2 2 0 1 1 -2.796 -2.796c-1.55 -2.94 -.873 -6.917 1.892 -9.682c2.765 -2.765 6.743 -3.442 9.682 -1.892a1.999 1.999 0 0 1 1.611 -.815z">
    </path>
  </svg>
);

const IconReact = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-react"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102">
    </path>
    <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102">
    </path>
    <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -1.998">
    </path>
    <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 1.999">
    </path>
    <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896">
    </path>
    <path d="M11.998 18.574c1.926 1.893 3.821 2.768 5.002 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897">
    </path>
    <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
  </svg>
);

const IconSvelte = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-svelte"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 8l-5 3l.821 -.495c1.86 -1.15 4.412 -.49 5.574 1.352a3.91 3.91 0 0 1 -1.264 5.42l-5.053 3.126c-1.86 1.151 -4.312 .591 -5.474 -1.251a3.91 3.91 0 0 1 1.263 -5.42l.26 -.16">
    </path>
    <path d="M8 17l5 -3l-.822 .496c-1.86 1.151 -4.411 .491 -5.574 -1.351a3.91 3.91 0 0 1 1.264 -5.42l5.054 -3.127c1.86 -1.15 4.311 -.59 5.474 1.252a3.91 3.91 0 0 1 -1.264 5.42l-.26 .16">
    </path>
  </svg>
);

const IconTypescript = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-typescript"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5">
    </path>
    <path d="M9 12h4"></path>
    <path d="M11 12v6"></path>
    <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z">
    </path>
  </svg>
);

const IconWindows = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-windows"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z">
    </path>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
  </svg>
);

const IconGolang = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    stroke-width="2"
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 254.5 225"
  >
    <g>
      <g>
        <g>
          <g>
            <path d="M40.2,101.1c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l35.7,0c0.4,0,0.5,0.3,0.3,0.6l-1.7,2.6
					c-0.2,0.3-0.7,0.6-1,0.6L40.2,101.1z" />
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path d="M25.1,110.3c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l45.6,0c0.4,0,0.6,0.3,0.5,0.6l-0.8,2.4
					c-0.1,0.4-0.5,0.6-0.9,0.6L25.1,110.3z" />
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path d="M49.3,119.5c-0.4,0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3,0.6-0.6,1-0.6l20,0c0.4,0,0.6,0.3,0.6,0.7l-0.2,2.4
					c0,0.4-0.4,0.7-0.7,0.7L49.3,119.5z" />
          </g>
        </g>
      </g>
      <g>
        <g id="CXHf1q_5_">
          <g>
            <g>
              <path d="M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,0.4-1.6,0.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1,1.5
						c-6.8,4.4-10.3,10.9-10.2,19c0.1,8,5.6,14.6,13.5,15.7c6.8,0.9,12.5-1.5,17-6.6c0.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0
						c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c0.3-0.6,1-1.6,2.5-1.6c5.1,0,23.9,0,36.4,0c-0.2,2.7-0.2,5.4-0.6,8.1
						c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17c-9.8,1.3-18.9-0.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2
						c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3c9.4-1.7,18.4-0.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1
						C154.7,98.5,154.3,99,153.1,99.3z" />
            </g>
            <g>
              <path d="M186.2,154.6c-9.1-0.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2
						c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-0.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9
						c-6.6,6.7-14.7,10.9-24,12.8C191.5,154.2,188.8,154.3,186.2,154.6z M210,114.2c-0.1-1.3-0.1-2.3-0.3-3.3
						c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-0.6
						C205.2,129.2,209.5,122.8,210,114.2z" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const IconVim = (
  <svg
    fill="currentColor"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
    </g>
    <g id="SVGRepo_iconCarrier">
      <title>Neovim icon</title>
      <path d="M2.902,4.998l3.864,5.754v12.151l-4.207-4.198V5.344L2.902,4.998 M2.97,4.287L2.107,5.158v13.734l5.112,5.101 v-13.38L2.97,4.287L2.97,4.287z M21.858,5.207L16.676,0v13.331l4.335,6.519c0,0,0.882-0.957,0.882-0.957L21.858,5.207z M7.215,0.001 l13.29,20.28L16.786,24L3.489,3.765L7.215,0.001z">
      </path>
    </g>
  </svg>
);

const IconLinux = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>Linux icon</title>
    <path d="M12.503 0c-.155 0-.315.008-.479.021-4.227.333-3.106 4.807-3.17 6.298-.077 1.093-.3 1.954-1.051 3.021-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489-.039.034-.076.068-.111.135-.26.268-.449.601-.662.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.681-.09.188-.136.393-.132.601 0 .199.027.401.055.536.058.399.116.729.039.97-.248.68-.279 1.146-.105 1.485.174.334.535.469.939.601.811.2 1.91.135 2.775.599.926.467 1.866.671 2.616.47.526-.115.97-.463 1.208-.945.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.578.199.025.135.063.199.114.334l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.199-.812-.714-1.377v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135-.056-.038-.121-.062-.19-.064.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.561-3.369.027-2.152.237-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.191.135.33.332.439.533.105.259.158.459.166.724 0-.02.006-.04.006-.059v.104c-.002-.007-.004-.015-.004-.021l-.004-.024c-.002.243-.053.483-.15.706-.047.125-.119.24-.213.335-.029-.016-.057-.03-.088-.042-.105-.045-.199-.064-.285-.133-.071-.028-.145-.051-.219-.066.049-.059.145-.133.182-.198.053-.128.082-.264.088-.402v-.019c.002-.135-.018-.271-.061-.4-.045-.135-.101-.201-.183-.334-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132-.095.094-.166.207-.205.334-.053.127-.084.264-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202-.01-.065-.016-.132-.018-.199v-.02c-.008-.264.043-.526.15-.769.082-.219.232-.406.43-.533.171-.129.379-.199.594-.199zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.141.401.153.667v.004c.007.134.006.201-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.089.013-.179.003-.267v-.015c-.012-.133-.039-.199-.082-.333-.031-.102-.088-.193-.166-.267-.049-.045-.115-.068-.183-.064h-.021c-.071.006-.13.041-.186.132-.064.077-.105.171-.12.27-.027.108-.035.219-.023.331v.014c.012.135.037.201.081.334.045.134.097.2.165.268.011.009.021.018.034.024-.07.057-.117.07-.176.136-.037.028-.08.06-.131.068-.104-.125-.196-.26-.275-.402-.096-.21-.146-.438-.155-.667-.017-.226.011-.452.08-.668.055-.197.152-.379.283-.535.128-.133.26-.2.418-.2zm1.371 1.706c.331 0 .732.065 1.215.399.293.2.523.269 1.053.468h.003c.255.136.405.266.478.399v-.131c.073.147.078.318.016.47-.123.311-.516.644-1.064.843v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267-.152.008-.305-.015-.448-.067-.11-.06-.218-.126-.322-.198-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.711-.069-.268-.005-.469.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.469.839-.601.139-.036.294-.065.466-.065zm2.799 2.143c.359 1.417 1.197 3.475 1.736 4.473.286.534.855 1.659 1.102 3.024.156-.005.329.018.513.064.646-1.671-.546-3.467-1.089-3.966-.221-.201-.232-.335-.123-.335.589.534 1.365 1.572 1.646 2.757.129.535.159 1.104.021 1.67.067.028.135.061.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.061-.003-.12 0-.181 0h-.015c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.771.465-.007.043-.012.066-.017.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.021.334-.171.838-.319 1.351-1.5 1.072-3.58 1.538-5.349.334-.111-.193-.246-.374-.402-.533-.074-.125-.168-.237-.275-.334.182 0 .338-.029.465-.067.145-.067.257-.188.314-.334.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.399-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.141 2.497-.122 3.854.038-.989.258-1.965.647-2.876.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.211.201.477.335.876.335.039.003.075.006.111.006.411 0 .729-.134.996-.268.29-.134.521-.334.74-.4h.005c.467-.135.836-.402 1.045-.7zm2.186 8.958c.037.601.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.009c.315-.008.577.01.847.267l.003.003c.208.199.305.531.391.876.085.401.154.78.409 1.066.486.527.645.906.636 1.14l.003-.006v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.371 1.139-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.401-.12-1.025.056-1.69.176-.668.428-1.345.463-1.898.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.815.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.638.434.598.77 1.131.729 1.57v.006c-.057.744-.479 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.611-.201-.723-.401-.111-.199-.113-.601.123-1.23v-.003l.002-.003c.117-.334.03-.753-.027-1.119-.055-.401-.083-.709.043-.94.16-.334.396-.399.689-.533.295-.135.641-.202.916-.469h.002v-.003c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.279-.466-.155-.134-.28-.268-.374-.335-.164-.134-.144-.334-.074-.334.109.016.129.135.199.201.096.066.215.199.361.333.291.2.68.467 1.166.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.137.149-.268.279-.268.129.016.034.134-.147.333-.181.135-.461.335-.69.468v-.001zm-1.082-1.584V5.64c-.006-.019.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.139.068-.051 0-.131-.019-.137-.068-.009-.066.088-.133.15-.133.081-.031.184-.047.259-.005.019.009.036.03.03.05v.021h.003z" />
  </svg>
);
