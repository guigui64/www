import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { HeaderProps } from "../components/header.tsx";
import ColorMode from "./color-mode.tsx";
import Language from "./language.tsx";

export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return (
    <div
      class={`relative block text-lg font-bold text-gray-700 dark:text-gray-300 sm:hidden`}
    >
      <div class="flex h-12 flex-row items-center justify-between gap-6 px-4">
        <div>
          {props.active !== "/" && (
            <div class="flex items-center gap-2">
              <img
                class="h-8 w-8 rounded-full"
                src={asset("avatar-small.webp")}
                alt="avatar"
              />
              <a href="/" class="hover:(text-gray-900 dark:text-gray-100)">
                Guillaume Comte
              </a>
            </div>
          )}
        </div>
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="group relative my-2 mx-auto h-5 w-7 cursor-pointer"
            onClick={() => (checked.value = !checked.value)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`icon icon-tabler icon-tabler-menu-2 absolute top-0 transition ${
                checked.value ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0m-16 6l16 0m-16 6l16 0"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`icon icon-tabler icon-tabler-x absolute top-0 transition ${
                checked.value ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12m0 -12l12 12"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        class={`absolute w-full bg-black transition-all duration-300 ${
          checked.value ? "min-h-screen bg-opacity-80" : "min-h-0 bg-opacity-0"
        }`}
        onClick={() => (checked.value = false)}
      />
      <div class="absolute top-12 w-full bg-gray-100 dark:bg-gray-700">
        <div
          class={`divide-y-1 divide-gray-300 overflow-hidden transition-all duration-300 dark:divide-gray-600 ${
            checked.value ? "my-4 max-h-64" : "max-h-0"
          }`}
        >
          {props.left && props.left.length > 0 && (
            <div class="flex w-full flex-col items-center justify-center py-2 first:pt-0 last:pb-0">
              {props.left.map((menu) => (
                <div class="text-center">
                  <a
                    href={menu.href}
                    class={
                      "hover:(text-gray-900 dark:text-gray-100) border-gray-500 px-2 dark:border-gray-300" +
                      (menu.href === props.active ? " border-l-4" : "")
                    }
                    onClick={() => {
                      if (menu.href.startsWith("#")) checked.value = false;
                    }}
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          )}
          {props.right && props.right.length > 0 && (
            <div class="flex w-full flex-col items-center justify-center py-2 first:pt-0 last:pb-0">
              {props.right.map((menu) => (
                <div class="text-center">
                  <a
                    href={menu.href}
                    class={
                      "hover:(text-gray-900 dark:text-gray-100) border-gray-500 px-2 dark:border-gray-300" +
                      (menu.href === props.active ? " border-l-4" : "")
                    }
                    onClick={() => {
                      if (menu.href.startsWith("#")) checked.value = false;
                    }}
                  >
                    {menu.name}
                  </a>
                </div>
              ))}
            </div>
          )}
          <div class="flex w-full flex-row items-center justify-center gap-2 py-2 first:pt-0 last:pb-0">
            <Language lang={props.lang} />
            <ColorMode />
          </div>
        </div>
      </div>
    </div>
  );
}
