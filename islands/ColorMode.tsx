import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import OS from "@tabler/icons/brightness.tsx";
import Sun from "@tabler/icons/sun.tsx";
import Moon from "@tabler/icons/moon.tsx";

export default function ColorMode() {
  const state = useSignal("os");

  function detectMode() {
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      state.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      state.value = "light";
    }
    if (!("colorMode" in localStorage)) state.value = "os";
  }

  function toggle() {
    state.value = state.value === "os"
      ? "dark"
      : (state.value === "dark" ? "light" : "os");
    if (state.value === "os") {
      localStorage.removeItem("colorMode");
    } else {
      localStorage.colorMode = state.value;
    }
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(detectMode, []);

  return (
    <div
      class="cursor-pointer hover:(text-gray-700 dark:text-gray-100)"
      onClick={toggle}
    >
      {state.value === "os"
        ? <OS />
        : (state.value === "dark" ? <Moon /> : <Sun />)}
    </div>
  );
}
