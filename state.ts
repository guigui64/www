import { signal } from "@preact/signals";
import { Translation } from "./i18n/types.ts";

export const T = signal<Translation | null>(null);
