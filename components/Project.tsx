type ProjectProps = {
  title: string;
  href: string;
  text: string;
  github?: string;
};

export default function Project(props: ProjectProps) {
  return (
    <div class="space-y-2 rounded-md px-3 py-2 border bg-gray-100 border-gray-400 dark:(bg-gray-800 border-gray-600)">
      <h2 class="text-center uppercase text-lg font-bold">
        <a href={props.href} target="_blank">
          {props.title}
        </a>
      </h2>
      <div class="flex justify-between items-center">
        <p class="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
          {props.text}
        </p>
        {props.github &&
          (
            <a
              class="text-sm uppercase text-gray-700 dark:(text-gray-200 hover:text-gray-50) hover:(underline text-gray-900)"
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
