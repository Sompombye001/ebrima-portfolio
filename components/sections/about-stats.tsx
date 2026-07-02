import { projects, experience } from "@/data/content";
import Reveal from "@/components/motion/reveal";

const deployed = projects.filter((p) => p.status === "Deployed").length;
const categories = new Set(projects.map((p) => p.category)).size;

const stats = [
  { value: `${projects.length}+`, label: "Systems designed & built" },
  { value: `${deployed}`, label: "Shipped to production" },
  { value: `${categories}`, label: "Industries — from retail to law enforcement" },
  { value: `${experience.length}`, label: "Internships at GSM Company" },
];

export default function AboutStats() {
  return (
    <section className="border-y border-ink-line py-20">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <p className="font-display text-4xl font-medium text-gold sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-paper-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
