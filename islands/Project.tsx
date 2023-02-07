type ProjectProps = {
  title: string;
  href: string;
  text: string;
  github?: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div
      class="hover:(bg-gradient-to-r to-teal-500) dark:(bg-gray-800 hover:(from-cyan-500 to-teal-500) border-gray-600) group cursor-pointer space-y-2 rounded-md border border-gray-400 bg-gray-100 from-cyan-500 px-3 py-2"
      onClick={() => open(props.href, "_blank")}
    >
      <h2 class="text-center text-lg font-bold uppercase group-hover:text-white">
        <a href={props.href} target="_blank" class="hover:underline">
          {props.title}
        </a>
      </h2>
      <div class="flex items-center justify-between">
        <p class="whitespace-pre-wrap text-gray-700 group-hover:text-gray-100 dark:text-gray-300">
          {props.text}
        </p>
        {props.github && (
          <a
            class="group-hover:(text-gray-100 hover:text-gray-50) text-sm uppercase text-gray-700 hover:underline dark:text-gray-200"
            href={props.github}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            Github
          </a>
        )}
      </div>
    </div>
  );
}
