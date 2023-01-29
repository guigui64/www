import { MiddlewareHandlerContext } from "$fresh/server.ts";

import fr from "../i18n/fr.json" assert { type: "json" };
import en from "../i18n/en.json" assert { type: "json" };
import { Translation } from "../i18n/types.ts";

export type State = {
  lang: "en" | "fr";
  t: Translation;
};

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  let setLangCookie = true;
  if (
    req.headers.has("cookie") && req.headers.get("cookie")!.includes("lang")
  ) {
    ctx.state.lang = req.headers.get("cookie")!.includes("lang=fr")
      ? "fr"
      : "en";
    setLangCookie = false;
  } else if (req.headers.get("accept-language")?.includes("fr")) {
    ctx.state.lang = "fr";
  } else {
    ctx.state.lang = "en";
  }
  ctx.state.t = ctx.state.lang === "fr" ? fr : en;
  const res = await ctx.next();
  setLangCookie && res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
  return res;
}
