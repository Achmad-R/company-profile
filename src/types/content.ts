export type ConceptConfig = {
  isConcept: true;
  conceptLabel: string;
  footerDisclosure: string;
  canonicalUrl: "https://stratalyn.example";
  allowIndexing: false;
  enableContactSubmission: false;
};

export type AnchorId = "about" | "capabilities" | "work" | "careers" | "contact";

export type AnchorTargets = {
  [Key in AnchorId]: `#${Key}`;
};

export type NavLink = {
  label: string;
  href: `#${AnchorId}`;
};

export type CompanyProfile = {
  companyType: string;
  founded: string;
  operatingModel: string;
  workingHoursOverlap: string;
  primaryMarket: string;
  focusSectors: string;
  coreExpertise: string;
  commercialModel: string;
  primaryAudience: string;
  secondaryAudience: string;
};

export type TargetProblem = {
  index: string;
  copy: string;
};

export type DeliveryModel = {
  title: string;
  purpose: string;
  description: string;
};

export type Project = {
  title: string;
  status: "concept";
  statusLabel: "Concept project";
  domain: string;
  summary: string;
  challenge: string;
  contribution: string;
  conceptOutcome: string;
  technologies: string[];
  visualBrief: string;
};

export type Role = {
  title: string;
  discipline: string;
  location: string;
  employmentType: string;
  summary: string;
  skills: string[];
  isConceptRole: true;
  conceptLabel: "Concept role";
};

export type Capability = {
  title: string;
  description: string;
  outcomes: string[];
  technologies: string[];
};

export type ProcessStep = {
  index: string;
  title: string;
  copy: string;
};
