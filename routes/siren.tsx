import { PageProps } from "$fresh/server.ts";
import Header from "../components/header.tsx";
import { State } from "./_middleware.ts";

export default function Siren(props: PageProps<null, State>) {
  return (
    <>
      <Header active="/blog" lang={props.state.lang} />
      <main class="mx-auto mt-12 max-w-screen-lg px-2 pt-10 pb-[25.5rem] md:pb-[13.5rem]">
        <div>
          <p>SIREN: 923 895 486</p>
        </div>
      </main>
    </>
  );
}
