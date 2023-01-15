import { asset } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import ArrowDown from "@tabler/icons/arrow-down.tsx";

export default function Hero() {
  return (
    <div class="min-h-screen min-w-screen bg-gray-100 dark:bg-gray-700 flex flex-col justify-between items-center">
      <Header active="/" />
      <div class="flex flex-col md:flex-row gap-10 items-center">
        <img
          class="rounded-full w-52 animate__animated animate__fadeIn"
          src={asset("avatar.jpg")}
        />
        <div class="space-y-2 text-center md:text-left">
          <h1 class="text-4xl font-bold animate__animated animate__fadeInUp animated__delay-1s">
            Hello, I'm Guillaume{" "}
            <span class="animate-wave inline-block">
              👋
            </span>
          </h1>
          <h2 class="text-xl font-medium text-gray-600 dark:text-gray-400 animate__animated animate__fadeInUp animate__delay-2s">
            Full Stack Web Developer
          </h2>
        </div>
      </div>
      <div class="animate__animated animate__fadeIn animate__delay-5s">
        <div class="motion-safe:animate-bounce">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}
