import { asset } from "$fresh/runtime.ts";
import ColorMode from "../islands/ColorMode.tsx";

type Menu = { name: string; href: string };
type HeaderProps = {
  active: string;
  sticky?: boolean;
  left?: Menu[];
  right?: Menu[];
};

const MENUS = [
  { name: "Blog", href: "/blog" },
];

export default function Header(
  { active, sticky, left, right = MENUS }: HeaderProps,
) {
  // TODO side nav under sm breakpoint
  return (
    <header
      class={`hidden sm:flex w-full bg-gray-100 dark:bg-gray-700 px-8 flex-row flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-md font-bold h-14 ${
        sticky ?? "sticky top-0 z-10 -mb-14"
      }`}
    >
      <ul class="flex-1 flex items-center gap-6">
        {active !== "/" &&
          (
            <li>
              <div class="flex gap-2 items-center">
                <img
                  class="rounded-full w-8"
                  src={asset("avatar-small.jpg")}
                />
                <a
                  href="/"
                  class="hover:(text-gray-900 dark:text-gray-100)"
                  id="name-in-header"
                >
                  Guillaume Comte
                </a>
              </div>
            </li>
          )}
        {left && left.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"hover:(text-gray-900 dark:text-gray-100) py-1 border-gray-500 dark:border-gray-300" +
                (menu.href === active ? " border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <ul class="flex items-center gap-6">
        {right.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"hover:(text-gray-900 dark:text-gray-100) py-1 border-gray-500 dark:border-gray-300" +
                (menu.href === active ? " border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <div class="flex gap-6 items-center">
        <button class="hover:(text-gray-900 dark:text-gray-100) font-bold">
          FR
        </button>
        <ColorMode />
      </div>
    </header>
  );
}
