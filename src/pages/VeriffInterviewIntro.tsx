import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Briefcase, ChevronDown, GraduationCap } from "lucide-react";
import { portfolioData } from "../constants";
import "../veriff-dossier/dossier.css";

const CASE_BASE = "/veriff-business-case/case";

/**
 * Landing page before the Veriff dossier — for panels who don’t know the presenter yet.
 * Copy is intentionally in English (interviewer context).
 */
export default function VeriffInterviewIntro() {
  const en = portfolioData.languages.en;

  const impactSource = en.caseStudies ?? [];
  const impactCards = [
    { id: "relo-3", impactIndex: 0 },
    { id: "relo-2", impactIndex: 1 },
    { id: "relo-1", impactIndex: 0 },
    { id: "blu-1", impactIndex: 1 },
  ].map(({ id, impactIndex }) => {
    const cs = impactSource.find((c) => c.id === id);
    return {
      id,
      title: cs?.title ?? id,
      metric: cs?.impact?.[impactIndex] ?? "",
    };
  });

  useEffect(() => {
    document.title = `${portfolioData.name} · Veriff case intro`;
  }, []);

  return (
    <div className="veriff-dossier min-h-screen bg-surface text-on-surface">
      <div className="border-b border-outline-variant/20 bg-surface-low/80">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-12">
          <div />
          <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
            <Link to="/" className="underline-offset-4 transition hover:text-on-surface hover:underline">
              Main portfolio
            </Link>
            <Link
              to={CASE_BASE}
              className="inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline"
            >
              Skip to cas <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="grain relative overflow-hidden px-6 py-16 md:px-12 md:py-24">
        <div
          className="absolute -left-40 top-24 h-[22rem] w-[22rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary-container)), transparent 65%)" }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <h1 className="text-display-lg max-w-xl">
              <span className="gradient-text">{portfolioData.name}</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">{en.bio}</p>
            <div className="mt-10">
              <a
                href="#veriff-intro-more"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("veriff-intro-more")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-7 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-float)] transition hover:brightness-110"
              >
                See more
                <ChevronDown className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-surface-low p-2 shadow-[var(--shadow-ambient)]">
              <img
                src="/profile-about.png"
                alt={portfolioData.name}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="veriff-intro-more"
        className="scroll-mt-8 border-t border-outline-variant/15 bg-surface-low px-6 py-16 md:scroll-mt-12 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-headline">Education</h3>
              </div>
              <ul className="space-y-4">
                {en.education.map((edu) => (
                  <li key={`${edu.degree}-${edu.year}`} className="rounded-2xl bg-surface-lowest p-6 shadow-sm">
                    <p className="font-semibold text-on-surface">{edu.degree}</p>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {edu.institution}
                      <span className="text-on-surface-variant/70"> · {edu.year}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-headline">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {en.certifications.map((cert) => (
                  <li key={`${cert.name}-${cert.year}`} className="rounded-2xl bg-surface-lowest p-6 shadow-sm">
                    <p className="font-semibold text-on-surface">{cert.name}</p>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {cert.issuer}
                      <span className="text-on-surface-variant/70"> · {cert.year}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-outline-variant/15 pt-16">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-headline">Career path</h3>
            </div>
            <div className="relative pl-8 md:pl-10">
              <div className="absolute bottom-2 left-[11px] top-2 w-px bg-outline-variant/30 md:left-[15px]" aria-hidden />
              {en.careerPath.map((step) => (
                <div key={`${step.company}-${step.period}`} className="relative pb-10 last:pb-0">
                  <div className="absolute -left-1 top-1.5 h-3.5 w-3.5 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-float)] md:left-0.5" />
                  <div className="rounded-2xl bg-surface-lowest p-6 shadow-sm md:p-7">
                    <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                      <p className="font-semibold text-on-surface">{step.role}</p>
                      <p className="text-sm font-medium text-primary">{step.company}</p>
                    </div>
                    <p className="mt-1 text-label text-on-surface-variant">{step.period}</p>
                    <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-display-md">Recent impact snapshots</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((row) => (
              <div
                key={row.id}
                className="min-w-0 rounded-3xl border border-outline-variant/20 bg-surface-low p-6"
              >
                <p
                  className="text-sm font-semibold text-on-surface whitespace-nowrap overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  title={row.title}
                >
                  {row.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{row.metric}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to={CASE_BASE}
              className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-10 py-4 font-semibold text-primary-foreground shadow-[var(--shadow-float)] transition hover:brightness-110"
            >
              Continue to Business Case <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
