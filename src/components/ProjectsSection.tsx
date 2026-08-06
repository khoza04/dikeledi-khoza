import { useState } from "react";
import { Bot, PenTool, Workflow, Mail, Search, BookOpen, ArrowRight, X, Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import supportImg from "@/assets/projects/support-assistant.jpg.asset.json";
import contentImg from "@/assets/projects/content-generator.jpg.asset.json";
import workflowImg from "@/assets/projects/workflow-automation.jpg.asset.json";
import emailImg from "@/assets/projects/email-assistant.jpg.asset.json";
import researchImg from "@/assets/projects/research-assistant.jpg.asset.json";
import promptImg from "@/assets/projects/prompt-library.jpg.asset.json";

type Project = {
  id: string;
  icon: typeof Bot;
  title: string;
  category: string;
  role: string;
  period: string;
  short: string;
  overview: string;
  problem: string;
  solution: string;
  skills: string[];
  tools: string[];
  deliverables: string[];
  result: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "content-generator",
    icon: PenTool,
    title: "AI Marketing Content Generator",
    category: "AI Content",
    role: "AI Content Systems Consultant",
    period: "May 2026",
    short: "A branded prompt library and content workflow that keeps every post on-voice.",
    overview:
      "A small marketing team could not keep up with their publishing calendar. I built a branded prompt library plus a repeatable content workflow so every post starts from a tested prompt and stays in the brand's voice.",
    problem: "Marketing team struggling to produce content at scale.",
    solution: "Branded prompt library paired with an end-to-end content production workflow.",
    skills: ["Prompt Engineering", "Content Strategy", "Brand Voice Documentation", "Notion Workspace Design", "AI Content Editing"],
    tools: ["Claude", "Notion AI"],
    deliverables: [
      "Brand voice guide used as prompt context",
      "30 reusable prompts for social, email and blog",
      "Notion content calendar with review stages",
      "Team training session on the workflow",
    ],
    result: "3x more content output",
    image: contentImg.url,
  },
  {
    id: "support-assistant",
    icon: Bot,
    title: "Customer Support AI Assistant",
    category: "AI Operations",
    role: "AI Automation Specialist & Virtual Assistant",
    period: "June 2026",
    short: "A trained FAQ chatbot answering around the clock with clean human hand-off.",
    overview:
      "The inbox was flooded with the same handful of questions every day, which pushed reply times out to hours. I mapped the most common requests, wrote a trained knowledge base, and built a chatbot that answers FAQs around the clock while escalating anything sensitive to a human.",
    problem: "Slow response to repetitive customer questions.",
    solution: "Built a trained chatbot to handle FAQs 24/7 with clean human hand-off rules.",
    skills: ["AI Chatbot Setup", "Prompt Engineering", "Customer Support Operations", "Zapier Automation", "Knowledge Base Writing"],
    tools: ["ChatGPT", "Zapier"],
    deliverables: [
      "Trained FAQ chatbot connected to live support channels",
      "Knowledge base document with 40+ approved answers",
      "Escalation workflow to a human agent",
      "Handover guide + Loom walkthrough for the team",
    ],
    result: "70% faster response time",
    image: supportImg.url,
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Business Workflow Automation",
    category: "Automation",
    role: "Workflow Automation Specialist",
    period: "June 2026",
    short: "No-code automations moving data between CRM, email and Slack without manual entry.",
    overview:
      "Leads and order details were being copied by hand between a CRM, an email tool and Slack. I audited every manual touchpoint and replaced it with automations that move data instantly and log errors where the team can see them.",
    problem: "Manual data entry across multiple tools.",
    solution: "Zapier and Make automations connecting CRM, email and Slack with error alerts.",
    skills: ["No-Code Automation", "Process Mapping", "CRM Administration", "Data Hygiene", "Systems Documentation"],
    tools: ["Zapier", "Make"],
    deliverables: [
      "Process audit with before/after workflow map",
      "8 live automations across CRM, email and Slack",
      "Error-alert channel for failed runs",
      "SOP document so the team can maintain it",
    ],
    result: "15 hours/week saved",
    image: workflowImg.url,
  },
  {
    id: "email-assistant",
    icon: Mail,
    title: "AI Email Assistant",
    category: "Virtual Assistance",
    role: "Executive Virtual Assistant — AI-Assisted Inbox Management",
    period: "July 2026",
    short: "Smart triage, AI-drafted replies and a daily routine that keeps the inbox at zero.",
    overview:
      "A founder was losing mornings to an overloaded inbox. I set up smart triage rules, AI-drafted replies and a template bank, then managed the inbox daily until it ran to zero without stress.",
    problem: "Inbox overload and slow follow-ups.",
    solution: "Smart triage, AI-generated drafts and templated replies with a daily routine.",
    skills: ["Inbox Management", "Email Triage Systems", "AI Drafting", "Calendar Coordination", "Client Communication"],
    tools: ["ChatGPT", "Gmail"],
    deliverables: [
      "Label and priority system for the whole inbox",
      "12 reply templates for recurring requests",
      "AI drafting workflow for first-pass responses",
      "Daily inbox routine checklist",
    ],
    result: "60% less time spent on email",
    image: emailImg.url,
  },
  {
    id: "research-assistant",
    icon: Search,
    title: "AI Research Assistant",
    category: "AI Research",
    role: "AI Research & Reporting Specialist",
    period: "July 2026",
    short: "An automated weekly research routine that delivers cited, action-ready reports.",
    overview:
      "Competitor and market research was eating a full afternoon each week. I built an automated research routine that gathers sources, summarises findings and delivers a clean weekly report that can be acted on immediately.",
    problem: "Hours spent researching competitors and trends.",
    solution: "Automated weekly research reports with cited sources and action points.",
    skills: ["AI Research", "Competitive Analysis", "Report Writing", "Data Summarisation", "Perplexity & Claude Workflows"],
    tools: ["Perplexity", "Claude"],
    deliverables: [
      "Weekly research report template",
      "Automated source-gathering workflow",
      "Competitor tracking sheet",
      "Monthly trend summary with recommendations",
    ],
    result: "Research time reduced from 5 hours to 20 minutes per week",
    image: researchImg.url,
  },
  {
    id: "prompt-library",
    icon: BookOpen,
    title: "AI Prompt Library",
    category: "AI Content",
    role: "Prompt Engineer & AI Trainer",
    period: "August 2026",
    short: "A tested prompt vault organised by use case, with training so the team stays consistent.",
    overview:
      "Team members were each prompting differently, so output quality swung wildly. I built a tested prompt vault organised by use case, with instructions on how to adapt each prompt, then trained the team on it.",
    problem: "Inconsistent prompt quality across the team.",
    solution: "Curated, tested prompt vault organised by use case, plus team training.",
    skills: ["Prompt Engineering", "AI Training & Enablement", "Notion Database Design", "Quality Testing", "Documentation"],
    tools: ["Notion AI", "ChatGPT"],
    deliverables: [
      "Searchable prompt library with categories",
      "Tested prompts with example outputs",
      "Usage guidelines and do/don't rules",
      "Live training session and recording",
    ],
    result: "Consistent brand voice across the team",
    image: promptImg.url,
  },
];

function DetailBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{label}</div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Projects</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Selected portfolio projects.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Practical AI-powered workflows and business systems I've designed and built. Each one is a portfolio
            demonstration — the visuals are recreated previews of the system, not live client screens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card
              key={p.id}
              className="group overflow-hidden rounded-2xl border-border/60 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <button type="button" onClick={() => setActive(p)} className="text-left w-full block" aria-label={`View ${p.title}`}>
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} interface demonstration`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 rounded-full text-[11px] backdrop-blur bg-background/80">
                    {p.category}
                  </Badge>
                </div>
              </button>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center text-primary-foreground shrink-0" style={{ background: "var(--gradient-hero)" }}>
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-snug">{p.title}</h3>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.role}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.short}</p>
                <div className="text-sm font-semibold text-accent mb-4">{p.result}</div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full text-[11px] px-2.5 py-0.5">{t}</Badge>
                  ))}
                </div>
                <Button variant="ghost" onClick={() => setActive(p)} className="mt-auto self-start px-0 h-auto text-sm font-medium text-accent hover:bg-transparent hover:text-accent">
                  View Project <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl w-[calc(100vw-2rem)] max-h-[88vh] overflow-y-auto rounded-2xl p-0">
          {active && (
            <div>
              <div className="p-6 md:p-8 pb-0">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="rounded-full text-[11px]">Portfolio Project</Badge>
                  <Badge variant="secondary" className="rounded-full text-[11px]">{active.category}</Badge>
                  <span className="text-xs text-muted-foreground">{active.period}</span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">{active.title}</DialogTitle>
                <DialogDescription className="text-accent font-medium mt-1">My role: {active.role}</DialogDescription>
              </div>

              <div className="px-6 md:px-8 mt-6">
                <button
                  type="button"
                  onClick={() => setZoom(active.image)}
                  className="relative block w-full group rounded-2xl overflow-hidden border border-border/60"
                  aria-label="Enlarge screenshot"
                >
                  <img src={active.image} alt={`${active.title} interface demonstration`} className="w-full" />
                  <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/85 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>
                <div className="text-xs text-muted-foreground mt-2">Visual proof — recreated interface preview. Tap to enlarge.</div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <DetailBlock label="Project Overview">{active.overview}</DetailBlock>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="p-5 rounded-2xl border-border/60"><DetailBlock label="Problem">{active.problem}</DetailBlock></Card>
                  <Card className="p-5 rounded-2xl border-border/60"><DetailBlock label="Solution">{active.solution}</DetailBlock></Card>
                </div>
                <DetailBlock label="Skills">
                  <div className="flex flex-wrap gap-2 pt-1">
                    {active.skills.map((s) => <Badge key={s} variant="secondary" className="rounded-full px-3 py-1 text-xs">{s}</Badge>)}
                  </div>
                </DetailBlock>
                <DetailBlock label="AI Tools">
                  <div className="flex flex-wrap gap-2 pt-1">
                    {active.tools.map((t) => <Badge key={t} variant="secondary" className="rounded-full px-3 py-1 text-xs">{t}</Badge>)}
                  </div>
                </DetailBlock>
                <DetailBlock label="Deliverables">
                  <ul className="space-y-1.5 pt-1">
                    {active.deliverables.map((d) => (
                      <li key={d} className="flex gap-2"><span className="text-accent">•</span><span>{d}</span></li>
                    ))}
                  </ul>
                </DetailBlock>
                <Card className="p-5 rounded-2xl border-0 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">Result</div>
                  <div className="font-bold text-lg">{active.result}</div>
                </Card>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-[96vw] w-fit p-2 rounded-2xl bg-background/95 backdrop-blur border-border/60">
          <DialogTitle className="sr-only">Project screenshot</DialogTitle>
          <DialogDescription className="sr-only">Enlarged project interface demonstration</DialogDescription>
          {zoom && <img src={zoom} alt="Enlarged project interface demonstration" className="max-h-[86vh] w-auto max-w-full rounded-xl" />}
          <button type="button" onClick={() => setZoom(null)} aria-label="Close" className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center shadow-lg">
            <X className="h-4 w-4" />
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}