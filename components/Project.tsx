type ProjectProps = {
  title: string;
  href: string;
  text: string;
  github?: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div class="space-y-2 rounded-md px-3 py-2 border bg-gray-100 hover:(bg-gradient-to-r from-cyan-500 to-teal-500) border-gray-400 dark:(bg-gray-800 hover:(from-cyan-500 to-teal-500) border-gray-600) group">
      <h2 class="text-center uppercase text-lg font-bold group-hover:text-white">
        <a href={props.href} target="_blank" class="hover:underline">
          {props.title}
        </a>
      </h2>
      <div class="flex justify-between items-center">
        <p class="text-gray-700 dark:text-gray-300 group-hover:text-gray-100 whitespace-pre-wrap">
          {props.text}
        </p>
        {props.github &&
          (
            <a
              class="text-sm uppercase text-gray-700 dark:text-gray-200 group-hover:(text-gray-100 hover:text-gray-50) hover:underline"
              href={props.github}
              target="_blank"
            >
              Github
            </a>
          )}
      </div>
    </div>
  );
}
