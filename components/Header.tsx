import { asset } from "$fresh/runtime.ts";
import ColorMode from "../islands/ColorMode.tsx";

type HeaderProps = { active: string };

export default function Header({ active }: HeaderProps) {
  const menus = [
    { name: "Blog", href: "/blog" },
  ];
  return (
    <header
      class={`w-full bg-gray-100 dark:bg-gray-700 py-4 px-8 flex flex-row flex-wrap gap-6 text-gray-700 dark:text-gray-300 text-md font-bold ${
        active === "/" ? "justify-end" : ""
      }`}
    >
      {active !== "/" &&
        (
          <div class="flex-1">
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
          </div>
        )}
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
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
