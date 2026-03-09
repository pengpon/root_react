function NotFound() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="animate-ripple absolute h-16 w-16 rounded-full bg-[#8C5E3C]/30"></div>
          <div
            className="animate-ripple absolute h-16 w-16 rounded-full bg-[#8C5E3C]/15"
            style={{ animationDelay: '1.5s' }}
          ></div>

          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#2C3E2D]/5 bg-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-10 text-[#8C5E3C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-md">
          <h3 className="mb-4 text-[10px] font-bold tracking-[0.5em] text-[#8C5E3C] uppercase">
            Lost in the wild
          </h3>
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E2D] italic md:text-5xl">
            Deep in the woods, <br />
            some paths are hidden.
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            The page you are looking for has been moved, removed, or perhaps it never took root in
            the first place. Let’s guide you back to the clearing.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row">
          <a
            href="/"
            className="rounded-xl bg-[#2C3E2D] px-10 py-4 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-xl transition-all hover:bg-[#1a261b] active:scale-95"
          >
            Back to Home
          </a>
          <a
            href="/shop"
            className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2C3E2D] uppercase"
          >
            Shop the Harvest
            <div className="h-px w-6 bg-[#2C3E2D] transition-all group-hover:w-10"></div>
          </a>
        </div>
      </main>
    </>
  );
}
export default NotFound;
