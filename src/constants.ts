import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Maria Eduarda Martins",
  email: "mariaemartins01@gmail.com",
  linkedin: "https://linkedin.com/in/maria-eduarda-martins-a42098204",
  languages: {
    pt: {
      title: "Senior Product Manager · ML & Computer Vision",
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
            "Redução de 69,5% nos custos operacionais In-Venue",
            "Mesma equipe passou a suportar 3× mais venues simultaneamente",
            "Detecção de marcas habilitada em qualquer idioma, incluindo japonês"
          ],
          tags: ["Computer Vision", "LLM", "Globalization", "MLOps"],
          imageUrl: "https://picsum.photos/seed/relo-metrics/800/600"
        },
        {
          id: "2",
          title: "Reestruturação de Produto e Framework de Métricas",
          company: "Blu",
          role: "Mid-level Product Manager",
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
      education: [
        {
          degree: "Graduate Certificate in Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "BTech in Analysis and Systems Development",
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
          role: "Senior Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "Lidero o ciclo de avaliação, melhoria e retreinamento de modelos de visão computacional para detecção de marcas patrocinadoras em mídia esportiva."
        },
        {
          role: "Mid-level Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Responsável por estratégia de produto, métricas e melhoria de processos no produto financeiro core, com foco em rentabilidade e escalabilidade."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Laboratório Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Estruturei processos de qualidade e documentação para desenvolvimento de produtos, garantindo escalabilidade e conformidade com padrões regulatórios."
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
        title: "Este website foi construído 100% via IA sob minha curadoria.",
        description: "Como Senior AI Product Manager, acredito em \"comer a própria comida de cachorro\" (dogfooding). Utilizei ferramentas de IA Generativa para codificar, estruturar e otimizar este portfólio, demonstrando na prática como a IA pode acelerar o delivery e a criatividade.",
        items: [
          { title: "Prompt Engineering", desc: "Estruturação de prompts complexos para geração de código e design system." },
          { title: "AI-Assisted Coding", desc: "Utilização de LLMs para desenvolvimento front-end e lógica de componentes." }
        ],
        curation: "Curadoria Humana",
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
          role: "Senior Product Manager — ML & Computer Vision",
          period: "Set 2025 — Presente",
          description: "Led the evolution of a computer vision platform for sponsor brand exposure detection in sports media, making it globally scalable and language-agnostic.",
          problem: "The platform was limited to English-speaking markets and relied on intensive manual operations, preventing global expansion and increasing operational costs.",
          solution: "Drove platform globalization into complex markets like Japan, scaled the Verbal Mentions model to any language, and built an internal AI model and prompt evaluation framework with human-in-the-loop feedback cycles.",
          impact: [
            "69.5% reduction in In-Venue operational costs",
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
          role: "Mid-level Product Manager",
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
      education: [
        {
          degree: "Graduate Certificate in Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "BTech in Analysis and Systems Development",
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
          role: "Senior Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "I lead the evaluation, improvement, and retraining cycle of computer vision models for sponsor brand detection in sports media."
        },
        {
          role: "Mid-level Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Owned product strategy, metrics, and process improvement for the core financial product, focusing on profitability and scalability."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Laboratório Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Structured quality processes and documentation for product development, ensuring scalability and compliance with regulatory standards."
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
        title: "This website was built 100% via AI under my curation.",
        description: "As a Senior AI Product Manager, I believe in dogfooding. I used Generative AI tools to code, structure, and optimize this portfolio, demonstrating in practice how AI can accelerate delivery and creativity.",
        items: [
          { title: "Prompt Engineering", desc: "Structuring complex prompts for code generation and design system." },
          { title: "AI-Assisted Coding", desc: "Using LLMs for front-end development and component logic." }
        ],
        curation: "Human Curation",
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
      title: "Senior Product Manager · ML & Computer Vision",
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
          role: "Senior Product Manager — ML & Computer Vision",
          period: "Set 2025 — Presente",
          description: "Lideré la evolución de una plataforma de visión computacional para la detección de exposición de marcas patrocinadoras en medios deportivos, haciéndola globalmente escalable y agnóstica del idioma.",
          problem: "La plataforma estaba limitada a mercados de habla inglesa y dependía de operaciones manuales intensivas, lo que impedía la expansión global y aumentaba los costos operativos.",
          solution: "Impulsé la globalización de la plataforma hacia mercados complejos como Japón, escalé el modelo de Verbal Mentions a cualquier idioma y construí un framework interno de evaluación de modelos y prompts de IA con ciclos human-in-the-loop.",
          impact: [
            "Reducción del 69,5% en los costos operativos In-Venue",
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
          role: "Mid-level Product Manager",
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
      education: [
        {
          degree: "Graduate Certificate in Product Management",
          institution: "Uniamérica",
          year: "2025–2026"
        },
        {
          degree: "BTech in Analysis and Systems Development",
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
          role: "Senior Product Manager — ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 — Presente",
          description: "Lidero el ciclo de evaluación, mejora y reentrenamiento de modelos de visión computacional para la detección de marcas patrocinadoras en medios deportivos."
        },
        {
          role: "Mid-level Product Manager",
          company: "Blu",
          period: "Jul 2023 — Set 2025",
          description: "Responsable de la estrategia de producto, métricas y mejora de procesos del producto financiero core, con foco en rentabilidad y escalabilidad."
        },
        {
          role: "Quality Assurance Assistant",
          company: "Laboratório Bravet",
          period: "Dez 2022 — Jul 2023",
          description: "Estructuré procesos de calidad y documentación para el desarrollo de productos, garantizando escalabilidad y cumplimiento de estándares regulatorios."
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
        title: "Este sitio web fue construido 100% mediante IA bajo mi curaduría.",
        description: "Como Senior AI Product Manager, creo en el dogfooding. Utilicé herramientas de IA Generativa para codificar, estructurar y optimizar este portafolio, demostrando en la práctica cómo la IA puede acelerar la entrega y la creatividad.",
        items: [
          { title: "Ingeniería de Prompts", desc: "Estructuración de prompts complejos para la generación de código y el sistema de diseño." },
          { title: "Codificación Asistida por IA", desc: "Uso de LLMs para el desarrollo front-end y la lógica de componentes." }
        ],
        curation: "Curaduría Humana",
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
