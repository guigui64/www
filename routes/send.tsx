import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";
import { Translation } from "../i18n/types.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export type ContactForm = {
  email: string;
  message: string;
};

const NTFY_TOPIC = Deno.env.get("NTFY_TOPIC");
if (NTFY_TOPIC === undefined) {
  throw Error("NTFY_TOPIC environment variable must be set");
}

export function handle(searchParams: URLSearchParams) {
  if (searchParams.has("email") && searchParams.has("message")) {
    const email = searchParams.get("email")!;
    const message = searchParams.get("message")!;
    fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
      method: "POST",
      body: message,
      headers: {
        Title: `New message from ${email}`,
      },
    });
    return {
      email,
      message,
    };
  }
  throw Error("No email or message provided");
}

type Data = {
  contactForm: ContactForm;
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(req, ctx) {
    return ctx.render({
      contactForm: handle(new URL(req.url).searchParams),
      lang: ctx.state.lang,
      t: ctx.state.t,
    });
  },
};

export default function Blog(props: PageProps<Data>) {
  T.value = props.data.t;
  return (
    <>
      <Head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Guillaume Comte - Full Stack Web Developer - Portfolio"
        />
      </Head>
      <Header active="/send" lang={props.data.lang} />
      <main class="mx-auto mt-12 max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div class="space-y-6">
          <p>
            {props.data.t.contact.thanks}{" "}
            <a href="/#contact" class="underline">
              {props.data.t.contact.back}
            </a>
          </p>
          <div class="ml-4 border-l-2 pl-4">
            <h1 class="text-sm uppercase">Email:</h1>
            <p class="italic text-gray-500">{props.data.contactForm.email}</p>
            <h1 class="mt-4 text-sm uppercase">Message:</h1>
            <p class="whitespace-pre-wrap italic text-gray-500">
              {props.data.contactForm.message}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
