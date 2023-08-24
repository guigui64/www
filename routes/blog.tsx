import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import { State } from "./_middleware.ts";
import { T } from "../state.ts";

export default function Blog(props: PageProps<null, State>) {
  T.value = props.state.t;
  return (
    <>
      <head>
        <title>Guillaume's Blog</title>
        <meta
          name="description"
          content="Guillaume Comte - Full Stack Web Developer - Blog"
        />
      </head>
      <Header active="/blog" lang={props.state.lang} />
      <main class="mx-auto mt-12 max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div>
          <p>{props.state.t.blog.wip}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
