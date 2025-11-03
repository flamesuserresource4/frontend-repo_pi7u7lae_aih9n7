export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          {eyebrow && (
            <p className="text-xs uppercase tracking-widest text-indigo-500">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-white">{title}</h2>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
