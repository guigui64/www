import { State } from "../routes/_middleware.ts";

export default function Language({ lang }: { lang: State["lang"] }) {
  return (
    <button
      class="hover:(text-gray-900 dark:text-gray-100) focus:outline-none font-bold"
      onClick={() => {
        (lang === "en")
          ? document.cookie = "lang=fr"
          : document.cookie = "lang=en";
        location.reload();
      }}
    >
      {lang === "en" ? "FR" : "EN"}
    </button>
  );
}
