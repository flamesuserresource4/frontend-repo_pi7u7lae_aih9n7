import Section from './Section';

function About() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">About</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          I’m Sachin, a product‑first builder blending design and engineering. I ship clear, elegant
          web experiences and systems that scale.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Focus</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Product design, frontend engineering, design systems, and rapid prototyping using React,
          Tailwind, and modern tooling.
        </p>
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Principles</h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Clarity over cleverness. Accessibility by default. Performance as a feature.
        </p>
      </div>
    </div>
  );
}

function Education() {
  const items = [
    { school: 'Tech University', program: 'B.S. in Computer Science', year: '2016 — 2020' },
    { school: 'Design Academy', program: 'UX Design Certificate', year: '2021' },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((edu) => (
        <div key={edu.school} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{edu.school}</h3>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{edu.year}</span>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{edu.program}</p>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  const roles = [
    {
      company: 'Acme SaaS Co.',
      title: 'Senior Frontend Engineer',
      time: '2023 — Present',
      points: [
        'Led UI architecture for a multi-tenant SaaS platform',
        'Shipped design system with Tailwind & Radix',
        'Improved performance and Core Web Vitals',
      ],
    },
    {
      company: 'Studio Zero',
      title: 'Product Engineer',
      time: '2020 — 2023',
      points: [
        'Prototyped and launched interactive web apps',
        'Collaborated across design, product, and growth',
        'Built CI/CD workflows for reliable deployments',
      ],
    },
  ];
  return (
    <div className="space-y-6">
      {roles.map((role) => (
        <div key={role.company} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{role.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">{role.company}</p>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">{role.time}</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            {role.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  const projects = [
    {
      name: 'Case Study — Design System',
      desc: 'A scalable component system for faster, consistent shipping.',
      tag: 'System',
      color: 'from-indigo-500 via-sky-500 to-teal-400',
    },
    {
      name: 'Case Study — Analytics App',
      desc: 'Metrics that matter with clean, readable visualizations.',
      tag: 'Analytics',
      color: 'from-fuchsia-500 via-pink-500 to-rose-400',
    },
    {
      name: 'Case Study — Creator Tool',
      desc: 'Templates and workflows that empower creators to ship.',
      tag: 'Tooling',
      color: 'from-amber-400 via-orange-500 to-rose-500',
    },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((p) => (
        <a
          key={p.name}
          href="#"
          className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className={`absolute -inset-20 bg-gradient-to-br ${p.color} opacity-20 blur-2xl`} aria-hidden />
          <div className="relative p-6">
            <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
              {p.tag}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = encodeURIComponent(form.get('name'));
    const email = encodeURIComponent(form.get('email'));
    const message = encodeURIComponent(form.get('message'));
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = `Hi, my name is ${name}%0A${message}%0A%0AReply to: ${email}`;
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-2xl space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
          <input id="name" name="name" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
        <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">I usually reply within 24 hours.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg:white dark:text-neutral-900 dark:hover:bg-neutral-100">
          Send Message
        </button>
      </div>
    </form>
  );
}

export default function PortfolioSections() {
  return (
    <>
      <Section id="about" eyebrow="About" title="Product designer & frontend engineer">
        <About />
      </Section>

      <Section id="education" eyebrow="Education" title="Foundations and continued learning">
        <Education />
      </Section>

      <Section id="experience" eyebrow="Experience" title="Selected roles & impact">
        <Experience />
      </Section>

      <Section id="projects" eyebrow="Projects" title="Case studies & work">
        <Projects />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s connect">
        <Contact />
      </Section>
    </>
  );
}
