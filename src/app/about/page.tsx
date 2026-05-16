export default function AboutPage() {
  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
      
      {/* Hero-like Container */}
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
            relative z-10
            px-5 py-10
            sm:px-8 sm:py-14
            lg:px-20 lg:py-20
          "
        >
          {/* Header */}
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400 sm:text-sm sm:tracking-[0.35em]">
              About the Laboratory
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Human-Centered Computing for Society
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              The UPLB Computer–Human Interaction Laboratory advances
              collaboration, research, and innovation through human-centered
              technologies and inclusive digital experiences.
            </p>
          </div>

          {/* Content */}
          <div className="mt-16 max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
              Research Engagement and Intellectual Property
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
              Academic Participation and Research Protection
            </h2>

            <div className="mt-10 space-y-10">
              
              {/* Item */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Attendance and Submission to Local Conferences
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The laboratory shall encourage members to present and submit
                  research outputs to local conferences to disseminate findings
                  and engage with the national research community.
                </p>
              </div>

              {/* Item */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Attendance and Submission to International Conferences
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Members of the laboratory shall participate in international
                  conferences to present research work and foster global
                  academic collaboration.
                </p>
              </div>

              {/* Item */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Attendance and Submission to Major CHI Conferences
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The laboratory shall support submissions and participation in
                  major Human–Computer Interaction conferences to contribute to
                  and engage with the global CHI research community.
                </p>
              </div>

              {/* Item */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Copyrighting Material
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The laboratory shall facilitate the proper documentation and
                  copyright registration of research outputs, software, and
                  other intellectual works developed by its members.
                </p>
              </div>

              {/* Item */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Patenting Material
                </h3>

                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The laboratory shall support the identification, protection,
                  and patenting of innovative technologies, systems, and
                  inventions produced through laboratory research and
                  development activities.
                </p>
              </div>
            </div>
          </div>

          {/* VISION & MISSION */}
      <div className="mx-auto mt-16 max-w-6xl px-2 sm:px-0">
        
        {/* Vision */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
            Vision
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            A Human-Centered Research Environment
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            The UPLB Computer–Human Interaction Laboratory (UPLB CHI Lab)
            envisions a research environment that advances human-centered
            computing through inclusive, ethical, and context-aware
            technologies that meaningfully impact society.
          </p>
        </div>

        {/* Mission */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
            Mission
          </p>

          <h2 className="mt-4 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Collaboration, Research, and Innovation
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            
            <p>
              The UPLB Computer–Human Interaction Laboratory (UPLB CHI Lab)
              shall serve as a research group of the Institute of Computer
              Science by:
            </p>

            <ul className="space-y-5 pl-6">
              <li className="list-disc">
                Fostering collaboration through the provision of a shared space
                that supports project creation, open communication, and the
                alignment of individuals with shared goals and values.
              </li>

              <li className="list-disc">
                Advancing research by creating opportunities for learning and
                the systematic exploration of topics in human–computer
                interaction.
              </li>

              <li className="list-disc">
                Driving innovation through the development of new ideas,
                methods, products, services, and solutions that generate
                meaningful value and impact for the community.
              </li>

              <li className="list-disc">
                Strengthening the research visibility and impact of the
                Institute of Computer Science by supporting the development,
                presentation, and publication of human-centered computing
                research in reputable local and international conferences.
              </li>
            </ul>
          </div>
        </div>
      </div>  
      </div>
      </div>
    </section>
  );
}