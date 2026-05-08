import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const BASE = "/veriff-business-case/case";
const INTRO = "/veriff-business-case";

const SECTIONS = [
  { id: "brief", label: "Summary" },
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem Definition" },
  { id: "discovery", label: "Planning" },
  { id: "solution", label: "Development" },
  { id: "delivery", label: "Delivery" },
  { id: "metrics", label: "Metrics" },
  { id: "recommendation", label: "Recommendation" },
];

const SectionLabel = ({
  chapter,
  title,
  titleClassName,
}: {
  chapter: string;
  title: string;
  titleClassName?: string;
}) => (
  <div className="mb-10">
    <p className="text-label flex items-center gap-3 text-on-surface-variant">
      <span className="inline-block h-px w-8 bg-on-surface-variant/40" />
      {chapter}
    </p>
    <h2 className={`text-display-md mt-4 ${titleClassName ?? "max-w-3xl"}`}>{title}</h2>
  </div>
);

const FlowHorizontalArrow = () => (
  <span className="flex w-[14px] shrink-0 items-center justify-center self-center text-sm font-semibold text-primary" aria-hidden>
    →
  </span>
);

const flowCardTones = {
  default: "border-outline-variant/10 bg-surface-low text-on-surface",
  start: "border-primary/45 bg-primary/12 font-semibold text-primary",
  end: "border-primary/40 bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground shadow-[var(--shadow-ambient)]",
  dropoff:
    "border-tertiary/70 bg-tertiary-container/85 font-semibold text-tertiary-on-container shadow-[var(--shadow-float)] ring-2 ring-tertiary/30",
} as const;

const FlowHorizontalCard = ({
  center,
  wide,
  narrow,
  tone = "default",
  children,
}: {
  center?: boolean;
  wide?: boolean;
  narrow?: boolean;
  tone?: keyof typeof flowCardTones;
  children: React.ReactNode;
}) => (
  <div
    className={`flex shrink-0 flex-col justify-center rounded-xl border px-2 py-2 text-[11px] leading-tight break-words ${flowCardTones[tone]} ${
      wide ? "w-[218px] min-h-[88px]" : narrow ? "w-[92px] min-h-[72px]" : "w-[138px] min-h-[88px]"
    } ${center ? "text-center" : "text-left"}`}
  >
    {children}
  </div>
);

/** Shrinks one horizontal row (no wrap, no horizontal scroll) to fit the container width. */
function ScaledFitRow({
  children,
  align = "stretch",
}: {
  children: React.ReactNode;
  align?: "stretch" | "end";
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [{ scale, height }, setLayout] = useState({ scale: 1, height: 0 });

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      const ow = outer.clientWidth;
      const iw = inner.scrollWidth;
      const ih = inner.offsetHeight;
      if (iw <= 0 || ow <= 0 || ih <= 0) return;
      const s = Math.min(1, (ow - 1) / iw);
      setLayout({ scale: s, height: ih * s });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);
    window.addEventListener("resize", update);
    const id = requestAnimationFrame(update);
    void document.fonts?.ready?.then(() => update());
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
    // Row content is static; intrinsic width updates via ResizeObserver / fonts / resize only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={outerRef}
      className="mt-8 w-full min-w-0 overflow-hidden"
      style={{ height: height > 0 ? height : undefined, minHeight: height > 0 ? undefined : "5rem" }}
    >
      <div
        ref={innerRef}
        style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
        className={`flex w-max flex-nowrap gap-1 ${align === "end" ? "items-end" : "items-stretch"}`}
      >
        {children}
      </div>
    </div>
  );
}

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
            Phone Verification for{" "}
            <span className="gradient-text">&quot;Database Verifications&quot;</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            How to reduce onboarding drop-off without compromising fraud control — a product opportunity for global mobility
            clients.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to={BASE}
              className="rounded-full bg-[image:var(--gradient-primary)] px-6 py-3.5 font-medium text-primary-foreground shadow-[var(--shadow-float)] transition hover:brightness-110"
            >
              Explore strategy
            </Link>
          </div>
        </div>
      </section>

      <section id="brief" className="bg-surface-low px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="00 · Summary" title="First steps to validate the request." />
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="flex min-h-0 flex-col">
              <p className="text-label text-on-surface-variant">Brief</p>
              <div className="relative mt-4 flex min-h-[260px] flex-1 flex-col rounded-3xl bg-surface-lowest p-6 lg:min-h-[320px] lg:p-8">
                <img
                  src="/veriff-logo.png"
                  alt="Veriff logo"
                  className="absolute right-6 top-6 h-7 w-auto object-contain"
                  loading="lazy"
                />
                <div className="flex-1 space-y-4 pt-14 text-base leading-relaxed text-on-surface-variant lg:space-y-5 lg:pt-[4.25rem] lg:text-lg">
                  <p>
                    Veriff&apos;s Database Verifications product cross-checks identity attributes (name, DOB, address, document
                    number) against authoritative data sources. No document scan required.
                  </p>
                  <p>
                    A global mobility client has formally requested adding phone number based verification to execute low
                    friction user data validation in top-of-funnel onboarding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex min-h-0 flex-col">
              <p className="text-label text-on-surface-variant">Next steps</p>
              <div className="mt-4 flex min-h-[260px] flex-1 lg:min-h-[320px]">
                <div className="flex w-full flex-1 flex-col rounded-3xl bg-surface-lowest p-6 lg:p-8">
                  <ol className="flex min-h-0 flex-1 flex-col divide-y divide-outline-variant/15">
                    {[
                      "Clarify the problem",
                      "Define the Hypothesis",
                      "Evaluate Strategic Fit",
                      "Assess Feasibility",
                      "Define Success Metrics",
                    ].map((t, i) => (
                      <li key={t} className="flex min-h-0 flex-1 items-center gap-4 py-4 first:pt-0 last:pb-0">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold tabular-nums text-primary">
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 text-headline text-on-surface">{t}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="context" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            chapter="01 · Context"
            title="Clarifying the problem"
          />
          <div className="mt-8 space-y-4">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-3xl bg-surface-low p-6 text-center sm:p-8">
                <p className="text-label text-on-surface-variant">Motivation</p>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant lg:text-base">
                  The client requested phone number verification to reduce friction at the top of the onboarding funnel.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-surface-low p-6 sm:p-8">
                <p className="text-label text-on-surface-variant">Business Perspective</p>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant lg:text-base">
                  Phone-based verification creates an opportunity to improve onboarding conversion while reducing unnecessary
                  verification costs. This specific customer is a high-volume buyer of identity infrastructure, operates
                  across dozens of markets at the same time, and a successful rollout creates a natural expansion vector
                  into other countries and Veriff products.
                </p>
              </div>
              <div className="rounded-3xl bg-surface-low p-6 sm:p-8">
                <p className="text-label text-on-surface-variant">Customer perspective</p>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant lg:text-base">
                  Global mobility clients need faster onboarding with less friction. Today, Veriff&apos;s current verification
                  flow does not offer a lightweight trust signal early in the journey, which can create unnecessary friction,
                  user drop-off, and higher verification costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            chapter="02 · Problem Definition"
            title="Optimized for certainty. Not for early conversion."
            titleClassName="max-w-none whitespace-nowrap overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          />
          <div className="mt-2 max-w-6xl space-y-4">
            <div className="rounded-3xl border border-outline-variant/15 bg-surface-lowest p-6 sm:p-8">
              <h3 className="text-headline text-on-surface">Current Flow</h3>
              {(() => {
                const steps = [
                  { text: "Start onboarding", conv: "100%" },
                  { text: "Enter First Name", conv: "92%" },
                  { text: "Enter Last Name", conv: "95%" },
                  { text: "Enter Document Number", conv: "75%" },
                  { text: "Check authoritative databases", conv: "95%" },
                  { text: "Verification result\n(match / no match / insufficient data)", conv: "85%" },
                ] as const;
                const lines = (text: string) =>
                  text.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ));
                const convAbove = (conv: string) => (
                  <span className="text-[8px] font-normal tabular-nums text-on-surface-variant/60" title="Step rate">
                    {conv}
                  </span>
                );
                return (
                  <ScaledFitRow align="end">
                    {steps.flatMap((step, i) => {
                      const tone =
                        i === 0 ? "start" : step.text === "Enter Document Number" ? "dropoff" : "default";
                      return [
                        <div key={`cur-wrap-${i}`} className="flex flex-col items-center gap-1">
                          <div className="flex min-h-[10px] items-end justify-center">
                            {i > 0 ? convAbove(step.conv) : null}
                          </div>
                          <FlowHorizontalCard center tone={tone}>
                            {lines(step.text)}
                          </FlowHorizontalCard>
                        </div>,
                        <FlowHorizontalArrow key={`cur-a-${i}`} />,
                      ];
                    })}
                    <div key="cur-out-wrap" className="flex flex-col items-center gap-1">
                      <span className="text-[8px] font-medium text-on-surface-variant/75">Overall rate</span>
                      <span className="text-[10px] font-semibold tabular-nums text-on-surface">52.9%</span>
                      <FlowHorizontalCard center tone="end">
                        <span className="block">Continue onboarding</span>
                      </FlowHorizontalCard>
                    </div>
                  </ScaledFitRow>
                );
              })()}
            </div>

            <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
              <div className="min-w-0">
                <h3 className="text-headline text-on-surface">Problems</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    ["52.9%", "Overall conversion rate"],
                    ["↑35%", "Failure rate on Global Mobility Client vs. Local Client"],
                  ].map(([k, v]) => (
                    <div key={v} className="rounded-2xl bg-surface-low p-5">
                      <p className="text-display-md gradient-text">{k}</p>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-headline text-on-surface">Opportunities</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-6 text-primary-foreground">
                    <p className="text-label opacity-80">↓ failure rate</p>
                    <p className="mt-3 font-semibold">Higher coverage</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">
                      Reduced insufficient data and false-negative rate
                    </p>
                  </div>
                  <div className="rounded-3xl bg-[image:var(--gradient-primary)] p-6 text-primary-foreground">
                    <p className="text-label opacity-80">↑ overall conversion rate</p>
                    <p className="mt-3 font-semibold">Lower friction</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-90">Light checks before heavy KYC.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-surface-low p-6 sm:p-8">
              <p className="text-label text-on-surface-variant">Hypothesis</p>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant lg:text-base">
                By adding phone number verification for global mobility users in top-of-funnel onboarding, we can reduce
                initial friction and increase conversion by 10–15%, while keeping the fraud rate below 2%.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="discovery" className="bg-surface-low px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="03 · Planning" title="Implementation paths" />
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl border border-outline-variant/15 bg-surface-lowest p-6 sm:p-8">
              <h3 className="text-headline text-on-surface">Expected Flow</h3>
              {(() => {
                type ExpectedFlowStep =
                  | string
                  | { strikethroughTop: string; title: string };

                const steps: ExpectedFlowStep[] = [
                  "Start onboarding",
                  "Enter First Name",
                  "Enter Last Name",
                  {
                    strikethroughTop: "Enter Document Number",
                    title: "Enter phone number",
                  },
                  "Check authoritative databases",
                  "Verification result\n(match / no match / insufficient data)",
                ];
                const lines = (text: string) =>
                  text.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ));
                const stepBody = (step: ExpectedFlowStep) =>
                  typeof step === "string" ? (
                    lines(step)
                  ) : (
                    <>
                      <span className="mb-1 block text-[10px] leading-tight text-on-surface-variant line-through opacity-80">
                        {step.strikethroughTop}
                      </span>
                      <span className="block">{step.title}</span>
                    </>
                  );
                return (
                  <ScaledFitRow>
                    {steps.flatMap((step, i) => [
                      <FlowHorizontalCard center tone={i === 0 ? "start" : "default"} key={`exp-${i}`}>
                        {stepBody(step)}
                      </FlowHorizontalCard>,
                      <FlowHorizontalArrow key={`exp-a-${i}`} />,
                    ])}
                    <FlowHorizontalCard center tone="end" key="exp-end">
                      <p>Continue onboarding</p>
                    </FlowHorizontalCard>
                  </ScaledFitRow>
                );
              })()}
            </div>
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
                    p.rec ? "bg-surface-lowest shadow-[var(--shadow-float)] ring-2 ring-primary/40" : "bg-surface-lowest"
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
            <div className="rounded-3xl border border-outline-variant/15 bg-surface-lowest p-6 sm:p-8">
              <h3 className="text-headline text-on-surface">Trade-offs</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-on-surface-variant">
                What we trade — and how we compensate.
              </p>
              <div className="mt-8 overflow-hidden rounded-3xl border border-outline-variant/10 bg-surface-lowest">
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
          </div>
        </div>
      </section>

      <section id="solution" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="04 · Development" title="Requirements" />
          <div className="grid gap-6 md:grid-cols-12">
            <div className="grid gap-3 sm:grid-cols-2 md:col-span-12">
              {[
                [
                  "Functional",
                  [
                    "New /verify/phone API endpoint.",
                    "Accepts E.164 phone number.",
                    "Returns: carrier, line type, risk score (0–100), confidence level (HIGH/MEDIUM/LOW), recommended action (PASS/STEP_UP/ESCALATE/BLOCK), and coverage status.",
                  ],
                ],
                [
                  "Non-functional",
                  [
                    "p95 latency <800ms.",
                    "99.9% uptime SLA.",
                    "Graceful degradation if vendor unavailable.",
                    "No phone number storage beyond 24h (data minimisation).",
                    "Full audit log per check.",
                  ],
                ],
                [
                  "Decision logic",
                  [
                    "IF line_type = \"voip\" OR risk_score >= 80 → BLOCK",
                    "IF line_type = \"prepaid\" AND risk_score >= 60 → ESCALATE to document",
                    "IF risk_score < 30 AND carrier_match = true → PASS (HIGH confidence)",
                    "IF risk_score 30–59 → STEP_UP (OTP required)",
                    "IF coverage_unavailable → ESCALATE to document (fail-safe)",
                  ],
                ],
                [
                  "Compliance and privacy",
                  [
                    "Phone numbers processed under GDPR Article 6(1)(b) (contract performance) or (f) (legitimate interests) — legal basis to be confirmed per market.",
                    "Data minimisation: only carrier, line type, and risk score stored. Raw phone number hashed after check completion.",
                    "No cross-client data sharing of phone intelligence results.",
                    "OTP flow requires explicit user-facing disclosure in consent language provided by client.",
                    "Data Processing Agreement update required with new vendor(s).",
                  ],
                ],
              ].map(([k, items]: [string, string[]]) => (
                <div key={k} className="rounded-2xl bg-surface-low p-5">
                  <p className="font-semibold">{k}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-on-surface-variant">
                    {items.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-0.5 text-on-surface-variant/50">-</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="05 · Product delivery" title="Rollout Strategy" />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["01", "Pilot", "Launch with the requesting global mobility client."],
              ["02", "Measure", "Conversion, cost, risk, latency at every step."],
              ["03", "Expand", "Other customers and verticals after validation."],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-3xl bg-surface-low p-6">
                <p className="text-display-md gradient-text">{n}</p>
                <p className="mt-2 font-semibold">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{d}</p>
              </div>
            ))}
          </div>
          <SectionLabel chapter=" " title="A phased path from MVP to orchestration." />
          <div className="relative mt-10 pl-10">
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

      <section id="metrics" className="px-6 py-28 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel chapter="06 · Post Delivery" title="Post Delivery" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Conversion target", "+10–15%"],
              ["Fraud rate", "<2%"],
              ["Failure rate", "-35%"],
              ["Latency", "<800ms"],
            ].map(([k, sub]) => (
              <div key={k} className="flex items-start justify-between gap-3 rounded-2xl bg-surface-low p-5">
                <div className="min-w-0">
                  <p className="text-sm font-medium">{k}</p>
                  <p className="mt-1 text-label text-on-surface-variant">{sub}</p>
                </div>
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
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-on-surface-variant md:px-12">
        Crafted as an interactive PM dossier · Veriff External Signals home assignment · Mock data only.
      </footer>
    </div>
  );
}

