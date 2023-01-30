import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import OS from "@tabler/icons/brightness.tsx";
import Sun from "@tabler/icons/sun.tsx";
import Moon from "@tabler/icons/moon.tsx";

const modes = ["os", "dark", "light"] as const;
const angles = ["rotate-0", "rotate-[120deg]", "-rotate-[120deg]"];
const opacities = ["opacity-100", "opacity-0", "opacity-0"];
const icons = [OS, Moon, Sun];

export default function ColorMode() {
  const state = useSignal<typeof modes[number]>("os");

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
    state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];
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
      class="relative cursor-pointer hover:(text-gray-700 dark:text-gray-100) w-6 h-6"
      onClick={toggle}
    >
      {icons.map((Icon, i) => {
        /*
          Compute pos in opacities/angles that way:
              state		icon		i		indexOf		idx-i		(idx-i+L)mod L
              os		os			0		0			0			0
              os		dark		1		0			-1			2
              os		light		2		0			-2			1
              dark		os			0		1			1			1
              dark		dark		1		1			0			0
              dark		light		2		1			-1			2
              light		os			0		2			2			2
              light		dark		1		2			1			1
              light		light		2		2			0			0
        */
        const pos = (modes.indexOf(state.value) - i + modes.length) %
          modes.length;
        return (
          <div
            class={"absolute top-0 pb-1 transition ease-linear duration-500 origin-bottom " +
              `${opacities[pos]} ${angles[pos]}`}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
