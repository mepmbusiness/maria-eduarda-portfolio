export const callAI = async (tool: string, input: string): Promise<string> => {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tool, input }),
  });

  const contentType = response.headers.get("content-type") || "";
  const raw = await response.text();
  const tryJson = () => {
    if (!raw) return null;
    try {
      return JSON.parse(raw) as any;
    } catch {
      return null;
    }
  };

  const json = contentType.includes("application/json") ? tryJson() : tryJson();

  if (!response.ok) {
    const message =
      (json && (json.error || json.message)) ||
      raw ||
      `Failed to generate (HTTP ${response.status})`;
    throw new Error(message);
  }

  const text = json?.text ?? raw;
  if (!text) throw new Error("Failed to generate");
  return text;
};
