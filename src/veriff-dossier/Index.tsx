import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PhoneDemo from "./PhoneDemo";

const BASE = "/veriff-business-case/case";
const INTRO = "/veriff-business-case";

const SECTIONS = [
  { id: "brief", label: "Brief" },
  { id: "problem", label: "Problem" },
  { id: "opportunity", label: "Opportunity" },
  { id: "segment", label: "Segment" },
  { id: "discovery", label: "Discovery" },
  { id: "solution", label: "Solution" },
  { id: "demo", label: "Demo" },
  { id: "paths", label: "Paths" },
  { id: "tradeoffs", label: "Trade-offs" },
  { id: "delivery", label: "Delivery" },
  { id: "rollout", label: "Rollout" },
  { id: "metrics", label: "Metrics" },
  { id: "recommendation", label: "Recommendation" },
];

const SectionLabel = ({ chapter, title }: { chapter: string; title: string }) => (
  <div className="mb-10">
    <p className="text-label flex items-center gap-3 text-on-surface-variant">
      <span className="inline-block h-px w-8 bg-on-surface-variant/40" />
      {chapter}
    </p>
    <h2 className="text-display-md mt-4 max-w-3xl">{title}</h2>
  </div>
);

const Pill = ({
  children,
  tone = "neutral" as "neutral" | "primary" | "alert" | "success",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "primary" | "alert" | "success";
}) => {
  const tones = {
    neutral: "bg-surface-highest text-on-surface",
    primary: "bg-primary/10 text-primary",
    alert: "bg-tertiary-container text-tertiary-on-container",
    success: "bg-primary text-primary-foreground",
  } as const;
  return <span className={`text-label rounded-full px-2.5 py-1 ${tones[tone]}`}>{children}</span>;
};

export default function DossierIndex() {
  const { section } = useParams();
  const location = useLocation();
  const [active, setActive] = useState("brief");
  const briefCarouselRef = useRef<HTMLDivElement | null>(null);
  const [briefCanLeft, setBriefCanLeft] = useState(false);
  const [briefCanRight, setBriefCanRight] = useState(false);

  const scrollBriefCarousel = (dir: "left" | "right") => {
    const el = briefCarouselRef.current;
    if (!el) return;
    const delta = Math.max(280, Math.floor(el.clientWidth * 0.85));
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  useEffect(() => {
    const el = briefCarouselRef.current;
    if (!el) return;

    const update = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      // Small epsilon to avoid flicker from subpixel rounding.
      const eps = 2;
      setBriefCanLeft(el.scrollLeft > eps);
      setBriefCanRight(el.scrollLeft < maxScrollLeft - eps);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Keep active state in sync with scroll position.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // When route changes, scroll to the section (and also highlight it).
  useEffect(() => {
    // If user lands on /veriff-business-case/case, show the hero first.
    if (!section) {
      setActive("brief");
      return;
    }

    setActive(section);
    const el = document.getElementById(section);
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [location.key, section]);

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <header className="glass fixed left-1/2 top-4 z-50 mx-auto hidden w-[min(940px,calc(100vw-2rem))] max-w-none -translate-x-1/2 rounded-full px-2 py-2 shadow-[var(--shadow-ambient)] md:block">
        <nav className="flex max-w-full items-center gap-0.5 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link to={INTRO} className="text-label shrink-0 px-2 text-primary hover:opacity-90 sm:px-3">
            Intro
          </Link>
          <span className="mx-1 h-5 w-px shrink-0 bg-outline-variant/50" />
          <span className="text-label shrink-0 px-2 text-on-surface-variant sm:px-3">Veriff dossier</span>
          <span className="mx-1 h-5 w-px shrink-0 bg-outline-variant/50" />
          {SECTIONS.map((s) => (
            <Link
              key={s.id}
              to={s.id === "brief" ? BASE : `${BASE}/${s.id}`}
              className={`shrink-0 rounded-full px-2 py-1.5 text-[11px] transition-all sm:px-3 sm:text-xs ${
                active === s.id ? "bg-on-surface text-surface" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className="grain relative overflow-hidden px-6 pb-32 pt-32 md:px-12">
        <div
          className="absolute -right-40 -top-32 h-[40rem] w-[40rem] animate-float rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div
          className="absolute -bottom-32 -left-40 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--tertiary-container)), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <h1 className="text-display-lg max-w-5xl">
            Scaling <span className="gradient-text">Low-Friction</span>
            <br />
            Identity Signals.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Phone-Based Verification Strategy for Global Onboarding. A product discovery, evaluation, and rollout plan for
            adding phone as a new external signal inside Veriff&apos;s Database Verifications.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={BASE}
              className="rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-float)] transition hover:brightness-110"
            >
              Explore strategy
            </Link>
            <Link
              to={`${BASE}/demo`}
              className="rounded-full bg-surface-highest px-6 py-3.5 font-medium text-on-surface transition hover:bg-surface-container"
            >
              Try the demo →
            </Link>
          </div>

          <div className="mt-20 max-w-4xl rounded-3xl bg-surface-low p-8 md:p-10">
            <p className="text-label text-on-surface-variant">The thesis</p>
            <p className="mt-4 text-2xl leading-snug tracking-tight md:text-3xl">
              Phone-based verification is <em className="gradient-text not-italic">not</em> an identity replacement. It is a
              low-friction external signal that optimizes early-funnel conversion, reduces unnecessary verification costs, and
              routes users to the right level of identity assurance.
            </p>
          </div>
        </div>
      </section>

      <section id="brief" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="01 · Brief" title="First steps to validate the request." />
          <div className="relative">
            {briefCanLeft && (
              <button
                type="button"
                onClick={() => scrollBriefCarousel("left")}
                aria-label="Scroll left"
                className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-highest/90 p-3 text-on-surface shadow-[var(--shadow-float)] backdrop-blur transition hover:bg-surface-highest md:inline-flex"
              >
                <span aria-hidden className="text-lg leading-none">
                  ←
                </span>
              </button>
            )}
            {briefCanRight && (
              <button
                type="button"
                onClick={() => scrollBriefCarousel("right")}
                aria-label="Scroll right"
                className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-highest/90 p-3 text-on-surface shadow-[var(--shadow-float)] backdrop-blur transition hover:bg-surface-highest md:inline-flex"
              >
                <span aria-hidden className="text-lg leading-none">
                  →
                </span>
              </button>
            )}

          <div
            ref={briefCarouselRef}
            className="-mx-6 mt-8 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0"
          >
            <div className="flex snap-x snap-mandatory gap-6">
            {[
              {
                n: "1",
                t: "Clarify the problem",
                d: [
                  "Current onboarding flow",
                  "Highest drop-off points",
                  "Affected user volume",
                  "Priority regions",
                  "Global mobility user profile",
                  "Expected balance between risk and friction",
                ],
              },
              {
                n: "2",
                t: "Define the Hypothesis",
                d: "By adding phone number verification for global mobility users in top-of-funnel onboarding, we can reduce initial friction and increase conversion without compromising verification trust.",
              },
              {
                n: "3",
                t: "Evaluate Strategic Fit",
                d: [
                  "Before building, assess:",
                  "Why is solving this problem for this client strategically valuable for Veriff?",
                  "Does this align with the product vision?",
                  "Can it scale beyond one client?",
                  "Is there broader market demand?",
                  "Which countries have viable coverage?",
                  "Does this create competitive advantage?",
                ],
              },
              {
                n: "4",
                t: "Assess Feasibility",
                d: [
                  "Start technical discovery around:",
                  "Phone intelligence vendors",
                  "Available signals (SIM ownership, carrier data, tenure, risk score, disposable numbers, etc.)",
                  "Country coverage",
                  "Compliance and regulatory constraints",
                  "Verification cost",
                  "Data quality and reliability",
                ],
              },
              {
                n: "5",
                t: "Define Success Metrics",
                d: [
                  "Before rollout, define:",
                  "Onboarding conversion",
                  "Completion rate",
                  "Fraud rate",
                  "False positive rate",
                  "Verification latency",
                  "Cost per verification",
                ],
              },
            ].map((c) => (
              <div
                key={c.n}
                className="flex min-h-[260px] w-[84vw] shrink-0 snap-start flex-col rounded-3xl bg-surface-lowest p-6 sm:w-[420px] lg:min-h-[320px] lg:w-[440px]"
              >
                <p className="text-display-md gradient-text">{c.n}</p>
                <h3 className="mt-2 overflow-x-auto whitespace-nowrap text-headline [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {c.t}
                </h3>
                <div className="mt-3 min-w-0 flex-1 overflow-y-auto overflow-x-hidden pr-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {Array.isArray(c.d) ? (
                    <>
                      <p className="break-words text-sm font-medium text-on-surface-variant">{c.d[0]}</p>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-on-surface-variant">
                        {c.d.slice(1).map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="min-w-0 break-words">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="break-words text-sm leading-relaxed text-on-surface-variant">{c.d}</p>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-6 py-28 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel chapter="02 · Problem framing" title="Optimized for certainty. Not for early conversion." />
          </div>
          <div className="space-y-4 md:col-span-7">
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Today, Veriff&apos;s database verifications are a high-trust instrument: deeply localized, regulation-aware, and tightly bound to authoritative national sources.
              That precision comes at a price — checks are <strong className="text-on-surface">country-specific</strong>, sometimes{" "}
              <strong className="text-on-surface">costly</strong>, and often <strong className="text-on-surface">too heavy</strong> to run on every visitor at the very top of the funnel.
            </p>
            <div className="mt-6 rounded-3xl bg-surface-low p-8">
              <p className="text-label text-tertiary">Critical insight</p>
              <p className="mt-3 text-2xl leading-snug tracking-tight">
                &quot;The current flow is optimized for <span className="gradient-text">certainty</span>, not for <span className="gradient-text">early conversion</span>.&quot;
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Country-specific", "Coverage gaps for cross-border users"],
                ["Costly per-call", "Unsustainable on anonymous traffic"],
                ["Latency-sensitive", "Friction added before intent is proven"],
                ["Single-step", "Limited room for progressive assurance"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-surface-lowest p-5">
                  <p className="font-semibold">{k}</p>
                  <p className="mt-1 text-sm text-on-surface-variant">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="03 · Opportunity" title="Phone as an early-stage external signal." />
          <div className="grid gap-4 md:grid-cols-5">
            {[
              { t: "Top-of-funnel conversion", d: "Validate intent without scans or doc uploads.", k: "+ conv" },
              { t: "Lower friction", d: "Sub-second checks before heavy KYC.", k: "↓ friction" },
              { t: "Early fraud filtering", d: "Catch VoIP, recently ported, or high-risk lines.", k: "↑ trust" },
              { t: "Cost optimization", d: "Skip costly DB checks on bad-fit traffic.", k: "↓ cost" },
              { t: "Global coverage", d: "Reach cross-border users where DB coverage is thin.", k: "↑ reach" },
            ].map((c, i) => (
              <div
                key={c.t}
                className={`rounded-3xl p-6 ${
                  i === 1 ? "bg-[image:var(--gradient-primary)] text-primary-foreground" : "bg-surface-lowest"
                }`}
              >
                <p className={`text-label ${i === 1 ? "opacity-80" : "text-on-surface-variant"}`}>{c.k}</p>
                <p className="mt-3 font-semibold">{c.t}</p>
                <p className={`mt-2 text-sm leading-relaxed ${i === 1 ? "opacity-90" : "text-on-surface-variant"}`}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="segment" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="04 · Target segment" title="Global mobility platforms — where borders break onboarding." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-surface-low p-8">
              <p className="text-label text-on-surface-variant">User profile</p>
              <h3 className="mt-2 text-headline">Cross-border, fast-onboarding</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Cross-border users with limited local footprint",
                  "Need fast, mobile-first onboarding",
                  "Often don't match local government databases",
                  "Use international SIMs or recently issued local lines",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-on-surface-variant">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-surface-low p-8">
              <p className="text-label text-tertiary">Customer pain</p>
              <h3 className="mt-2 text-headline">Where the funnel bleeds</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["32%", "Drop-off in early onboarding"],
                  ["1.4×", "Cost per approved user"],
                  ["+18%", "Manual review queue growth"],
                  ["6/12", "Markets with thin DB coverage"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-2xl bg-surface-lowest p-5">
                    <p className="text-display-md gradient-text">{k}</p>
                    <p className="mt-1 text-sm text-on-surface-variant">{v}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs italic text-on-surface-variant">
                Illustrative figures used to frame the strategy narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="discovery" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="05 · Discovery plan" title="Three lenses. One coherent picture." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Customer discovery",
                tone: "Voice of the funnel",
                items: [
                  "Where does onboarding drop-off happen today?",
                  "Which checks are too costly or too slow at the top of the funnel?",
                  "How much risk is acceptable before escalating to full KYC?",
                  "Is the phone number already collected during onboarding?",
                ],
              },
              {
                title: "Internal discovery",
                tone: "Feasibility & alignment",
                items: [
                  "Engineering feasibility & integration cost",
                  "Compliance & data residency constraints",
                  "Data Science: signal quality & calibration",
                  "GTM packaging & pricing model",
                ],
              },
              {
                title: "Vendor discovery",
                tone: "Market scan",
                items: [
                  "Global coverage & per-country quality",
                  "Latency SLAs",
                  "Cost per lookup at scale",
                  "Available attributes (carrier, line, VoIP, SIM swap)",
                  "Privacy & compliance posture",
                ],
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl bg-surface-lowest p-7">
                <p className="text-label text-on-surface-variant">{c.tone}</p>
                <h3 className="mt-2 text-headline">{c.title}</h3>
                <ul className="mt-5 space-y-3">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-on-surface-variant">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solution" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="06 · Solution concept" title="The Phone Verification Layer." />
          <div className="grid gap-6 md:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground md:col-span-5">
              <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-2xl" />
              <p className="text-label opacity-80">Positioning</p>
              <h3 className="mt-3 text-headline">A signal for orchestration. Not a final identity decision.</h3>
              <p className="mt-5 text-sm leading-relaxed opacity-90">
                The layer enriches the user with possession, intelligence, and risk signals — feeding Veriff&apos;s orchestration
                engine to decide the next best step.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
              {[
                ["OTP / Possession", "Cryptographic possession check via SMS or voice."],
                ["Phone intelligence", "Carrier, country, validity, prepaid vs. postpaid."],
                ["Carrier · Line type", "Mobile, landline, VoIP, M2M classification."],
                ["VoIP detection", "Flag virtual lines often used in synthetic fraud."],
                ["SIM swap / port", "Recent porting or SIM swap activity in last N days."],
                ["Risk score", "Composite 0–100 score consumed by orchestration."],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-surface-low p-5">
                  <p className="font-semibold">{k}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="07 · Interactive demo" title="See the signal route a user." />
          <PhoneDemo />
        </div>
      </section>

      <section id="paths" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="08 · Implementation paths" title="Three ways to ship. One that wins." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                n: "Path 1",
                t: "OTP only",
                pros: ["Simple", "Cheap", "Fast to ship"],
                cons: ["Weak identity signal", "No fraud insight"],
                rec: false,
              },
              {
                n: "Path 2",
                t: "OTP + phone intelligence",
                pros: ["Best balance: speed, cost, coverage", "Clear orchestration signal", "Vendor-leverageable"],
                cons: ["Vendor integration required", "Rules definition needed"],
                rec: true,
              },
              {
                n: "Path 3",
                t: "Advanced risk scoring / ML",
                pros: ["Strongest fraud detection", "Adaptive over time"],
                cons: ["Complex", "Slower rollout", "Needs labeled data volume"],
                rec: false,
              },
            ].map((p) => (
              <div
                key={p.n}
                className={`relative rounded-3xl p-7 ${
                  p.rec ? "bg-surface-lowest shadow-[var(--shadow-float)] ring-2 ring-primary/40" : "bg-surface-low"
                }`}
              >
                {p.rec && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-label text-primary-foreground">
                    Recommended
                  </span>
                )}
                <p className="text-label text-on-surface-variant">{p.n}</p>
                <h3 className="mt-2 text-headline">{p.t}</h3>
                <div className="mt-5">
                  <p className="text-label text-primary">Pros</p>
                  <ul className="mt-2 space-y-1.5">
                    {p.pros.map((x) => (
                      <li key={x} className="text-sm text-on-surface-variant">
                        + {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <p className="text-label text-tertiary">Cons</p>
                  <ul className="mt-2 space-y-1.5">
                    {p.cons.map((x) => (
                      <li key={x} className="text-sm text-on-surface-variant">
                        − {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tradeoffs" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="09 · Trade-offs" title="What we trade — and how we compensate." />
          <div className="overflow-hidden rounded-3xl bg-surface-lowest">
            <div className="grid grid-cols-4 px-6 py-4 text-label text-on-surface-variant">
              <div>Dimension</div>
              <div className="text-center">OTP only</div>
              <div className="text-center">OTP + Intel</div>
              <div className="text-center">Risk ML</div>
            </div>
            {[
              ["Accuracy", "Low", "Medium", "High"],
              ["Cost", "Low", "Medium", "High"],
              ["Coverage", "High", "High", "Medium"],
              ["Latency", "Fast", "Fast", "Medium"],
              ["Fraud prevention", "Low", "Medium", "High"],
              ["Compliance risk", "Low", "Low", "Medium"],
              ["User friction", "Low", "Low", "Low"],
            ].map((row, i) => (
              <div
                key={row[0]}
                className={`grid grid-cols-4 items-center px-6 py-4 ${i % 2 ? "bg-surface-low" : ""}`}
              >
                <div className="font-medium">{row[0]}</div>
                {row.slice(1).map((cell, idx) => {
                  const dim = row[0];
                  let tone: "neutral" | "primary" | "alert" | "success" = "neutral";
                  if (cell === "Medium") tone = "alert";
                  else if (cell === "High" || cell === "Fast" || (cell === "Low" && dim === "Cost")) tone = "primary";
                  return (
                    <div key={idx} className="text-center">
                      <Pill tone={idx === 1 ? "primary" : tone}>{cell}</Pill>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-2xl tracking-tight">
            &quot;We trade some <span className="gradient-text">certainty</span> for speed and coverage — then compensate with{" "}
            <span className="gradient-text">orchestration</span>.&quot;
          </p>
        </div>
      </section>

      <section id="delivery" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="10 · Product delivery" title="A phased path from MVP to orchestration." />
          <div className="relative pl-10">
            <div className="absolute bottom-2 left-3 top-2 w-px bg-outline-variant/30" />
            {[
              {
                p: "Phase 1 · MVP",
                w: "0 – 8 weeks",
                items: ["OTP + basic phone lookup", "Non-blocking signal in flow", "Pilot with global mobility client"],
              },
              {
                p: "Phase 2 · Enrichment",
                w: "8 – 20 weeks",
                items: ["Carrier, line type, VoIP, risk flags", "Rules engine integration", "Reporting & observability"],
              },
              {
                p: "Phase 3 · Orchestration",
                w: "20+ weeks",
                items: ["Automated routing: fast-track, step-up, reject", "Expand to additional verticals", "Bundle into Veriff orchestration packaging"],
              },
            ].map((ph) => (
              <div key={ph.p} className="relative pb-12 last:pb-0">
                <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-float)]" />
                <div className="rounded-3xl bg-surface-low p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-headline">{ph.p}</h3>
                    <Pill tone="primary">{ph.w}</Pill>
                  </div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                    {ph.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-surface-lowest p-4 text-sm leading-relaxed text-on-surface-variant">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rollout" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="11 · Rollout strategy" title="Pilot. Measure. Expand." />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["01", "Pilot", "Launch with the requesting global mobility client."],
              ["02", "Limited markets", "Brazil, Mexico, Colombia, United States."],
              ["03", "Measure", "Conversion, cost, risk, latency at every step."],
              ["04", "Expand", "Other customers and verticals after validation."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-3xl bg-surface-lowest p-6">
                <p className="text-display-md gradient-text">{n}</p>
                <p className="mt-2 font-semibold">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metrics" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="12 · Success metrics" title="What we'll watch — and what success looks like." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Top-of-funnel conversion", "↑"],
              ["Verification completion rate", "↑"],
              ["Cost per approved user", "↓"],
              ["Drop-off before full KYC", "↓"],
              ["Fraud rate", "↓"],
              ["False positive rate", "↓"],
              ["Avg. verification latency", "↓"],
              ["Phone signal coverage by country", "↑"],
            ].map(([k, dir]) => (
              <div key={k} className="flex items-start justify-between gap-3 rounded-2xl bg-surface-low p-5">
                <p className="text-sm font-medium">{k}</p>
                <span
                  className={`rounded-full px-2 py-1 text-label ${
                    dir === "↑" ? "bg-primary/10 text-primary" : "bg-tertiary-container text-tertiary-on-container"
                  }`}
                >
                  {dir}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="recommendation" className="px-6 py-28 md:px-12">
        <div className="grain relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[image:var(--gradient-primary)] p-10 text-primary-foreground shadow-[var(--shadow-float)] md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl" />
          <p className="text-label opacity-80">Final recommendation</p>
          <h2 className="text-display-md mt-4 max-w-3xl">
            Prioritize Path 2 — <span className="opacity-90">OTP + phone intelligence</span> — as the low-friction external signal for top-of-funnel onboarding.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-90">
            Start with the global mobility segment. Validate in BR, MX, CO, and US. Then expand through Veriff&apos;s orchestration engine
            across customers and verticals.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={BASE} className="rounded-full bg-surface px-6 py-3.5 font-medium text-on-surface transition hover:bg-surface-lowest">
              Back to dossier start ↑
            </Link>
            <Link
              to={`${BASE}/demo`}
              className="rounded-full bg-primary-foreground/15 px-6 py-3.5 font-medium text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/25"
            >
              Re-run the demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-on-surface-variant md:px-12">
        Crafted as an interactive PM dossier · Veriff External Signals home assignment · Mock data only.
      </footer>
    </div>
  );
}

