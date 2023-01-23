import { asset } from "$fresh/runtime.ts";
import BrandGithub from "@tabler/icons/brand-github.tsx";
import BrandTwitter from "@tabler/icons/brand-twitter.tsx";
import BrandLinkedin from "@tabler/icons/brand-linkedin.tsx";

export default function Footer() {
  const menus = [
    {
      title: "Links",
      children: [
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/#contact" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Legal",
      children: [
        { name: "Cookies", href: "#" },
        { name: "SIRET", href: "#" },
      ],
    },
  ];

  const socials = [
    {
      icon: <BrandLinkedin />,
      href: "https://www.linkedin.com/in/guillaumecomtep/",
    },
    {
      icon: <BrandMalt />,
      href: "https://www.malt.fr/profile/guillaumecomte2",
    },
    { icon: <BrandGithub />, href: "https://github.com/guigui64" },
    { icon: <BrandTwitter />, href: "https://twitter.com/guillaumecomte" },
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
            Full Stack Web Developer
          </div>
          <div class="space-x-2 text-gray-600 dark:text-gray-400 mt-3">
            {socials.map(({ icon, href }) => (
              <a
                class="inline-block hover:(text-gray-700 dark:text-gray-300)"
                href={href}
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
            All right reserved
          </div>

          <a
            href="https://fresh.deno.dev"
            target="_blank"
            class="mt-3 flex items-center md:justify-end gap-1"
          >
            <img src={asset("/fresh-logo.svg")} alt="Fresh logo" class="w-6" />
            Made with <span class="font-bold">Fresh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function BrandMalt() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 186.795 186.795"
      class="w-5"
      style={{ paddingBottom: 2 }}
      stroke="currentColor"
      fill="currentColor"
    >
      <g
        id="g282"
        transform="translate(-27.666,-57.778)"
      >
        <path
          class="st0"
          d="m 187.518,84.731 c -14.1,-14.1 -29.162,-4.974 -38.588,4.452 l -44.52,44.523 -44.525,44.524 c -9.426,9.425 -19.292,23.746 -4.452,38.584 14.84,14.843 29.161,4.975 38.585,-4.451 l 44.523,-44.523 44.523,-44.522 c 9.427,-9.427 18.552,-24.489 4.454,-38.587"
          id="path71"
        />
        <path
          class="st0"
          d="M 102.445,81.084 121.3,99.938 140.492,80.746 c 1.303,-1.306 2.626,-2.518 3.957,-3.661 -2.01,-10.14 -7.796,-19.307 -23.158,-19.307 -15.391,0 -21.17,9.203 -23.168,19.365 1.436,1.243 2.871,2.489 4.322,3.941"
          id="path73"
        />
        <path
          class="st0"
          d="m 140.482,221.137 -19.18,-19.181 -18.845,18.843 c -1.431,1.432 -2.855,2.74 -4.273,3.969 2.161,10.337 8.277,19.805 23.11,19.805 14.872,0 20.98,-9.519 23.127,-19.889 -1.319,-1.135 -2.64,-2.248 -3.939,-3.547"
          id="path75"
        />
        <path
          class="st0"
          d="m 94.449,126.791 h -36.35 c -13.329,0 -30.433,4.198 -30.433,24.136 0,14.877 9.522,20.986 19.894,23.132 1.228,-1.417 46.889,-47.268 46.889,-47.268"
          id="path77"
        />
        <path
          class="st0"
          d="m 195.101,127.759 c -1.151,1.338 -46.907,47.305 -46.907,47.305 h 35.834 c 13.329,0 30.433,-3.149 30.433,-24.136 0,-15.389 -9.2,-21.171 -19.36,-23.169"
          id="path79"
        />
        <path
          class="st0"
          d="m 106.359,114.859 6.494,-6.494 L 94.01,89.52 C 84.583,80.095 70.264,70.228 55.424,85.068 c -10.882,10.882 -8.465,21.473 -2.693,30.071 1.758,-0.131 53.628,-0.28 53.628,-0.28"
          id="path81"
        />
        <path
          class="st0"
          d="m 136.237,186.996 -6.511,6.511 19.194,19.192 c 9.426,9.427 24.488,18.551 38.586,4.453 10.52,-10.521 8.106,-21.571 2.29,-30.423 -1.872,0.135 -53.559,0.267 -53.559,0.267"
          id="path83"
        />
      </g>
    </svg>
  );
}
