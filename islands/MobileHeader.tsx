import { asset } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { HeaderProps } from "../components/Header.tsx";
import ColorMode from "./ColorMode.tsx";
import Language from "./Language.tsx";

export default function MobileHeader(props: Omit<HeaderProps, "sticky">) {
  const checked = useSignal(false);
  return (
    <div
      class={`block sm:hidden text-gray-700 dark:text-gray-300 text-lg font-bold relative`}
    >
      <div class="px-8 h-12 flex flex-row gap-6 justify-between items-center">
        <div>
          {props.active !== "/" &&
            (
              <div class="flex gap-2 items-center">
                <img
                  class="rounded-full w-8 h-8"
                  src={asset("avatar-small.jpg")}
                  alt="avatar"
                />
                <a
                  href="/"
                  class="hover:(text-gray-900 dark:text-gray-100)"
                >
                  Guillaume Comte
                </a>
              </div>
            )}
        </div>
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="group relative my-2 mx-auto h-5 w-7 cursor-pointer"
            onClick={() => checked.value = !checked.value}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class={`icon icon-tabler icon-tabler-menu-2 absolute top-0 transition ${
                checked.value ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
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
                checked.value ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
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
        onClick={() => checked.value = false}
      />
      <div class="absolute top-12 w-full bg-gray-100 dark:bg-gray-700">
        <div
          class={`flex flex-col gap-2 items-center justify-center overflow-hidden transition-all duration-300 ${
            checked.value ? "max-h-64 my-4" : "max-h-0"
          }`}
        >
          {[...(props.left ?? []), ...(props.right ?? [])].map((menu) => (
            <div class="text-center">
              <a
                href={menu.href}
                class="hover:(text-gray-900 dark:text-gray-100) py-1 border-gray-500 dark:border-gray-300"
                onClick={() => {
                  if (menu.href.startsWith("#")) checked.value = false;
                }}
              >
                {menu.name}
              </a>
            </div>
          ))}
          <Language lang={props.lang} />
          <ColorMode />
        </div>
      </div>
    </div>
  );
}
