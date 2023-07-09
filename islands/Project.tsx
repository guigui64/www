type ProjectProps = {
  title: string;
  href?: string;
  summary: string;
  tech: string;
  github?: string;
  wip?: boolean;
};

export default function Project(props: ProjectProps) {
  return (
    <div
      class={`hover:(bg-gradient-to-r to-teal-500) dark:(bg-gray-800 hover:(from-cyan-500 to-teal-500) border-gray-600) group space-y-2 rounded-md ${
        props.wip ? "border-2 border-dashed" : "border cursor-pointer"
      } border-gray-400 bg-gray-100 from-cyan-500 px-3 py-2`}
      onClick={() => props.href && open(props.href, "_blank")}
    >
      <h2 class="text-center text-lg font-bold uppercase group-hover:text-white">
        <a href={props.href} target="_blank" class="hover:underline">
          {props.title}
        </a>
      </h2>
      <p class="whitespace-pre-wrap italic text-gray-700 group-hover:text-gray-100 dark:text-gray-300">
        {props.summary}
      </p>
      <div class="flex items-center justify-between">
        <p class="whitespace-pre-wrap text-gray-700 group-hover:text-gray-100 dark:text-gray-300">
          {props.tech}
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
        {props.wip && (
          <span class="bg-blue-100 text-blue-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
            WIP
          </span>
        )}
      </div>
    </div>
  );
}
