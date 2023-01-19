import { JSX } from "preact";
import { useLayoutEffect, useRef } from "preact/hooks";
import { signal } from "@preact/signals";

const LINKS = [
  { name: "About me", href: "/#about-me" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export const homeNavSticky = signal(false);

export default function HomeNav(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) throw Error("ref is not assigned");
    const fixedTop = ref.current.offsetTop;
    const fixedHeader = () => {
      homeNavSticky.value = window.pageYOffset > fixedTop;
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  /* class={`flex gap-6 items-center h-16 bg-gray-100 dark:bg-gray-700 ${
        props.class ?? ""
      } ${homeNavSticky.value ? "fixed top-0 left-0 w-full z-10" : "-mt-16"}`} */
  return (
    <nav
      ref={ref}
      class={`flex gap-6 items-center h-16 bg-gray-100 dark:bg-gray-700 ${
        props.class ?? ""
      } sticky`}
    >
      {LINKS.map(({ name, href }) => (
        <a
          class="text-gray-500 hover:(text-gray-700 dark:text-gray-300)"
          href={href}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}
