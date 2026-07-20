// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for all portfolio content.
// Edit this file to update names, links, projects, and experience.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sunny Kushwaha',
  role: 'AI Full-Stack Architect',
  subRole: 'Senior Lead Engineer · Generative AI · Cloud',
  tagline:
    'I design and build production-grade AI platforms — Enterprise RAG systems, agentic AI workflows, and MCP gateway architectures that move organizations from GenAI experiments to governed, scalable AI products.',
  location: 'Pune, India',
  /** Drop your photo at portfolio/public/profile.jpg (this path). */
  photo: './profile.jpg',
  email: 'kushwaha.sunny2602@gmail.com',
  github: 'https://github.com/sunny-dev007',
  githubUser: 'sunny-dev007',
  linkedin: 'https://www.linkedin.com/in/sunny-kushwaha-genai',
  // Update this number to match your actual experience.
  yearsOfExperience: '10+',
  resumeHighlights: [
    { value: '10+', label: 'Years Engineering' },
    { value: '15+', label: 'AI POCs & Platforms' },
    { value: '4+', label: 'Domains: BFSI · Health · FinOps' },
    { value: '2', label: 'Clouds (Azure · AWS)' },
  ],
}

export const about = {
  heading: 'Architecting the bridge between LLMs and the Enterprise',
  paragraphs: [
    `I am a Senior Lead Engineer with deep full-stack, cloud, and distributed-systems experience, now specializing in Generative AI architecture. My focus is the hard part of enterprise AI — not the demo, but the production system: retrieval quality, grounding, evaluation, cost control, security, and governance.`,
    `I work across the entire AI stack — from React/TypeScript front-ends and Node.js microservices, through event-driven backbones on Kafka, to Azure OpenAI, hybrid retrieval pipelines, vector databases (Qdrant, Pinecone, Weaviate, Azure AI Search), and Model Context Protocol (MCP) integration layers.`,
    `My goal in every engagement is the same: turn Generative AI from an isolated proof-of-concept into a governed, observable, cost-efficient platform capability that product teams can build on.`,
  ],
  focusAreas: [
    'Enterprise RAG & Hybrid Retrieval',
    'Agentic AI & Multi-Agent Orchestration',
    'MCP Gateway & Tooling Architecture',
    'Responsible AI · NIST AI RMF · EU AI Act Compliance',
    'LLM Security (OWASP LLM Top 10) & Guardrails',
    'Multi-LLM Strategy: Azure OpenAI · AWS Bedrock · Gemini',
    'Cloud-Native & Event-Driven Platforms',
    'Engineering Leadership & Mentoring',
  ],
}

export interface ExpertisePillar {
  icon: string
  title: string
  description: string
  points: string[]
}

export const expertise: ExpertisePillar[] = [
  {
    icon: '◈',
    title: 'Enterprise RAG Architecture',
    description:
      'End-to-end retrieval-augmented generation platforms designed for accuracy, traceability, and scale.',
    points: [
      'Hybrid retrieval: dense vectors + BM25 + reranking',
      'Chunking & embedding strategy per document domain',
      'Grounded citations, hallucination controls, eval harnesses',
      'Qdrant · Pinecone · Weaviate · Azure AI Search',
    ],
  },
  {
    icon: '⬡',
    title: 'Agentic AI Systems',
    description:
      'Multi-agent workflows that plan, call tools, and recover from failure — with humans in the loop where it matters.',
    points: [
      'Planner / executor / critic agent topologies',
      'Tool-use orchestration with structured outputs',
      'Human-in-the-loop approval gates for sensitive actions',
      'Stateful workflows with retries, timeouts, fallbacks',
    ],
  },
  {
    icon: '⛁',
    title: 'MCP & Integration Architecture',
    description:
      'Model Context Protocol gateways that expose enterprise systems to LLMs safely and consistently.',
    points: [
      'MCP server design: tools, resources, prompts',
      'Central gateway: authN/Z, rate limiting, audit trails',
      'Tool registries and capability discovery',
      'Zero-trust posture for LLM ↔ system access',
    ],
  },
  {
    icon: '☁',
    title: 'Cloud-Native Platform Engineering',
    description:
      'The distributed-systems foundation that production AI workloads actually run on.',
    points: [
      'Multi-LLM: Azure OpenAI · AWS Bedrock · Google Gemini',
      'Azure & AWS: Functions, Lambda, AKS/EKS',
      'Event-driven microservices on Kafka',
      'IaC with Terraform · CI/CD with GitHub Actions',
      'Observability, cost governance, autoscaling',
    ],
  },
]

/** Roles cycled by the hero typing animation. */
export const heroRoles = [
  'AI Full-Stack Architect',
  'GenAI Solution Architect',
  'Agentic AI Architect',
  'Enterprise RAG Specialist',
]

/** Technologies scrolled in the marquee strip. */
export const marqueeTech = [
  'Azure OpenAI', 'AWS Bedrock', 'Google Gemini', 'MCP', 'Enterprise RAG',
  'Responsible AI', 'NIST AI RMF', 'OWASP LLM Top 10', 'LangChain', 'LangGraph',
  'Agentic AI', 'Qdrant', 'Weaviate', 'Azure AI Search', 'Graph RAG',
  'Kafka', 'Kubernetes', 'Terraform', 'OpenTelemetry', 'Node.js',
  'TypeScript', 'React', 'Python', 'AWS', 'Azure',
]

export type ProjectGroup = 'rag' | 'agentic' | 'domain' | 'platform'

export const projectFilters: { id: ProjectGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'rag', label: 'RAG & Retrieval' },
  { id: 'agentic', label: 'Agentic AI' },
  { id: 'domain', label: 'Domain Solutions' },
  { id: 'platform', label: 'Platforms & Infra' },
]

export type ProjectArtVariant =
  | 'docs' | 'finops' | 'career' | 'research' | 'bank'
  | 'health' | 'gateway' | 'agents' | 'graph' | 'events' | 'security'

export interface Project {
  title: string
  category: string
  group: ProjectGroup
  status: 'Production' | 'POC' | 'Platform' | 'Open Source'
  /** e.g. "Project Lead · 06/2023 – Present" */
  meta?: string
  art: ProjectArtVariant
  description: string
  architecture: string[]
  /** The architect-level "why": a key design trade-off and its rationale. */
  tradeoff?: string
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Document Intelligence & Research Platform',
    category: 'Enterprise RAG · GenAI',
    group: 'rag',
    status: 'Production',
    meta: 'Project Lead · 06/2023 – Present',
    art: 'docs',
    description:
      'GenAI-powered document intelligence platform on Azure enabling enterprise research workflows end-to-end: multi-document RAG with hybrid semantic search, key-findings summarization, contextual Q&A, SOW-to-survey generation, and conversational AI agents that run survey intake and IDI interview simulations.',
    architecture: [
      'Hybrid retrieval on Weaviate: BM25 + vector search over Azure OpenAI embeddings',
      'Document pipeline: ingestion → chunking → embedding generation → vector indexing',
      'GenAI workflows: summarization, contextual Q&A, SOW-to-survey generation',
      'Conversational agents for survey intake and IDI (interview) simulation',
      'LLM orchestration with prompt engineering and cost/latency optimization',
      'Responsible AI gates: grounded citations, PII masking, answer-faithfulness evaluation pre-release',
    ],
    tradeoff:
      'Chose hybrid BM25 + vector retrieval over pure vector — extra index complexity, but measurably higher recall on domain-specific jargon that embeddings alone miss.',
    stack: ['Azure OpenAI', 'Weaviate', 'Node.js', 'Python', 'Azure SQL', 'LLM Evals', 'Blob Storage'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'AI-Driven FinOps & DevOps Intelligence Platform',
    category: 'FinOps × GenAI × Cloud Migration',
    group: 'domain',
    status: 'Production',
    meta: 'Project Lead · 08/2024 – Present',
    art: 'finops',
    description:
      'Multi-cloud cost-intelligence and DevOps-optimization platform built alongside a legacy-to-cloud-native migration. Azure OpenAI analyzes usage patterns to detect spend anomalies and recommend savings (FinOps), while LLMs inspect CI/CD workflows to find bottlenecks and automate pipeline improvements — all surfaced in an AI insights dashboard.',
    architecture: [
      'Legacy → cloud-native microservices migration across Azure and AWS',
      'AI cost engine: usage-pattern analysis, anomaly detection, savings recommendations',
      'LLM-driven CI/CD analysis: bottleneck identification and automated pipeline optimization',
      'Terraform IaC + GitHub Actions cutting deployment time and manual effort by 50%+',
      'Kubernetes architecture with auto-scaling; event-driven monitoring for HA and observability',
      'Multi-cloud LLM strategy: Azure OpenAI primary, AWS Bedrock for AWS-resident workloads (data gravity)',
    ],
    tradeoff:
      'Event-driven anomaly detection over nightly batch reports — higher infra cost, but savings actions land before the bill does, not after.',
    stack: ['Azure OpenAI', 'AWS Bedrock', 'Terraform', 'Kubernetes', 'Node.js', 'Python', 'GitHub Actions'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Responsible AI & LLM Security Governance Platform',
    category: 'AI Governance · LLM Security',
    group: 'platform',
    status: 'Platform',
    art: 'security',
    description:
      'The guardrail layer that makes every GenAI workload safe, compliant, and auditable by default. A central policy engine enforces Responsible AI controls — content safety, PII protection, bias and hallucination evaluation, automated red-teaming — mapped to NIST AI RMF, EU AI Act, and ISO/IEC 42001, so governance is architecture, not paperwork.',
    architecture: [
      'LLM firewall at the edge: prompt-injection & jailbreak detection, output filtering (OWASP LLM Top 10)',
      'Policy-as-code guardrails: Azure AI Content Safety + AWS Bedrock Guardrails behind one abstraction',
      'Continuous evaluation: hallucination/faithfulness scoring, bias probes, automated red-team suites per release',
      'Compliance mapping: NIST AI RMF + EU AI Act risk tiers; model cards & decision logs per deployment',
      'Full-trace LLM observability: OpenTelemetry GenAI spans — prompt, context, cost, latency per request',
    ],
    tradeoff:
      'Centralized guardrails add ~120 ms latency vs. per-app controls — accepted for uniform policy enforcement, a single audit surface, and faster compliance sign-off.',
    stack: ['NIST AI RMF', 'OWASP LLM Top 10', 'Azure AI Content Safety', 'AWS Bedrock', 'Google Gemini', 'Python', 'OpenTelemetry'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Research Hyper-Agentic Platform',
    category: 'Multi-Agent Research',
    group: 'agentic',
    status: 'POC',
    art: 'research',
    description:
      'A deep-research engine where an orchestrator decomposes a research question and spawns a swarm of parallel specialist agents — retrievers, analysts, fact-checkers — that triangulate sources, challenge each other’s claims, and converge into a cited, publication-grade report. Built to answer questions no single RAG pass can.',
    architecture: [
      'Orchestrator → dynamic agent-graph spawning (parallel researcher swarm)',
      'Dual retrieval: live web + internal corpus via MCP tool contracts',
      'Adversarial verification: claim extraction → cross-source triangulation → critic agent',
      'Convergence controller: budget-aware iteration with confidence thresholds',
      'Report synthesis with inline citations and evidence-chain traceability',
      'Multi-model routing: GPT-4o, Claude & Google Gemini selected per agent role on cost/quality benchmarks',
    ],
    tradeoff:
      'Parallel agent swarm over a single deep-research loop — 3–4× token spend, bought back through cross-model verification that slashes hallucinated citations.',
    stack: ['MCP', 'Azure OpenAI', 'Google Gemini', 'Node.js', 'TypeScript', 'Qdrant', 'Redis', 'Kafka'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'BFSI Conversational Intelligence Suite',
    category: 'Banking · Regulated AI',
    group: 'domain',
    status: 'Platform',
    art: 'bank',
    description:
      'Conversational AI for a banking environment where a wrong answer is a compliance event. Customer- and advisor-facing assistants grounded in product policies, regulatory circulars, and account context — wrapped in the guardrail architecture regulated industries demand: PII redaction, deterministic escalation, and a complete audit trail of every generated token.',
    architecture: [
      'Policy-grounded RAG over product T&Cs, KYC/AML rules, regulatory circulars',
      'PII detection & redaction at ingress and egress (pre-LLM and post-LLM)',
      'Intent router: deterministic flows for transactions, LLM only for knowledge',
      'Compliance guardrails: restricted-advice classifier + human escalation paths',
      'Immutable audit log: prompt, context, response, and citation per interaction',
      'Compliance by design: RBI & DPDP Act-aligned data handling, EU AI Act risk classification, model documentation',
    ],
    tradeoff:
      'Deterministic flows for anything transactional, LLM only for knowledge — sacrificed conversational flexibility because regulators require reproducible behavior.',
    stack: ['Azure OpenAI', 'Azure AI Search', 'Node.js', 'PostgreSQL', 'Redis', 'OAuth 2.0', 'DPDP / EU AI Act'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Clinical Knowledge Copilot',
    category: 'Healthcare · Clinical AI',
    group: 'domain',
    status: 'POC',
    art: 'health',
    description:
      'Clinician-facing copilot that summarizes patient documentation and answers questions against clinical guidelines — designed PHI-first. Every response is grounded in versioned medical sources, mapped to standard terminologies, and framed as decision support, never diagnosis: the clinician stays the final authority in the loop.',
    architecture: [
      'PHI-safe pipeline: de-identification before any LLM call, re-identification at render',
      'RAG over versioned clinical guidelines with recency & source-authority ranking',
      'Terminology grounding: ICD-10 / SNOMED CT entity mapping on both query and answer',
      'Structured summarization of encounter notes with traceable source spans',
      'Clinician-in-the-loop UX: confidence display, evidence panel, one-click verification',
      'Responsible AI: bias monitoring across patient cohorts, model cards, HIPAA-aligned PHI lifecycle',
    ],
    tradeoff:
      'De-identify before every LLM call despite the latency tax — PHI never crosses the model boundary, which turned security review from blocker into formality.',
    stack: ['Azure OpenAI', 'Python', 'Embeddings', 'Qdrant', 'React', 'PostgreSQL', 'HIPAA'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'AI Career Intelligence Platform',
    category: 'MCP-Native AI Platform',
    group: 'platform',
    status: 'Open Source',
    art: 'career',
    description:
      'A personal AI platform exposed entirely through Model Context Protocol. Ingests career data (LinkedIn, codebases, documents), builds an evidence-grounded skill graph, and serves 20+ MCP tools for skill-gap analysis, job matching, and career roadmap generation — consumable by any MCP-capable AI client.',
    architecture: [
      'MCP server exposing 20+ tools over a cloud runtime',
      'Ingestion pipeline → chunking → embeddings → vector index',
      'Evidence-scored skill graph with confidence levels',
      'RAG-backed retrieval for every analytical answer',
    ],
    stack: ['TypeScript', 'Node.js', 'MCP', 'Embeddings', 'Vector DB', 'Azure'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Enterprise MCP Gateway',
    category: 'Integration Architecture',
    group: 'platform',
    status: 'Platform',
    art: 'gateway',
    description:
      'A centralized Model Context Protocol gateway that lets LLM applications access internal systems (APIs, databases, documents) through one governed entry point — solving the N×M integration problem between AI clients and enterprise tools.',
    architecture: [
      'Single gateway fronting multiple domain MCP servers',
      'OAuth-based authN/Z with per-tool authorization scopes',
      'Central audit log of every tool invocation',
      'Rate limiting, schema validation, and PII redaction at the edge',
      'LLM security controls: prompt-injection screening, tool-permission sandboxing, output filtering (OWASP LLM Top 10)',
    ],
    tradeoff:
      'One governed gateway over per-team integrations — a single point to harden and audit, accepted as a scaling bottleneck mitigated with horizontal replicas.',
    stack: ['MCP', 'TypeScript', 'Node.js', 'OAuth 2.0', 'PostgreSQL', 'Docker', 'OWASP LLM Top 10'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Agentic Workflow Orchestrator',
    category: 'Agentic AI',
    group: 'agentic',
    status: 'POC',
    art: 'agents',
    description:
      'Multi-agent system automating a complex business workflow end-to-end: a planner agent decomposes the request, specialist agents execute with tool access, and a critic agent validates output quality — with human approval gates before any irreversible action.',
    architecture: [
      'Planner → specialist → critic agent topology',
      'Structured tool-calling with typed contracts (JSON Schema)',
      'Durable state machine: retries, timeouts, compensation',
      'Human-in-the-loop checkpoints for sensitive operations',
      'Guardrailed autonomy: action allow-lists, spend budgets, and full agent-trace observability',
    ],
    tradeoff:
      'Durable state machine over free-form agent loops — less emergent “magic,” but bounded autonomy is what makes agents production-deployable.',
    stack: ['Azure OpenAI', 'LangChain', 'LangGraph', 'Node.js', 'Kafka', 'Redis', 'TypeScript'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Graph RAG Knowledge Engine',
    category: 'Advanced Retrieval',
    group: 'rag',
    status: 'POC',
    art: 'graph',
    description:
      'Retrieval engine combining a knowledge graph with vector embeddings to answer multi-hop questions plain RAG cannot — entity extraction builds the graph, community summaries provide global context, and hybrid graph+vector traversal grounds the answers.',
    architecture: [
      'LLM-driven entity & relationship extraction pipeline',
      'Knowledge graph + community detection & summarization',
      'Hybrid query routing: graph traversal vs. vector search',
      'Multi-hop reasoning with explainable evidence paths',
    ],
    tradeoff:
      'Graph construction is expensive and lags fresh data — worth it only for multi-hop questions, so the router sends single-hop queries straight to vector search.',
    stack: ['Knowledge Graph', 'Embeddings', 'Python', 'Azure OpenAI', 'Qdrant'],
    link: 'https://github.com/sunny-dev007',
  },
  {
    title: 'Scalable Learning & Content Platform',
    category: 'Distributed Systems · EdTech',
    group: 'platform',
    status: 'Production',
    meta: 'Senior Software Engineer · 02/2021 – 02/2023',
    art: 'events',
    description:
      'High-throughput full-stack learning platform built on event-driven microservices. Kafka-based asynchronous workflows decouple services, Redis caching keeps latency low under load, and fault-tolerance patterns — retries, circuit breakers, monitoring — keep the platform available while horizontal scaling and database partitioning absorb growth.',
    architecture: [
      'Event-driven microservices with Node.js and AWS for high-throughput, low-latency workloads',
      'Kafka + message queues for asynchronous, decoupled service interactions',
      'Redis caching strategies reducing latency under high load',
      'API Gateway routing, authentication, and rate limiting',
      'Fault tolerance: retries, circuit breakers, monitoring; horizontal scaling + DB partitioning',
    ],
    tradeoff:
      'Kafka-based async workflows over synchronous REST chains — eventual consistency to reason about, in exchange for graceful degradation under peak load.',
    stack: ['Node.js', 'React.js', 'Kafka', 'Redis', 'AWS', 'Azure', 'MySQL'],
    link: 'https://github.com/sunny-dev007',
  },
]

export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Generative AI & LLM',
    skills: [
      'Azure OpenAI', 'AWS Bedrock', 'Google Gemini', 'Azure AI Foundry',
      'LLM Architecture', 'Prompt Engineering', 'Enterprise RAG', 'Graph RAG',
      'Hybrid Retrieval', 'Embeddings & Semantic Search', 'Agentic AI',
      'LangChain', 'LangGraph', 'MCP', 'Copilot Development',
      'LLM Evaluation & Guardrails', 'Multi-LLM Routing',
    ],
  },
  {
    title: 'Responsible AI, Security & Governance',
    skills: [
      'Responsible AI', 'NIST AI RMF', 'EU AI Act', 'ISO/IEC 42001',
      'OWASP LLM Top 10', 'Prompt-Injection Defense', 'AI Red-Teaming',
      'PII / PHI Protection', 'Bias & Hallucination Evals', 'Model Cards',
      'LLM Observability (OpenTelemetry)', 'Cost Governance',
    ],
  },
  {
    title: 'Vector & Data Layer',
    skills: [
      'Weaviate', 'Qdrant', 'Pinecone', 'FAISS', 'Azure AI Search',
      'PostgreSQL', 'MySQL', 'Azure SQL', 'DynamoDB', 'Redis',
      'Kafka', 'Knowledge Graphs',
    ],
  },
  {
    title: 'Languages & Frameworks',
    skills: [
      'TypeScript', 'JavaScript', 'Node.js', 'Python', 'React',
      'Next.js', 'Express.js', 'REST APIs', 'GraphQL', 'SQL', 'Vitest',
    ],
  },
  {
    title: 'Cloud, DevOps & Architecture',
    skills: [
      'Azure', 'AWS', 'Kubernetes', 'Docker', 'Terraform',
      'Serverless / Lambda', 'Azure Functions', 'GitHub Actions',
      'Azure DevOps', 'CI/CD', 'Microservices',
      'Event-Driven Architecture', 'System Design', 'API Gateway',
    ],
  },
]

export interface Experience {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Senior Lead Engineer — GenAI & Cloud Architecture',
    company: 'Nitor Infotech Pvt. Ltd.',
    period: '04/2023 – Present',
    summary:
      'Leading system architecture for distributed, high-concurrency enterprise applications and GenAI platforms — owning solution design from retrieval strategy to production rollout.',
    highlights: [
      'Architected GenAI platforms on Azure OpenAI + vector databases powering enterprise document intelligence and conversational AI systems',
      'Designed microservices and event-driven architectures with Node.js on AWS and Azure for high-concurrency enterprise workloads',
      'Ensured high availability and low latency through API gateway design, caching strategies, and asynchronous processing',
      'Automated scalable, cost-efficient deployments with GitHub Actions + Terraform CI/CD',
      'Recognized by client leadership for delivery of critical releases and AI-innovation-led business solutions',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Infopro Learning',
    period: '12/2019 – 04/2023',
    summary:
      'Owned end-to-end system design and delivery of cloud-native learning platforms — from requirement analysis and database architecture through deployment and operations.',
    highlights: [
      'Architected scalable web platforms with Node.js, React.js, and Python serving high-concurrency user workloads across distributed systems',
      'Designed serverless microservices on AWS (Lambda, DynamoDB, API Gateway) and Azure Functions to improve scalability under high load',
      'Developed reusable backend components and RESTful APIs enabling seamless cross-platform integration',
      'Led CI/CD implementation with Azure DevOps, improving delivery efficiency and deployment reliability',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Marketgoal Digital Solutions Pvt. Ltd.',
    period: '08/2015 – 12/2019',
    summary:
      'Delivered secure, scalable web applications and REST platforms — the full-stack and distributed-systems foundation beneath the later AI-era work.',
    highlights: [
      'Developed and maintained web applications with PHP (Laravel, CodeIgniter), MySQL, and third-party API integrations',
      'Built a serverless application on AWS with DynamoDB, Lambda, and API Gateway using Node.js',
      'Led end-to-end feature development: requirement analysis, database design, development, and deployment',
    ],
  },
]

export interface Achievement {
  icon: string
  title: string
  text: string
}

export const achievements: Achievement[] = [
  {
    icon: '🏆',
    title: '“Prompt Master” Award',
    text: 'Won the organization-wide PROMPT-MASTER competition for designing practical GenAI workflows that solve real business problems.',
  },
  {
    icon: '⚡',
    title: '50% Faster Deployments',
    text: 'Cut deployment time and manual intervention by half through GitHub Actions + Terraform CI/CD automation and infrastructure optimization.',
  },
  {
    icon: '🧠',
    title: 'GenAI Platforms Shipped',
    text: 'Delivered enterprise document-intelligence and conversational AI platforms on Azure OpenAI, RAG architecture, and vector databases.',
  },
  {
    icon: '🏗️',
    title: 'Architectural Ownership',
    text: 'Recognized by client and leadership for end-to-end ownership, key architecture decisions, and critical production releases under tight timelines.',
  },
]

/**
 * Visitor & click analytics (Google Analytics 4).
 * 1. Create a free GA4 property at https://analytics.google.com
 *    (Admin → Create property → Web stream for https://sunny-dev007.github.io)
 * 2. Paste the "G-XXXXXXXXXX" Measurement ID below and push.
 * Leave empty ('') and all tracking is disabled — zero scripts loaded.
 */
export const analyticsConfig = {
  gaMeasurementId: 'G-YPWB30Y0TF',
}

export const contact = {
  heading: 'Let’s build production-grade AI together',
  body: 'Open to AI Architect, GenAI Architect, and AI Engineering leadership conversations. The fastest way to reach me is email or LinkedIn.',
}
