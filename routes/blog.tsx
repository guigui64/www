import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import TrafficCone from "@tabler/icons/traffic-cone.tsx";
import Footer from "../components/Footer.tsx";
import { Translation } from "../i18n/types.ts";
import { State } from "./_middleware.ts";
import { T } from "../state.ts";

type Data = {
  lang: State["lang"];
  t: Translation;
};

export const handler: Handlers<Data, State> = {
  GET(_req, ctx) {
    return ctx.render({
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
        <title>Guillaume's Blog</title>
        <meta
          name="description"
          content="Guillaume Comte - Full Stack Web Developer - Blog"
        />
      </Head>
      <Header active="/blog" lang={props.data.lang} />
      <main class="mt-12 pt-10 pb-[25.5rem] md:pb-[13.5rem] px-2 max-w-screen-lg mx-auto">
        <div class="flex gap-1 justify-center">
          <TrafficCone />
          <p>{props.data.t.blog.wip}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
