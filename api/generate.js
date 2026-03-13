export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { tool, input } = req.body || {};
  if (!tool || !input) return res.status(400).json({ error: "Missing tool or input" });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API key not configured on server" });
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = buildPrompt(tool, input);
  try {
    const result = await model.generateContent(prompt);
    return res.status(200).json({ text: result.response.text() });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}

function buildPrompt(tool, input) {
  const base = `You are a senior product manager helping analyze product problems and propose structured solutions. Always respond with clearly structured sections, concise bullet points, and practical product thinking. Include: Assumptions, Risks, Success Metrics, Next Steps.\n\n`;
  switch (tool) {
    case "prd":
      return base + `TASK: Generate a PRD.\nOUTPUT SECTIONS:\n1) Problem\n2) Context\n3) Goals\n4) Non-goals\n5) Personas/JTBD\n6) User Stories\n7) Requirements\n8) Acceptance Criteria\n9) Metrics\n10) Risks & Mitigations\n11) Rollout Plan\n\nINPUT:\n${input}`;
    case "hypothesis":
      return base + `TASK: Validate a product hypothesis.\nOUTPUT SECTIONS:\n1) Hypothesis Restatement\n2) Key Assumptions\n3) Validation Plan\n4) Experiments (MVP + A/B)\n5) Metrics & Thresholds\n6) Instrumentation Events\n7) Risks/Confounders\n8) Next Steps\n\nINPUT:\n${input}`;
    case "kpi":
      return base + `TASK: Write an exec-ready KPI narrative.\nOUTPUT SECTIONS:\n1) Exec Summary (max 5 bullets)\n2) What changed\n3) Likely drivers (hypotheses)\n4) Risks\n5) Recommended actions\n6) Questions to answer next\n\nINPUT:\n${input}`;
    case "feedback":
      return base + `TASK: Theme and prioritize user feedback.\nOUTPUT SECTIONS:\n1) Themes\n2) Representative quotes (short)\n3) Sentiment\n4) Impact vs Effort (suggested)\n5) Proposed Epics\n6) Next Steps\n\nINPUT:\n${input}`;
    default:
      return base + `TASK: General PM assistance.\nINPUT:\n${input}`;
  }
}

