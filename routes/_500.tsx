import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <div class="flex min-h-screen items-center justify-center">
      <p>500 internal error: {(error as Error).message}</p>
    </div>
  );
}
