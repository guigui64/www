import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { T } from "../state.ts";

export type ContactForm = {
  email: string;
  message: string;
};

export function handle(searchParams: URLSearchParams) {
  if (searchParams.has("email") && searchParams.has("message")) {
    const email = searchParams.get("email")!;
    const message = searchParams.get("message")!;
    fetch(`https://ntfy.sh/${Deno.env.get("NTFY_TOPIC")}`, {
      method: "POST",
      body: message,
      headers: {
        "Title": `New message from ${email}`,
      },
    });
    return ({
      email,
      message,
    });
  }
  return (null);
}

type ContactProps = { data: ContactForm | null };

export default function Contact(props: ContactProps) {
  const t = T.value!;
  return (
    <section
      id="contact"
      class="scroll-mt-16 grid grid-cols-1 lg:grid-cols-desktop gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl uppercase font-bold text-gray-600 dark:text-gray-400 lg:text-right">
        {t.titles.contact}
      </h1>
      <div>
        {props.data === null ? <p>{t.contact.please}</p> : (
          <p>
            {t.contact.thanks}{" "}
            <a href="/#contact" class="font-bold hover:underline">
              {t.contact.here}
            </a>.
          </p>
        )}
        <form action="#contact" class="space-y-3 py-3">
          <div class="space-y-1">
            <label for="email" class="uppercase text-sm">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={props.data?.email ?? ""}
              required
              class="w-full rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 1) disabled:(opacity-50 cursor-not-allowed)"
              disabled={props.data !== null}
            />
          </div>
          <div class="space-y-1">
            <label for="message" class="uppercase text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              value={props.data?.message ?? ""}
              required
              minLength={10}
              maxLength={10000}
              rows={10}
              class="w-full rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 1) disabled:(opacity-50 cursor-not-allowed)"
              label="message"
              disabled={props.data !== null}
            />
          </div>
          <input
            type="submit"
            class="cursor-pointer px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md border(gray-500 1) hover:(bg-gray-200 dark:bg-gray-700) active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed)"
            value={props.data === null ? t.contact.send : t.contact.sent}
            disabled={props.data !== null}
          />
        </form>
      </div>
    </section>
  );
}
