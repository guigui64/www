import { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";
import { T } from "../state.ts";
import { State } from "./_middleware.ts";

export default function Layout(props: LayoutProps<null, State>) {
  T.value = props.state.t;
  return (
    <html lang={props.state.lang}>
      <head>
        <title>Guillaume Comte - Full Stack Web Developer</title>
        <meta
          name="description"
          content="Guillaume Comte - Full Stack Web Developer - Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <props.Component />
      <Footer />
    </html>
  );
}
