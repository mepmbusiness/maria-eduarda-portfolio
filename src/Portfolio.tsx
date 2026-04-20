import { motion } from 'motion/react';
import { Mail, Linkedin, Github, ChevronRight, ChevronLeft, BarChart3, Users, Lightbulb, Target, GraduationCap, Award, Briefcase, Sparkles, Cpu, Quote, Wrench, Download } from 'lucide-react';
import { AIToolkit } from './components/PRDGenerator';
import GlobalExpansionGlobe from './components/GlobalExpansionGlobe';
import { portfolioData } from './constants';
import type { CaseStudy } from './types';
import { cn } from './lib/utils';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight text-zinc-900">{portfolioData.name}</span>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <Link to="/" className="hover:text-zinc-900 transition-colors">{content.ui.home}</Link>
            <Link to="/sobre-mim" className="hover:text-zinc-900 transition-colors">{content.ui.about}</Link>
            <Link to="/cases" className="hover:text-zinc-900 transition-colors">{content.ui.work}</Link>
            <Link to="/recommendations" className="hover:text-zinc-900 transition-colors">{content.ui.testimonialsTitle}</Link>
            <Link to="/contato" className="hover:text-zinc-900 transition-colors">{content.ui.contact}</Link>
          </div>
          
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg">
            <button
              onClick={() => setLang('en')}
              className={cn(
                "px-2 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1.5",
                lang === 'en' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              <span>🇺🇸</span> EN
            </button>
            <button
              onClick={() => setLang('pt')}
              className={cn(
                "px-2 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1.5",
                lang === 'pt' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              <span>🇧🇷</span> PT
            </button>
            <button
              onClick={() => setLang('es')}
              className={cn(
                "px-2 py-1 text-[10px] font-bold rounded-md transition-all flex items-center gap-1.5",
                lang === 'es' ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              <span>🇪🇸</span> ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] pt-32 pb-20 px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold uppercase tracking-wider">
              {content.title}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider border border-indigo-100">
              <Sparkles size={12} /> {content.ui.aiBadge}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-8 leading-[1.1] tracking-tight max-w-4xl">
            Construindo produtos que <span className="text-indigo-600">geram impacto</span> e resolvem problemas reais.
          </h1>
          <div className="flex flex-wrap justify-end gap-4">
            <Link
              to="/sobre-mim"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-8 py-4 font-medium text-white transition-all hover:bg-zinc-800"
            >
              {lang === 'pt' ? 'Vamos nos conhecer' : lang === 'es' ? 'Conozcámonos' : "Let's meet"} <ChevronRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study, index, lang }: { study: CaseStudy; index: number; lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden relative bg-zinc-900">
        {study.videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-label={study.title}
          >
            <source src={study.videoUrl} type="video/mp4" />
          </video>
        ) : study.id === 'relo-2' ? (
          <GlobalExpansionGlobe />
        ) : (
          <img
            src={study.imageUrl}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {study.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-900">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-1">{study.title}</h3>
          </div>
        </div>
        <p className="text-base text-zinc-600 leading-relaxed mb-8">
          {study.description}
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Target size={14} className="text-indigo-500" /> {content.ui.problem}
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Lightbulb size={14} className="text-amber-500" /> {content.ui.solution}
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">{study.solution}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <BarChart3 size={14} className="text-emerald-500" /> {content.ui.impact}
            </h4>
            <ul className="space-y-2">
              {study.impact.map((item: string, i: number) => (
                <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const testimonialInitials = (name: string) =>
  name
    .replace(/\([^)]*\)/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || '?';

const TestimonialAvatar = ({ name, photoUrl }: { name: string; photoUrl?: string }) => {
  const [failed, setFailed] = useState(false);
  const ring = 'shrink-0 w-14 h-14 rounded-full border-2 border-white shadow-md ring-1 ring-zinc-200/90';

  if (!photoUrl || failed) {
    return (
      <div
        className={`${ring} bg-indigo-100 text-indigo-800 flex items-center justify-center text-sm font-bold tracking-tight`}
        aria-hidden
      >
        {testimonialInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={photoUrl}
      alt={name}
      width={56}
      height={56}
      className={`${ring} object-cover bg-zinc-100`}
      onError={() => setFailed(true)}
    />
  );
};

const Testimonials = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  const [openOrg, setOpenOrg] = useState<string | null>(null);

  const orgs = ['Relo Metrics', 'Blu', 'BRAVET'] as const;

  const byOrg = (org: (typeof orgs)[number]) =>
    (content.testimonials ?? []).filter((t: any) => (t.org ?? t.company) === org);

  const toggleOrg = (org: (typeof orgs)[number]) =>
    setOpenOrg((cur) => (cur === org ? null : org));

  return (
    <section id="testimonials" className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <h2 className="text-4xl font-bold text-zinc-900 mb-4 flex items-center gap-3">
            <Quote className="text-indigo-600 shrink-0" size={32} strokeWidth={2} />
            {content.ui.testimonialsTitle}
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">{content.ui.testimonialsDesc}</p>
        </motion.div>

        <div className="space-y-4">
          {orgs.map((org) => {
            const items = byOrg(org);
            const isOpen = openOrg === org;
            const countLabel =
              lang === 'pt'
                ? `${items.length} recomendação${items.length === 1 ? '' : 'ões'}`
                : lang === 'es'
                  ? `${items.length} recomendación${items.length === 1 ? '' : 'es'}`
                  : `${items.length} recommendation${items.length === 1 ? '' : 's'}`;

            return (
              <div key={org} className="rounded-3xl border border-zinc-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleOrg(org)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-zinc-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`testimonials-${org}`}
                >
                  <div className="min-w-0">
                    <div className="text-xl md:text-2xl font-extrabold text-zinc-900 tracking-tight">
                      {org}
                    </div>
                    <div className="text-sm text-zinc-500 mt-1">{countLabel}</div>
                  </div>
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 transition-transform",
                      isOpen ? "rotate-90" : "rotate-0"
                    )}
                    aria-hidden
                  >
                    <ChevronRight size={18} />
                  </div>
                </button>

                {isOpen ? (
                  <div id={`testimonials-${org}`} className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      {items.map((t: any, idx: number) => (
                        <motion.blockquote
                          key={`${t.name}-${idx}`}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: idx * 0.05 }}
                          className="relative flex flex-col h-full p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md hover:border-indigo-100/80 transition-all duration-300"
                        >
                          <Quote
                            className="absolute top-6 right-6 text-indigo-200"
                            size={40}
                            strokeWidth={1.25}
                            aria-hidden
                          />
                          <header className="relative z-10 flex gap-4 items-start mb-6">
                            <TestimonialAvatar name={t.name} photoUrl={t.photoUrl} />
                            <div className="min-w-0 flex-1">
                              <div className="font-bold text-zinc-900 leading-snug">{t.name}</div>
                              <div className="text-sm text-zinc-500 mt-1">
                                {t.role}
                                <span className="text-zinc-400"> · </span>
                                {t.company}
                              </div>
                              {t.relationship ? (
                                <div className="text-xs text-zinc-400 mt-2 leading-relaxed">{t.relationship}</div>
                              ) : null}
                            </div>
                          </header>

                          <p className="text-zinc-600 leading-relaxed text-[15px] whitespace-pre-line grow relative z-10">
                            “{t.quote}”
                          </p>
                        </motion.blockquote>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ lang, embedded = false }: { lang: string; embedded?: boolean }) => {
  const content = portfolioData.languages[lang];
  const skills = embedded
    ? content.skills.filter((g) => {
        const c = g.category.toLowerCase();
        return !c.includes('estratégia') && !c.includes('execução') && !c.includes('execution') && !c.includes('liderazgo') && !c.includes('strategy');
      })
    : content.skills;
  
  return (
    <section id={embedded ? undefined : "skills"} className={embedded ? "" : "py-24 bg-zinc-50"}>
      <div className={embedded ? "" : "max-w-7xl mx-auto px-6"}>
        <div className={embedded ? "grid grid-cols-1 sm:grid-cols-2 gap-8" : "grid md:grid-cols-3 gap-12"}>
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className={embedded ? "text-sm font-bold text-zinc-900 mb-3 flex items-center gap-2" : "text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2"}>
                {idx === 0 && <Target size={20} className="text-indigo-600" />}
                {idx === 1 && <BarChart3 size={20} className="text-indigo-600" />}
                {idx === 2 && <Users size={20} className="text-indigo-600" />}
                {idx === 3 && <Wrench size={20} className="text-indigo-600" />}
                {skillGroup.category}
              </h3>
              <div className={embedded ? "flex flex-wrap gap-1.5" : "flex flex-wrap gap-2"}>
                {skillGroup.items.map(skill => (
                  <span key={skill} className={embedded ? "px-2.5 py-1.5 bg-white border border-zinc-200 rounded-lg text-xs text-zinc-600 font-medium" : "px-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-600 font-medium"}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <section
      id="about"
      className="scroll-mt-24 flex min-h-[calc(68vh-4rem)] items-center overflow-visible px-6 pb-12 pt-24 md:pb-14 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex w-full justify-center"
        >
          <div className="relative w-full max-w-[440px]">
            <img
              src="/profile-about.png"
              alt="Profile"
              className="mx-auto block h-auto w-full max-h-[min(520px,62vh)] rounded-[32px] object-contain object-center shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center text-white p-5 text-center text-xs font-bold leading-tight rotate-12">
              {content.ui.experienceBadge}
            </div>
          </div>
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-5">{content.ui.about}</h2>
          <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
            {content.bio}
          </p>

          <div className="mt-10">
            <Skills lang={lang} embedded />
          </div>
        </div>
      </div>
    </section>
  );
};

const AIProcess = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];

  return (
    <section className="py-24 bg-indigo-900 text-white px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-xs font-bold uppercase tracking-widest mb-8">
              <Cpu size={16} /> {content.aiProcess.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {content.aiProcess.title}
            </h2>
            <p className="text-indigo-100/80 text-xl leading-relaxed mb-6">
              {content.aiProcess.description}
            </p>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-300/90">
              {content.aiProcess.stackLabel}
            </p>
            <p className="mb-10 text-sm font-mono text-indigo-200/90 tracking-tight break-words md:text-base">
              {content.aiProcess.stack}
            </p>
          </div>
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                y: [0, -10, 0, 10, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-[48px] shadow-2xl shadow-indigo-500/20"
            >
              <div className="bg-zinc-900 rounded-[46px] p-8 md:p-12">
                <pre className="text-xs md:text-sm font-mono text-indigo-300 overflow-hidden">
                  <code>{`// AI Prompt Context
{
  "role": "Senior AI PM",
  "task": "Build professional portfolio",
  "stack": ["React", "Tailwind", "Motion"],
  "goal": "Showcase impact & AI expertise",
  "status": "COMPLETED_BY_AI"
}`}</code>
                </pre>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Sparkles className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{content.aiProcess.curation}</div>
                    <div className="text-xs text-indigo-300/60">{content.aiProcess.execution}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationAndCareer = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <section className="-mt-6 rounded-t-3xl bg-zinc-50 px-6 py-20 pt-14 shadow-[0_-6px_32px_rgba(0,0,0,0.06)] md:-mt-8 md:pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Trajetória Profissional */}
          <div>
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-zinc-900 md:mb-10">
              <Briefcase className="text-indigo-600" /> {content.ui.careerTitle}
            </h2>
            <div className="space-y-8">
              {content.careerPath.map((step, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-zinc-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white" />
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{step.period}</span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-1">{step.role}</h3>
                  <p className="text-sm text-zinc-500 font-medium mb-2">{step.company}</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formação e Certificações */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-10 flex items-center gap-3">
                <GraduationCap className="text-indigo-600" /> {content.ui.educationTitle}
              </h2>
              <div className="space-y-6">
                {content.education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                    <h3 className="font-bold text-zinc-900">{edu.degree}</h3>
                    <p className="text-sm text-zinc-500">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-10 flex items-center gap-3">
                <Award className="text-indigo-600" /> {content.ui.certificationsTitle}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {content.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-zinc-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                      <Award className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-900">{cert.name}</h3>
                      <p className="text-xs text-zinc-500">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <footer id="contact" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">{content.ui.footerTitle}</h2>
        <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
          {content.ui.footerDesc}
        </p>
        <div className="flex justify-center flex-wrap gap-6 mb-20">
          <a href={`mailto:${portfolioData.email}`} className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors group relative">
            <Mail size={24} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Email</span>
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors group relative">
            <Linkedin size={24} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600 transition-colors group relative">
            <Github size={24} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-zinc-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
          </a>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-indigo-400" /> {content.ui.builtWithAi}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio({ page }: { page: 'home' | 'about' | 'cases' | 'recommendations' | 'contact' | 'aiToolkit' }) {
  const [lang, setLang] = useState('pt');
  const caseStudiesScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt' || browserLang === 'en' || browserLang === 'es') {
      setLang(browserLang);
    } else {
      setLang('en'); // Default for other languages
    }
  }, []);

  const content = portfolioData.languages[lang];
  const caseStudies = content.caseStudies ?? [];

  const scrollCaseStudies = (direction: 'left' | 'right') => {
    const el = caseStudiesScrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 520);
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        {page === 'home' ? (
          <Hero lang={lang} />
        ) : page === 'about' ? (
          <>
            <About lang={lang} />
            <EducationAndCareer lang={lang} />

            <div className="px-6 pb-24">
              <div className="max-w-7xl mx-auto flex justify-end">
                <Link
                  to="/cases"
                  className="px-7 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center gap-2"
                >
                  {lang === 'pt' ? 'Veja meus cases' : lang === 'es' ? 'Ver mis cases' : 'See my cases'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </>
        ) : page === 'cases' ? (
          <>
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 max-w-3xl">
                  <h2 className="text-4xl font-bold text-zinc-900 mb-4">{content.ui.caseStudiesTitle}</h2>
                  <p className="text-zinc-500 text-lg max-w-xl">
                    {content.ui.caseStudiesDesc}
                  </p>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => scrollCaseStudies('left')}
                    className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:bg-zinc-50 md:flex"
                    aria-label={lang === 'pt' ? 'Anterior' : lang === 'es' ? 'Anterior' : 'Previous'}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollCaseStudies('right')}
                    className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-md transition hover:bg-zinc-50 md:flex"
                    aria-label={lang === 'pt' ? 'Próximo' : lang === 'es' ? 'Siguiente' : 'Next'}
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div
                    ref={caseStudiesScrollRef}
                    className="flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-4 pl-0 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] md:pl-14 md:pr-14 [&::-webkit-scrollbar]:hidden"
                  >
                    {caseStudies.map((study, idx) => (
                      <div
                        key={study.id}
                        className="w-[min(100%,calc(100vw-3rem))] shrink-0 snap-center sm:w-[min(100%,420px)] md:w-[460px] lg:w-[480px]"
                      >
                        <CaseStudyCard study={study} index={idx} lang={lang} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 flex justify-end">
                  <Link
                    to="/recommendations"
                    className="px-7 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all inline-flex items-center gap-2"
                  >
                    Recommendations <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
            <AIProcess lang={lang} />
            <AIToolkit lang={lang} />
          </>
        ) : page === 'aiToolkit' ? (
          <AIToolkit lang={lang} />
        ) : page === 'contact' ? (
          <>
            <section className="px-6 py-20">
              <div className="mx-auto max-w-7xl text-center">
                <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{content.ui.footerTitle}</h2>
                <p className="mx-auto mb-12 max-w-2xl text-xl text-zinc-500">{content.ui.footerDesc}</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-indigo-600"
                  >
                    <Mail size={24} />
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      Email
                    </span>
                  </a>
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-indigo-600"
                  >
                    <Linkedin size={24} />
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      LinkedIn
                    </span>
                  </a>
                  <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-indigo-600"
                  >
                    <Github size={24} />
                    <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                      GitHub
                    </span>
                  </a>
                </div>
                <div className="mt-10 flex justify-center">
                  <a
                    href={portfolioData.resumeDocx.href}
                    download={portfolioData.resumeDocx.downloadAs}
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    <Download size={18} className="shrink-0 text-indigo-600" aria-hidden />
                    {content.ui.downloadResumeDocx}
                  </a>
                </div>
              </div>
            </section>
            <AIProcess lang={lang} />
          </>
        ) : (
          <>
            <Testimonials lang={lang} />
            <div className="px-6 pb-24">
              <div className="max-w-7xl mx-auto flex justify-end">
                <Link
                  to="/contato"
                  className="px-7 py-4 border border-zinc-200 text-zinc-900 rounded-xl font-medium hover:bg-zinc-50 transition-all inline-flex items-center gap-2"
                >
                  {lang === 'pt' ? 'Contato' : lang === 'es' ? 'Contacto' : 'Contact'} <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      {page === 'home' ? <Footer lang={lang} /> : null}
    </div>
  );
}
