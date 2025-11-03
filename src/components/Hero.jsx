import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-white/0 to-white dark:from-neutral-900/40 dark:via-neutral-900/10 dark:to-neutral-900" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200/60 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300">
          Modern • Interactive • Playful • Tech
        </p>
        <h1 className="mt-6 bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-400 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl dark:from-white dark:via-neutral-200 dark:to-neutral-400">
          A Sleek Portfolio for a SaaS Mindset
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-neutral-300">
          Showcase your story, skills, and products with a polished, unique design built for impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
            View Projects
          </a>
          <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-white dark:hover:bg-neutral-900">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
