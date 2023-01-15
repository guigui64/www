import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import TrafficCone from "@tabler/icons/traffic-cone.tsx";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Guillaume's Blog</title>
      </Head>
      <Header active="/blog" />
      <main class="h-96 flex flex-col gap-1 justify-center items-center">
        <TrafficCone />
        <p>I guess I need to blog...</p>
      </main>
    </>
  );
}
