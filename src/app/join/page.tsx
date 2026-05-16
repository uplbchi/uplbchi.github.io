export default function JoinLabSection() {
  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[1.75rem] border border-slate-200
          bg-white/75 backdrop-blur-xl
          transition-colors duration-300
          dark:border-white/10 dark:bg-slate-900/40
          sm:rounded-[2.5rem]
        "
      >
        <div className="grid gap-10 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
              Join the Laboratory
            </p>

            <h2 className="text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
              Become part of the UPLB HCI Research Community
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-8 sm:text-lg">
              Collaborate with researchers, faculty members, and students in
              building human-centered technologies, interactive systems, and
              innovative digital experiences.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:mt-10 sm:p-6">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Applicants are encouraged to submit a short letter of intent
                explaining their interests, background, and motivation for
                joining the laboratory.
              </p>
            </div>
          </div>

          <div
            className="
              rounded-[1.5rem] border border-slate-200
              bg-white/70 p-5 shadow-xl backdrop-blur-xl
              dark:border-white/10 dark:bg-white/10
              sm:rounded-[2rem] sm:p-8
            "
          >
            <form className="space-y-5 sm:space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="
                    w-full rounded-2xl border border-slate-300
                    bg-white/80 px-4 py-3 text-sm text-slate-900
                    outline-none transition focus:border-violet-500
                    dark:border-white/10 dark:bg-white/5 dark:text-white
                    sm:px-5 sm:py-4 sm:text-base
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="juan@up.edu.ph"
                  className="
                    w-full rounded-2xl border border-slate-300
                    bg-white/80 px-4 py-3 text-sm text-slate-900
                    outline-none transition focus:border-violet-500
                    dark:border-white/10 dark:bg-white/5 dark:text-white
                    sm:px-5 sm:py-4 sm:text-base
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Attach Letterhead / Letter of Intent
                </label>

                <label
                  className="
                    flex cursor-pointer flex-col items-center justify-center
                    rounded-2xl border-2 border-dashed border-slate-300
                    bg-white/50 px-5 py-8 text-center transition
                    hover:border-violet-500
                    dark:border-white/10 dark:bg-white/5
                    sm:px-6 sm:py-10
                  "
                >
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Click to upload file
                  </p>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    PDF, DOCX, or image files
                  </p>

                  <input type="file" className="hidden" />
                </label>
              </div>

              <button
                type="submit"
                className="
                  w-full rounded-2xl bg-violet-600
                  px-6 py-3 text-base font-semibold text-white
                  transition hover:scale-[1.01] hover:bg-violet-700
                  sm:px-8 sm:py-4 sm:text-lg
                "
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}