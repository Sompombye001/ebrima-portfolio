import Reveal from "@/components/motion/reveal";

const values = [
  {
    title: "Correctness first",
    body: "Systems that manage records, payments, or evidence don't get a second chance to be right. I design for the failure case before the happy path.",
  },
  {
    title: "Access control is not optional",
    body: "Role-based auth, audit logs, and least-privilege access are default, not add-ons — especially in institutional and government work.",
  },
  {
    title: "Interfaces should disappear",
    body: "The best UI is the one nobody notices, because it puts the right action in front of the right person at the right time.",
  },
];

export default function AboutValues() {
  return (
    <section className="container-page py-28">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest text-gold">
          How I work
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium tracking-tightest text-paper sm:text-5xl">
          Three things I don&apos;t compromise on.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-ink-line bg-ink-surface p-8">
              <span className="font-mono text-xs text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-paper">
                {v.title}
              </h3>
              <p className="mt-3 text-sm text-paper-muted">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
