import { useMemo, useState } from "react";

type Result = {
  country: string;
  flag: string;
  risk: "Low" | "Medium" | "High";
  signal: "Strong" | "Moderate" | "Weak";
  action: string;
  carrier: string;
  lineType: string;
  voip: string;
  simSwap: string;
  score: number;
};

const RESULTS: Record<string, Result> = {
  "+55": {
    country: "Brazil",
    flag: "🇧🇷",
    risk: "Low",
    signal: "Strong",
    score: 86,
    carrier: "Vivo / Claro",
    lineType: "Mobile",
    voip: "Not detected",
    simSwap: "None in 90 days",
    action: "Fast-track to lightweight onboarding. Run CPF DB only if step-up is required.",
  },
  "+52": {
    country: "Mexico",
    flag: "🇲🇽",
    risk: "Medium",
    signal: "Moderate",
    score: 64,
    carrier: "Telcel",
    lineType: "Mobile",
    voip: "Not detected",
    simSwap: "Low risk",
    action: "Combine with INE / CURP if higher assurance is required.",
  },
  "+57": {
    country: "Colombia",
    flag: "🇨🇴",
    risk: "Medium",
    signal: "Moderate",
    score: 61,
    carrier: "Claro CO",
    lineType: "Mobile",
    voip: "Not detected",
    simSwap: "Low risk",
    action: "Use as pre-check before Registraduría verification.",
  },
  "+1": {
    country: "United States",
    flag: "🇺🇸",
    risk: "Low",
    signal: "Strong",
    score: 88,
    carrier: "T-Mobile / Verizon",
    lineType: "Mobile",
    voip: "Not detected",
    simSwap: "None in 90 days",
    action: "Use phone intelligence as a top-of-funnel risk signal before SSN / DL checks.",
  },
};

const UNKNOWN: Result = {
  country: "Unknown",
  flag: "🌐",
  risk: "High",
  signal: "Weak",
  score: 22,
  carrier: "Unresolved",
  lineType: "Unknown",
  voip: "Possible",
  simSwap: "Unverifiable",
  action: "Escalate to full database verification.",
};

const COUNTRIES = [
  { code: "+55", label: "Brazil", flag: "🇧🇷", sample: "11 98123 4567" },
  { code: "+52", label: "Mexico", flag: "🇲🇽", sample: "55 1234 5678" },
  { code: "+57", label: "Colombia", flag: "🇨🇴", sample: "300 123 4567" },
  { code: "+1", label: "United States", flag: "🇺🇸", sample: "415 555 0142" },
];

const riskTone = (r: Result["risk"]) =>
  r === "Low"
    ? "bg-primary/10 text-primary"
    : r === "Medium"
      ? "bg-tertiary-container text-tertiary-on-container"
      : "bg-tertiary/15 text-tertiary";

export default function PhoneDemo() {
  const [code, setCode] = useState("+55");
  const [number, setNumber] = useState("11 98123 4567");
  const [running, setRunning] = useState(false);
  const [shown, setShown] = useState<Result | null>(RESULTS["+55"]);

  const detected = useMemo(() => RESULTS[code] ?? UNKNOWN, [code]);

  const run = () => {
    setRunning(true);
    setShown(null);
    window.setTimeout(() => {
      setShown(detected);
      setRunning(false);
    }, 900);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="rounded-3xl bg-surface-low p-8 lg:col-span-2">
        <p className="text-label text-on-surface-variant">Interactive sandbox</p>
        <h3 className="mt-2 text-headline">Enter a phone number</h3>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
          Pick a country code to simulate how the orchestration engine consumes phone signals.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => {
                setCode(c.code);
                setNumber(c.sample);
              }}
              className={`rounded-full px-3.5 py-2 text-sm transition-all ${
                code === c.code
                  ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-float)]"
                  : "bg-surface-highest text-on-surface hover:bg-surface-container"
              }`}
            >
              <span className="mr-1.5">{c.flag}</span>
              {c.code}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <label className="text-label text-on-surface-variant">Phone number</label>
          <div className="mt-2 flex items-center gap-2 rounded-2xl bg-surface-highest p-2 pl-4 transition-all focus-within:ring-2 focus-within:ring-primary/40">
            <span className="text-sm text-on-surface-variant">{code}</span>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="flex-1 bg-transparent text-on-surface outline-none placeholder:text-on-surface-variant/60"
              placeholder="Type number"
            />
            <button
              type="button"
              onClick={run}
              disabled={running}
              className="rounded-xl bg-[image:var(--gradient-primary)] px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
            >
              {running ? "Verifying…" : "Verify"}
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            { k: "OTP", v: "Possession" },
            { k: "Intel", v: "Carrier · VoIP" },
            { k: "Score", v: "0 – 100" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl bg-surface-lowest p-4">
              <p className="text-label text-on-surface-variant">{m.k}</p>
              <p className="mt-1 text-sm font-medium">{m.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-surface-lowest p-8 grain lg:col-span-3">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div className="relative">
          <div className="flex items-center justify-between">
            <p className="text-label text-on-surface-variant">Verification result</p>
            <span
              className={`rounded-full px-2.5 py-1 text-label ${
                running ? "bg-surface-highest text-on-surface-variant" : "bg-primary/10 text-primary"
              }`}
            >
              {running ? "Processing" : "Live"}
            </span>
          </div>

          {!shown ? (
            <div className="mt-12 space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 rounded-md shimmer bg-surface-low"
                  style={{ width: `${90 - i * 10}%` }}
                />
              ))}
            </div>
          ) : (
            <div className="fade-up">
              <div className="mt-4 flex items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{shown.flag}</span>
                    <h4 className="text-display-md">{shown.country}</h4>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${riskTone(shown.risk)}`}>
                      Risk · {shown.risk}
                    </span>
                    <span className="rounded-full bg-surface-highest px-3 py-1 text-xs font-medium text-on-surface">
                      Signal · {shown.signal}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-label text-on-surface-variant">Trust score</p>
                  <p className="text-display-md gradient-text">{shown.score}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Carrier", shown.carrier],
                  ["Line type", shown.lineType],
                  ["VoIP", shown.voip],
                  ["SIM swap", shown.simSwap],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-surface-low p-4">
                    <p className="text-label text-on-surface-variant">{k}</p>
                    <p className="mt-1 text-sm font-medium">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[image:var(--gradient-primary)] p-5 text-primary-foreground">
                <p className="text-label opacity-80">Recommended orchestration</p>
                <p className="mt-2 text-base leading-relaxed">{shown.action}</p>
              </div>

              <div className="mt-6 grid grid-cols-5 items-center gap-2 text-[11px]">
                {["Phone in", "Verify", "Score", "Orchestrate", "Next step"].map((s, i) => (
                  <div key={s} className="flex items-center">
                    <div className="flex-1 text-center">
                      <div
                        className={`mx-auto h-2.5 w-2.5 rounded-full ${
                          i <= 3 ? "bg-primary pulse-dot" : "bg-surface-highest"
                        }`}
                      />
                      <p className="mt-2 text-on-surface-variant">{s}</p>
                    </div>
                    {i < 4 && <div className="h-px w-full bg-outline-variant/40" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

