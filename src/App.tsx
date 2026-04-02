import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, ChevronRight, BarChart3, Users, Lightbulb, Target, GraduationCap, Award, Briefcase, Sparkles, Cpu, Quote } from 'lucide-react';
import { AIToolkit } from './components/PRDGenerator';
import { portfolioData } from './constants';
import { cn } from './lib/utils';
import { useState, useEffect } from 'react';

const Navbar = ({ lang, setLang }: { lang: string, setLang: (l: string) => void }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight text-zinc-900">{portfolioData.name}</span>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
            <a href="#work" className="hover:text-zinc-900 transition-colors">{content.ui.work}</a>
            <a href="#testimonials" className="hover:text-zinc-900 transition-colors">{content.ui.testimonialsTitle}</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">{content.ui.skills}</a>
            <a href="#prd-generator" className="hover:text-zinc-900 transition-colors">{content.ui.prd}</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">{content.ui.about}</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">{content.ui.contact}</a>
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
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
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
            {lang === 'pt' ? (
              <>Construindo produtos que <span className="text-indigo-600">geram impacto</span> e resolvem problemas reais.</>
            ) : lang === 'es' ? (
              <>Construyendo productos que <span className="text-indigo-600">generan impacto</span> y resuelven problemas reales.</>
            ) : (
              <>Building products that <span className="text-indigo-600">drive impact</span> and solve real problems.</>
            )}
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed">
            {content.bio}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
            >
              {content.ui.viewProjects} <ChevronRight size={18} />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-zinc-200 text-zinc-900 rounded-xl font-medium hover:bg-zinc-50 transition-all flex items-center gap-2"
            >
              LinkedIn <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study, index, lang }: { study: any, index: number, lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border border-zinc-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={study.imageUrl}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
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
            <p className="text-sm text-zinc-400 font-medium">{study.company} • {study.role}</p>
          </div>
        </div>
        <p className="text-zinc-600 mb-8 line-clamp-2">
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {content.testimonials.map((t, idx) => (
            <motion.blockquote
              key={`${t.name}-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative flex flex-col h-full p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md hover:border-indigo-100/80 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-indigo-200" size={40} strokeWidth={1.25} aria-hidden />
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
    </section>
  );
};

const Skills = ({ lang }: { lang: string }) => {
  const content = portfolioData.languages[lang];
  
  return (
    <section id="skills" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {content.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2">
                {idx === 0 && <Target size={20} className="text-indigo-600" />}
                {idx === 1 && <BarChart3 size={20} className="text-indigo-600" />}
                {idx === 2 && <Users size={20} className="text-indigo-600" />}
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-600 font-medium">
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
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src="https://picsum.photos/seed/pm-profile/600/800"
              alt="Profile"
              className="rounded-[40px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full flex items-center justify-center text-white p-6 text-center text-sm font-bold leading-tight rotate-12">
              {content.ui.experienceBadge}
            </div>
          </div>
        </motion.div>
        <div>
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">{content.ui.about}</h2>
          <p className="text-xl text-zinc-600 leading-relaxed mb-8 italic">
            "{content.philosophy}"
          </p>
          <div className="space-y-6 text-zinc-500">
            {lang === 'pt' ? (
              <>
                <p>
                  Olá! Eu sou a Maria. Minha jornada no mundo da tecnologia começou com uma curiosidade insaciável por como os dados podem prever comportamentos. Hoje, como Senior AI Product Manager, foco em humanizar a inteligência artificial.
                </p>
                <p>
                  Além do trabalho, sou entusiasta de maratonas e acredito que a disciplina do esporte reflete diretamente na minha resiliência ao gerenciar produtos complexos. Adoro viajar e conhecer novas culturas, o que me ajuda a manter uma perspectiva global e empática sobre os usuários.
                </p>
              </>
            ) : lang === 'es' ? (
              <>
                <p>
                  ¡Hola! Soy Maria. Mi viaje en el mundo de la tecnología comenzó con una curiosidad insaciable por cómo los datos pueden predecir comportamientos. Hoy, como Senior AI Product Manager, me enfoco en humanizar la inteligencia artificial.
                </p>
                <p>
                  Más allá del trabajo, soy entusiasta de las maratones y creo que la disciplina del deporte se refleja directamente en mi resiliencia al gestionar productos complejos. Me encanta viajar y conocer nuevas culturas, lo que me ayuda a mantener una perspectiva global y empática sobre los usuarios.
                </p>
              </>
            ) : (
              <>
                <p>
                  Hello! I'm Maria. My journey in the tech world began with an insatiable curiosity about how data can predict behavior. Today, as a Senior AI Product Manager, I focus on humanizing artificial intelligence.
                </p>
                <p>
                  Beyond work, I'm a marathon enthusiast and believe that the discipline of sports directly reflects in my resilience when managing complex products. I love traveling and experiencing new cultures, which helps me maintain a global and empathetic perspective on users.
                </p>
              </>
            )}
            <p>
              {lang === 'pt' 
                ? 'Foco em resultados (outcomes) em vez de apenas entregas (outputs). Acredito em ciclos rápidos de aprendizado, validação constante de hipóteses e em manter o usuário no centro de todas as decisões.' 
                : lang === 'es'
                ? 'Enfoque en resultados (outcomes) en lugar de solo entregas (outputs). Creo en ciclos rápidos de aprendizaje, validación constante de hipótesis y en mantener al usuario en el centro de todas las decisiones.'
                : 'Focus on outcomes rather than just outputs. I believe in rapid learning cycles, constant hypothesis validation, and keeping the user at the center of all decisions.'}
            </p>
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
            <p className="text-sm md:text-base font-mono text-indigo-200/90 tracking-tight mb-10 break-words">
              {content.aiProcess.stack}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {content.aiProcess.items.map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-indigo-200/60">{item.desc}</p>
                </div>
              ))}
            </div>
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
    <section className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Trajetória Profissional */}
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-10 flex items-center gap-3">
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

export default function App() {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt' || browserLang === 'en' || browserLang === 'es') {
      setLang(browserLang);
    } else {
      setLang('en'); // Default for other languages
    }
  }, []);

  const content = portfolioData.languages[lang];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        
        <section id="work" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 mb-4">{content.ui.caseStudiesTitle}</h2>
                <p className="text-zinc-500 text-lg max-w-xl">
                  {content.ui.caseStudiesDesc}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-bold">
                  {lang === 'pt' ? 'Estratégia' : lang === 'es' ? 'Estrategia' : 'Strategy'}
                </div>
                <div className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-bold">
                  {lang === 'pt' ? 'Impacto' : lang === 'es' ? 'Impacto' : 'Impact'}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {content.caseStudies.map((study, idx) => (
                <CaseStudyCard key={study.id} study={study} index={idx} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <Testimonials lang={lang} />
        <Skills lang={lang} />
        <About lang={lang} />
        <AIProcess lang={lang} />
        <AIToolkit lang={lang} />
        <EducationAndCareer lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
