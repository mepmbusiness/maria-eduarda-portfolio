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
        },
        {
          category: "Tools",
          items: ["Claude", "ChatGPT", "Gemini", "Google AI Studio", "Looker", "Mixpanel", "Metabase", "SQL", "Jira", "Confluence"]
        }
      ],
      caseStudies: [
        {
          id: "relo-1",
          title: "Escalabilidade de Produto e Redução de Custo Operacional",
          company: "Relo Metrics",
          role: "Senior Product Manager - ML & Global Expansion",
          period: "2025 - 2026",
          description: "Liderei a reestruturação de um produto com alta complexidade operacional, tornando-o escalável e viável comercialmente para expansão global.",
          problem: "O produto apresentava alto custo e tempo de implementação, o que bloqueava sua venda e limitava a aquisição de novos clientes. A operação dependia de processos manuais intensivos e não era escalável para múltiplos mercados.",
          solution: "Redesenhei a arquitetura do produto com foco em escalabilidade e redução de fricção operacional. Simplifiquei requisitos de entrada de dados, padronizei fluxos e eliminei dependências manuais.",
          impact: [
            "Redução de 69% nos custos operacionais",
            "Produto desbloqueado para vendas e expansão",
            "Aumento significativo na capacidade de aquisição de novos clientes"
          ],
          tags: ["Market Expansion", "Product Scaling"],
          imageUrl: "https://picsum.photos/seed/relo-case-1/800/600"
        },
        {
          id: "relo-2",
          title: "Expansão Global com Framework Multilíngue de IA",
          company: "Relo Metrics",
          role: "Senior Product Manager - AI & Internationalization",
          period: "2025 - 2026",
          description: "Liderei a globalização de produtos de IA, viabilizando expansão para mercados não anglófonos, com foco no Japão.",
          problem: "Os produtos eram limitados ao idioma inglês, impedindo a entrada em mercados internacionais estratégicos como o japonês. A ausência de suporte multilíngue restringia crescimento e geração de receita.",
          solution: "Desenvolvi um framework de IA multilíngue capaz de suportar japonês e qualquer outro idioma. Implementei estratégias de processamento e padronização de linguagem para garantir consistência dos dados e outputs.",
          impact: [
            "Expansão para mercados internacionais, incluindo Japão",
            "Aumento de 120% no potencial de receita",
            "Plataforma preparada para operar globalmente, independente de idioma"
          ],
          tags: ["AI", "Internationalization", "Multilingual"],
          imageUrl: "https://picsum.photos/seed/relo-case-2/800/600"
        },
        {
          id: "relo-3",
          title: "Otimização de Modelo de Computer Vision com Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Liderei a melhoria de performance de um modelo de visão computacional para detecção de marcas em mídia esportiva.",
          problem: "O modelo apresentava erros recorrentes, comprometendo a confiabilidade dos dados e limitando a escalabilidade da solução.",
          solution: "Implementei um framework de Quality Assurance com human-in-the-loop, onde outputs do modelo eram validados por humanos e utilizados em ciclos contínuos de retraining. Criei processos estruturados de feedback e priorização de erros críticos para melhoria progressiva do modelo.",
          impact: [
            "Redução de 82% na taxa de erro do modelo",
            "Aumento significativo da confiabilidade da plataforma",
            "Base estruturada para melhoria contínua e escalabilidade de IA"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          imageUrl: "https://picsum.photos/seed/relo-case-3/800/600"
        },
        {
          id: "blu-1",
          title: "Otimização de Rentabilidade e Eficiência Operacional em Fintech",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Liderei iniciativas estratégicas para melhorar a rentabilidade e eficiência operacional de produtos financeiros.",
          problem: "A operação apresentava ineficiências, baixa previsibilidade de resultados e processos pouco estruturados, impactando a rentabilidade e a experiência do cliente. Além disso, havia falta de visibilidade sobre métricas críticas e gargalos operacionais.",
          solution: "Implementei uma abordagem data-driven para tomada de decisão, estruturando métricas, dashboards e processos de monitoramento. Otimizei fluxos operacionais críticos, incluindo o ciclo de aprovação até pagamento e o processo de migração de contas. Promovi alinhamento entre áreas por meio de rituais, documentação e treinamentos.",
          impact: [
            "Aumento de 43,5% na rentabilidade mensal baseline",
            "Redução de 87,6% no tempo de aprovação até pagamento, de ~5 dias para <1 dia",
            "Migração de contas aumentada de 23,67% para 100% (sustentando >76%)",
            "Redução de 58% nos alertas de perdas financeiras",
            "Estruturação de governança e decisões orientadas a dados"
          ],
          tags: ["Fintech", "Payments", "Metrics", "Operational Efficiency"],
          imageUrl: "https://picsum.photos/seed/blu-case-1/800/600"
        }
      ],
      companyClients: {
        "Relo Metrics": [
          "Warner Brothers",
          "Paramount",
          "ESPN",
          "Dell Technologies",
          "BetMGM",
          "New York Yankees",
          "Golden State Warriors",
          "Genesco",
          "PepsiCo",
          "PayPal",
          "Youtube",
          "Adidas"
        ],
        "Blu": [],
        "BRAVET": []
      },
      testimonials: [
        {
          quote:
            "Maria entrou no meu time por meio de uma indicação de confiança e ela mais do que correspondeu à recomendação. Desde o primeiro dia, ela trouxe curiosidade e energia, duas das características mais críticas em qualquer grande PM.\n\nO que mais se destacou foi a rapidez com que ela se atualizou em um negócio desconhecido e começou a entregar. Ela entregou o primeiro projeto no prazo e com qualidade real, então eu imediatamente a trouxe de volta para um segundo engajamento, que ela executou tão bem quanto o primeiro.\n\nMaria é o tipo de PM que faz você querer continuar encontrando razões para trabalhar com ela. Eu a recomendaria para qualquer função em gestão de produto.",
          name: "Kit Swain",
          role: "VP, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/kit-swain.png",
          relationship:
            "Em 2 de abril de 2026, Kit supervisionava Maria Eduarda diretamente · Recomendação no LinkedIn (2 de abril de 2026).",
          org: "Relo Metrics"
        },
        {
          quote:
            "Tive o prazer de trabalhar com a Maria nos últimos 6 meses e ela é exatamente o tipo de pessoa que você quer no seu time. Ela entrou em um novo setor, rapidamente se atualizou e gerou um impacto enorme na empresa. Desde o primeiro dia, a curiosidade dela se destacou. Ela faz perguntas bem pensadas, vai além do entendimento superficial e consistentemente busca a forma “certa” de fazer as coisas, não apenas o caminho mais fácil.\n\nMaria também é alguém que aparece pelo time. Ela é proativa, rápida para entrar e ajudar, e muitas vezes é a primeira a responder quando algo precisa de atenção. Ao mesmo tempo, ela não está apenas executando, ela está ampliando limites, especialmente quando se trata de explorar como a IA pode melhorar a forma como trabalhamos.\n\nAlém de tudo isso, ela é simplesmente uma ótima pessoa para trabalhar. Ela é gentil, atenciosa e alguém que genuinamente investe nas pessoas ao redor. Ela será um ativo incrível para qualquer time do qual ela faça parte ao longo da carreira.",
          name: "Seth Haltiner",
          role: "Director, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/seth-haltiner.png",
          relationship:
            "Em 12 de abril de 2026, Seth era sênior em relação a Maria Eduarda, mas não supervisionava Maria Eduarda diretamente · Recomendação no LinkedIn (12 de abril de 2026).",
          org: "Relo Metrics"
        },
        {
          quote:
            "Trabalhei de perto com a Maria em vários projetos durante o tempo dela na Relo Metrics e fiquei muito impressionada com as habilidades dela como Product Manager. Ela enfrentou cada desafio de frente e entregou muito em pouquíssimo tempo. Poucas pessoas conseguem entrar, aprender uma indústria totalmente nova e começar a lançar atualizações importantes de produto em apenas um mês. Isso fala da ética de trabalho da Maria. Ela é muito cuidadosa na forma como aborda o trabalho e a paixão dela transparece. Qualquer equipe teria sorte em tê-la.",
          name: "Samantha Cherven (Panitch)",
          role: "Senior Product Marketing Manager",
          company: "Relo Metrics",
          photoUrl: "/avatars/samantha-cherven.png",
          relationship:
            "Trabalhou na mesma equipe que Maria na Relo Metrics · Recomendação no LinkedIn (1 de abril de 2026)."
        },
        {
          quote:
            "Recomendo muito a Maria. Tive o prazer de trabalhar com ela em projetos do Japão, onde ela navegou as complexidades de um mercado internacional com paixão e habilidade notáveis, garantindo entregas de dados de alta qualidade mesmo sob desafios operacionais significativos. Maria é muito organizada, proativa e entrega consistentemente no mais alto padrão. Qualquer equipe teria sorte em tê-la.",
          name: "Naokazu Wakaguri",
          role: "Exploring New Frontiers in Culture, and Economy",
          company: "Relo Metrics",
          photoUrl: "/avatars/naokazu-wakaguri.png",
          relationship:
            "Trabalhou com Maria Eduarda (equipes diferentes) · Recomendação no LinkedIn (20 de março de 2026)."
        },
        {
          quote:
            "Tive o privilégio de trabalhar com a Maria em vários projetos de grande escala, e ela é simplesmente uma das melhores colegas de equipe com quem já trabalhei. O que diferencia a Maria é a capacidade de pegar projetos complexos e de alto risco e quebrá-los em planos claros e executáveis, tudo isso enquanto entrega em prazos acelerados.\n\nAlém das habilidades de execução, Maria é uma comunicadora excepcional. Ela é uma ouvinte forte e consegue traduzir informação de forma fluida entre diferentes stakeholders, garantindo que todos permaneçam alinhados independentemente de background ou função. Ela também se destaca quando o assunto é dados e dashboards no Looker. O trabalho dela é consistentemente polido, perspicaz e construído para informar decisões reais.\n\nSe você procura alguém que consiga lidar com grandes desafios com precisão, clareza e espírito colaborativo, a Maria é a pessoa certa.",
          name: "Matthew Gragnano",
          role: "Teammate",
          company: "Relo Metrics",
          photoUrl: "/avatars/matthew-gragnano.png",
          relationship:
            "Trabalhou na mesma equipe que Maria Eduarda · Recomendação no LinkedIn (23 de março de 2026)."
        },
        {
          quote:
            "Tive o prazer de trabalhar de perto com a Maria em um projeto particularmente complexo e desafiador in-venue, e posso dizer com confiança que ela traz uma combinação rara de pensamento estratégico, adaptabilidade e excelência na execução.\n\nDesde o início, Maria assumiu um escopo altamente ambíguo e exigente e rapidamente trouxe estrutura e clareza. Uma de suas contribuições mais impactantes foi simplificar um fluxo de trabalho excessivamente complexo, reduzindo requisitos iniciais de setup e diminuindo o tempo de implementação de vários meses para apenas 1,5–2 meses. Embora o projeto em si tenha permanecido intricado, o trabalho dela o tornou muito mais gerenciável e permitiu que times executassem de forma independente, sem grande dependência de suporte de produto.\n\nMaria também demonstrou forte habilidade de identificar pontos de dor e traduzi-los em melhorias significativas e escaláveis. Ela equilibrou de forma cuidadosa a coleta de inputs com a entrega de direção clara, ajudando a estabelecer processos mais padronizados e papéis mais bem definidos ao longo do fluxo.\n\nAlém do impacto operacional, Maria é uma parceira colaborativa e transparente. Ela aborda o trabalho com mentalidade orientada a soluções e está sempre aberta a feedback e iteração. Seu estilo de comunicação é direto e atencioso, e ela consistentemente trabalha para melhorar não apenas outcomes, mas também como os times trabalham juntos.\n\nQualquer time teria sorte em ter a Maria. Ela prospera na complexidade e deixa processos, times e resultados melhores do que encontrou.",
          name: "Kimberly Glenn",
          role: "Director, Onboarding & Support",
          company: "Relo Metrics",
          photoUrl: "/avatars/kimberly-glenn.png",
          relationship:
            "Trabalhou com Maria Eduarda na Relo Metrics (equipes diferentes) · Recomendação no LinkedIn (24 de março de 2026)."
        },
        {
          quote:
            "Eu não trabalhei diretamente com a Maria, mas pude ver o trabalho dela na Relo Metrics, e me deixou uma impressão muito forte.\n\nEla ajudou a expandir o projeto de “Verbal Mentions” para suportar japonês, numa época em que a plataforma ainda estava focada em inglês. Esse tipo de mudança não é simples: envolve descobrir as coisas no caminho e tomar decisões com algumas incertezas.\n\nDepois, ela migrou para trabalhos relacionados a IA e contribuiu para processos internos.\n\nO que eu valorizo na Maria é que ela não trava quando as coisas estão pouco claras. Ela segue em frente, traz estrutura para situações bagunçadas e mantém as coisas avançando.\n\nTenho certeza de que ela vai levar essa mesma mentalidade para o que vier a seguir. Te desejo o melhor neste novo capítulo, Maria.",
          name: "Nuria Reyes",
          role: "Senior Frontend / Product Engineer",
          company: "Relo Metrics",
          photoUrl: "/avatars/nuria-reyes.png",
          relationship:
            "Trabalhou com Maria Eduarda na Relo Metrics (equipes diferentes) · Recomendação no LinkedIn (31 de março de 2026)."
        },
        {
          quote:
            "Tive o prazer de liderar a Maria Eduarda e posso dizer com confiança que ela é uma daquelas pessoas em quem você sempre pode contar para fazer as coisas acontecerem, e bem feitas.\n\nEla assume ownership naturalmente, é extremamente organizada e tem uma habilidade afiada de quebrar problemas complexos e impulsionar soluções. Seja trabalhando com times técnicos, stakeholders ou squads cross-functional, ela constrói relacionamentos fortes e se comunica com clareza e empatia.\n\nUma das maiores forças dela é a abertura para dar e receber feedback, sempre com mentalidade de crescimento. Ela é proativa, atenciosa e genuinamente colaborativa, sendo um ativo incrível para qualquer time de produto.\n\nEu trabalharia com ela novamente sem hesitar.",
          name: "Rachel Gabrielli",
          role: "Senior Product Manager",
          company: "Blu",
          photoUrl: "/avatars/rachel-gabrielli.png",
          relationship:
            "Supervisionou Maria Eduarda diretamente · Recomendação no LinkedIn (29 de abril de 2025)."
          ,
          org: "Blu"
        },
        {
          quote:
            "Tive a oportunidade de trabalhar em parceria com Maria Eduarda durante seu período na Garantia da Qualidade, no laboratório BRAVET e durante este período pude perceber sua aptidão e profissionalismo.\n\nDuda (como a chamamos carinhosamente) sempre se mostrou proativa na resolução das atividades rotineiras de seu setor. Sua facilidade com ferramentas tecnológicas foram também um diferencial para o cumprimento de suas metas. Sua postura e comportamento sempre foram maduras, apesar de sua pouca idade, na época, o que com certeza foi inspirador para mim.\n\nAlém de uma excelente profissional, Maria Eduarda sempre se apresentou como uma grande colega de trabalho (tornando-se uma amiga pessoal) e sua convivência sempre foi muito agradável, mostrando ser uma pessoa muito confiável e de caráter.\n\nCom toda a certeza eu a recomendo para qualquer oportunidade que ela almejar, e digo que sua aquisição será de grande valia para qualquer equipe!",
          name: "Maximiliano Dias da Silva de Moraes",
          role: "Microbiologista",
          company: "BRAVET",
          photoUrl: "/avatars/maximiliano-dias.png",
          relationship:
            "Trabalhou com Maria Eduarda no laboratório BRAVET (equipes diferentes) · Recomendação no LinkedIn (28 de abril de 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "Trabalhei com a Maria Eduarda na área de Garantia da Qualidade, ela atuava como assistente na época e posso dizer que ela foi uma peça-chave para o time. Além de ser muito dedicada e atenta aos detalhes, o que mais se destacou foi a facilidade que ela tem de se comunicar com todos, seja com colegas, líderes ou outros setores. Sempre muito clara, objetiva e respeitosa, o que facilitava muito o andamento dos processos e evitava ruídos.\n\nMaria também sempre mostrou muita iniciativa e responsabilidade no dia a dia. Sem dúvida, é uma profissional que agrega muito valor onde quer que atue.",
          name: "Walter Dornelas",
          role: "Farmacêutico",
          company: "-",
          photoUrl: "/avatars/walter-dornelas.png",
          relationship:
            "Respondia diretamente a Maria Eduarda · Recomendação no LinkedIn (26 de abril de 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "Maria Eduarda é uma profissional excepcional e extremamente competente. Tive a grata oportunidade de trabalhar com ela por alguns meses na tribo de B2B, período em que sua atuação foi essencial para o avanço da tribo e para o meu crescimento profissional.\n\nCom uma comunicação clara, visão estratégica de produto guiada por dados e forte orientação para resultados, Maria Eduarda se destaca pela liderança natural, capacidade de tomada de decisão em cenários complexos e colaboração com diferentes stakeholders.\n\nSua empatia, adaptabilidade e facilidade para navegar por contextos ambíguos reforçam ainda mais seu perfil completo como PM. É uma profissional que entrega valor, independentemente da organização em que esteja inserida.",
          name: "João Lucas Vieira, CEA",
          role: "Product | User Experience | UI/UX | Analytics",
          company: "Blu",
          photoUrl: "/avatars/joao-lucas-vieira.png",
          relationship:
            "Maria Eduarda era sênior em relação a João Lucas (sem supervisão direta) · Recomendação no LinkedIn (12 de abril de 2025)."
          ,
          org: "Blu"
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
          role: "AI Product Manager - ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 - Presente",
          description: "Lidero o ciclo de avaliação, melhoria e retreinamento de modelos de visão computacional para detecção de marcas patrocinadoras em mídia esportiva."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 - Set 2025",
          description: "Responsável por estratégia de produto, métricas e melhoria de processos no produto financeiro core, com foco em rentabilidade e escalabilidade."
        },
        {
          role: "Product Analyst",
          company: "Bravet",
          period: "Dez 2022 - Jul 2023",
          description: "Estruturei processos de qualidade e documentação para desenvolvimento de produtos, garantindo escalabilidade e conformidade com padrões regulatórios."
        },
        {
          role: "Product Analyst",
          company: "BRF",
          period: "Jul 2021 - Dez 2022",
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
        clientsTitle: "Clientes",
        testimonialsTitle: "Recomendações",
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
        },
        {
          category: "Tools",
          items: ["Claude", "ChatGPT", "Gemini", "Google AI Studio", "Looker", "Mixpanel", "Metabase", "SQL", "Jira", "Confluence"]
        }
      ],
      caseStudies: [
        {
          id: "relo-1",
          title: "Product Scalability and Operational Cost Reduction",
          company: "Relo Metrics",
          role: "Senior Product Manager - ML & Global Expansion",
          period: "2025 - 2026",
          description: "Led the restructuring of a product with high operational complexity, making it scalable and commercially viable for global expansion.",
          problem: "The product had high implementation cost and long lead times, which blocked sales and limited new customer acquisition. Operations relied heavily on manual processes and could not scale across multiple markets.",
          solution: "Redesigned the product architecture to improve scalability and reduce operational friction. Simplified input data requirements, standardized workflows, and removed manual dependencies.",
          impact: [
            "69% reduction in operational costs",
            "Unblocked the product for sales and expansion",
            "Significantly increased capacity to acquire new customers"
          ],
          tags: ["Market Expansion", "Product Scaling"],
          imageUrl: "https://picsum.photos/seed/relo-case-1/800/600"
        },
        {
          id: "relo-2",
          title: "Global Expansion with a Multilingual AI Framework",
          company: "Relo Metrics",
          role: "Senior Product Manager - AI & Internationalization",
          period: "2025 - 2026",
          description: "Led the globalization of AI products, enabling expansion into non-English markets, with a focus on Japan.",
          problem: "Products were limited to English, preventing entry into strategic international markets such as Japan. Lack of multilingual support constrained growth and revenue generation.",
          solution: "Developed a multilingual AI framework capable of supporting Japanese and any other language. Implemented language processing and standardization strategies to ensure consistent data and outputs.",
          impact: [
            "Expanded into international markets, including Japan",
            "120% increase in revenue potential",
            "Platform ready to operate globally, regardless of language"
          ],
          tags: ["AI", "Internationalization", "Multilingual"],
          imageUrl: "https://picsum.photos/seed/relo-case-2/800/600"
        },
        {
          id: "relo-3",
          title: "Computer Vision Model Optimization with Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Led performance improvements for a computer vision model used to detect sponsor brands in sports media.",
          problem: "The model had recurring errors, reducing data reliability and limiting the solution's scalability.",
          solution: "Implemented a human-in-the-loop QA framework where model outputs were validated by humans and used in continuous retraining cycles. Built structured feedback loops and prioritized critical error categories for progressive model improvement.",
          impact: [
            "82% reduction in model error rate",
            "Significant increase in platform reliability",
            "Established a foundation for continuous AI improvement and scalability"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          imageUrl: "https://picsum.photos/seed/relo-case-3/800/600"
        },
        {
          id: "blu-1",
          title: "Profitability and Operational Efficiency Optimization in Fintech",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Led strategic initiatives to improve profitability and operational efficiency for financial products.",
          problem: "Operations were inefficient, outcomes were hard to predict, and processes were poorly structured, impacting profitability and customer experience. There was also limited visibility into critical metrics and operational bottlenecks.",
          solution: "Implemented a data-driven approach to decision-making by structuring metrics, dashboards, and monitoring processes. Optimized critical operational flows, including approval-to-payment and account migration. Drove cross-functional alignment through rituals, documentation, and training.",
          impact: [
            "43.5% increase in baseline monthly profitability",
            "87.6% reduction in approval-to-payment time, from ~5 days to <1 day",
            "Account migration increased from 23.67% to 100% (sustaining >76%)",
            "58% reduction in financial loss alerts",
            "Established governance and data-driven decision-making"
          ],
          tags: ["Fintech", "Payments", "Metrics", "Operational Efficiency"],
          imageUrl: "https://picsum.photos/seed/blu-case-1/800/600"
        }
      ],
      companyClients: {
        "Relo Metrics": [
          "Warner Brothers",
          "Paramount",
          "ESPN",
          "Dell Technologies",
          "BetMGM",
          "New York Yankees",
          "Golden State Warriors",
          "Genesco",
          "PepsiCo",
          "PayPal",
          "Youtube",
          "Adidas"
        ],
        "Blu": [],
        "BRAVET": []
      },
      testimonials: [
        {
          quote:
            "Maria came to my team through a trusted referral, and she more than lived up to the recommendation. From day one, she brought curiosity and drive, two of the most critical traits in any great PM.\n\nWhat stood out most was how quickly she got up to speed on an unfamiliar business and hit the ground running. She delivered her first project on time and with real quality, so I immediately brought her back for a second engagement, which she executed just as well.\n\nMaria is the kind of PM who makes you want to keep finding reasons to work with her. I would recommend her for any product management role.",
          name: "Kit Swain",
          role: "VP, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/kit-swain.png",
          relationship:
            "Managed Maria Eduarda directly · LinkedIn recommendation (April 2, 2026).",
          org: "Relo Metrics"
        },
        {
          quote:
            "I've had the pleasure of working with Maria for the past 6 months and she is exactly who you want on your team. She stepped into a new industry, quickly got up to speed and made immense impact for the company. From day one, her curiosity stood out. She asks thoughtful questions, pushes past surface-level understanding, and consistently looks for the “right” way to do things, not just the easy way.\n\nMaria is also someone who shows up for the team. She's proactive, quick to jump in and help, and often the first to respond when something needs attention. At the same time, she's not just executing, she's pushing boundaries, especially when it comes to exploring how AI can improve the way we work.\n\nBeyond all of that, she's simply a great person to work with. She's kind, thoughtful, and someone who genuinely invests in the people around her. She will be an incredible asset to any team that she is on throughout her career.",
          name: "Seth Haltiner",
          role: "Director, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/seth-haltiner.png",
          relationship:
            "On April 12, 2026, Seth was senior to Maria Eduarda, but did not manage Maria Eduarda directly · LinkedIn recommendation (April 12, 2026).",
          org: "Relo Metrics"
        },
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
            "I highly recommend Maria. I had the pleasure of working with her on Japan projects, where she navigated the complexities of an international market with remarkable passion and skill, ensuring high-quality data delivery even under significant operational challenges. Maria is very well organized, proactive, and consistently delivers at the highest standard. Any team would be fortunate to have her.",
          name: "Naokazu Wakaguri",
          role: "Exploring New Frontiers in Culture, and Economy",
          company: "Relo Metrics",
          photoUrl: "/avatars/naokazu-wakaguri.png",
          relationship:
            "Worked with Maria Eduarda (different teams) · LinkedIn recommendation (March 20, 2026)."
        },
        {
          quote:
            "I've had the privilege of working with Maria across several large-scale projects, and she is simply one of the best teammates I've worked with. What sets Maria apart is her ability to take complex, high-stakes projects and break them down into clear, executable plans, all while delivering on expedited timelines.\n\nBeyond her execution skills, Maria is an exceptional communicator. She's a strong listener who can translate information seamlessly across different stakeholders, making sure everyone stays aligned no matter their background or role. She's also a standout when it comes to data and Looker dashboards. Her work is consistently polished, insightful, and built to inform real decisions.\n\nIf you're looking for someone who can handle big challenges with precision, clarity, and a collaborative spirit, Maria is your person.",
          name: "Matthew Gragnano",
          role: "Teammate",
          company: "Relo Metrics",
          photoUrl: "/avatars/matthew-gragnano.png",
          relationship:
            "Worked on the same team as Maria Eduarda · LinkedIn recommendation (March 23, 2026)."
        },
        {
          quote:
            "I had the pleasure of working closely with Maria on a particularly complex and challenging in-venue project, and I can confidently say she brings a rare combination of strategic thinking, adaptability, and executional excellence.\n\nFrom the outset, Maria took on a highly ambiguous and demanding scope and quickly brought structure and clarity to it. One of her most impactful contributions was simplifying an overly complex workflow by reducing initial setup requirements and cutting implementation time from several months to just 1.5-2 months. While the project itself remained intricate, her work made it far more manageable and enabled teams to execute independently without heavy reliance on product support.\n\nMaria also demonstrated a strong ability to identify pain points and translate them into meaningful, scalable improvements. She struck a thoughtful balance between gathering input and providing clear direction, ultimately helping establish more standardized processes and better-defined roles across the workflow.\n\nBeyond her operational impact, Maria is a collaborative and transparent partner. She approaches work with a solutions-oriented mindset and is always open to feedback and iteration. Her communication style is direct and thoughtful, and she consistently works to improve not just outcomes, but the way teams work together.\n\nAny team would be fortunate to have Maria. She thrives in complexity and leaves processes, teams, and outcomes better than she found them.",
          name: "Kimberly Glenn",
          role: "Director, Onboarding & Support",
          company: "Relo Metrics",
          photoUrl: "/avatars/kimberly-glenn.png",
          relationship:
            "Worked with Maria Eduarda at Relo Metrics (different teams) · LinkedIn recommendation (March 24, 2026)."
        },
        {
          quote:
            "I didn't work directly with Maria, but I did get to see her work at Relometrics, and it left a strong impression.\n\nShe helped expand the “Verbal Mentions” project to support Japanese at a time when the platform was still focused on English. That kind of shift isn't straightforward, it means figuring things out as you go and making decisions with some unknowns.\n\nLater, she moved into AI-related work and contributed to internal processes.\n\nWhat I appreciate about Maria is that she doesn't get stuck when things are unclear. She moves forward, brings structure to messy situations, and keeps things progressing.\n\nI'm sure she'll bring that same mindset to whatever she takes on next. Wishing you the best in this new chapter, Maria.",
          name: "Nuria Reyes",
          role: "Senior Frontend / Product Engineer",
          company: "Relo Metrics",
          photoUrl: "/avatars/nuria-reyes.png",
          relationship:
            "Worked with Maria Eduarda at Relo Metrics (different teams) · LinkedIn recommendation (March 31, 2026)."
        },
        {
          quote:
            "I had the pleasure of leading Maria Eduarda, and I can confidently say she's one of those people you can always count on to get things done, and done well.\n\nShe takes ownership naturally, is highly organized, and has a sharp ability to break down complex problems and drive solutions forward. Whether working with tech teams, stakeholders, or cross functional squads, she builds strong relationships and communicates with clarity and empathy.\n\nOne of her greatest strengths is her openness to give and receive feedback, always with a growth mindset. She's proactive, thoughtful, and genuinely collaborative, making her an incredible asset to any product team.\n\nI'd work with her again in a heartbeat.",
          name: "Rachel Gabrielli",
          role: "Senior Product Manager",
          company: "Fintech · AI Powered Analytics Products",
          photoUrl: "/avatars/rachel-gabrielli.png",
          relationship:
            "Managed Maria Eduarda directly · LinkedIn recommendation (April 29, 2025)."
          ,
          org: "Blu"
        },
        {
          quote:
            "I had the opportunity to work in partnership with Maria Eduarda during her time in Quality Assurance at the BRAVET laboratory, and throughout that period I was able to observe her aptitude and professionalism.\n\nDuda (as we affectionately called her) consistently proved proactive in resolving her team's day-to-day activities. Her ease with technological tools was also a differentiator in achieving goals. Her posture and behavior were always mature, despite her young age at the time, which was certainly inspiring to me.\n\nIn addition to being an excellent professional, Maria Eduarda always showed up as a great coworker (and became a personal friend). Working with her was always very pleasant. She is a very trustworthy person with strong character.\n\nI would absolutely recommend her for any opportunity she pursues, and I can say that bringing her on will add great value to any team.",
          name: "Maximiliano Dias da Silva de Moraes",
          role: "Microbiologista",
          company: "BRAVET",
          photoUrl: "/avatars/maximiliano-dias.png",
          relationship:
            "Worked with Maria Eduarda at BRAVET (different teams) · LinkedIn recommendation (April 28, 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "I worked with Maria Eduarda in the Quality Assurance area; at the time she worked as an assistant and I can say she was a key piece for the team. Beyond being very dedicated and detail-oriented, what stood out most was how easily she communicates with everyone, including colleagues, leaders, and other departments. Always very clear, objective, and respectful, which made processes move forward smoothly and prevented misunderstandings.\n\nMaria also consistently showed strong initiative and responsibility day to day. Without a doubt, she is a professional who adds a lot of value wherever she works.",
          name: "Walter Dornelas",
          role: "Farmacêutico",
          company: "-",
          photoUrl: "/avatars/walter-dornelas.png",
          relationship:
            "Reported directly to Maria Eduarda · LinkedIn recommendation (April 26, 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "Maria Eduarda is an exceptional and extremely competent professional. I had the pleasure of working with her for a few months in the B2B tribe, a period in which her work was essential to the tribe's progress and to my professional growth.\n\nWith clear communication, a data-driven strategic product vision, and a strong results orientation, Maria Eduarda stands out for her natural leadership, decision-making ability in complex scenarios, and collaboration with different stakeholders.\n\nHer empathy, adaptability, and ease navigating ambiguous contexts further reinforce her well-rounded profile as a PM. She is a professional who delivers value regardless of the organization she is part of.",
          name: "João Lucas Vieira, CEA",
          role: "Product | User Experience | UI/UX | Analytics",
          company: "Blu",
          photoUrl: "/avatars/joao-lucas-vieira.png",
          relationship:
            "Maria Eduarda was senior to João Lucas (no direct management) · LinkedIn recommendation (April 12, 2025)."
          ,
          org: "Blu"
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
          role: "AI Product Manager - ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 - Presente",
          description: "I lead the evaluation, improvement, and retraining cycle of computer vision models for sponsor brand detection in sports media."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 - Set 2025",
          description: "Owned product strategy, metrics, and process improvement for the core financial product, focusing on profitability and scalability."
        },
        {
          role: "Product Analyst",
          company: "Bravet",
          period: "Dez 2022 - Jul 2023",
          description: "Structured quality processes and documentation for product development, ensuring scalability and compliance with regulatory standards."
        },
        {
          role: "Product Analyst",
          company: "BRF",
          period: "Jul 2021 - Dec 2022",
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
        clientsTitle: "Clients",
        testimonialsTitle: "Recommendations",
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
        },
        {
          category: "Tools",
          items: ["Claude", "ChatGPT", "Gemini", "Google AI Studio", "Looker", "Mixpanel", "Metabase", "SQL", "Jira", "Confluence"]
        }
      ],
      caseStudies: [
        {
          id: "relo-1",
          title: "Escalabilidad de Producto y Reducción de Costo Operativo",
          company: "Relo Metrics",
          role: "Senior Product Manager - ML & Global Expansion",
          period: "2025 - 2026",
          description: "Lideré la reestructuración de un producto con alta complejidad operativa, haciéndolo escalable y comercialmente viable para expansión global.",
          problem: "El producto tenía alto costo y tiempo de implementación, lo que bloqueaba su venta y limitaba la adquisición de nuevos clientes. La operación dependía de procesos manuales intensivos y no era escalable para múltiples mercados.",
          solution: "Rediseñé la arquitectura del producto con foco en escalabilidad y reducción de fricción operativa. Simplifiqué requisitos de entrada de datos, estandaricé flujos y eliminé dependencias manuales.",
          impact: [
            "Reducción de 69% en los costos operativos",
            "Producto desbloqueado para ventas y expansión",
            "Aumento significativo en la capacidad de adquisición de nuevos clientes"
          ],
          tags: ["Market Expansion", "Product Scaling"],
          imageUrl: "https://picsum.photos/seed/relo-case-1/800/600"
        },
        {
          id: "relo-2",
          title: "Expansión Global con un Framework Multilingüe de IA",
          company: "Relo Metrics",
          role: "Senior Product Manager - AI & Internationalization",
          period: "2025 - 2026",
          description: "Lideré la globalización de productos de IA, habilitando la expansión a mercados no anglófonos, con foco en Japón.",
          problem: "Los productos estaban limitados al inglés, lo que impedía la entrada a mercados internacionales estratégicos como Japón. La falta de soporte multilingüe restringía el crecimiento y la generación de ingresos.",
          solution: "Desarrollé un framework de IA multilingüe capaz de soportar japonés y cualquier otro idioma. Implementé estrategias de procesamiento y estandarización de lenguaje para asegurar consistencia de datos y outputs.",
          impact: [
            "Expansión a mercados internacionales, incluyendo Japón",
            "Aumento de 120% en el potencial de ingresos",
            "Plataforma lista para operar globalmente, independientemente del idioma"
          ],
          tags: ["AI", "Internationalization", "Multilingual"],
          imageUrl: "https://picsum.photos/seed/relo-case-2/800/600"
        },
        {
          id: "relo-3",
          title: "Optimización de Modelo de Computer Vision con Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Lideré mejoras de performance de un modelo de visión computacional para la detección de marcas en medios deportivos.",
          problem: "El modelo presentaba errores recurrentes, comprometiendo la confiabilidad de los datos y limitando la escalabilidad de la solución.",
          solution: "Implementé un framework de Quality Assurance con human-in-the-loop, donde los outputs del modelo eran validados por humanos y usados en ciclos continuos de retraining. Creé procesos estructurados de feedback y priorización de errores críticos para una mejora progresiva del modelo.",
          impact: [
            "Reducción de 82% en la tasa de error del modelo",
            "Aumento significativo de la confiabilidad de la plataforma",
            "Base estructurada para mejora continua y escalabilidad de IA"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          imageUrl: "https://picsum.photos/seed/relo-case-3/800/600"
        },
        {
          id: "blu-1",
          title: "Optimización de Rentabilidad y Eficiencia Operativa en Fintech",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Lideré iniciativas estratégicas para mejorar la rentabilidad y eficiencia operativa de productos financieros.",
          problem: "La operación tenía ineficiencias, baja previsibilidad de resultados y procesos poco estructurados, impactando la rentabilidad y la experiencia del cliente. Además, había poca visibilidad sobre métricas críticas y cuellos de botella operativos.",
          solution: "Implementé un enfoque data-driven para la toma de decisiones, estructurando métricas, dashboards y procesos de monitoreo. Optimizé flujos operativos críticos, incluyendo el ciclo de aprobación hasta pago y el proceso de migración de cuentas. Promoví alineación entre áreas a través de rituales, documentación y entrenamientos.",
          impact: [
            "Aumento de 43,5% en la rentabilidad mensual baseline",
            "Reducción de 87,6% en el tiempo de aprobación hasta pago, de ~5 días a <1 día",
            "Migración de cuentas aumentó de 23,67% a 100% (sosteniendo >76%)",
            "Reducción de 58% en alertas de pérdidas financieras",
            "Estructuración de gobernanza y decisiones orientadas a datos"
          ],
          tags: ["Fintech", "Payments", "Metrics", "Operational Efficiency"],
          imageUrl: "https://picsum.photos/seed/blu-case-1/800/600"
        }
      ],
      companyClients: {
        "Relo Metrics": [
          "Warner Brothers",
          "Paramount",
          "ESPN",
          "Dell Technologies",
          "BetMGM",
          "New York Yankees",
          "Golden State Warriors",
          "Genesco",
          "PepsiCo",
          "PayPal",
          "Youtube",
          "Adidas"
        ],
        "Blu": [],
        "BRAVET": []
      },
      testimonials: [
        {
          quote:
            "Maria llegó a mi equipo a través de una recomendación de confianza, y superó con creces lo esperado. Desde el primer día, aportó curiosidad y empuje, dos de los rasgos más críticos en cualquier gran PM.\n\nLo que más destacó fue lo rápido que se puso al día en un negocio desconocido y empezó a ejecutar. Entregó su primer proyecto a tiempo y con calidad real, así que de inmediato la volví a sumar para un segundo engagement, que ejecutó igual de bien.\n\nMaria es el tipo de PM que hace que quieras seguir encontrando razones para trabajar con ella. La recomendaría para cualquier rol de gestión de producto.",
          name: "Kit Swain",
          role: "VP, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/kit-swain.png",
          relationship:
            "El 2 de abril de 2026, Kit supervisaba a Maria Eduarda directamente · Recomendación en LinkedIn (2 de abril de 2026).",
          org: "Relo Metrics"
        },
        {
          quote:
            "He tenido el placer de trabajar con Maria durante los últimos 6 meses y es exactamente la persona que quieres en tu equipo. Entró en una industria nueva, se puso al día rápidamente y generó un impacto enorme para la empresa. Desde el primer día, su curiosidad destacó. Hace preguntas bien pensadas, va más allá de una comprensión superficial y consistentemente busca la forma “correcta” de hacer las cosas, no solo el camino más fácil.\n\nMaria también es alguien que aparece por el equipo. Es proactiva, rápida para sumarse y ayudar, y muchas veces es la primera en responder cuando algo necesita atención. Al mismo tiempo, no solo ejecuta, también empuja límites, especialmente al explorar cómo la IA puede mejorar la forma en que trabajamos.\n\nMás allá de todo eso, es simplemente una gran persona con quien trabajar. Es amable, atenta y alguien que genuinamente invierte en las personas a su alrededor. Será un activo increíble para cualquier equipo del que forme parte a lo largo de su carrera.",
          name: "Seth Haltiner",
          role: "Director, Product",
          company: "Relo Metrics",
          photoUrl: "/avatars/seth-haltiner.png",
          relationship:
            "El 12 de abril de 2026, Seth era senior con respecto a Maria Eduarda, pero no supervisaba a Maria Eduarda directamente · Recomendación en LinkedIn (12 de abril de 2026).",
          org: "Relo Metrics"
        },
        {
          quote:
            "Trabajé muy de cerca con María en varios proyectos durante su tiempo en Relo Metrics y quedé muy impresionada con sus habilidades como Product Manager. Afrontó cada desafío de frente y logró muchísimo en muy poco tiempo. No muchas personas pueden entrar, aprender una industria totalmente nueva y empezar a lanzar actualizaciones importantes de producto en solo un mes, y eso habla de la ética de trabajo de María. Es muy reflexiva en cómo aborda el trabajo y su pasión se nota. Cualquier equipo tendría suerte de tenerla.",
          name: "Samantha Cherven (Panitch)",
          role: "Senior Product Marketing Manager",
          company: "Relo Metrics",
          photoUrl: "/avatars/samantha-cherven.png",
          relationship:
            "Trabajó en el mismo equipo que María en Relo Metrics · Recomendación en LinkedIn (1 de abril de 2026)."
        },
        {
          quote:
            "Recomiendo mucho a Maria. Tuve el placer de trabajar con ella en proyectos de Japón, donde navegó las complejidades de un mercado internacional con una pasión y habilidad notables, asegurando entregas de datos de alta calidad incluso bajo desafíos operativos significativos. Maria es muy organizada, proactiva y entrega consistentemente con el más alto estándar. Cualquier equipo tendría suerte de tenerla.",
          name: "Naokazu Wakaguri",
          role: "Exploring New Frontiers in Culture, and Economy",
          company: "Relo Metrics",
          photoUrl: "/avatars/naokazu-wakaguri.png",
          relationship:
            "Trabajó con Maria Eduarda (equipos diferentes) · Recomendación en LinkedIn (20 de marzo de 2026)."
        },
        {
          quote:
            "He tenido el privilegio de trabajar con Maria en varios proyectos de gran escala, y es simplemente una de las mejores compañeras con las que he trabajado. Lo que distingue a Maria es su capacidad de tomar proyectos complejos y de alto riesgo y descomponerlos en planes claros y ejecutables, mientras entrega en plazos acelerados.\n\nAdemás de sus habilidades de ejecución, Maria es una comunicadora excepcional. Sabe escuchar y puede traducir información sin fricción entre diferentes stakeholders, asegurando que todos se mantengan alineados sin importar su background o rol. También destaca cuando se trata de datos y dashboards en Looker. Su trabajo es consistentemente pulido, perspicaz y construido para informar decisiones reales.\n\nSi estás buscando a alguien que pueda manejar grandes desafíos con precisión, claridad y espíritu colaborativo, Maria es tu persona.",
          name: "Matthew Gragnano",
          role: "Teammate",
          company: "Relo Metrics",
          photoUrl: "/avatars/matthew-gragnano.png",
          relationship:
            "Trabajó en el mismo equipo que Maria Eduarda · Recomendación en LinkedIn (23 de marzo de 2026)."
        },
        {
          quote:
            "Tuve el placer de trabajar de cerca con Maria en un proyecto in-venue particularmente complejo y desafiante, y puedo decir con confianza que aporta una combinación poco común de pensamiento estratégico, adaptabilidad y excelencia en la ejecución.\n\nDesde el inicio, Maria asumió un alcance altamente ambiguo y exigente y rápidamente aportó estructura y claridad. Una de sus contribuciones más impactantes fue simplificar un flujo de trabajo excesivamente complejo, reduciendo requisitos iniciales de configuración y recortando el tiempo de implementación de varios meses a solo 1,5–2 meses. Aunque el proyecto siguió siendo intrincado, su trabajo lo hizo mucho más manejable y permitió que los equipos ejecutaran de forma independiente sin una gran dependencia del soporte de producto.\n\nMaria también demostró una fuerte capacidad para identificar puntos de dolor y traducirlos en mejoras significativas y escalables. Logró un equilibrio cuidadoso entre recopilar input y proporcionar dirección clara, ayudando a establecer procesos más estandarizados y roles mejor definidos a lo largo del flujo.\n\nMás allá del impacto operativo, Maria es una socia colaborativa y transparente. Enfrenta el trabajo con mentalidad orientada a soluciones y siempre está abierta a feedback e iteración. Su estilo de comunicación es directo y considerado, y trabaja consistentemente para mejorar no solo los outcomes, sino también la forma en que los equipos colaboran.\n\nCualquier equipo tendría suerte de tener a Maria: prospera en la complejidad y deja procesos, equipos y resultados mejores de como los encontró.",
          name: "Kimberly Glenn",
          role: "Director, Onboarding & Support",
          company: "Relo Metrics",
          photoUrl: "/avatars/kimberly-glenn.png",
          relationship:
            "Trabajó con Maria Eduarda en Relo Metrics (equipos diferentes) · Recomendación en LinkedIn (24 de marzo de 2026)."
        },
        {
          quote:
            "No trabajé directamente con María, pero sí pude ver su trabajo en Relometrics, y me dejó una impresión muy fuerte.\n\nAyudó a expandir el proyecto de “Verbal Mentions” para soportar japonés en una época en la que la plataforma aún estaba enfocada en inglés. Ese tipo de cambio no es sencillo: implica ir resolviendo sobre la marcha y tomar decisiones con algunas incógnitas.\n\nDespués, pasó a trabajo relacionado con IA y contribuyó a procesos internos.\n\nLo que valoro de María es que no se queda trabada cuando las cosas no están claras. Avanza, aporta estructura a situaciones desordenadas y mantiene el progreso.\n\nEstoy segura de que llevará esa misma mentalidad a lo que haga después. Te deseo lo mejor en este nuevo capítulo, María.",
          name: "Nuria Reyes",
          role: "Senior Frontend / Product Engineer",
          company: "Relo Metrics",
          photoUrl: "/avatars/nuria-reyes.png",
          relationship:
            "Trabajó con Maria Eduarda en Relo Metrics (equipos diferentes) · Recomendación en LinkedIn (31 de marzo de 2026)."
        },
        {
          quote:
            "Tuve el placer de liderar a Maria Eduarda, y puedo decir con confianza que es de esas personas en las que siempre puedes confiar para que las cosas se hagan, y se hagan bien.\n\nAsume el ownership de forma natural, es muy organizada y tiene una habilidad aguda para descomponer problemas complejos y llevar soluciones adelante. Ya sea trabajando con equipos técnicos, stakeholders o squads cross-functional, construye relaciones sólidas y se comunica con claridad y empatía.\n\nUna de sus mayores fortalezas es su apertura para dar y recibir feedback, siempre con mentalidad de crecimiento. Es proactiva, considerada y genuinamente colaborativa, lo que la convierte en un activo increíble para cualquier equipo de producto.\n\nVolvería a trabajar con ella sin pensarlo.",
          name: "Rachel Gabrielli",
          role: "Senior Product Manager",
          company: "Fintech · AI Powered Analytics Products",
          photoUrl: "/avatars/rachel-gabrielli.png",
          relationship:
            "Supervisó a Maria Eduarda directamente · Recomendación en LinkedIn (29 de abril de 2025)."
          ,
          org: "Blu"
        },
        {
          quote:
            "Tuve la oportunidad de trabajar en colaboración con Maria Eduarda durante su período en Garantía de Calidad, en el laboratorio BRAVET, y durante este tiempo pude percibir su aptitud y profesionalismo.\n\nDuda (como la llamábamos cariñosamente) siempre fue proactiva al resolver las actividades rutinarias de su sector. Su facilidad con herramientas tecnológicas también fue un diferencial para cumplir sus metas. Su postura y comportamiento siempre fueron maduros, a pesar de su corta edad en ese momento, lo cual sin duda fue inspirador para mí.\n\nAdemás de ser una excelente profesional, Maria Eduarda siempre se presentó como una gran compañera de trabajo (llegando a convertirse en una amiga personal) y su convivencia siempre fue muy agradable, demostrando ser una persona muy confiable y de carácter.\n\nCon total certeza la recomiendo para cualquier oportunidad que ella busque, y digo que su incorporación será de gran valor para cualquier equipo.",
          name: "Maximiliano Dias da Silva de Moraes",
          role: "Microbiologista",
          company: "BRAVET",
          photoUrl: "/avatars/maximiliano-dias.png",
          relationship:
            "Trabajó con Maria Eduarda en el laboratorio BRAVET (equipos diferentes) · Recomendación en LinkedIn (28 de abril de 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "Trabajé con Maria Eduarda en el área de Garantía de Calidad; en ese momento actuaba como asistente y puedo decir que fue una pieza clave para el equipo. Además de ser muy dedicada y atenta al detalle, lo que más destacó fue la facilidad que tiene para comunicarse con todos, ya sean colegas, líderes u otras áreas. Siempre muy clara, objetiva y respetuosa, lo que facilitaba el avance de los procesos y evitaba malentendidos.\n\nMaria también siempre demostró mucha iniciativa y responsabilidad en el día a día. Sin duda, es una profesional que aporta mucho valor dondequiera que actúe.",
          name: "Walter Dornelas",
          role: "Farmacêutico",
          company: "-",
          photoUrl: "/avatars/walter-dornelas.png",
          relationship:
            "Reportaba directamente a Maria Eduarda · Recomendación en LinkedIn (26 de abril de 2025)."
          ,
          org: "BRAVET"
        },
        {
          quote:
            "Maria Eduarda es una profesional excepcional y extremadamente competente. Tuve la grata oportunidad de trabajar con ella durante algunos meses en la tribu de B2B, período en el que su actuación fue esencial para el avance de la tribu y para mi crecimiento profesional.\n\nCon una comunicación clara, visión estratégica de producto guiada por datos y fuerte orientación a resultados, Maria Eduarda se destaca por su liderazgo natural, capacidad de tomar decisiones en escenarios complejos y colaboración con diferentes stakeholders.\n\nSu empatía, adaptabilidad y facilidad para navegar contextos ambiguos refuerzan aún más su perfil completo como PM. Es una profesional que entrega valor, independientemente de la organización en la que esté.",
          name: "João Lucas Vieira, CEA",
          role: "Product | User Experience | UI/UX | Analytics",
          company: "Blu",
          photoUrl: "/avatars/joao-lucas-vieira.png",
          relationship:
            "Maria Eduarda era senior con respecto a João Lucas (sin supervisión directa) · Recomendación en LinkedIn (12 de abril de 2025)."
          ,
          org: "Blu"
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
          role: "AI Product Manager - ML & Computer Vision",
          company: "Relo Metrics",
          period: "Set 2025 - Presente",
          description: "Lidero el ciclo de evaluación, mejora y reentrenamiento de modelos de visión computacional para la detección de marcas patrocinadoras en medios deportivos."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 - Set 2025",
          description: "Responsable de la estrategia de producto, métricas y mejora de procesos del producto financiero core, con foco en rentabilidad y escalabilidad."
        },
        {
          role: "Product Analyst",
          company: "Bravet",
          period: "Dez 2022 - Jul 2023",
          description: "Estructuré procesos de calidad y documentación para el desarrollo de productos, garantizando escalabilidad y cumplimiento de estándares regulatorios."
        },
        {
          role: "Product Analyst",
          company: "BRF",
          period: "Jul 2021 - Dic 2022",
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
        clientsTitle: "Clientes",
        testimonialsTitle: "Recomendaciones",
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
