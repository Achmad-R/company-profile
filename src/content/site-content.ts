import type {
  AnchorTargets,
  Capability,
  CompanyProfile,
  ConceptConfig,
  DeliveryModel,
  NavLink,
  ProcessStep,
  Project,
  Role,
  TargetProblem,
} from "@/types/content";

export const conceptConfig: ConceptConfig = {
  isConcept: true,
  conceptLabel: "Portfolio concept · Stratalyn Systems is a fictional company.",
  footerDisclosure:
    "A fictional company website created as a portfolio demonstration. No services, roles, or contact channels shown here are real.",
  canonicalUrl: "https://stratalyn.example",
  allowIndexing: false,
  enableContactSubmission: false,
};

export const siteMeta = {
  title: "Stratalyn Systems — Applied AI & Software Engineering",
  description:
    "A fictional engineering studio concept focused on dependable AI systems, software platforms, and complex operational workflows.",
  openGraphTitle: "Stratalyn Systems — Engineering intelligence into dependable systems",
  openGraphDescription:
    "Explore a fictional portfolio concept for an applied AI and software engineering company.",
} as const;

export const companyProfile = {
  companyType: "Remote-first applied AI and software engineering studio",
  founded: "2022 - fictional timeline",
  operatingModel: "Small senior-led multidisciplinary product squads",
  workingHoursOverlap: "UTC+1 to UTC+8",
  primaryMarket: "Organizations with complex, operations-intensive workflows",
  focusSectors:
    "Industrial operations, cybersecurity operations, logistics, and enterprise platforms",
  coreExpertise:
    "Applied AI, product engineering, data integration, cloud platforms, reliability, and security",
  commercialModel:
    "Discovery sprint, focused build engagement, or embedded product squad",
  primaryAudience: "Experienced software, AI, platform, and product engineers",
  secondaryAudience: "Technical decision-makers seeking an engineering partner",
} satisfies CompanyProfile;

export const brand = {
  name: "Stratalyn Systems",
  shortName: "Stratalyn",
  wordmark: "STRATALYN / SYSTEMS",
  tagline: "Engineering intelligence into dependable systems.",
  positioning:
    "Stratalyn Systems is a fictional remote-first engineering studio that designs and builds applied AI products, resilient software platforms, and connected operational systems for complex work.",
  mission: "Turn complex operational problems into software people can understand, trust, and improve.",
  vision: "A future where intelligent systems strengthen human judgment instead of hiding it.",
  promise: "Clear decisions, dependable engineering, and accountable AI from discovery through operation.",
  elevatorPitch:
    "We work with teams whose operations have outgrown fragmented tools and manual decision paths. Our product, AI, platform, and reliability engineers shape the problem together, build the smallest dependable system, evaluate it against real workflows, and leave behind software that can be operated and extended.",
  footerPositioning: "Applied AI and software engineering for complex operations.",
  copyright: "© 2026 Stratalyn Systems concept.",
} as const;

export const targetProblems = [
  {
    index: "01",
    copy: "Tim operasi harus menggabungkan terlalu banyak alert, spreadsheet, runbook, dan sistem lama sebelum dapat mengambil keputusan.",
  },
  {
    index: "02",
    copy: "Produk AI menghasilkan rekomendasi tetapi tidak menyediakan evidence, evaluation, atau human control yang memadai.",
  },
  {
    index: "03",
    copy: "Platform bisnis berkembang lebih cepat daripada integration, observability, dan reliability practice-nya.",
  },
  {
    index: "04",
    copy: "Tim internal membutuhkan engineering capacity dengan ownership dari discovery hingga operation.",
  },
] satisfies TargetProblem[];

export const deliveryModels = [
  {
    title: "Discovery Sprint",
    purpose: "Memastikan masalah dan success criteria tepat",
    description:
      "Frame the workflow, risks, data, and smallest valuable system before committing to a build.",
  },
  {
    title: "Focused Build",
    purpose: "Mengirim satu product capability end-to-end",
    description:
      "A compact cross-functional team designs, builds, evaluates, and prepares one defined capability for operation.",
  },
  {
    title: "Embedded Squad",
    purpose: "Menambah capacity dengan ownership",
    description:
      "Senior product and engineering specialists work inside the client team with shared standards and visible decisions.",
  },
] satisfies DeliveryModel[];

export const anchorTargets = {
  about: "#about",
  capabilities: "#capabilities",
  work: "#work",
  careers: "#careers",
  contact: "#contact",
} satisfies AnchorTargets;

export const conceptLabels = {
  project: "Concept project",
  role: "Concept role",
} as const;

export const navigationLinks = [
  { label: "About", href: anchorTargets.about },
  { label: "Capabilities", href: anchorTargets.capabilities },
  { label: "Work", href: anchorTargets.work },
  { label: "Careers", href: anchorTargets.careers },
  { label: "Contact", href: anchorTargets.contact },
] as const satisfies readonly NavLink[];

export const headerContent = {
  nav: navigationLinks,
  cta: { label: "Explore opportunities", href: anchorTargets.careers },
  menuLabel: "Menu",
  closeLabel: "Close menu",
} as const;

export const heroContent = {
  eyebrow: "Applied AI · Software platforms · Advanced engineering",
  heading: "We engineer intelligent systems for work that cannot afford guesswork.",
  supporting:
    "Stratalyn brings product thinking, applied AI, and resilient software engineering together to turn complex operational workflows into dependable systems.",
  primaryCta: { label: "Explore opportunities", href: anchorTargets.careers },
  secondaryCta: { label: "View selected work", href: anchorTargets.work },
  trustCue: "Human judgment stays visible. Engineering decisions stay accountable.",
} as const;

export const aboutContent = {
  label: "01 / About",
  heading: "Complex systems become useful when their decisions become clear.",
  paragraphs: [
    "Stratalyn Systems is a remote-first product and engineering studio built around a simple idea: intelligent software should make critical work easier to understand, operate, and improve.",
    "Our fictional teams combine product discovery, applied AI, platform engineering, and reliability from the start. That shared ownership helps us build systems that remain coherent after the first release.",
  ],
  principles: [
    {
      title: "Clarity",
      copy: "We expose assumptions, trade-offs, and system behavior so teams can make informed decisions.",
    },
    {
      title: "Craft",
      copy: "We care about the details users feel and the engineering qualities operators depend on.",
    },
    {
      title: "Responsibility",
      copy: "We design human control, security, evaluation, and observability into the system.",
    },
  ],
} as const;

export const capabilitiesContent = {
  label: "02 / Capabilities",
  heading: "One engineering system, from product question to production signal.",
  intro:
    "We assemble the disciplines needed to take a complex workflow from ambiguity to a dependable product capability.",
  items: [
    {
      title: "Product & Platform Engineering",
      description:
        "Design and build web platforms, internal tools, and service foundations around real operational workflows.",
      outcomes: ["Product architecture", "Design systems", "Service boundaries"],
      technologies: ["React", "Next.js", "TypeScript", "Python"],
    },
    {
      title: "Applied AI Systems",
      description:
        "Create evidence-aware AI workflows with explicit evaluation, human review, and measurable operating boundaries.",
      outcomes: ["Assisted triage", "Knowledge workflows", "Evaluation harnesses"],
      technologies: ["LLM orchestration", "RAG", "Evals", "Human-in-the-loop"],
    },
    {
      title: "Data & Integration",
      description:
        "Connect fragmented operational data through clear contracts, traceable transformations, and reliable event flows.",
      outcomes: ["Unified context", "API integration", "Event pipelines"],
      technologies: ["PostgreSQL", "APIs", "Event streaming", "Data contracts"],
    },
    {
      title: "Cloud & Reliability",
      description:
        "Prepare products to run predictably with observability, recovery paths, and disciplined delivery automation.",
      outcomes: ["Deployment pipelines", "Service telemetry", "Resilience reviews"],
      technologies: ["Containers", "Cloud", "OpenTelemetry", "CI/CD"],
    },
    {
      title: "Security by Design",
      description:
        "Translate risk into product and architecture decisions before controls become expensive to retrofit.",
      outcomes: ["Threat-informed design", "Access boundaries", "Auditability"],
      technologies: ["Secure SDLC", "Threat modeling", "Policy as code"],
    },
  ] satisfies Capability[],
} as const;

export const processContent = {
  label: "03 / Method",
  heading: "Build intelligence as an operating capability.",
  intro:
    "A useful AI feature is more than a model call. We connect product intent, data, evaluation, software behavior, and operational feedback in one delivery loop.",
  steps: [
    {
      index: "01",
      title: "Discover",
      copy: "Map the workflow, decision points, evidence, risks, and people affected.",
    },
    {
      index: "02",
      title: "Design",
      copy: "Define the product behavior, architecture, human controls, and success measures.",
    },
    {
      index: "03",
      title: "Build",
      copy: "Deliver the smallest coherent capability with observable system boundaries.",
    },
    {
      index: "04",
      title: "Evaluate",
      copy: "Test software quality and AI behavior against representative scenarios and failure modes.",
    },
    {
      index: "05",
      title: "Operate",
      copy: "Monitor outcomes, learn from real use, and improve the system without losing traceability.",
    },
  ] satisfies ProcessStep[],
} as const;

export const workContent = {
  label: "04 / Selected work",
  heading: "Concept systems shaped around consequential workflows.",
  intro:
    "These fictional case studies demonstrate the type of product and engineering work represented by this portfolio concept.",
  projects: [
    {
      title: "SignalOps",
      status: "concept",
      statusLabel: conceptLabels.project,
      domain: "Cybersecurity and operational incident response",
      summary:
        "An evidence-linked incident workspace that helps distributed teams turn fragmented signals into a reviewable response path.",
      challenge:
        "Analysts were represented as moving between alerts, asset context, runbooks, and chat threads while decision ownership remained unclear.",
      contribution:
        "Workflow mapping, event normalization, assisted triage design, evidence citations, human approval gates, and an operator-focused interface.",
      conceptOutcome:
        "A single case timeline where suggestions remain connected to evidence and every consequential action requires an accountable human decision.",
      technologies: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Event streaming"],
      visualBrief:
        "Dark incident timeline with linked evidence nodes, confidence states, and explicit approval checkpoints.",
    },
    {
      title: "RelayGrid",
      status: "concept",
      statusLabel: conceptLabels.project,
      domain: "Logistics and enterprise integration",
      summary:
        "An operational data fabric that gives teams one traceable view across legacy services, partner APIs, and exception workflows.",
      challenge:
        "Order and shipment context was represented as fragmented across systems with inconsistent identifiers and invisible transformation rules.",
      contribution:
        "Domain mapping, integration contracts, event lineage, exception handling, operational dashboards, and reliability boundaries.",
      conceptOutcome:
        "Teams can follow an operational event from source to decision, identify where it failed, and recover through an explicit workflow.",
      technologies: ["TypeScript", "APIs", "PostgreSQL", "Event streaming", "OpenTelemetry"],
      visualBrief:
        "Layered route map connecting source systems to transformations, exception queues, and a final operational state.",
    },
    {
      title: "VantageSim",
      status: "concept",
      statusLabel: conceptLabels.project,
      domain: "Advanced engineering and simulation review",
      summary:
        "A collaborative review environment for comparing simulation runs, assumptions, and engineering decisions.",
      challenge:
        "Simulation outputs were represented as technically rich but difficult to compare, annotate, and connect to the decision they informed.",
      contribution:
        "Information architecture, run comparison, parameter provenance, review workflow, decision log, and accessible data presentation.",
      conceptOutcome:
        "Engineers can compare runs, understand parameter changes, capture review context, and preserve why a decision was made.",
      technologies: ["React", "TypeScript", "Python", "Data visualization", "Object storage"],
      visualBrief:
        "Split simulation comparison with parameter deltas, annotated plots, and a decision record connected to each run.",
    },
  ] satisfies Project[],
} as const;

export const whyContent = {
  label: "05 / Why Stratalyn",
  heading: "Serious problems deserve room for judgment.",
  pillars: [
    {
      title: "Meaningful complexity",
      copy: "Work on systems where clearer information and better tools can change how people respond, coordinate, and decide.",
    },
    {
      title: "End-to-end ownership",
      copy: "Stay close to the problem from discovery and architecture through evaluation and operation.",
    },
    {
      title: "Visible engineering",
      copy: "Document decisions, review trade-offs openly, and make quality part of everyday delivery.",
    },
    {
      title: "Sustainable pace",
      copy: "Prefer focused teams, clear boundaries, and maintainable systems over permanent urgency.",
    },
  ],
} as const;

export const talentContent = {
  label: "06 / Build with us",
  heading: "Bring depth. Keep learning across boundaries.",
  body: "Stratalyn is designed for experienced builders who can move between a user problem and the engineering details that shape it. You will work with product, AI, platform, design, and security peers while retaining ownership of decisions in your discipline.",
  candidateStatement:
    "We value clear reasoning, thoughtful disagreement, practical craft, and the ability to leave a system easier to understand than you found it.",
  cta: { label: "View concept roles", href: anchorTargets.careers },
} as const;

export const careersContent = {
  // Structural list heading derived from the mandated badge label; the
  // content pack defines no separate website heading for the role list.
  listHeading: "Concept roles",
  roleConceptLabel: conceptLabels.role,
  viewLabel: "View concept role",
  detailClosing: "This is a fictional role included to demonstrate the recruitment experience.",
  roles: [
    {
      title: "Senior Product Engineer",
      discipline: "Product Engineering",
      location: "Remote · UTC+1 to UTC+8 overlap",
      employmentType: "Full-time concept role",
      summary:
        "Shape operational products from workflow discovery through reliable frontend and service implementation.",
      skills: ["React", "TypeScript", "APIs", "Product thinking"],
      isConceptRole: true,
      conceptLabel: conceptLabels.role,
    },
    {
      title: "Applied AI Engineer",
      discipline: "AI Systems",
      location: "Remote · UTC+1 to UTC+8 overlap",
      employmentType: "Full-time concept role",
      summary:
        "Build evidence-aware AI workflows, evaluation harnesses, and human review paths around real product decisions.",
      skills: ["Python", "LLM systems", "RAG", "Evals"],
      isConceptRole: true,
      conceptLabel: conceptLabels.role,
    },
    {
      title: "Platform Reliability Engineer",
      discipline: "Platform Engineering",
      location: "Remote · UTC+1 to UTC+8 overlap",
      employmentType: "Full-time concept role",
      summary:
        "Design delivery, observability, resilience, and security foundations that product teams can operate confidently.",
      skills: ["Cloud", "Containers", "OpenTelemetry", "CI/CD"],
      isConceptRole: true,
      conceptLabel: conceptLabels.role,
    },
  ] satisfies Role[],
} as const;

export const contactContent = {
  label: "07 / Contact",
  heading: "Bring us the problem behind the brief.",
  body: "Whether you are shaping an operational product or exploring the kind of team you want to build with, start with the context that matters.",
  projectLabel: "Project conversations",
  projectEmail: "hello@stratalyn.example",
  careersLabel: "Career conversations",
  careersEmail: "careers@stratalyn.example",
  demoNote: "Demonstration addresses — messages are not delivered.",
  copyButtonLabel: "Copy demo address",
  copyProjectDescription: "Copy the project demo address",
  copyCareersDescription: "Copy the careers demo address",
  copySuccess: "Demo address copied to the clipboard.",
  copyFailure: "Copy failed. Select the address text to copy it manually.",
} as const;

export const footerContent = {
  nav: navigationLinks,
} as const;
