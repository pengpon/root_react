import { SunIcon } from "@repo/ui";
import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="animate-ripple absolute h-16 w-16 rounded-full bg-secondary/30"></div>
          <div
            className="animate-ripple absolute h-16 w-16 rounded-full bg-secondary/15"
            style={{ animationDelay: '1.5s' }}
          ></div>

          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-brand/5 bg-white shadow-sm">
            <SunIcon className="size-10 stroke-1 text-secondary" />
          </div>
        </div>

        <div className="max-w-md">
          <h3 className="mb-4 text-[10px] font-bold tracking-[0.5em] text-secondary uppercase">
            Lost in the wild
          </h3>
          <h1 className="text-4xl font-bold tracking-tight text-brand italic md:text-5xl">
            Deep in the woods, <br />
            some paths are hidden.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            The page you are looking for has been moved, removed, or perhaps it never took root in
            the first place. Let’s guide you back to the clearing.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-brand px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:bg-brand-dark active:scale-95"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand uppercase"
          >
            Shop the Harvest
            <div className="h-px w-6 bg-brand transition-all group-hover:w-10"></div>
          </Link>
        </div>
      </main>
    </>
  );
}
export default NotFound;
