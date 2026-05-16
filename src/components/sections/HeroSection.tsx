export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[1.75rem] border border-slate-200
          bg-white/70 backdrop-blur-xl
          transition-colors duration-300
          dark:border-white/10 dark:bg-slate-900/40
          sm:rounded-[2.5rem]
        "
      >
        <div
          className="
            relative z-10 flex flex-col justify-between
            px-5 py-10
            sm:px-8 sm:py-14
            lg:px-20 lg:py-20
          "
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            
            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
                What we do
              </p>

              <h1
                className="
                  text-3xl font-black leading-[1]
                  tracking-tight text-slate-950
                  sm:text-5xl
                  md:text-6xl
                  dark:text-white
                "
              >
                Designing Technology around Human Experience
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-10 sm:text-lg">
                The Human-Computer Interaction Research Laboratory at UPLB
                envisioned to advance collaboration, research, and innovation
                in human-centered design.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <button className="rounded-2xl bg-violet-600 px-6 py-3 text-base font-semibold text-white transition hover:scale-[1.02] hover:bg-violet-700 sm:px-8 sm:py-4 sm:text-lg">
                  Explore the work
                </button>

                <button className="rounded-2xl border border-slate-300 bg-white/70 px-6 py-3 text-base font-semibold text-slate-900 backdrop-blur-md transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg">
                  Join the Lab
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
              <div className="absolute inset-0 rounded-full bg-violet-400/20 blur-3xl dark:bg-cyan-400/5" />

              <a
                href="/publications/from-meme-to-method"
                className="
                  group relative block rounded-[1.75rem]
                  border border-slate-200 bg-white/70
                  p-6 shadow-xl backdrop-blur-xl
                  transition hover:scale-[1.02]
                  hover:bg-white/90
                  dark:border-white/10
                  dark:bg-white/10
                  dark:hover:bg-white/15
                  sm:rounded-[2rem] sm:p-10
                "
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.25em]">
                  PUBLICATION FEATURE
                </p>

                <h2 className="mt-5 text-base font-bold leading-snug text-slate-950 dark:text-white sm:mt-6 sm:text-lg">
                  From Meme to Method: Rethinking Animal Adoption Platforms
                  through the Cat Distribution System
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Cat Distribution System humorously suggests cats are assigned
                  to people, offering a playful lens for rethinking animal
                  adoption platforms.
                </p>

                <div className="mt-6 flex items-center justify-between sm:mt-8">
                  <span className="rounded-full bg-violet-100 px-3 py-2 text-xs font-semibold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 sm:px-4 sm:text-sm">
                    HCI
                  </span>

                  <span className="text-sm font-semibold text-violet-600 transition group-hover:translate-x-1 dark:text-violet-300">
                    See more →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}