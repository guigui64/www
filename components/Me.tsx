import FileDownload from "@tabler/icons/file-download.tsx";
import Button from "./Button.tsx";

export default function Me() {
  return (
    <section id="about-me" class="relative p-2 max-w-screen-lg mx-auto">
      <h1 class="text-2xl font-bold py-4">About me</h1>
      <Button class="absolute top-2 right-2">
        <a
          class="flex gap-1"
          href="/resume-guillaume-comte-en.pdf"
          target="_blank"
        >
          <FileDownload />Resume
        </a>
      </Button>
      <div class="space-y-2">
        <p>
          Bonjour! I was born on 24.07.1990 in Pau (South West of France) and I
          am a freelance Full Stack Web developer. I love my job and am looking
          forward to meet you if you want to work with me.
        </p>
        <p>
          I live in Toulouse. I have a beautiful wife and an adorable son. I
          love playing Squash, Padel, Tennis and Basketball. I also like video
          games, reading and watching movies and TV shows (but who doesn't?).
        </p>
        <div class="grid sm:grid-cols-2">
          <div>
            <h2 class="text-xl font-medium py-2">Education</h2>
            <ul>
              <li>Master's degree</li>
              <li>BAC S</li>
            </ul>
          </div>
          <div>
            <h2 class="text-xl font-medium py-2">Experience</h2>
            <ul>
              <li>Master's degree</li>
              <li>BAC S</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
