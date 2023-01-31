import { T } from "../state.ts";

export default function Contact() {
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
        {t.contact.please}
        <form action="/send" class="space-y-3 py-3">
          <div class="space-y-1">
            <label for="email" class="uppercase text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required
              class="w-full rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 1) disabled:(opacity-50 cursor-not-allowed)"
            />
          </div>
          <div class="space-y-1">
            <label for="message" class="uppercase text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={10000}
              rows={10}
              class="w-full rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 border(gray-500 1) disabled:(opacity-50 cursor-not-allowed)"
              label="message"
            />
          </div>
          <input
            type="submit"
            class="cursor-pointer px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md border(gray-500 1) hover:(bg-gray-200 dark:bg-gray-700) active:bg-gray-300 disabled:(opacity-50 cursor-not-allowed)"
            value={t.contact.send}
          />
        </form>
      </div>
    </section>
  );
}
