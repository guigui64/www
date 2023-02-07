import { asset } from "$fresh/runtime.ts";
import Balancer from "react-wrap-balancer";
import ArrowDown from "@tabler/icons/arrow-down.tsx";
import { T } from "../state.ts";

export default function Hero() {
  const t = T.value!;
  return (
    <div class="min-w-screen flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-700 sm:min-h-screen">
      <div class=""></div>
      <div class="sm:(mt-14 mb-14) mt-12 mb-4 flex flex-col items-center gap-y-5 gap-x-10 md:flex-row">
        <img
          class="sm:(w-52 h-52) animate__animated animate__fadeIn h-24 w-24 rounded-full"
          src={asset("avatar-big.webp")}
          alt="avatar"
        />
        <div class="space-y-2 text-center md:text-left">
          <h1 class="animate__animated animate__fadeInUp animate__delay-1s text-2xl font-bold sm:text-4xl">
            <Balancer>
              <span class="dark:(from-cyan-400 to-teal-400) bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                {t.hero.hello}
              </span>{" "}
              <span class="animate-wave inline-block">👋</span>
            </Balancer>
          </h1>
          <h2 class="text-md animate__animated animate__fadeInUp animate__delay-2s font-medium text-cyan-700 dark:text-cyan-200 sm:text-xl">
            {t.hero.dev}
          </h2>
        </div>
      </div>
      <div class="animate__animated animate__fadeIn animate__delay-5s hidden pb-2 sm:block">
        <div class="motion-safe:animate-bounce">
          <ArrowDown size={16} />
        </div>
      </div>
      <div class="block sm:hidden" />
    </div>
  );
}
