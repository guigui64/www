import { asset } from "$fresh/runtime.ts";
import { T } from "../state.ts";
import {
  BrandGithub,
  BrandLinkedin,
  BrandMalt,
  BrandTwitter,
} from "./icons/footer.tsx";

export default function Footer() {
  const t = T.value!;
  const menus = [
    {
      title: t.footer.links,
      children: [
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/#contact" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: t.footer.legal,
      children: [
        { name: "Cookies", href: "#" },
        { name: "SIRET", href: "#" },
      ],
    },
  ];

  const socials = [
    {
      icon: BrandLinkedin,
      href: "https://www.linkedin.com/in/guillaumecomtep/",
      ariaLabel: "LinkedIn",
    },
    {
      icon: BrandMalt,
      href: "https://www.malt.fr/profile/guillaumecomte2",
      ariaLabel: "Malt",
    },
    {
      icon: BrandGithub,
      href: "https://github.com/guigui64",
      ariaLabel: "GitHub",
    },
    {
      icon: BrandTwitter,
      href: "https://twitter.com/gcwebjs",
      ariaLabel: "Twitter",
    },
  ];

  return (
    <footer class="absolute bottom-0 h-96 w-full bg-gray-100 dark:bg-gray-700 md:h-48">
      <div class="mx-auto flex max-w-screen-md flex-col gap-8 px-2 py-8 text-sm md:flex-row md:gap-16">
        <div class="flex-1">
          <div class="flex items-center">
            <a
              class="text-2xl font-bold text-gray-700 dark:text-gray-300"
              href="/"
            >
              Guillaume Comte
            </a>
          </div>
          <div class="text-gray-600 dark:text-gray-400">{t.footer.dev}</div>
          <div class="mt-3 space-x-2 text-gray-600 dark:text-gray-400">
            {socials.map(({ icon, href, ariaLabel }) => (
              <a
                class="hover:(text-gray-700 dark:text-gray-300) inline-block"
                href={href}
                aria-label={ariaLabel}
                target="_blank"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {menus.map((item) => (
          <div class="flex flex-row gap-4 md:flex-col" key={item.title}>
            <div class="font-bold text-gray-700 dark:text-gray-300">
              {item.title}
            </div>
            <ul class="flex flex-row gap-4 md:flex-col">
              {item.children.map((child) => (
                <li class="" key={child.name}>
                  <a
                    class="hover:(text-gray-700 dark:text-gray-300) text-gray-600 dark:text-gray-400"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div class="space-y-2 text-gray-600 dark:text-gray-400 md:text-right">
          <div class="text-sm">
            Copyright © {new Date().getFullYear()} Guillaume Comte
            <br />
            {t.footer.rights}
          </div>

          <a
            href="https://fresh.deno.dev"
            target="_blank"
            class="mt-3 flex items-center gap-1 md:justify-end"
          >
            <img
              src={asset("/fresh-logo.svg")}
              alt="Fresh logo"
              class="h-6 w-6"
            />
            {t.footer.madewith} <span class="font-bold">Fresh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
