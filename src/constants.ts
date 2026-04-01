import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Maria Eduarda Martins",
  email: "mariaemartins01@gmail.com",
  linkedin: "https://linkedin.com/in/maria-eduarda-martins-a42098204",
  languages: {
    pt: {
      title: "AI Product Manager · ML & Computer Vision",
      bio: "Product Manager com experiência liderando produtos de IA, visão computacional e expansão global de plataformas. Apaixonada por transformar modelos complexos em soluções escaláveis e centradas no usuário.",
      philosophy: "Acredito que os melhores produtos de IA nascem da combinação entre rigor técnico e empatia pelo usuário. Meu foco é criar sistemas que sejam úteis, mensuráveis e preparados para escalar.",
      skills: [
        {
          category: "IA & Machine Learning",
          items: ["Computer Vision", "LLM & Prompt Engineering", "Model Evaluation", "Human-in-the-Loop", "AI Frameworks"]
        },
        {
          category: "Estratégia de Produto",
          items: ["Product Vision", "Roadmapping", "Data-Driven Decisions", "Market Expansion", "Self-Service Platforms"]
        },
        {
          category: "Execução & Liderança",
          items: ["Métricas & OKRs", "Agile/Scrum", "Cross-functional Teams", "Process Improvement", "Internal Training"]
        }
      ],
      caseStudies: [
        {
          id: "1",
          title: "Globalização de Plataforma de IA para Detecção de Marcas",
          company: "Relo Metrics",
          role: "Senior Product Manager — ML & Computer Vision",
          period: "Set 2025 — Presente",
          description: "Liderei a evolução de uma plataforma de visão computacional para detecção de exposição de marcas patrocinadoras em mídia esportiva, tornando-a globalmente escalável e agnóstica de idioma.",
          problem: "A plataforma era limitada a mercados de língua inglesa e dependia de operações manuais intensivas, impedindo expansão global e aumentando custos operacionais.",
          solution: "Conduzi a globalização da plataforma para mercados complexos como o Japão, escalei o modelo de Verbal Mentions para qualquer idioma e construí um framework interno de avaliação de modelos e prompts de IA com ciclos human-in-the-loop.",
          impact: [
            "Redução de 69,5% nos custos operacionais",
            "Mesma equipe passou a suportar 3× mais venues simultaneamente",
            "Detecção de marcas habilitada em qualquer idioma, incluindo japonês"
          ],
          tags: ["Computer Vision", "LLM", "MLOps"],
          imageUrl: "https://picsum.photos/seed/relo-metrics/800/600"
        },
        {
          id: "2",
          title: "Reestruturação de Produto e Framework de Métricas",
          company: "Blu",
          role: "Product Manager",
          period: "Jul 2023 — Set 2025",
          description: "Liderei iniciativas de produto e dados que transformaram a performance operacional e financeira do produto core, com resultados expressivos em rentabilidade, velocidade de processos e rastreabilidade.",
          problem: "O produto não possuía métricas estruturadas, o processo de aprovação levava quase 5 dias, a taxa de migração de contas era de apenas 23% e alarmes de perda financeira eram difíceis de detectar a tempo.",
          solution: "Implementei estratégias orientadas por dados, um framework de métricas com reporting automatizado e um processo de monitoramento via dashboard para detecção rápida de problemas financeiros e operacionais.",
          impact: [
            "Aumento de 43,5% na rentabilidade mensal do produto core",
            "+323% na taxa de migração de contas (23,67% → >76% sustentado)",
            "Redução de 87,6% no tempo de aprovação (4,93 dias → <1 dia)"
          ],
          tags: ["Product Strategy", "Data", "Fintech", "Process Improvement"],
          imageUrl: "https://picsum.photos/seed/blu-fintech/800/600"
        }
      ],
      testimonials: [
        {
          quote:
            "Trabalhei de perto com a Maria em vários projetos durante o tempo dela na Relo Metrics e fiquei muito impressionada com as habilidades dela como Product Manager. Ela enfrentou cada desafio de frente e entregou muito em pouquíssimo tempo. Poucas pessoas conseguem entrar, aprender uma indústria totalmente nova e começar a lançar atualizações importantes de produto em apenas um mês — isso fala da ética de trabalho da Maria. Ela é muito cuidadosa na forma como aborda o trabalho e a paixão dela transparece. Qualquer equipe teria sorte em tê-la.",
          name: "Samantha Cherven (Panitch)",
          role: "Senior Product Marketing Manager",
          company: "Relo Metrics",
          photoUrl: "/avatars/samantha-cherven.png",
          relationship:
            "Trabalhou na mesma equipe que Maria na Relo Metrics · Recomendação no LinkedIn (1 de abril de 2026)."
        },
        {
          quote:
            "Maria traduz prioridades de negócio em critérios claros para modelos de visão computacional e para ciclos human-in-the-loop. A parceria com engenharia de ML foi essencial para escalarmos menções verbais a novos idiomas sem perder rastreabilidade nem qualidade.",
          name: "Jordan Park",
          role: "Diretor de Engenharia de ML",
          company: "Relo Metrics"
        },
        {
          quote:
            "Ela estruturou métricas e dashboards que mudaram como o time priorizava trabalho: saímos de debates baseados em sensação e passamos a decidir com dados. O impacto em rentabilidade e na redução do tempo de aprovação ficou visível para toda a empresa.",
          name: "Camila Ribeiro",
          role: "Head de Produto",
          company: "Blu"
        },
        {
          quote:
            "Confiei na Maria para liderar iniciativas com alta ambiguidade e muitos stakeholders. Ela alinha expectativas, documenta com rigor e entrega com consistência — referência em product sense, comunicação e execução.",
          name: "Ricardo Almada",
          role: "Diretor de Operações",
          company: "Blu"
        }
      ],
      education: [
        {
          degree: "Pós-graduação em Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          institution: "Uniamérica",
          year: "2022–2025"
        },
        {
          degree: "Curso Avançado de Inglês",
          institution: "Cultura Inglesa",
          year: "2013–2019"
        }
      ],
      certifications: [
        {
          name: "AI Product Specialist",
          issuer: "PM3",
          year: "2026"
        },
        {
          name: "Product Management",
          issuer: "PM3",
          year: "2026"
        }
      ],
      careerPath: [
        {
          role: "AI Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "Lidero o ciclo de avaliação, melhoria e retreinamento de modelos de visão computacional para detecção de marcas patrocinadoras em mídia esportiva."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Responsável por estratégia de produto, métricas e melhoria de processos no produto financeiro core, com foco em rentabilidade e escalabilidade."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Estruturei processos de qualidade e documentação para desenvolvimento de produtos, garantindo escalabilidade e conformidade com padrões regulatórios."
        },
        {
          role: "Técnica em Controle de Qualidade",
          company: "BRF",
          period: "Jul 2021 — Dez 2022",
          description: "Aproveitei dados e métricas de qualidade para identificar problemas, priorizar melhorias e reforçar a consistência do produto."
        }
      ],
      prdGenerator: {
        title: "Gerador de PRD com IA",
        subtitle: "Transforme suas ideias em documentos estruturados em segundos.",
        placeholder: "Descreva sua ideia de produto aqui...",
        generate: "Gerar PRD",
        example: "Gerar Exemplo",
        loading: "A IA está escrevendo seu PRD...",
        copy: "Copiar",
        copied: "Copiado!",
        empty: "Seu PRD aparecerá aqui...",
        outputTitle: "Documento PRD",
        examples: [
          "Um app mobile para rastrear pegada de carbono pessoal através de transações bancárias.",
          "Uma plataforma SaaS B2B para gerenciar atividades de team building remoto.",
          "Um marketplace de moda sustentável com provador virtual baseado em IA.",
          "Um eletrodoméstico inteligente que sugere receitas com base no inventário da geladeira.",
          "Uma plataforma de saúde mental projetada especificamente para atletas de alto desempenho."
        ]
      },
      aiProcess: {
        badge: "AI-First Portfolio",
        title: "Construído 100% com IA, dirigido e curado por mim.",
        description: "Usei IA generativa e vibe coding para desenhar, desenvolver e lançar este produto, demonstrando como a IA acelera a entrega de ponta a ponta.",
        stack: "React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel",
        items: [
          { title: "Prompt Engineering", desc: "Estruturação de prompts complexos para geração de código e design system." },
          { title: "AI-Assisted Coding", desc: "Utilização de LLMs para desenvolvimento front-end e lógica de componentes." }
        ],
        curation: "Direção Humana",
        execution: "Execução por Inteligência Artificial"
      },
      ui: {
        work: "Trabalho",
        skills: "Habilidades",
        about: "Sobre",
        prd: "AI Toolkit",
        contact: "Contato",
        viewProjects: "Ver Projetos",
        caseStudiesTitle: "Estudos de Caso",
        caseStudiesDesc: "Uma seleção de projetos onde liderei a estratégia e execução, focando em métricas reais e satisfação do usuário.",
        testimonialsTitle: "Depoimentos",
        testimonialsDesc:
          "Recomendação no LinkedIn e depoimentos de colegas, lideranças e parceiros.",
        problem: "O Problema",
        solution: "A Solução",
        impact: "Impacto",
        careerTitle: "Trajetória",
        educationTitle: "Formação",
        certificationsTitle: "Certificações",
        footerTitle: "Vamos construir o próximo grande produto juntos?",
        footerDesc: "Estou sempre aberta a novas oportunidades, mentorias ou apenas um café virtual para falar sobre produto e IA.",
        experienceBadge: "5 Anos de Experiência",
        aiBadge: "Criado com IA",
        builtWithAi: "Desenvolvido com Inteligência Artificial sob curadoria de Maria Eduarda Martins."
      }
    },
    en: {
      title: "Senior Product Manager · ML & Computer Vision",
      bio: "Product Manager with experience leading AI products, computer vision, and global platform expansion. Passionate about turning complex models into scalable, user-centered solutions.",
      philosophy: "The best AI products are built at the intersection of technical rigor and user empathy. My focus is on creating systems that are useful, measurable, and ready to scale.",
      skills: [
        {
          category: "AI & Machine Learning",
          items: ["Computer Vision", "LLM & Prompt Engineering", "Model Evaluation", "Human-in-the-Loop", "AI Frameworks"]
        },
        {
          category: "Product Strategy",
          items: ["Product Vision", "Roadmapping", "Data-Driven Decisions", "Market Expansion", "Self-Service Platforms"]
        },
        {
          category: "Execution & Leadership",
          items: ["Metrics & OKRs", "Agile/Scrum", "Cross-functional Teams", "Process Improvement", "Internal Training"]
        }
      ],
      caseStudies: [
        {
          id: "1",
          title: "AI Platform Globalization for Sponsor Brand Detection",
          company: "Relo Metrics",
          role: "AI Product Manager — ML & Computer Vision",
          period: "Set 2025 — Presente",
          description: "Led the evolution of a computer vision platform for sponsor brand exposure detection in sports media, making it globally scalable and language-agnostic.",
          problem: "The platform was limited to English-speaking markets and relied on intensive manual operations, preventing global expansion and increasing operational costs.",
          solution: "Drove platform globalization into complex markets like Japan, scaled the Verbal Mentions model to any language, and built an internal AI model and prompt evaluation framework with human-in-the-loop feedback cycles.",
          impact: [
            "69.5% reduction in operational costs",
            "Same team now supports 3× more venues simultaneously",
            "Brand detection enabled in any language, including Japanese"
          ],
          tags: ["Computer Vision", "LLM", "Globalization", "MLOps"],
          imageUrl: "https://picsum.photos/seed/relo-metrics/800/600"
        },
        {
          id: "2",
          title: "Product Restructuring and Metrics Framework",
          company: "Blu",
          role: "Product Manager",
          period: "Jul 2023 — Set 2025",
          description: "Led product and data initiatives that transformed the operational and financial performance of the core product, with significant results in profitability, process speed, and traceability.",
          problem: "The product lacked structured metrics, the approval process took nearly 5 days, account migration rate was only 23%, and financial loss alerts were hard to detect in time.",
          solution: "Implemented data-driven strategies, a metrics framework with automated reporting, and a dashboard-based monitoring process for rapid detection of financial and operational issues.",
          impact: [
            "43.5% increase in core product monthly profitability",
            "+323% improvement in account migration rate (23.67% → >76% sustained)",
            "87.6% reduction in approval-to-payment time (4.93 days → <1 day)"
          ],
          tags: ["Product Strategy", "Data", "Fintech", "Process Improvement"],
          imageUrl: "https://picsum.photos/seed/blu-fintech/800/600"
        }
      ],
      testimonials: [
        {
          quote:
            "I got to work closely with Maria on a variety of projects during her time at Relo Metrics and was so impressed with her skills as a Product Manager. She tackled every challenge head on and accomplished so much so quickly. Not many individuals would be able to come in and learn an entirely new industry and start shipping major product updates in just a month but that is just a testament to Maria's work ethic. She is so thoughtful with how she approaches work and her passion shines through. Anyone would be lucky to have her as a part of their team.",
          name: "Samantha Cherven (Panitch)",
          role: "Senior Product Marketing Manager",
          company: "Relo Metrics",
          photoUrl: "/avatars/samantha-cherven.png",
          relationship:
            "Worked on the same team as Maria at Relo Metrics · LinkedIn recommendation (April 1, 2026)."
        },
        {
          quote:
            "Maria turns business priorities into clear quality bars for computer vision models and human-in-the-loop cycles. Partnering with ML engineering was critical as we scaled verbal mentions across new languages without losing traceability or quality.",
          name: "Jordan Park",
          role: "Director of ML Engineering",
          company: "Relo Metrics"
        },
        {
          quote:
            "She built a metrics and dashboard practice that changed how we prioritized—we moved from opinion-driven debates to data-informed decisions. The lift in profitability and the drop in approval time were obvious across the company.",
          name: "Camila Ribeiro",
          role: "Head of Product",
          company: "Blu"
        },
        {
          quote:
            "I trusted Maria to lead high-ambiguity initiatives with many stakeholders. She aligns expectations, documents with rigor, and ships consistently—a standout in product sense, communication, and execution.",
          name: "Ricardo Almada",
          role: "Director of Operations",
          company: "Blu"
        }
      ],
      education: [
        {
          degree: "Graduate Certificate in Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "Associate Degree in Software Development",
          institution: "Uniamérica",
          year: "2022–2025"
        },
        {
          degree: "Advanced English Program",
          institution: "Cultura Inglesa",
          year: "2013–2019"
        }
      ],
      certifications: [
        {
          name: "AI Product Specialist",
          issuer: "PM3",
          year: "2026"
        },
        {
          name: "Product Management",
          issuer: "PM3",
          year: "2026"
        }
      ],
      careerPath: [
        {
          role: "AI Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "I lead the evaluation, improvement, and retraining cycle of computer vision models for sponsor brand detection in sports media."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Owned product strategy, metrics, and process improvement for the core financial product, focusing on profitability and scalability."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Structured quality processes and documentation for product development, ensuring scalability and compliance with regulatory standards."
        },
        {
          role: "Quality Control Technician",
          company: "BRF",
          period: "Jul 2021 — Dec 2022",
          description: "Leveraged data and quality metrics to identify issues, prioritize improvements, and enhance product consistency."
        }
      ],
      prdGenerator: {
        title: "AI PRD Generator",
        subtitle: "Transform your ideas into structured documents in seconds.",
        placeholder: "Describe your product idea here...",
        generate: "Generate PRD",
        example: "Generate Example",
        loading: "AI is writing your PRD...",
        copy: "Copy",
        copied: "Copied!",
        empty: "Your PRD will appear here...",
        outputTitle: "PRD Document",
        examples: [
          "A mobile app for tracking personal carbon footprint through bank transactions.",
          "A B2B SaaS platform for managing remote team building activities.",
          "An AI-powered marketplace for sustainable fashion with virtual try-on.",
          "A smart kitchen appliance that suggests recipes based on fridge inventory.",
          "A mental health platform specifically designed for high-performance athletes."
        ]
      },
      aiProcess: {
        badge: "AI-First Portfolio",
        title: "Built 100% with AI, directed and curated by me.",
        description: "Used generative AI and vibe coding to design, develop, and ship this product, demonstrating how AI accelerates end-to-end delivery.",
        stack: "React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel",
        items: [
          { title: "Prompt Engineering", desc: "Structuring complex prompts for code generation and design system." },
          { title: "AI-Assisted Coding", desc: "Using LLMs for front-end development and component logic." }
        ],
        curation: "Human Direction",
        execution: "AI Execution"
      },
      ui: {
        work: "Work",
        skills: "Skills",
        about: "About",
        prd: "AI Toolkit",
        contact: "Contact",
        viewProjects: "View Projects",
        caseStudiesTitle: "Case Studies",
        caseStudiesDesc: "A selection of projects where I led strategy and execution, focusing on real metrics and user satisfaction.",
        testimonialsTitle: "Testimonials",
        testimonialsDesc:
          "LinkedIn recommendation and notes from colleagues, leaders, and partners.",
        problem: "The Problem",
        solution: "The Solution",
        impact: "Impact",
        careerTitle: "Career Path",
        educationTitle: "Education",
        certificationsTitle: "Certifications",
        footerTitle: "Let's build the next big product together?",
        footerDesc: "I'm always open to new opportunities, mentorships, or just a virtual coffee to talk about product and AI.",
        experienceBadge: "5 Years of Experience",
        aiBadge: "Built with AI",
        builtWithAi: "Developed with Artificial Intelligence curated by Maria Eduarda Martins."
      }
    },
    es: {
      title: "AI Product Manager · ML & Computer Vision",
      bio: "Product Manager con experiencia liderando productos de IA, visión computacional y expansión global de plataformas. Apasionada por transformar modelos complejos en soluciones escalables y centradas en el usuario.",
      philosophy: "Los mejores productos de IA nacen de la combinación entre rigor técnico y empatía con el usuario. Mi foco es crear sistemas útiles, medibles y preparados para escalar.",
      skills: [
        {
          category: "IA & Machine Learning",
          items: ["Computer Vision", "LLM & Prompt Engineering", "Model Evaluation", "Human-in-the-Loop", "AI Frameworks"]
        },
        {
          category: "Estrategia de Producto",
          items: ["Product Vision", "Roadmapping", "Data-Driven Decisions", "Market Expansion", "Self-Service Platforms"]
        },
        {
          category: "Ejecución & Liderazgo",
          items: ["Métricas & OKRs", "Agile/Scrum", "Cross-functional Teams", "Process Improvement", "Internal Training"]
        }
      ],
      caseStudies: [
        {
          id: "1",
          title: "Globalización de Plataforma de IA para Detección de Marcas",
          company: "Relo Metrics",
          role: "AI Product Manager — ML & Computer Vision",
          period: "Set 2025 — Presente",
          description: "Lideré la evolución de una plataforma de visión computacional para la detección de exposición de marcas patrocinadoras en medios deportivos, haciéndola globalmente escalable y agnóstica del idioma.",
          problem: "La plataforma estaba limitada a mercados de habla inglesa y dependía de operaciones manuales intensivas, lo que impedía la expansión global y aumentaba los costos operativos.",
          solution: "Impulsé la globalización de la plataforma hacia mercados complejos como Japón, escalé el modelo de Verbal Mentions a cualquier idioma y construí un framework interno de evaluación de modelos y prompts de IA con ciclos human-in-the-loop.",
          impact: [
            "Reducción del 69,5% en los costos operativos",
            "El mismo equipo ahora soporta 3× más venues simultáneamente",
            "Detección de marcas habilitada en cualquier idioma, incluido el japonés"
          ],
          tags: ["Computer Vision", "LLM", "Globalization", "MLOps"],
          imageUrl: "https://picsum.photos/seed/relo-metrics/800/600"
        },
        {
          id: "2",
          title: "Reestructuración de Producto y Framework de Métricas",
          company: "Blu",
          role: "Product Manager",
          period: "Jul 2023 — Set 2025",
          description: "Lideré iniciativas de producto y datos que transformaron el rendimiento operativo y financiero del producto core, con resultados significativos en rentabilidad, velocidad de procesos y trazabilidad.",
          problem: "El producto carecía de métricas estructuradas, el proceso de aprobación tardaba casi 5 días, la tasa de migración de cuentas era solo del 23% y las alertas de pérdida financiera eran difíciles de detectar a tiempo.",
          solution: "Implementé estrategias basadas en datos, un framework de métricas con reportes automatizados y un proceso de monitoreo por dashboard para la detección rápida de problemas financieros y operativos.",
          impact: [
            "Aumento del 43,5% en la rentabilidad mensual del producto core",
            "+323% de mejora en la tasa de migración de cuentas (23,67% → >76% sostenido)",
            "Reducción del 87,6% en el tiempo de aprobación (4,93 dias → <1 día)"
          ],
          tags: ["Product Strategy", "Data", "Fintech", "Process Improvement"],
          imageUrl: "https://picsum.photos/seed/blu-fintech/800/600"
        }
      ],
      testimonials: [
        {
          quote:
            "Trabajé muy de cerca con María en varios proyectos durante su tiempo en Relo Metrics y quedé muy impresionada con sus habilidades como Product Manager. Afrontó cada desafío de frente y logró muchísimo en muy poco tiempo. No muchas personas pueden entrar, aprender una industria totalmente nueva y empezar a lanzar actualizaciones importantes de producto en solo un mes—eso habla de la ética de trabajo de María. Es muy reflexiva en cómo aborda el trabajo y su pasión se nota. Cualquier equipo tendría suerte de tenerla.",
          name: "Samantha Cherven (Panitch)",
          role: "Senior Product Marketing Manager",
          company: "Relo Metrics",
          photoUrl: "/avatars/samantha-cherven.png",
          relationship:
            "Trabajó en el mismo equipo que María en Relo Metrics · Recomendación en LinkedIn (1 de abril de 2026)."
        },
        {
          quote:
            "Maria convierte prioridades de negocio en criterios claros para modelos de visión por computador y ciclos human-in-the-loop. La colaboración con ingeniería de ML fue clave para escalar menciones verbales a nuevos idiomas sin perder trazabilidad ni calidad.",
          name: "Jordan Park",
          role: "Director de Ingeniería de ML",
          company: "Relo Metrics"
        },
        {
          quote:
            "Estructuró métricas y dashboards que cambiaron cómo priorizábamos: pasamos de discusiones basadas en intuición a decisiones con datos. El impacto en rentabilidad y en la reducción del tiempo de aprobación fue visible para toda la empresa.",
          name: "Camila Ribeiro",
          role: "Head de Producto",
          company: "Blu"
        },
        {
          quote:
            "Confié en Maria para liderar iniciativas con alta ambigüedad y muchos stakeholders. Alinea expectativas, documenta con rigor y entrega con consistencia — referente en product sense, comunicación y ejecución.",
          name: "Ricardo Almada",
          role: "Director de Operaciones",
          company: "Blu"
        }
      ],
      education: [
        {
          degree: "Posgrado en Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "Tecnólogo en Análisis y Desarrollo de Sistemas",
          institution: "Uniamérica",
          year: "2022–2025"
        },
        {
          degree: "Programa Avanzado de Inglés",
          institution: "Cultura Inglesa",
          year: "2013–2019"
        }
      ],
      certifications: [
        {
          name: "AI Product Specialist",
          issuer: "PM3",
          year: "2026"
        },
        {
          name: "Product Management",
          issuer: "PM3",
          year: "2026"
        }
      ],
      careerPath: [
        {
          role: "AI Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "Lidero el ciclo de evaluación, mejora y reentrenamiento de modelos de visión computacional para la detección de marcas patrocinadoras en medios deportivos."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Responsable de la estrategia de producto, métricas y mejora de procesos del producto financiero core, con foco en rentabilidad y escalabilidad."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Estructuré procesos de calidad y documentación para el desarrollo de productos, garantizando escalabilidad y cumplimiento de estándares regulatorios."
        },
        {
          role: "Técnica en Control de Calidad",
          company: "BRF",
          period: "Jul 2021 — Dic 2022",
          description: "Aproveché datos y métricas de calidad para identificar problemas, priorizar mejoras y mejorar la consistencia del producto."
        }
      ],
      prdGenerator: {
        title: "Generador de PRD con IA",
        subtitle: "Transforma tus ideas en documentos estruturados en segundos.",
        placeholder: "Describe tu idea de producto aquí...",
        generate: "Generar PRD",
        example: "Generar Exemplo",
        loading: "La IA está escribiendo tu PRD...",
        copy: "Copiar",
        copied: "¡Copiado!",
        empty: "Tu PRD aparecerá aquí...",
        outputTitle: "Documento PRD",
        examples: [
          "Una aplicación móvil para rastrear la huella de carbono personal a través de transacciones bancarias.",
          "Una plataforma SaaS B2B para gestionar actividades de team building remoto.",
          "Un mercado de moda sostenible con probador virtual basado en IA.",
          "Un electrodoméstico inteligente que sugiere recetas basadas en el inventario de la nevera.",
          "Una plataforma de salud mental diseñada específicamente para atletas de alto rendimiento."
        ]
      },
      aiProcess: {
        badge: "Portafolio AI-First",
        title: "Construido 100% con IA, dirigido y curado por mí.",
        description: "Utilicé IA generativa y vibe coding para diseñar, desarrollar y lanzar este producto, demostrando cómo la IA acelera la entrega de extremo a extremo.",
        stack: "Stack: React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel",
        items: [
          { title: "Ingeniería de Prompts", desc: "Estructuración de prompts complejos para la generación de código y el sistema de diseño." },
          { title: "Codificación Asistida por IA", desc: "Uso de LLMs para el desarrollo front-end y la lógica de componentes." }
        ],
        curation: "Dirección Humana",
        execution: "Ejecución por IA"
      },
      ui: {
        work: "Trabajo",
        skills: "Habilidades",
        about: "Sobre mí",
        prd: "AI Toolkit",
        contact: "Contacto",
        viewProjects: "Ver Proyectos",
        caseStudiesTitle: "Casos de Estudio",
        caseStudiesDesc: "Una selección de proyectos donde lideré la estrategia y ejecución, enfocándome en métricas reales y satisfacción del usuario.",
        testimonialsTitle: "Testimonios",
        testimonialsDesc:
          "Recomendación en LinkedIn y mensajes de colegas, liderazgos y socios.",
        problem: "El Problema",
        solution: "La Solución",
        impact: "Impacto",
        careerTitle: "Trayectoria",
        educationTitle: "Educación",
        certificationsTitle: "Certificaciones",
        footerTitle: "¿Construimos el próximo gran producto juntos?",
        footerDesc: "Siempre estoy abierta a nuevas oportunidades, mentorías o simplemente un café virtual para hablar sobre producto e IA.",
        experienceBadge: "5 Años de Experiencia",
        aiBadge: "Creado con IA",
        builtWithAi: "Desarrollado con Inteligencia Artificial bajo la curaduría de Maria Eduarda Martins."
      }
    }
  }
};
