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
      </Head>
      <Header active="/blog" lang={props.data.lang} />
      <main class="h-96 flex flex-col gap-1 justify-center items-center">
        <TrafficCone />
        <p>I guess I need to blog...</p>
      </main>
      <Footer />
    </>
  );
}
