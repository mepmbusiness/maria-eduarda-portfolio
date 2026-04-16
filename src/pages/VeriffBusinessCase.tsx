import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Standalone "ghost" page for Veriff interview case presentation.
 * Route: /veriff-business-case (not linked from the main portfolio).
 */
export default function VeriffBusinessCase() {
  useEffect(() => {
    document.title = 'Veriff Identity Case Study | Product Design';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface font-sans antialiased">
      <nav className="fixed top-0 z-50 mx-auto flex w-full max-w-full items-center justify-between bg-surface/70 px-8 py-4 shadow-2xl shadow-black/5 backdrop-blur-md">
        <div className="text-xl font-bold tracking-tighter text-primary">Veriff Identity Case Study</div>
        <div className="hidden items-center gap-8 md:flex">
          <span className="border-b-2 border-primary pb-1 font-medium tracking-tight text-primary opacity-90">
            Portfolio
          </span>
          <span className="font-medium tracking-tight text-on-surface-variant opacity-80">Process</span>
          <span className="font-medium tracking-tight text-on-surface-variant opacity-80">About</span>
        </div>
        <Link
          to="/"
          className="scale-95 rounded-full bg-primary px-6 py-2 font-medium tracking-tight text-on-primary transition-transform transition-opacity duration-300 hover:opacity-80 active:scale-90"
        >
          Back to Portfolio
        </Link>
      </nav>

      <main className="pt-24">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-20 lg:grid-cols-2 lg:py-32">
          <div>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Product Case Study</span>
            <h1 className="mb-6 text-[3.5rem] font-bold leading-[1.1] tracking-tighter text-on-background">
              Streamlining Identity Verification
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-on-surface-variant">
              Redesigning Veriff&apos;s mobile onboarding experience to enhance security while maintaining zero friction for
              global users.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="rounded-full bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:opacity-90"
              >
                View Prototype
              </button>
              <div className="flex items-center gap-2 px-6 py-4 font-medium text-on-surface-variant">
                <span className="material-symbols-outlined">play_circle</span>
                Process Video
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary-container/20 blur-3xl" />
            <img
              alt="Veriff app on smartphone"
              className="relative z-10 h-auto w-full rounded-3xl object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Q5M23GOTul7aHBE7l0iWiswSR5Sp_DiHiydgF_ZqjCctr02VTvd0h12eJIRhCIwWpxlEYHAsHeO_Sv3_tJ8f2pTkprCoq5UP1sQ0t9g8Un6_Vkb1BoKl09LkIS2bK7NDdOyVbnh71zzRjxA4ob8qKXf2zBTcrcQsQM_DhMLJd8mbezn-rQnZeC1N3qtW5X0VX48PgV5ja2k57er9BUojXJ5c58WlRK8i9_yspZfZaaEBJPJH6lnBFMQEblf5BZzHMTbMrAAFEm88"
            />
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Onboarding Speed</span>
              <div className="mt-4">
                <span className="text-5xl font-black text-primary">-45%</span>
                <p className="mt-2 text-on-surface-variant">Reduction in time-to-verify</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-primary p-8 text-on-primary">
              <span className="text-sm font-bold uppercase tracking-widest text-on-primary/70">Global Reach</span>
              <div className="mt-4">
                <span className="text-5xl font-black">190+</span>
                <p className="mt-2 text-on-primary/80">Countries supported with localized UX</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-tertiary-container p-8">
              <span className="text-sm font-bold uppercase tracking-widest text-on-tertiary-container/70">
                Fraud Prevention
              </span>
              <div className="mt-4">
                <span className="text-5xl font-black text-on-tertiary-container">+22%</span>
                <p className="mt-2 text-on-tertiary-container/80">Increase in automated threat detection</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-8 text-4xl font-bold tracking-tight">The Challenge</h2>
              <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">
                Identity verification is often the most significant point of friction in a user&apos;s journey. Veriff needed a
                solution that balanced rigorous compliance and security with a high-conversion user experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span className="text-on-surface-variant">Inconsistent document capture quality leading to retries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span className="text-on-surface-variant">Cognitive overload during complex verification steps.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-1 text-primary">check_circle</span>
                  <span className="text-on-surface-variant">Lack of real-time feedback for error correction.</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface-container-low lg:col-span-7">
              <img
                alt="User frustrated with old UI"
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv3Rwwnj-g68qelD6mD5U2UKOfp-9uoErwOxfzvIo5R-1_n0RcVR6w_iInbSII0Je64yW-hknqBiTLRO9ZCSegOKKMueIXG5Kcbgw-4fwwQbfaKwIO8KV-ioZ9rJjl7s0kVzOhBnyGB1qow393EGovXGQUg9eLwvj1DUyfkSI75icSmYb760XWfy2vpoLmk5Dn3FJa6s3R_5rjuZzp9Y-Ym7G_gvJCoCse7bPlMoLVBmg3dV5zjUNVMLWbsLBbeh3KaTgAh8y_HJk9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-16 text-center text-4xl font-bold tracking-tight">A Rigorous Process</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-xl border-t-4 border-primary bg-surface-container-lowest p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/30">
                  <span className="material-symbols-outlined text-primary">search</span>
                </div>
                <h4 className="mb-3 font-bold">Discovery</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Analyzing 10k+ drop-off points and conducting user interviews.
                </p>
              </div>
              <div className="mt-8 rounded-xl border-t-4 border-primary bg-surface-container-lowest p-8 shadow-sm md:mt-12">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/30">
                  <span className="material-symbols-outlined text-primary">architecture</span>
                </div>
                <h4 className="mb-3 font-bold">Ideation</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">Mapping seamless flows for 200+ document types.</p>
              </div>
              <div className="rounded-xl border-t-4 border-primary bg-surface-container-lowest p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/30">
                  <span className="material-symbols-outlined text-primary">draw</span>
                </div>
                <h4 className="mb-3 font-bold">Prototyping</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  High-fidelity testing with varying lighting conditions.
                </p>
              </div>
              <div className="mt-8 rounded-xl border-t-4 border-primary bg-surface-container-lowest p-8 shadow-sm md:mt-12">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/30">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <h4 className="mb-3 font-bold">Testing</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  A/B testing against legacy systems in live production.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-8 py-24">
          <h2 className="mb-16 text-4xl font-bold tracking-tight">The Solution: Intelligent Automation</h2>
          <div className="mb-24 grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-block rounded bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary-container">
                Feature 01
              </div>
              <h3 className="mb-6 text-3xl font-bold">Real-Time Capture Guidance</h3>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                We implemented an AI-driven overlay that provides instant haptic and visual feedback. If a user&apos;s ID is
                blurry or poorly lit, the system guides them in real-time before they even press the shutter.
              </p>
              <div className="rounded-xl bg-surface-container-low p-6">
                <span className="font-bold italic text-primary">
                  &quot;It feels like someone is holding your hand through the process.&quot; Beta tester
                </span>
              </div>
            </div>
            <div className="rounded-3xl bg-surface-container-highest p-4">
              <img
                alt="ID capture interface"
                className="w-full rounded-2xl shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NCoa9IiwBDl5re-_px0HrsYeiF9toa2rR1X-63JkUXYZ-oW8tC5uYgdAwZxp-t0jw7o7loVaJik62Ptokuo4J9gS0VGA9srs1w5AH-U0TNmXdrm159wvTdKsfElEUBU37peBJ89qgGekRDjeddEy2ua_aGEeEebZpmwMMwVeccUi4HrdQN_RzePBGjw4lSXoZOMrsfqC1MjND6N0LqAhh_PQxsVKQ-gplqt_dmpN4ZPY_gCrcJrvHF_J7hc9SdeeAp9YcYx4wcPC"
              />
            </div>
          </div>
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="order-2 rounded-3xl bg-surface-container-highest p-4 md:order-1">
              <img
                alt="Liveness detection UI"
                className="w-full rounded-2xl shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp7Zenh3TF0SpIcaFwklxNZ-H_GjcMbZvQeZPOz4IDxbSV5n6rDS-udNaKFZvIPTLlJvqZgZ3X2oqN9jaE7u57qjs0oD5kSHtYeiIj6cI9aCS52R5P7o1ZXLc14IZLK7uznm-93c-rm_q7UBJTDn159Hbo4wUM6k38knbpqlIHHzoSH2oavo8_x3GjKS2uH2sX8prFiadlWmLM0JacVp6qfgH_0oOfcIl5DID4-h_8oRHMCv8bcUtvF1KclOOuQ9bARMvjMMlwqVJD"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-4 inline-block rounded bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-wider text-on-secondary-container">
                Feature 02
              </div>
              <h3 className="mb-6 text-3xl font-bold">Passive Liveness Detection</h3>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                Instead of asking users to perform complex gestures, we utilized passive liveness detection. This happens in
                the background, verifying authenticity without requiring additional user effort.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 rounded-lg bg-surface-container-low p-4 text-center">
                  <div className="text-2xl font-bold text-primary">0%</div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant">User Action Required</div>
                </div>
                <div className="flex-1 rounded-lg bg-surface-container-low p-4 text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-[10px] font-bold uppercase text-on-surface-variant">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-on-background px-8 py-24 text-center text-on-primary">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-4xl font-bold">Securing the Digital Future</h2>
            <p className="mb-12 text-lg leading-relaxed text-on-primary/70">
              The redesign for Veriff proved that security doesn&apos;t have to come at the cost of usability. By prioritizing
              clarity and intelligent automation, we created a verification experience that users actually trust and finish.
            </p>
            <div className="mx-auto mb-12 h-1 w-24 bg-primary" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <div className="text-3xl font-bold text-primary-container">10M+</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-on-primary/50">Identities Verified</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-container">4.8/5</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-on-primary/50">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-container">85%</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-on-primary/50">Conversion Lift</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-container">2ms</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-on-primary/50">Avg. Response Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex w-full flex-col items-center justify-between gap-6 bg-surface-container-low px-8 py-12 md:flex-row">
        <div className="text-lg font-black text-on-background">Veriff</div>
        <div className="text-center text-sm uppercase tracking-wide text-on-surface-variant">
          © 2024 Product Designer Portfolio. Built with Organic Brutalism.
        </div>
        <div className="flex gap-8">
          <span className="text-sm uppercase tracking-wide text-on-surface-variant opacity-80">LinkedIn</span>
          <span className="text-sm uppercase tracking-wide text-on-surface-variant opacity-80">Dribbble</span>
          <span className="text-sm uppercase tracking-wide text-on-surface-variant opacity-80">Email</span>
        </div>
      </footer>

      <style>{`
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
