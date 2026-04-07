import { CalendarIcon, MapPinIcon, SparklesIcon } from "@repo/ui";

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
              <MapPinIcon className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-brand">Purely Traceable</h3>
            <p className="leading-relaxed text-brand-muted">
              From soil to table, every ingredient has a transparent story.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <SparklesIcon className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-brand">Rooted Purity</h3>

            <p className="leading-relaxed text-brand-muted">
              No additives, just the raw nutrients and flavors of nature.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="flex justify-center">
              <CalendarIcon  className="h-12 w-12 text-brand transition-transform duration-300 group-hover:scale-110" />
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
