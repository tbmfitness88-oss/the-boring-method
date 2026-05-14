export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="relative flex min-h-screen flex-col justify-center px-8 py-20 md:px-20">
        <div className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Hybrid Performance Coaching
          </p>

          <div className="space-y-2">
            <h1 className="text-6xl font-black leading-none md:text-8xl">
              THE BORING
            </h1>
            <h1 className="text-6xl font-black leading-none text-neutral-500 md:text-8xl">
              METHOD
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Evidence-based hybrid performance coaching built through consistency,
            discipline, and intelligent training.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/639614416755"
              target="_blank"
              className="rounded-2xl border border-white bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Contact via Viber
            </a>

            <a
              href="mailto:tbmfitness88@gmail.com"
              className="rounded-2xl border border-neutral-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Email TBM
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden text-right text-xs uppercase tracking-[0.3em] text-neutral-500 md:block">
          The Boring Method by Coach Chan
        </div>
      </section>
    </div>
  )
}
