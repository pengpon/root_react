function Features() {
  return (
    <>
      <section className="container mx-auto px-4 py-24">
        <div className="mb-12">
          <div className="gap-2 flex items-center">
            <span className="w-6 h-px bg-secondary"></span>
            <span className="font-bold text-[10px] tracking-[0.3em] text-secondary uppercase">
              Our Core Values
            </span>
          </div>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl text-brand">
            Crafted with Integrity
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-brand">Purely Traceable</h3>
            <p className="leading-relaxed text-brand-muted">
              From soil to table, every ingredient has a transparent story.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.454 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-brand">Rooted Purity</h3>

            <p className="leading-relaxed text-brand-muted">
              No additives, just the raw nutrients and flavors of nature.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-brand">Seasonal Peak</h3>
            <p className="leading-relaxed text-brand-muted">
              Grown by time, harvested at the peak of perfection.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
