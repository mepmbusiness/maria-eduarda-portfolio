import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Maria Eduarda Martins",
  email: "mariaemartins01@gmail.com",
  linkedin: "https://linkedin.com/in/maria-eduarda-martins-a42098204",
  github: "https://github.com/mepmbusiness",
  resumeDocx: {
    href: "/Maria_Eduarda_Martins_Resume-20.04.2025.docx",
    downloadAs: "Maria_Eduarda_Martins_Resume - 20.04.2025.docx",
  },
  languages: {
    pt: {
      title: "Product Manager",
      bio: "Product Manager com sólida experiência em gestão de produtos, construindo fluência em IA. Background em fintech e adtech, reavaliação de modelos de monetização, expansão global de plataformas e liderança de produtos de IA/ML e visão computacional. Fascinada por encurtar caminhos, ganhar eficiência e fazer muito de forma simples e escalável.",
      philosophy: "Acredito que os melhores produtos de IA nascem da combinação entre rigor técnico e empatia pelo usuário. Meu foco é criar sistemas que sejam úteis, mensuráveis e preparados para escalar.",
      skills: [
        {
          category: "Artificial Intelligence",
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
          id: "relo-2",
          title: "Expansão Global com uma Camada de IA Independente de Idioma",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech dos EUA (Santa Monica, Califórnia) que vende dados de patrocínio esportivo como serviço, com IA no centro.", product: "Verbal Mentions: detecta menções faladas a marcas patrocinadoras em transmissões esportivas." },
          problem: "A detecção de menções dependia de palavras-chave fixas em inglês. Cada idioma novo era um projeto de engenharia de 6 a 8 semanas, e contratos japoneses estavam em risco. Nas transmissões em japonês, 34% das menções eram variações semânticas que palavras-chave fixas não capturavam.",
          keyDecision: "Comparei quatro abordagens com trade-offs explícitos: palavras-chave fixas (perdiam 34% das menções), tradução automática (perdia contexto em nomes de marca), fine-tuning por idioma (caro demais) e uma camada de IA baseada em instruções. Escolhi a camada de IA porque o problema era de interpretação e de generalização para idiomas que ainda não tínhamos, com custo marginal baixo por idioma novo.",
          solution: "Construí uma camada de IA baseada em instruções que interpreta significado em vez de buscar palavras-chave, fundamentada em contexto de domínio criado com uma analista nativa japonesa. Validei vários modelos de speech-to-text e estratégias de prompt contra um golden set que comparava modelos por custo e qualidade. Quando nenhum modelo atingiu a meta de acurácia em nomes de marcas estrangeiras, sinalizei o risco cedo e resolvi com normalização via prompt.",
          impact: [
            "85% menos tempo para habilitar um idioma novo",
            "Aumento de 120% no potencial de receita",
            "US$ 15,3 milhões em valor de mídia revelados na exposição em áudio em japonês",
            "Framework de avaliação reutilizado por outros times"
          ],
          tags: [
            "IA",
            "Evals",
            "Internacionalização"
          ]
        },
        {
          id: "relo-2-v1",
          legacy: true,
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
          id: "hfts-1",
          title: "Evals e Grounding num Gerador de Cardápio com IA",
          company: "Hot for the Summer",
          role: "Product builder",
          period: "2026",
          about: { company: "Produto próprio: construí e opero sozinha.", product: "App de dieta e treino no ar, com cardápio gerado por IA. Dá para entrar como convidado." },
          problem: "Um LLM montava o cardápio do dia e calculava os macros. Só 58% dos pedidos viravam cardápio, e ninguém conferia se os números nutricionais do modelo eram verdadeiros. Recalculados com a tabela oficial brasileira (TACO), cardápios que estavam 97% \"na meta\" pela conta do próprio app ficavam só 6% na meta com números reais.",
          keyDecision: "O modelo decide o quê, o código decide quanto. O LLM escolhe os alimentos, onde o julgamento cultural importa. Os valores nutricionais vêm dessa tabela oficial, não do modelo, e um solver em código ajusta as porções para bater as metas com exatidão.",
          solution: "Criei um placar de evals com graders em código, várias rodadas e intervalo de confiança, além de tracing no Langfuse. Casei os nomes dos alimentos com os itens da tabela usando busca por palavras e embeddings em cascata (a fusão híbrida foi testada e piorou o resultado), medi o recall@3 e adicionei um LLM verificador que pode responder \"nenhum\", com votação por self-consistency e cache. Separei um conjunto de teste nunca usado no ajuste para pegar overfitting. Tudo sobe com chave para desligar, e cada decisão fica registrada com a métrica e o custo aceito.",
          impact: [
            "Na meta com dados nutricionais reais: 6% → 97%",
            "Dentro da faixa de segurança real: 42% → 100%",
            "Pedidos que viram cardápio: 58% → 75 a 100%",
            "37% menos chamadas ao modelo por geração"
          ],
          tags: [
            "LLM Evals",
            "Grounding",
            "Retrieval"
          ],
          imageUrl: "/cases/hot-for-the-summer.png",
          link: {"href": "https://www.hotforthesummer.com/", "label": "Conhecer o produto"}
        },
        {
          id: "relo-3",
          title: "Tornando Mensurável a Qualidade de Visão Computacional",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech dos EUA (Santa Monica, Califórnia) que vende dados de patrocínio esportivo como serviço, com IA no centro.", product: "Modelos de visão computacional que detectam marcas patrocinadoras em mídia esportiva, o produto central da empresa." },
          problem: "Os modelos tinham erros recorrentes, o que reduzia a confiabilidade dos dados. Não havia como ver de onde vinham os erros, nem se um resultado errado era erro do modelo ou erro humano.",
          keyDecision: "Medir antes de consertar. Antes de mexer nos modelos, tornei os erros visíveis e separei erro do modelo de erro humano, para o esforço de melhoria ir para onde os erros realmente estavam.",
          solution: "Defini as métricas de qualidade dos modelos (precision, recall, F1 score, accuracy) e entreguei um dashboard executivo que separa erro do modelo de erro humano e afunila até onde é preciso agir. Implementei uma camada de QA com human-in-the-loop, em que pessoas validam as saídas do modelo e as correções alimentam o retreinamento contínuo.",
          impact: [
            "Primeira visão da qualidade do modelo por origem do erro, modelo vs. humano",
            "Dashboard executivo que não existia antes",
            "Ciclo de retreinamento contínuo alimentado por revisão humana"
          ],
          tags: [
            "Computer Vision",
            "Human-in-the-Loop",
            "Avaliação de Modelos"
          ],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "relo-3-v1",
          legacy: true,
          title: "Otimização de Modelo de Computer Vision com Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Liderei a melhoria de performance de um modelo de visão computacional para detecção de marcas em mídia esportiva.",
          problem: "O modelo apresentava erros recorrentes, comprometendo a confiabilidade dos dados e limitando a escalabilidade da solução.",
          solution: "Implementei um framework de Quality Assurance com human-in-the-loop, onde outputs do modelo eram validados por humanos e utilizados em ciclos contínuos de retraining. Criei processos estruturados de feedback e priorização de erros críticos para melhoria progressiva do modelo.",
          impact: [
            "Aumentei o recall do modelo de 62% para 89%, reduzindo significativamente as marcas não detectadas.",
            "Aumento significativo da confiabilidade da plataforma",
            "Base estruturada para melhoria contínua e escalabilidade de IA"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "blu-1",
          title: "Da Diferenciação de Mercado ao Risco de Rentabilidade: um Redesenho de Monetização",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Fintech brasileira (Rio de Janeiro) de soluções de pagamento entre varejistas e seus distribuidores.", product: "O varejista paga o distribuidor com seus recebíveis futuros, e a BLU antecipa esse pagamento ao distribuidor." },
          problem: "Varejistas pagavam taxa zero, o que impulsionou a adoção, mas distorceu incentivos. Eles passaram a esticar parcelamentos além do perfil de recebíveis esperado, aumentando o prazo médio de recebíveis e abrindo uma lacuna de rentabilidade que ameaçava a sustentabilidade do produto.",
          keyDecision: "Cobrar só quando a rentabilidade está de fato em risco. Manter taxa zero para o varejista e não aumentar a taxa do distribuidor, que financiava o modelo. E provar num grupo pequeno antes de escalar.",
          solution: "Mapeei todos os parâmetros da transação e criei a lógica que compara o prazo de recebíveis do varejista com o prazo de repasse esperado pelo distribuidor, aplicando uma taxa de correção só quando ele é ultrapassado. No refinamento, os engenheiros e eu encontramos um jeito de construir sobre a infraestrutura existente, com uma solução enxuta e de baixo risco. Liberei com feature flag para 99 clientes (3,4% da base) para observar a reação antes de expandir.",
          impact: [
            "+43,5% de rentabilidade mensal no grupo piloto",
            "~R$ 329 mil de rentabilidade mensal adicional a partir de 3,4% dos clientes",
            "Projeção de ~R$ 2 mi/mês de upside com ~20% de adoção",
            "Transformamos um risco estrutural em um motor de monetização escalável"
          ],
          tags: [
            "Fintech",
            "Monetização",
            "Pagamentos"
          ],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "blu-1-v1",
          legacy: true,
          title: "Da diferenciação de mercado ao risco de rentabilidade: um redesenho de monetização",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Redesenhei a estratégia de monetização diante de um modelo assimétrico que gerava adoção, mas distorcia incentivos e ameaçava a sustentabilidade.",
          problem: "O produto operava sob um modelo de monetização assimétrico (taxa zero para pagadores), o que impulsionou a adoção, mas criou incentivos distorcidos ao longo do tempo. Os usuários passaram a estender planos de parcelamento além do perfil de recebíveis esperado, levando a: descompasso de fluxo de caixa, deterioração da economia unitária e uma lacuna de rentabilidade crescente que ameaçava a sustentabilidade de longo prazo.",
          solution: "Redesenhei a estratégia de monetização com um framework dinâmico de precificação baseado em risco. Introduzi taxas condicionais acionadas apenas quando a economia unitária estava em risco. Construí lógica para comparar maturidade dos recebíveis (WAT) versus cronograma de pagamentos. Apliquei monetização de precisão sem comprometer a proposta de valor central. Aproveitei a infraestrutura existente para um rollout enxuto e escalável.",
          impact: [
            "+43,5% de aumento na rentabilidade baseline (piloto)",
            "~R$ 329 mil de receita mensal incremental a partir de 3,4% dos clientes",
            "Projeção de +R$ 2 mi/mês de upside com ~20% de adoção",
            "Convertemos um risco estrutural em um motor de monetização escalável"
          ],
          tags: ["Fintech", "Monetization", "Payments"],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "relo-1",
          title: "Escalabilidade de Produto e Redução de Custo Operacional",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech dos EUA (Santa Monica, Califórnia) que vende dados de patrocínio esportivo como serviço, com IA no centro.", product: "In-Venue: mede a exposição de patrocinadores dentro de estádios." },
          problem: "Cada nova implementação era um projeto dedicado de engenharia de 10 a 12 semanas, incluindo duas semanas de normalização manual de dados. O tempo e o custo de setup afastavam clientes: 4 negócios foram perdidos em um trimestre.",
          keyDecision: "Schema antes de self-service. A pressão era construir o self-service primeiro, mas sem um schema de dados consistente qualquer interface quebraria. Priorizada com RICE, a padronização do schema teve a maior nota e era pré-requisito para todo o resto. Quando a engenharia argumentou que \"cada estádio é diferente\", os dados de projetos anteriores mostraram que 80% dos campos eram iguais, e a objeção virou co-design dos 20% restantes.",
          solution: "Padronizei o schema de dados, eliminei etapas manuais de engenharia no deploy e criei um playbook de onboarding que qualquer pessoa do time conseguia executar. Adicionei uma validação de schema antes do setup, que reduziu as idas e vindas com o cliente de 5 para 1.",
          impact: [
            "Redução de 69,5% nos custos operacionais",
            "Onboarding de 10 a 12 semanas para 1,5 semana",
            "O mesmo time entregando 3x mais implementações no mesmo tempo",
            "Zero negócios perdidos por complexidade de setup no trimestre seguinte",
            "US$ 26 milhões em valor de mídia no estádio medidos com o novo framework",
            "A mesma arquitetura virou base para a expansão para o Japão"
          ],
          tags: [
            "Expansão de Mercado",
            "Escala de Produto"
          ],
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "relo-1-v1",
          legacy: true,
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
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "blu-2",
          title: "Mantendo a Entrega em Movimento com a Engenharia",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Fintech brasileira (Rio de Janeiro) de soluções de pagamento entre varejistas e seus distribuidores.", product: "O varejista paga o distribuidor com seus recebíveis futuros, e a BLU antecipa esse pagamento ao distribuidor.", team: "Até 7 engenheiros, um tech lead, uma pessoa de design, 2 de dados e um technical writer, em sprints Scrum de 2 semanas." },
          problem: "Vendas, Suporte, Marketing e diretoria disputavam o mesmo time de engenharia. Às vezes o trabalho travava em code review, e não havia dashboard para os riscos de perda financeira, então o time só os via quando os alarmes disparavam.",
          keyDecision: "Proteger o foco do time. Ser a porta de entrada única das demandas, filtrar e diagnosticar problemas antes de chegarem à engenharia, e dar visibilidade ao time em vez de mais ruído.",
          solution: "Implementei PRDs com o porquê e as métricas de sucesso definidos de antemão. Levava ao refinamento tickets com critérios de aceite, já alinhados com o tech lead, e planejava as sprints pela capacidade. Conduzia uma triagem semanal de bugs com o Suporte, diagnosticando muitos problemas eu mesma antes de escalar. Montei alarmes com a engenharia e o SRE e organizei quem respondia. Quando uma retro mostrou trabalho travando em code review, criei uma automação no Jira que avisava os revisores assim que um card ficava pronto. Releases faseadas com feature flags, com cenários de teste gerados com IA antes da aprovação.",
          impact: [
            "Alarmes de perda financeira caíram mais de 58% depois do dashboard de monitoramento que construí",
            "Gargalo de code review eliminado",
            "PRDs adotados pelo time para alinhar escopo e métricas"
          ],
          tags: [
            "Agile",
            "Entrega",
            "Cross-functional"
          ],
          imageUrl: "https://picsum.photos/seed/blu-case-2/800/600"
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
        stackLabel: "Stack utilizada neste site",
        stack: "React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel · Nano Banana",
        items: [],
        curation: "Direção Humana",
        execution: "Execução por Inteligência Artificial"
      },
      ui: {
        home: "Home",
        work: "Cases",
        skills: "Habilidades",
        about: "Sobre mim",
        prd: "AI Toolkit",
        contact: "Contato",
        viewProjects: "Ver Projetos",
        caseStudiesTitle: "Cases",
        caseStudiesDesc: "Uma seleção de projetos em que liderei estratégia e execução, medidos por resultados reais.",
        clientsTitle: "Clientes",
        testimonialsTitle: "Recomendações",
        testimonialsDesc:
          "Recomendação no LinkedIn e depoimentos de colegas, lideranças e parceiros.",
        problem: "O Problema",
        keyDecision: "Decisão-chave",
        aboutCompany: "Empresa",
        aboutProduct: "Produto",
        aboutTeam: "Time",
        previousVersion: "Versão anterior",
        solution: "A Solução",
        impact: "Impacto",
        careerTitle: "Trajetória",
        educationTitle: "Formação",
        certificationsTitle: "Certificações",
        footerTitle: "Vamos construir o próximo grande produto juntos?",
        footerDesc: "Estou sempre aberta a novas oportunidades, mentorias ou apenas um café virtual para falar sobre produto e IA.",
        downloadResumeDocx: "Baixar currículo (DOCX)",
        experienceBadge: "5 Anos de Experiência",
        aiBadge: "Criado com IA",
        builtWithAi: "Desenvolvido com Inteligência Artificial sob curadoria de Maria Eduarda Martins."
      }
    },
    en: {
      title: "Product Manager",
      bio: "Product Manager with 5 years of experience across global companies and startups, with a background in fintech and adtech\n\nI have worked on challenges such as re-evaluating monetization models, expanding into new markets, and implementing AI/ML-powered functionalities.\n\nI’m especially motivated by by shortening paths, driving efficiency, and achieving a lot in a simple, scalable way.",
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
          id: "relo-2",
          title: "Global Expansion with a Language-Agnostic AI Layer",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "US adtech company (Santa Monica, CA) selling AI-powered sports sponsorship data as a service.", product: "Verbal Mentions: detects spoken sponsor brand mentions in sports broadcasts." },
          problem: "Brand mention detection relied on hardcoded English keywords. Every new language was a 6 to 8 week engineering project, and Japanese contracts were at risk. In Japanese broadcasts, 34% of brand mentions were semantic variations that fixed keywords could not catch.",
          keyDecision: "I compared four approaches with explicit trade-offs: hardcoded keywords (missed 34% of mentions), machine translation (lost context in brand names), fine-tuning per language (too costly) and an instruction-based AI layer. I chose the AI layer because the problem was interpretation and generalization to languages we didn't have yet, with low marginal cost per new language.",
          solution: "Built an instruction-based AI layer that reasons about meaning instead of matching keywords, grounded in domain context created with a native Japanese analyst. Validated several speech-to-text models and prompt strategies against a golden set that compared models on cost and quality. When no model reached the accuracy target on foreign brand names, I flagged the risk early and solved it with prompt-based normalization.",
          impact: [
            "85% less time to enable a new language",
            "120% increase in revenue potential",
            "US$15.3M in media value revealed from Japanese audio exposure",
            "Evaluation framework reused by other teams"
          ],
          tags: [
            "AI",
            "Evals",
            "Internationalization"
          ]
        },
        {
          id: "relo-2-v1",
          legacy: true,
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
          id: "hfts-1",
          title: "Evals and Grounding for an AI Meal Planner",
          company: "Hot for the Summer",
          role: "Product builder",
          period: "2026",
          about: { company: "My own product: I built it and I run it.", product: "Live diet and training app with an AI meal planner. Guest access available." },
          problem: "An LLM generated daily meal plans and their macros. Only 58% of requests produced a plan, and nobody checked whether the model's nutrition numbers were true. Rechecked against Brazil's official food composition database, plans that were 97% \"on target\" by the app's own math were only 6% on target with real numbers.",
          keyDecision: "The model decides what, the code decides how much. The LLM picks the foods, where cultural judgment matters. Nutrition values come from that official database, not from the model, and a code solver adjusts portions to hit the targets exactly.",
          solution: "Built an eval harness with code-based graders, repeated runs and confidence intervals, plus tracing in Langfuse. Matched food names to database entries with keyword search and embeddings in a cascade (hybrid fusion was tested and made results worse), measured recall@3, and added an LLM verifier that can answer \"none\", with self-consistency voting and caching. Kept a held-out test set to catch overfitting. Everything ships behind a switch, and each decision is logged with its metric and accepted cost.",
          impact: [
            "On target with real nutrition data: 6% → 97%",
            "Within the real safety range: 42% → 100%",
            "Requests that produce a plan: 58% → 75 to 100%",
            "37% fewer model calls per generation"
          ],
          tags: [
            "LLM Evals",
            "Grounding",
            "Retrieval"
          ],
          imageUrl: "/cases/hot-for-the-summer.png",
          link: {"href": "https://www.hotforthesummer.com/", "label": "Visit the product"}
        },
        {
          id: "relo-3",
          title: "Making Computer Vision Quality Measurable",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "US adtech company (Santa Monica, CA) selling AI-powered sports sponsorship data as a service.", product: "Computer vision models that detect sponsor brands in sports media, the company's core product." },
          problem: "The models had recurring errors, reducing data reliability. There was no way to see where errors came from, or whether a wrong result was a model error or a human error.",
          keyDecision: "Measure before fixing. Before changing the models, I made errors visible and separated model errors from human errors, so improvement effort went where the errors actually were.",
          solution: "Defined the quality metrics for the models (precision, recall, F1 score, accuracy) and delivered an executive dashboard that splits model error from human error and drills down to where action is needed. Implemented a human-in-the-loop QA layer where people validate model outputs and their corrections feed continuous retraining.",
          impact: [
            "First view of model quality by error source, model vs. human",
            "Executive dashboard that did not exist before",
            "Continuous retraining loop fed by human review"
          ],
          tags: [
            "Computer Vision",
            "Human-in-the-Loop",
            "Model Evaluation"
          ],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "relo-3-v1",
          legacy: true,
          title: "Computer Vision Model Optimization with Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Led performance improvements for a computer vision model used to detect sponsor brands in sports media.",
          problem: "The model had recurring errors, reducing data reliability and limiting the solution's scalability.",
          solution: "Implemented a human-in-the-loop QA framework where model outputs were validated by humans and used in continuous retraining cycles. Built structured feedback loops and prioritized critical error categories for progressive model improvement.",
          impact: [
            "Increased model recall from 62% to 89%, significantly reducing missed brand detections.",
            "Significant increase in platform reliability",
            "Established a foundation for continuous AI improvement and scalability"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "blu-1",
          title: "From Market Differentiation to Profitability Risk: A Monetization Redesign",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Brazilian fintech (Rio de Janeiro) building payment solutions between retailers and their distributors.", product: "Retailers pay their distributors with their future receivables, and BLU advances that payment to the distributor." },
          problem: "Retailers paid zero fees, which drove adoption but distorted incentives. They started stretching installment plans beyond the expected receivables profile, extending the average receivables term and opening a profitability gap that threatened the product's sustainability.",
          keyDecision: "Charge only when profitability is actually at risk. Keep zero fees for retailers and don't raise the fee for distributors, who funded the model. Then prove it on a small group before scaling.",
          solution: "Mapped every transaction parameter and built logic that compares the retailer's receivables term with the distributor's expected payout term, applying a correction fee only when it is exceeded. In refinement, the engineers and I found a way to build it on existing infrastructure, keeping it lean and low risk. Released it behind a feature flag to 99 customers (3.4% of the base) to watch customer reaction before going wider.",
          impact: [
            "+43.5% monthly profitability in the pilot group",
            "~BRL 329K in additional monthly profitability from 3.4% of customers",
            "Projected ~BRL 2M/month upside at ~20% adoption",
            "Turned a structural risk into a scalable monetization engine"
          ],
          tags: [
            "Fintech",
            "Monetization",
            "Payments"
          ],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "blu-1-v1",
          legacy: true,
          title: "From Market Differentiation to Profitability Risk: A Monetization Redesign",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Led a monetization redesign addressing asymmetric pricing, distorted incentives, and long-term profitability risk.",
          problem: "The product operated under an asymmetric monetization model (zero-fee for payers), which successfully drove adoption but created distorted incentives over time. Users began extending installment plans beyond the expected receivables profile, leading to: cash flow mismatch, deterioration of unit economics, and a growing profitability gap that threatened long-term sustainability.",
          solution: "Redesigned the monetization strategy by implementing a dynamic, risk-based pricing framework. Introduced conditional fees triggered only when unit economics were at risk. Built logic to compare receivables maturity (WAT) vs. payout schedule. Applied precision monetization without compromising the core value proposition. Leveraged existing infrastructure for a lean and scalable rollout.",
          impact: [
            "+43.5% uplift in baseline profitability (pilot)",
            "~R$329K incremental monthly revenue from 3.4% of clients",
            "Projected +R$2M/month upside at ~20% adoption",
            "Converted a structural risk into a scalable monetization engine"
          ],
          tags: ["Fintech", "Monetization", "Payments"],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "relo-1",
          title: "Product Scalability and Operational Cost Reduction",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "US adtech company (Santa Monica, CA) selling AI-powered sports sponsorship data as a service.", product: "In-Venue: measures sponsor exposure inside stadiums." },
          problem: "Each new implementation was a dedicated 10 to 12 week engineering project, including two weeks of manual data normalization. Setup time and cost scared prospects away: 4 deals were lost in one quarter.",
          keyDecision: "Schema before self-service. The pressure was to build self-service first, but without a consistent data schema any interface would break. Prioritized with RICE, schema standardization scored highest and was the prerequisite for everything else. When engineering pushed back that \"every stadium is different\", data from past projects showed 80% of fields were identical, which turned the objection into co-design of the remaining 20%.",
          solution: "Standardized the data schema, removed manual engineering steps from deployment and created an onboarding playbook anyone on the team could run. Added a schema validation step before setup, which cut back-and-forth with clients from 5 rounds to 1.",
          impact: [
            "69.5% reduction in operational costs",
            "Onboarding from 10 to 12 weeks down to 1.5 weeks",
            "Same team delivering 3x more implementations in the same time",
            "Zero deals lost to setup complexity the following quarter",
            "US$26M in on-site media value measured with the new framework",
            "Same architecture became the base for the Japan expansion"
          ],
          tags: [
            "Market Expansion",
            "Product Scaling"
          ],
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "relo-1-v1",
          legacy: true,
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
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "blu-2",
          title: "Keeping Delivery Moving with Engineering",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Brazilian fintech (Rio de Janeiro) building payment solutions between retailers and their distributors.", product: "Retailers pay their distributors with their future receivables, and BLU advances that payment to the distributor.", team: "Up to 7 engineers, a tech lead, a designer, 2 data people and a technical writer, in 2-week Scrum sprints." },
          problem: "Sales, Support, Marketing and leadership all competed for the same engineering team. Work sometimes stalled in code review, and there was no dashboard for financial-loss risks, so the team only saw them when alarms fired.",
          keyDecision: "Protect the team's focus. Be the single entry point for requests, filter and diagnose issues before they reach engineering, and give the team visibility instead of more noise.",
          solution: "Introduced PRDs with the why and success metrics defined upfront. Brought tickets with acceptance criteria to refinement, already aligned with the tech lead, and planned sprints by capacity. Ran a weekly bug triage with Support, diagnosing many issues myself before escalating. Set up alarms with engineering and SRE and organized who responded. When a retro showed work stalling in code review, I added a Jira automation that notified reviewers the moment a card was ready. Released in phases behind feature flags, with AI-generated test scenarios before sign-off.",
          impact: [
            "Financial-loss alarms down by over 58% after the monitoring dashboard I built",
            "Code review bottleneck removed",
            "PRDs introduced as the team's way to align on scope and metrics"
          ],
          tags: [
            "Agile",
            "Delivery",
            "Cross-functional"
          ],
          imageUrl: "https://picsum.photos/seed/blu-case-2/800/600"
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
          degree: "Postgraduate Degree in Product Management",
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
          period: "Sep 2025 – Present",
          description: "I lead the evaluation, improvement, and retraining cycle of computer vision models for sponsor brand detection in sports media."
        },
        {
          role: "Product Manager",
          company: "Blu",
          period: "Jul 2023 – Sep 2025",
          description: "Owned product strategy, metrics, and process improvement for the core financial product, focusing on profitability and scalability."
        },
        {
          role: "Product Analyst",
          company: "Bravet",
          period: "Dec 2022 – Jul 2023",
          description: "Structured quality processes and documentation for product development, ensuring scalability and compliance with regulatory standards."
        },
        {
          role: "Product Analyst",
          company: "BRF",
          period: "Jul 2021 – Dec 2022",
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
        stackLabel: "Tech stack used for this site",
        stack: "React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel · Nano Banana",
        items: [],
        curation: "Human Direction",
        execution: "AI Execution"
      },
      ui: {
        home: "Home",
        work: "Cases",
        skills: "Skills",
        about: "About",
        prd: "AI Toolkit",
        contact: "Contact",
        viewProjects: "View Projects",
        caseStudiesTitle: "Cases",
        caseStudiesDesc: "A selection of projects where I led strategy and execution, measured by real results.",
        clientsTitle: "Clients",
        testimonialsTitle: "Recommendations",
        testimonialsDesc:
          "LinkedIn recommendation and notes from colleagues, leaders, and partners.",
        problem: "The Problem",
        keyDecision: "Key Decision",
        aboutCompany: "Company",
        aboutProduct: "Product",
        aboutTeam: "Team",
        previousVersion: "Previous version",
        solution: "The Solution",
        impact: "Impact",
        careerTitle: "Career Path",
        educationTitle: "Education",
        certificationsTitle: "Certifications",
        footerTitle: "Let's build the next big product together?",
        footerDesc: "I'm always open to new opportunities, mentorships, or just a virtual coffee to talk about product and AI.",
        downloadResumeDocx: "Download resume (DOCX)",
        experienceBadge: "5 Years of Experience",
        aiBadge: "Built with AI",
        builtWithAi: "Developed with Artificial Intelligence curated by Maria Eduarda Martins."
      }
    },
    es: {
      title: "Product Manager",
      bio: "Product Manager con experiencia en fintech y adtech, reevaluación de modelos de monetización, expansión global de plataformas y liderazgo de productos de IA/ML y visión computacional. Fascinada por acortar caminos, ganar eficiencia y lograr mucho de forma simple y escalable.",
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
          id: "relo-2",
          title: "Expansión Global con una Capa de IA Independiente del Idioma",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech de EE. UU. (Santa Mónica, California) que vende datos de patrocinio deportivo como servicio, con IA en el centro.", product: "Verbal Mentions: detecta menciones habladas de marcas patrocinadoras en transmisiones deportivas." },
          problem: "La detección de menciones dependía de palabras clave fijas en inglés. Cada idioma nuevo era un proyecto de ingeniería de 6 a 8 semanas, y había contratos japoneses en riesgo. En las transmisiones en japonés, el 34% de las menciones eran variaciones semánticas que las palabras clave fijas no captaban.",
          keyDecision: "Comparé cuatro enfoques con trade-offs explícitos: palabras clave fijas (perdían el 34% de las menciones), traducción automática (perdía contexto en nombres de marca), fine-tuning por idioma (demasiado costoso) y una capa de IA basada en instrucciones. Elegí la capa de IA porque el problema era de interpretación y de generalización a idiomas que aún no teníamos, con bajo costo marginal por idioma nuevo.",
          solution: "Construí una capa de IA basada en instrucciones que interpreta el significado en lugar de buscar palabras clave, fundamentada en contexto de dominio creado con una analista nativa japonesa. Validé varios modelos de speech-to-text y estrategias de prompt contra un golden set que comparaba modelos por costo y calidad. Cuando ningún modelo alcanzó la meta de precisión en nombres de marcas extranjeras, señalé el riesgo temprano y lo resolví con normalización vía prompt.",
          impact: [
            "85% menos tiempo para habilitar un idioma nuevo",
            "Aumento del 120% en el potencial de ingresos",
            "US$ 15,3 millones en valor de medios revelados en la exposición en audio en japonés",
            "Framework de evaluación reutilizado por otros equipos"
          ],
          tags: [
            "IA",
            "Evals",
            "Internacionalización"
          ]
        },
        {
          id: "relo-2-v1",
          legacy: true,
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
          id: "hfts-1",
          title: "Evals y Grounding en un Planificador de Menús con IA",
          company: "Hot for the Summer",
          role: "Product builder",
          period: "2026",
          about: { company: "Producto propio: lo construí y lo opero.", product: "App de dieta y entrenamiento en producción, con menú generado por IA. Se puede entrar como invitado." },
          problem: "Un LLM armaba el menú del día y calculaba sus macros. Solo el 58% de las solicitudes generaba un menú, y nadie verificaba si los números nutricionales del modelo eran verdaderos. Recalculados con la base oficial brasileña de composición de alimentos, menús que estaban 97% \"en la meta\" según la propia app quedaban solo 6% en la meta con números reales.",
          keyDecision: "El modelo decide qué, el código decide cuánto. El LLM elige los alimentos, donde importa el criterio cultural. Los valores nutricionales vienen de esa base oficial, no del modelo, y un solver en código ajusta las porciones para cumplir las metas con exactitud.",
          solution: "Construí un sistema de evals con graders en código, varias rondas e intervalos de confianza, además de tracing en Langfuse. Emparejé los nombres de alimentos con los registros de esa base usando búsqueda por palabras y embeddings en cascada (la fusión híbrida se probó y empeoró el resultado), medí el recall@3 y agregué un LLM verificador que puede responder \"ninguno\", con votación por self-consistency y caché. Reservé un conjunto de prueba nunca usado en el ajuste para detectar overfitting. Todo sale con un interruptor para apagarlo, y cada decisión queda registrada con su métrica y el costo aceptado.",
          impact: [
            "En la meta con datos nutricionales reales: 6% → 97%",
            "Dentro del rango de seguridad real: 42% → 100%",
            "Solicitudes que generan un menú: 58% → 75 a 100%",
            "37% menos llamadas al modelo por generación"
          ],
          tags: [
            "LLM Evals",
            "Grounding",
            "Retrieval"
          ],
          imageUrl: "/cases/hot-for-the-summer.png",
          link: {"href": "https://www.hotforthesummer.com/", "label": "Conocer el producto"}
        },
        {
          id: "relo-3",
          title: "Haciendo Medible la Calidad de Visión por Computadora",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech de EE. UU. (Santa Mónica, California) que vende datos de patrocinio deportivo como servicio, con IA en el centro.", product: "Modelos de visión por computadora que detectan marcas patrocinadoras en medios deportivos, el producto central de la empresa." },
          problem: "Los modelos tenían errores recurrentes, lo que reducía la confiabilidad de los datos. No había forma de ver de dónde venían los errores, ni si un resultado incorrecto era un error del modelo o un error humano.",
          keyDecision: "Medir antes de corregir. Antes de cambiar los modelos, hice visibles los errores y separé el error del modelo del error humano, para que el esfuerzo de mejora fuera a donde realmente estaban los errores.",
          solution: "Definí las métricas de calidad de los modelos (precision, recall, F1 score, accuracy) y entregué un dashboard ejecutivo que separa el error del modelo del error humano y profundiza hasta donde hay que actuar. Implementé una capa de QA con human-in-the-loop, donde personas validan las salidas del modelo y sus correcciones alimentan el reentrenamiento continuo.",
          impact: [
            "Primera visión de la calidad del modelo por origen del error, modelo vs. humano",
            "Dashboard ejecutivo que no existía antes",
            "Ciclo de reentrenamiento continuo alimentado por revisión humana"
          ],
          tags: [
            "Computer Vision",
            "Human-in-the-Loop",
            "Evaluación de Modelos"
          ],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "relo-3-v1",
          legacy: true,
          title: "Optimización de Modelo de Computer Vision con Human-in-the-Loop",
          company: "Relo Metrics",
          role: "Senior Product Manager - Machine Learning & QA",
          period: "2025 - 2026",
          description: "Lideré mejoras de performance de un modelo de visión computacional para la detección de marcas en medios deportivos.",
          problem: "El modelo presentaba errores recurrentes, comprometiendo la confiabilidad de los datos y limitando la escalabilidad de la solución.",
          solution: "Implementé un framework de Quality Assurance con human-in-the-loop, donde los outputs del modelo eran validados por humanos y usados en ciclos continuos de retraining. Creé procesos estructurados de feedback y priorización de errores críticos para una mejora progresiva del modelo.",
          impact: [
            "Aumenté el recall del modelo de 62% a 89%, reduciendo significativamente las marcas no detectadas.",
            "Aumento significativo de la confiabilidad de la plataforma",
            "Base estructurada para mejora continua y escalabilidad de IA"
          ],
          tags: ["Computer Vision", "Human-in-the-Loop", "Machine Learning"],
          videoUrl: "https://relometrics.com/hubfs/Relo_Metrics_Homepage_Video_v1.mp4"
        },
        {
          id: "blu-1",
          title: "De la Diferenciación de Mercado al Riesgo de Rentabilidad: un Rediseño de Monetización",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Fintech brasileña (Río de Janeiro) de soluciones de pago entre minoristas y sus distribuidores.", product: "El minorista paga al distribuidor con sus cobros futuros, y BLU le anticipa ese pago al distribuidor." },
          problem: "Los minoristas pagaban comisión cero, lo que impulsó la adopción pero distorsionó los incentivos. Empezaron a extender los planes de cuotas más allá del perfil de cobros esperado, alargando el plazo promedio de cobro y abriendo una brecha de rentabilidad que amenazaba la sostenibilidad del producto.",
          keyDecision: "Cobrar solo cuando la rentabilidad está realmente en riesgo. Mantener la comisión cero para el minorista y no subir la comisión del distribuidor, que financiaba el modelo. Y probarlo en un grupo pequeño antes de escalar.",
          solution: "Mapeé todos los parámetros de la transacción y creé la lógica que compara el plazo de cobro del minorista con el plazo de pago esperado por el distribuidor, aplicando una comisión de corrección solo cuando se supera. En el refinamiento, los ingenieros y yo encontramos la forma de construirlo sobre la infraestructura existente, con una solución liviana y de bajo riesgo. Lo lancé con feature flag a 99 clientes (3,4% de la base) para observar la reacción antes de ampliar.",
          impact: [
            "+43,5% de rentabilidad mensual en el grupo piloto",
            "~R$ 329 mil de rentabilidad mensual adicional a partir del 3,4% de los clientes",
            "Proyección de ~R$ 2 M/mes de upside con ~20% de adopción",
            "Convertimos un riesgo estructural en un motor de monetización escalable"
          ],
          tags: [
            "Fintech",
            "Monetización",
            "Pagos"
          ],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "blu-1-v1",
          legacy: true,
          title: "De la diferenciación de mercado al riesgo de rentabilidad: un rediseño de monetización",
          company: "Blu",
          role: "Product Manager - Payments & Financial Products",
          period: "2023 - 2025",
          description: "Rediseñé la estrategia de monetización frente a un modelo asimétrico que generaba adopción pero distorsionaba incentivos y amenazaba la sostenibilidad.",
          problem: "El producto operaba bajo un modelo de monetización asimétrico (cero comisión para quienes pagan), lo que impulsó la adopción pero creó incentivos distorsionados con el tiempo. Los usuarios extendieron planes de cuotas más allá del perfil de cobros esperado, generando: desajuste de flujo de caja, deterioro de la economía unitaria y una brecha de rentabilidad creciente que amenazaba la sostenibilidad a largo plazo.",
          solution: "Rediseñé la estrategia de monetización con un marco dinámico de precios basado en riesgo. Introduje comisiones condicionales activadas solo cuando la economía unitaria estaba en riesgo. Construí lógica para comparar madurez de cobros (WAT) versus calendario de pagos. Apliqué monetización de precisión sin comprometer la propuesta de valor central. Aproveché la infraestructura existente para un despliegue ágil y escalable.",
          impact: [
            "+43,5% de aumento en la rentabilidad baseline (piloto)",
            "~R$ 329 mil de ingresos mensuales incrementales del 3,4% de los clientes",
            "Proyección de +R$ 2M/mes de upside con ~20% de adopción",
            "Convertimos un riesgo estructural en un motor de monetización escalable"
          ],
          tags: ["Fintech", "Monetization", "Payments"],
          videoUrl: "/cases/case-monetizacao.mp4"
        },
        {
          id: "relo-1",
          title: "Escalabilidad de Producto y Reducción de Costos Operativos",
          company: "Relo Metrics",
          role: "Senior Product Manager",
          period: "2025 - 2026",
          about: { company: "Adtech de EE. UU. (Santa Mónica, California) que vende datos de patrocinio deportivo como servicio, con IA en el centro.", product: "In-Venue: mide la exposición de patrocinadores dentro de estadios." },
          problem: "Cada nueva implementación era un proyecto dedicado de ingeniería de 10 a 12 semanas, incluidas dos semanas de normalización manual de datos. El tiempo y el costo de configuración alejaban a los clientes: se perdieron 4 negocios en un trimestre.",
          keyDecision: "Schema antes que self-service. La presión era construir el self-service primero, pero sin un schema de datos consistente cualquier interfaz se rompería. Priorizada con RICE, la estandarización del schema obtuvo la mayor puntuación y era requisito para todo lo demás. Cuando ingeniería argumentó que \"cada estadio es diferente\", los datos de proyectos anteriores mostraron que el 80% de los campos eran iguales, y la objeción se convirtió en co-diseño del 20% restante.",
          solution: "Estandaricé el schema de datos, eliminé pasos manuales de ingeniería en el despliegue y creé un playbook de onboarding que cualquier persona del equipo podía ejecutar. Agregué una validación de schema antes de la configuración, que redujo las idas y vueltas con el cliente de 5 a 1.",
          impact: [
            "Reducción del 69,5% en costos operativos",
            "Onboarding de 10 a 12 semanas a 1,5 semanas",
            "El mismo equipo entregando 3x más implementaciones en el mismo tiempo",
            "Cero negocios perdidos por complejidad de configuración en el trimestre siguiente",
            "US$ 26 millones en valor de medios en estadio medidos con el nuevo framework",
            "La misma arquitectura fue la base para la expansión a Japón"
          ],
          tags: [
            "Expansión de Mercado",
            "Escala de Producto"
          ],
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "relo-1-v1",
          legacy: true,
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
          videoUrl: "/cases/case-escalabilidade.mp4"
        },
        {
          id: "blu-2",
          title: "Manteniendo la Entrega en Movimiento con Ingeniería",
          company: "Blu",
          role: "Product Manager",
          period: "2023 - 2025",
          about: { company: "Fintech brasileña (Río de Janeiro) de soluciones de pago entre minoristas y sus distribuidores.", product: "El minorista paga al distribuidor con sus cobros futuros, y BLU le anticipa ese pago al distribuidor.", team: "Hasta 7 ingenieros, un tech lead, una persona de diseño, 2 de datos y un technical writer, en sprints Scrum de 2 semanas." },
          problem: "Ventas, Soporte, Marketing y dirección competían por el mismo equipo de ingeniería. A veces el trabajo se trababa en code review, y no había dashboard para los riesgos de pérdida financiera, así que el equipo solo los veía cuando saltaban las alarmas.",
          keyDecision: "Proteger el foco del equipo. Ser la puerta de entrada única de las demandas, filtrar y diagnosticar problemas antes de que lleguen a ingeniería, y dar visibilidad al equipo en lugar de más ruido.",
          solution: "Implementé PRDs con el porqué y las métricas de éxito definidos de antemano. Llevaba al refinamiento tickets con criterios de aceptación, ya alineados con el tech lead, y planificaba los sprints según la capacidad. Conducía un triage semanal de bugs con Soporte, diagnosticando muchos problemas yo misma antes de escalar. Configuré alarmas con ingeniería y SRE y organicé quién respondía. Cuando una retro mostró trabajo trabado en code review, creé una automatización en Jira que avisaba a los revisores apenas una tarjeta estaba lista. Releases por fases con feature flags, con escenarios de prueba generados con IA antes de la aprobación.",
          impact: [
            "Las alarmas de pérdida financiera bajaron más del 58% después del dashboard de monitoreo que construí",
            "Cuello de botella de code review eliminado",
            "PRDs adoptados por el equipo para alinear alcance y métricas"
          ],
          tags: [
            "Agile",
            "Entrega",
            "Cross-functional"
          ],
          imageUrl: "https://picsum.photos/seed/blu-case-2/800/600"
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
        stackLabel: "Stack utilizada en este sitio",
        stack: "React · TypeScript · Tailwind · Vite · Gemini · Google AI Studio · Vercel · Nano Banana",
        items: [],
        curation: "Dirección Humana",
        execution: "Ejecución por IA"
      },
      ui: {
        home: "Home",
        work: "Cases",
        skills: "Habilidades",
        about: "Sobre mí",
        prd: "AI Toolkit",
        contact: "Contacto",
        viewProjects: "Ver Proyectos",
        caseStudiesTitle: "Cases",
        caseStudiesDesc: "Una selección de proyectos en los que lideré estrategia y ejecución, medidos por resultados reales.",
        clientsTitle: "Clientes",
        testimonialsTitle: "Recomendaciones",
        testimonialsDesc:
          "Recomendación en LinkedIn y mensajes de colegas, liderazgos y socios.",
        problem: "El Problema",
        keyDecision: "Decisión clave",
        aboutCompany: "Empresa",
        aboutProduct: "Producto",
        aboutTeam: "Equipo",
        previousVersion: "Versión anterior",
        solution: "La Solución",
        impact: "Impacto",
        careerTitle: "Trayectoria",
        educationTitle: "Educación",
        certificationsTitle: "Certificaciones",
        footerTitle: "¿Construimos el próximo gran producto juntos?",
        footerDesc: "Siempre estoy abierta a nuevas oportunidades, mentorías o simplemente un café virtual para hablar sobre producto e IA.",
        downloadResumeDocx: "Descargar CV (DOCX)",
        experienceBadge: "5 Años de Experiencia",
        aiBadge: "Creado con IA",
        builtWithAi: "Desarrollado con Inteligencia Artificial bajo la curaduría de Maria Eduarda Martins."
      }
    }
  }
};
