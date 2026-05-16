const publications = [
  {
    title:
      "From Meme to Method: Rethinking Animal Adoption Platforms through the Cat Distribution System",
    authors: "CAG Angcana, JIN Gojo Cruz",
    venue:
      "Proceedings of the 2025 International Conference on Human-Engaged Computing (ICHEC ’25), ACM",
    doi: "10.1145/3786995.3787061",
    category: "HCI",
    year: "2025",
    excerpt:
      "A playful yet human-centered lens for rethinking animal adoption platforms through community reporting and proximity-based discovery.",
    href: "/publications/from-meme-to-method",
  },
  {
    title:
      "User-Centered Design of Hyperlocal Communication Platforms: Insights from the Design and Evaluation of KUBO",
    authors:
      "Eljohn Evangelista, Alyssa Cea, Axel Balitaan, Clark Vince Diala, JI Gojo Cruz",
    venue:
      "Proceedings of the 2025 International Conference on Human-Engaged Computing (ICHEC ’25), ACM",
    doi: "10.1145/3786995.3787016",
    category: "HCI",
    year: "2025",
    excerpt:
      "KUBO explores hyperlocal communication for advisories, community reporting, and civic engagement in Philippine local settings.",
    href: "/publications/kubo",
  },
];

export default function OutputsPage() {
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
        <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-14 lg:px-20 lg:py-20">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
              Outputs
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Research Publications
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              View our publications, projects, prototypes, and research outputs
              in human-centered computing and interaction design.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.href}
                className="
                  group flex min-h-[320px] flex-col justify-between
                  rounded-[2rem] border border-slate-200
                  bg-white/70 p-7 shadow-xl backdrop-blur-xl
                  transition hover:scale-[1.02] hover:bg-white/90
                  dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15
                "
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                      {publication.category}
                    </span>

                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {publication.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-950 dark:text-white">
                    {publication.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {publication.authors}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {publication.venue}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-violet-600 dark:text-violet-300">
                    DOI: {publication.doi}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {publication.excerpt}
                  </p>
                </div>

                <span className="mt-8 text-sm font-semibold text-violet-600 transition group-hover:translate-x-1 dark:text-violet-300">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}