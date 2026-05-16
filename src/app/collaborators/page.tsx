const collaborators = [
  {
    name: "Carl Angelo G. Angcana",
    email: "cgangcana@up.edu.ph",
  },
  {
    name: "Jamlech Iram N. Gojo Cruz",
    email: "jngojocruz@up.edu.ph",
  },
  {
    name: "Iravan G. Gesmundo",
    email: "iggesmundo@up.edu.ph",
  },
  {
    name: "Von Michael B. Arellano",
    email: "vbarellano@up.edu.ph",
  },
  {
    name: "Janzelle A. Servanda",
    email: "jaservanda@up.edu.ph",
  },
];

export default function CollaboratorsPage() {
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
          
          {/* Header */}
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
              Faculty Collaborators
            </p>
          </div>

          {/* Collaborators Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {collaborators.map((collaborator) => (
              <div
                key={collaborator.email}
                className="
                  group rounded-[2rem]
                  border border-slate-200
                  bg-white/70 p-7
                  shadow-xl backdrop-blur-xl
                  transition hover:scale-[1.02]
                  hover:bg-white/90
                  dark:border-white/10
                  dark:bg-white/10
                  dark:hover:bg-white/15
                "
              >
                {/* Placeholder Face */}
                <div
                  className="
                    flex h-20 w-20 items-center justify-center
                    rounded-full bg-violet-100
                    text-2xl font-black text-violet-700
                    dark:bg-violet-500/20 dark:text-violet-300
                  "
                >
                  {collaborator.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">
                  {collaborator.name}
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {collaborator.email}
                </p>
              </div>
            ))}
          </div>
          <br/>
          <br/>
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
              Student Collaborators
            </p>
          </div>
           <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
              Alumni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}