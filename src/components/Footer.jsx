export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 bg-white/60 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Sachin Desai. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Work</a>
            <a href="#about" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">About</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
