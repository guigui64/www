import { asset } from "$fresh/runtime.ts";
import Balancer from "react-wrap-balancer";
import ArrowDown from "@tabler/icons/arrow-down.tsx";
import { T } from "../state.ts";

export default function Hero() {
  const t = T.value!;
  return (
    <div class="sm:min-h-screen min-w-screen bg-gray-100 dark:bg-gray-700 flex flex-col justify-between items-center">
      <div class=""></div>
      <div class="flex flex-col md:flex-row gap-y-5 gap-x-10 items-center mt-12 mb-4 sm:(mt-14 mb-14)">
        <img
          class="rounded-full w-24 h-24 sm:(w-52 h-52) animate__animated animate__fadeIn"
          src={asset("avatar-big.webp")}
          alt="avatar"
        />
        <div class="space-y-2 text-center md:text-left">
          <h1 class="text-2xl sm:text-4xl font-bold animate__animated animate__fadeInUp animate__delay-1s">
            <Balancer>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500 dark:(from-cyan-400 to-teal-400)">
                {t.hero.hello}
              </span>{" "}
              <span class="animate-wave inline-block">
                👋
              </span>
            </Balancer>
          </h1>
          <h2 class="text-md sm:text-xl font-medium text-cyan-700 dark:text-cyan-200 animate__animated animate__fadeInUp animate__delay-2s">
            {t.hero.dev}
          </h2>
        </div>
      </div>
      <div class="hidden sm:block pb-2 animate__animated animate__fadeIn animate__delay-5s">
        <div class="motion-safe:animate-bounce">
          <ArrowDown size={16} />
        </div>
      </div>
      <div class="block sm:hidden" />
    </div>
  );
}
