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
      href: "https://twitter.com/guillaumecomte",
      ariaLabel: "Twitter",
    },
  ];

  return (
    <footer class="bg-gray-100 dark:bg-gray-700 w-full">
      <div class="flex flex-col md:flex-row max-w-screen-md mx-auto gap-8 md:gap-16 px-2 py-8 text-sm">
        <div class="flex-1">
          <div class="flex items-center">
            <a
              class="font-bold text-2xl text-gray-700 dark:text-gray-300"
              href="/"
            >
              Guillaume Comte
            </a>
          </div>
          <div class="text-gray-600 dark:text-gray-400">
            {t.footer.dev}
          </div>
          <div class="space-x-2 text-gray-600 dark:text-gray-400 mt-3">
            {socials.map(({ icon, href, ariaLabel }) => (
              <a
                class="inline-block hover:(text-gray-700 dark:text-gray-300)"
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
          <div class="flex flex-row md:flex-col gap-4" key={item.title}>
            <div class="font-bold text-gray-700 dark:text-gray-300">
              {item.title}
            </div>
            <ul class="flex flex-row md:flex-col gap-4">
              {item.children.map((child) => (
                <li class="" key={child.name}>
                  <a
                    class="text-gray-600 dark:text-gray-400 hover:(text-gray-700 dark:text-gray-300)"
                    href={child.href}
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div class="text-gray-600 dark:text-gray-400 space-y-2 md:text-right">
          <div class="text-sm">
            Copyright © {new Date().getFullYear()} Guillaume Comte
            <br />
            {t.footer.rights}
          </div>

          <a
            href="https://fresh.deno.dev"
            target="_blank"
            class="mt-3 flex items-center md:justify-end gap-1"
          >
            <img
              src={asset("/fresh-logo.svg")}
              alt="Fresh logo"
              class="w-6 h-6"
            />
            {t.footer.madewith} <span class="font-bold">Fresh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
