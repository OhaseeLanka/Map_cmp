export const landingContent = {
  project: "J26-IT-334",
  wordmark: "Integrated hazard intelligence system",
  institution: "SLIIT · Department of Information Technology",
  title: "Understanding hazard risk before the next emergency",
  hero: [
    "A four-component research system connecting landslide prediction, flood impact, decision support and emergency response.",
    "The study focuses on Walapane, Ambagamuwa and Kotmale divisions in Nuwara Eliya District, Sri Lanka.",
  ],
  demoNote: "The map currently shows demo data.",
  mapPlaceholderLabel: "Interactive map",
  mapPlaceholderCaption: "Nuwara Eliya District / Sri Lanka",
  metadata: [
    { label: "Project status", value: "Demonstration system" },
    { label: "Data scope", value: "Nuwara Eliya District" },
    { label: "Primary users", value: "Researchers · planners · responders" },
    { label: "Current map", value: "Demo data" },
  ],
  history: {
    label: "01 / Why this work",
    title: "A response to a documented emergency",
    paragraphs: [
      "Cyclone Ditwah, in late 2025, caused 646 deaths, left 173 people missing and affected about 2.2 million people across all 25 districts.",
      "The UN Sri Lanka situation report from January 2026 records the scale of that event. It also makes the need for more local, connected information clear: NBRO and DMC warnings are issued at district or division level, not for a specific slope or village.",
    ],
    source: "Source: UN Sri Lanka situation report, January 2026.",
  },
  system: {
    label: "02 / The whole system",
    title: "Four components, one decision context",
    intro: "The landing page represents the full research project. The interactive map is one working component within a wider system for understanding hazards and supporting response.",
    components: [
      { number: "01", title: "Landslide prediction", text: "Examines landslide risk from soil, terrain and rainfall in the Nuwara Eliya study area." },
      { number: "02", title: "Flood impact", text: "Places flood information alongside the landslide view so hazards can be considered together." },
      { number: "03", title: "Decision support", text: "Presents the evidence in a shared map view for supervisors, examiners and disaster-management officers." },
      { number: "04", title: "Emergency response", text: "Connects the evidence to the wider response context rather than treating a forecast as a standalone output." },
    ],
  },
  workflow: {
    label: "03 / How it works",
    title: "From evidence to action",
    steps: [
      { number: "01", title: "Collect", text: "Bring together soil, terrain and rainfall evidence for the study area, alongside flood impact information." },
      { number: "02", title: "Assess", text: "Use the project components to examine where hazards may matter and how conditions change." },
      { number: "03", title: "Interpret", text: "Present the findings through a common map so the evidence can be read in place." },
      { number: "04", title: "Respond", text: "Use the shared context to support discussion between prediction, impact, decision support and emergency response." },
    ],
  },
  navigation: [
    { label: "History", href: "#history" },
    { label: "System", href: "#system" },
    { label: "How it works", href: "#workflow" },
    { label: "Limits", href: "#limits" },
    { label: "Limits", href: "#limits" },
    { label: "Team", href: "#team" },
  ],
  limits: {
    label: "04 / Research boundaries",
    title: "What this project does not claim",
    items: [
      "Nearly all landslide records come from one storm, Cyclone Ditwah.",
      "Scores rank places and are not real-world probabilities.",
      "Human factors are not included yet.",
      "Rainfall effects between ordinary and extreme levels are not covered by the data.",
    ],
  },
  team: {
    label: "05 / Components",
    rows: [
      { component: "Landslide prediction", member: "Bagya R M S" },
      { component: "Flood impact", member: "Sinhalagoda S.A.U.R.A.V" },
      { component: "Decision support", member: "Prathibhani Y.L.O.L" },
      { component: "Emergency response", member: "Palihena M B" },
    ],
  },
} as const;
