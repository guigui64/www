import { JSX } from "preact";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={props.disabled}
      class={`border(gray-500 1) hover:(bg-gray-200 dark:bg-gray-700) disabled:(opacity-50 cursor-not-allowed) cursor-pointer rounded-md bg-gray-100 px-3 py-2 active:bg-gray-300 dark:bg-gray-800 ${
        props.class ?? ""
      }`}
    />
  );
}
