const publications = [
    {
    title:
      "User-Centered Design of Hyperlocal Communication Platforms: Insights from the Design and Evaluation of KUBO",

    authors:
      "E Evangelista, A Cea, A Balitaan, CV Diala, JIN Gojo Cruz",

    venue:
      "Proceedings of the 2025 International Conference on Human-Engaged Computing (ICHEC ’25), ACM",

    doi: "10.1145/3786995.3787016",

    category: "HCI",

    year: "2025",

    excerpt:
      "KUBO is a hyperlocal communication platform designed to improve civic engagement, local advisories, and community reporting in the Philippines.",

    href: "https://dl.acm.org/doi/pdf/10.1145/3786995.3787016",
  },

  {
    title:
      "From Meme to Method: Rethinking Animal Adoption Platforms through the Cat Distribution System",
    authors: "CAG Angcana, JIN Gojo Cruz",
    venue:
      "Proceedings of the 2025 International Conference on Human-Engaged Computing (ICHEC '25), ACM",
    doi: "10.1145/3786995.3787061",
    category: "HCI",
    year: "2025",
    excerpt:
      "A playful yet human-centered lens for rethinking animal adoption platforms through community reporting and proximity-based discovery.",
    href: "https://dl.acm.org/doi/pdf/10.1145/3786995.3787061",
  },
];

export default function PublicationsFeed() {
  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
            Publications
          </p>

          <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
            Recent Research Outputs
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Explore selected works from the laboratory in human-centered computing, interaction design, and intelligent systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publications.map((publication) => (
            <a
              key={publication.title}
              href={publication.href}
              target="_blank"
              className="
                group flex min-h-[280px] flex-col justify-between
                rounded-[2rem] border border-slate-200
                bg-white/70 p-7 shadow-xl backdrop-blur-xl
                transition hover:scale-[1.02] hover:bg-white/90
                dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15
              "
            >
              <h3 className="text-xl font-bold leading-snug text-slate-950 dark:text-white">
                {publication.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                {publication.authors}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {publication.venue}
              </p>

              <p className="mt-1 text-xs font-medium text-violet-600 dark:text-violet-300">
                DOI: {publication.doi}
              </p>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {publication.excerpt}
              </p>

              <span className="mt-8 text-sm font-semibold text-violet-600 transition group-hover:translate-x-1 dark:text-violet-300">
                Read paper →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}