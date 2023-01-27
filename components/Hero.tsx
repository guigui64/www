import { asset } from "$fresh/runtime.ts";
import ArrowDown from "@tabler/icons/arrow-down.tsx";

export default function Hero() {
  return (
    <div class="sm:min-h-screen min-w-screen bg-gray-100 dark:bg-gray-700 flex flex-col justify-between items-center">
      <div class=""></div>
      <div class="flex flex-col md:flex-row gap-y-5 gap-x-10 items-center mt-12 mb-4 sm:(mt-14 mb-14)">
        <img
          class="rounded-full w-24 sm:w-52 animate__animated animate__fadeIn"
          src={asset("avatar-big.jpg")}
        />
        <div class="space-y-2 text-center md:text-left">
          <h1 class="text-2xl sm:text-4xl font-bold animate__animated animate__fadeInUp animated__delay-1s">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:(from-purple-400 to-blue-400)">
              Hello, I'm Guillaume
            </span>{" "}
            <span class="animate-wave inline-block">
              👋
            </span>
          </h1>
          <h2 class="text-md sm:text-xl font-medium text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp animate__delay-2s">
            Full Stack Web Developer
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
