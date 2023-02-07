import { JSX } from "preact";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={props.disabled}
      class={`border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) rounded bg-white px-3 py-2 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-900 ${
        props.class ?? ""
      }`}
    />
  );
}
