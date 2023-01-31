import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <div class="min-h-screen flex justify-center items-center">
      <p>500 internal error: {(error as Error).message}</p>
    </div>
  );
}
