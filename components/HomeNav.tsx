const LINKS = [
  { name: "About me", href: "/#about-me" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

export default function HomeNav() {
  return (
    <nav class="hidden sm:flex gap-6 items-center h-16 bg-gray-100 dark:bg-gray-700 sticky top-0 -mt-16 z-10 pl-8">
      {LINKS.map(({ name, href }) => (
        <a
          class="text-gray-500 dark:text-gray-400 hover:(text-gray-700 dark:text-gray-200)"
          href={href}
        >
          {name}
        </a>
      ))}
    </nav>
  );
}
