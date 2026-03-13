import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ClipboardCopy, FileText, Lightbulb, RefreshCw, Sparkles } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { callAI } from "../services/geminiService";
import { cn } from "../lib/utils";

type ToolId = "prd" | "hypothesis" | "kpi" | "feedback";

const toolOrder: ToolId[] = ["prd", "hypothesis", "kpi", "feedback"];

const toolMeta: Record<ToolId, { title: string; subtitle: string }> = {
  prd: { title: "PRD Generator", subtitle: "Turn a product idea into a structured PRD." },
  hypothesis: { title: "Hypothesis Validator", subtitle: "Validate assumptions and design experiments." },
  kpi: { title: "KPI Narrator", subtitle: "Write an exec-ready KPI narrative." },
  feedback: { title: "Feedback Analyzer", subtitle: "Theme and prioritize user feedback." },
};

const examplePrompts: Record<
  string,
  Record<ToolId, string>
> = {
  en: {
    prd: "Create a PRD for a feature that lets users save favorite products in an e-commerce app.",
    hypothesis: "Hypothesis: adding onboarding tooltips will increase feature adoption by 20%.",
    kpi: "Daily active users dropped from 50k to 40k this week. Analyze possible causes.",
    feedback: "Users complain the checkout process is confusing. Analyze the main themes.",
  },
  pt: {
    prd: "Crie um PRD para uma feature que permite salvar produtos favoritos em um app de e-commerce.",
    hypothesis: "Hipótese: adicionar tooltips de onboarding aumentará a adoção da feature em 20%.",
    kpi: "Os usuários ativos diários caíram de 50k para 40k essa semana. Analise as causas prováveis.",
    feedback: "Usuários reclamam que o processo de checkout é confuso. Analise os principais temas.",
  },
  es: {
    prd: "Crea un PRD para una feature que permite guardar productos favoritos en una app de e-commerce.",
    hypothesis: "Hipótesis: agregar tooltips de onboarding aumentará la adopción de la feature en un 20%.",
    kpi: "Los usuarios activos diarios cayeron de 50k a 40k esta semana. Analiza las causas probables.",
    feedback: "Los usuarios se quejan de que el proceso de pago es confuso. Analiza los temas principales.",
  },
};

const uiText: Record<string, { badge: string; generate: string; example: string; copy: string; copied: string; loading: string; empty: string; output: string; placeholder: string }> = {
  en: {
    badge: "AI POWERED",
    generate: "Generate",
    example: "Use example",
    copy: "Copy",
    copied: "Copied!",
    loading: "Generating…",
    empty: "Your output will appear here…",
    output: "Output",
    placeholder: "Paste context, constraints, and what success looks like…",
  },
  pt: {
    badge: "COM IA",
    generate: "Gerar",
    example: "Usar exemplo",
    copy: "Copiar",
    copied: "Copiado!",
    loading: "Gerando…",
    empty: "Seu resultado aparecerá aqui…",
    output: "Saída",
    placeholder: "Cole contexto, restrições e como você mede sucesso…",
  },
  es: {
    badge: "CON IA",
    generate: "Generar",
    example: "Usar ejemplo",
    copy: "Copiar",
    copied: "¡Copiado!",
    loading: "Generando…",
    empty: "Tu resultado aparecerá aquí…",
    output: "Salida",
    placeholder: "Pega contexto, restricciones y cómo mides el éxito…",
  },
};

export const AIToolkit = ({ lang }: { lang: string }) => {
  const safeLang = lang in examplePrompts ? lang : "en";
  const t = uiText[safeLang] ?? uiText.en;

  const [activeTool, setActiveTool] = useState<ToolId>("prd");
  const [inputs, setInputs] = useState<Record<ToolId, string>>({
    prd: "",
    hypothesis: "",
    kpi: "",
    feedback: "",
  });
  const [outputs, setOutputs] = useState<Record<ToolId, string>>({
    prd: "",
    hypothesis: "",
    kpi: "",
    feedback: "",
  });
  const [loading, setLoading] = useState<Record<ToolId, boolean>>({
    prd: false,
    hypothesis: false,
    kpi: false,
    feedback: false,
  });
  const [copied, setCopied] = useState<Record<ToolId, boolean>>({
    prd: false,
    hypothesis: false,
    kpi: false,
    feedback: false,
  });
  const [errors, setErrors] = useState<Record<ToolId, string>>({
    prd: "",
    hypothesis: "",
    kpi: "",
    feedback: "",
  });

  const active = useMemo(() => toolMeta[activeTool], [activeTool]);

  const setInput = (tool: ToolId, value: string) =>
    setInputs((prev) => ({ ...prev, [tool]: value }));
  const setOutput = (tool: ToolId, value: string) =>
    setOutputs((prev) => ({ ...prev, [tool]: value }));

  const handleExample = (tool: ToolId) => {
    setErrors((prev) => ({ ...prev, [tool]: "" }));
    setInput(tool, examplePrompts[safeLang][tool]);
  };

  const handleGenerate = async (tool: ToolId) => {
    const input = inputs[tool].trim();
    if (!input) return;
    setErrors((prev) => ({ ...prev, [tool]: "" }));
    setLoading((prev) => ({ ...prev, [tool]: true }));
    try {
      const text = await callAI(tool, input);
      setOutput(tool, text);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Failed to generate";
      setErrors((prev) => ({ ...prev, [tool]: message }));
    } finally {
      setLoading((prev) => ({ ...prev, [tool]: false }));
    }
  };

  const copyToClipboard = async (tool: ToolId) => {
    const text = outputs[tool];
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [tool]: true }));
    window.setTimeout(() => setCopied((prev) => ({ ...prev, [tool]: false })), 2000);
  };

  return (
    <section id="prd-generator" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider border border-indigo-100 mb-4"
          >
            <Sparkles size={14} /> {t.badge}
          </motion.div>
          <h2 className="text-4xl font-bold text-zinc-900 mb-3">AI Toolkit</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            {active.subtitle}
          </p>
        </div>

        <div className="bg-zinc-50 rounded-3xl border border-zinc-100 shadow-sm overflow-hidden">
          <div className="flex flex-wrap gap-2 p-3 border-b border-zinc-100 bg-white/60">
            {toolOrder.map((tool) => {
              const isActive = tool === activeTool;
              return (
                <button
                  key={tool}
                  onClick={() => setActiveTool(tool)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-bold transition-all border",
                    isActive
                      ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900"
                  )}
                >
                  {toolMeta[tool].title}
                </button>
              );
            })}
          </div>

          <div className="p-8">
            <div className="grid gap-8">
              <div className="bg-white rounded-3xl p-6 border border-zinc-100 shadow-sm">
                <div className="flex items-start justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{active.title}</h3>
                    <p className="text-sm text-zinc-500">{active.subtitle}</p>
                  </div>
                  <button
                    onClick={() => handleExample(activeTool)}
                    className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-medium text-sm transition-colors"
                  >
                    <Lightbulb size={18} className="text-amber-500" />
                    {t.example}
                  </button>
                </div>

                <textarea
                  value={inputs[activeTool]}
                  onChange={(e) => setInput(activeTool, e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full h-36 bg-white border border-zinc-200 rounded-2xl p-6 text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                />

                {errors[activeTool] && (
                  <div className="mt-4 px-4 py-3 rounded-2xl bg-rose-50 border border-rose-100 text-rose-700 text-sm">
                    {errors[activeTool]}
                  </div>
                )}

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => handleGenerate(activeTool)}
                    disabled={loading[activeTool] || !inputs[activeTool].trim()}
                    className={cn(
                      "px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-indigo-200",
                      loading[activeTool] || !inputs[activeTool].trim()
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-indigo-700 active:scale-95"
                    )}
                  >
                    {loading[activeTool] ? (
                      <RefreshCw size={20} className="animate-spin" />
                    ) : (
                      <Sparkles size={20} />
                    )}
                    {t.generate}
                  </button>
                </div>
              </div>

              <div className="relative min-h-[420px] bg-white rounded-3xl border border-zinc-100 shadow-xl overflow-hidden flex flex-col">
                <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-50 bg-zinc-50/50">
                  <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-widest">
                    <FileText size={16} /> {t.output}
                  </div>
                  {outputs[activeTool] && (
                    <button
                      onClick={() => copyToClipboard(activeTool)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 transition-all text-xs font-bold"
                    >
                      {copied[activeTool] ? (
                        <Check size={14} className="text-emerald-500" />
                      ) : (
                        <ClipboardCopy size={14} />
                      )}
                      {copied[activeTool] ? t.copied : t.copy}
                    </button>
                  )}
                </div>

                <div className="flex-1 p-8 overflow-y-auto max-h-[650px] prose prose-zinc max-w-none">
                  <AnimatePresence mode="wait">
                    {loading[activeTool] ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full py-20 text-zinc-400"
                      >
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 border-4 border-indigo-100 rounded-full" />
                          <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin" />
                        </div>
                        <p className="font-medium animate-pulse">{t.loading}</p>
                      </motion.div>
                    ) : outputs[activeTool] ? (
                      <motion.div
                        key="output"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="markdown-body"
                      >
                        <Markdown remarkPlugins={[remarkGfm]}>{outputs[activeTool]}</Markdown>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full py-20 text-zinc-300"
                      >
                        <FileText size={48} strokeWidth={1} className="mb-4" />
                        <p className="font-medium">{t.empty}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
