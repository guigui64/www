import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import { State } from "./_middleware.ts";

export default function Legal(props: PageProps<null, State>) {
  return (
    <>
      <Header active="/blog" lang={props.state.lang} />
      <main class="mx-auto mt-12 max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div>
          <h1 className="text-xl font-semibold mb-4">GCWeb</h1>
          <p>SIREN: 923 895 486</p>
          <p>SIRET: 923 895 486 00010</p>
        </div>
      </main>
    </>
  );
}
