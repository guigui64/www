import { asset } from "$fresh/runtime.ts";
import ColorMode from "../islands/color-mode.tsx";
import Language from "../islands/language.tsx";
import MobileHeader from "../islands/mobile-header.tsx";
import { State } from "../routes/_middleware.ts";
// import { T } from "../state.ts";

type Menu = { name: string; href: string };
export type HeaderProps = {
  active: string;
  sticky?: boolean;
  left?: Menu[];
  right?: Menu[];
  lang: State["lang"];
};

function LargeHeader(props: Omit<HeaderProps, "sticky">) {
  return (
    <div class="text-md hidden h-14 flex-row flex-wrap gap-6 px-4 font-bold text-gray-700 dark:text-gray-300 sm:flex">
      <ul class="flex flex-1 items-center gap-6">
        {props.active !== "/" && (
          <li>
            <div class="flex items-center gap-2">
              <img
                class="h-8 w-8 rounded-full"
                src={asset("avatar-small.webp")}
                alt="avatar"
              />
              <a
                href="/"
                class="hover:(text-transparent dark:(from-cyan-400 to-teal-400)) bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text"
              >
                Guillaume Comte
              </a>
            </div>
          </li>
        )}
        {props.left &&
          props.left.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={
                  "hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")
                }
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <ul class="flex items-center gap-6">
        {props.right &&
          props.right.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={
                  "hover:(text-gray-900 dark:text-gray-100) border-gray-500 py-1 dark:border-gray-300" +
                  (menu.href === props.active ? " border-b-2" : "")
                }
              >
                {menu.name}
              </a>
            </li>
          ))}
      </ul>
      <div class="flex items-center gap-6">
        <Language lang={props.lang} />
        <ColorMode />
      </div>
    </div>
  );
}

export default function Header(props: HeaderProps) {
  const menus: { name: string; href: string }[] = [
    // { name: T.value!.titles.home, href: "/" },
    // { name: "Blog", href: "/blog" },
  ];
  props.right = props.right ?? menus;
  return (
    <header
      class={`w-full bg-gray-100 dark:bg-gray-700 ${
        props.sticky ?? "sticky top-0 z-10 -mb-12 sm:-mb-14"
      }`}
    >
      <LargeHeader {...props} />
      <MobileHeader {...props} />
    </header>
  );
}
