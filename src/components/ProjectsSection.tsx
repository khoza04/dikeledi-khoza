import { useState } from "react";
import { Bot, Mail, Workflow, CalendarDays, BriefcaseBusiness, FileText, MessageCircle, Users, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import carWashImg from "@/assets/projects/car-wash-weekly-roster.png.asset.json";
import proposalImg from "@/assets/projects/proposal-invoice-workflow.png.asset.json";
import leadBoardImg from "@/assets/projects/lead-prospect-board.png.asset.json";
import linkedinBufferImg from "@/assets/projects/linkedin-content-buffer.png.asset.json";
import customerServiceImg from "@/assets/projects/customer-service-assistant.png.asset.json";
import inboxImg from "@/assets/projects/smart-inbox-assistant.png.asset.json";

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
  caption?: string;
  evidence?: string;
};

export const projects: Project[] = [
  {
    id: "car-wash-weekly-roster",
    icon: CalendarDays,
    title: "Car Wash Weekly Roster & Shift Swaps",
    category: "Admin Support & Scheduling",
    role: "Virtual Assistant & Automation Specialist",
    period: "Workflow screenshot · November 2026",
    short: "A weekly roster workflow for reviewing shifts, handling swap requests, and reflecting approved changes in the schedule.",
    overview: "The n8n screenshot shows a chat-triggered workflow with roster and swap-request branches. It reads and filters a weekly roster, includes a manager-approval step, updates spreadsheet rows, and can create a Google Calendar event.",
    problem: "Roster changes and shift swaps can involve repeated checks, approvals, and schedule updates.",
    solution: "Connect roster data and swap requests to conditional checks, a manager-approval step, spreadsheet updates, and calendar event creation.",
    skills: ["Administrative Support", "Roster Coordination", "Workflow Automation", "Data Organization", "Scheduling"],
    tools: ["n8n", "Google Sheets", "Google Calendar"],
    deliverables: ["Chat message trigger", "Weekly roster lookup and filtering", "Shift-swap request branch", "Manager approval step", "Roster updates and calendar event action"],
    result: "The screenshot shows the roster, approval, swap-update, and calendar steps connected in one workflow.",
    image: carWashImg.url,
    caption: "A chat request enters the workflow; roster checks and manager approval lead to spreadsheet updates and a calendar event.",
    evidence: "Actual n8n workflow screenshot.",
  },
  {
    id: "proposal-invoice-drafting",
    icon: FileText,
    title: "Proposal & Invoice Drafting",
    category: "Admin Support & Automation",
    role: "Virtual Assistant & Workflow Automation Specialist",
    period: "Workflow screenshot · November 2026",
    short: "A form-led workflow that routes proposal and invoice requests through AI-assisted drafting and connected business records.",
    overview: "The n8n screenshot shows a form submission branching into proposal and invoice paths. AI-agent steps connect to client, lead, service, invoice, and settings sheets, with document creation, email follow-up, and Google Drive file actions visible.",
    problem: "Preparing proposals and invoices can require gathering the same client, service, and invoice details across several tools.",
    solution: "Route form submissions into the relevant drafting path, refer to spreadsheet records, and connect the workflow to document, email, and file actions.",
    skills: ["Administrative Support", "Document Preparation", "Invoice Support", "Data Organization", "Workflow Automation"],
    tools: ["n8n", "Google Sheets", "Google Docs", "Gmail", "Google Drive", "Groq Chat Model"],
    deliverables: ["Form submission trigger", "Proposal and invoice branches", "AI-assisted drafting steps", "Client and service data connections", "Document and email actions"],
    result: "The screenshot shows a connected proposal and invoice drafting workflow; it does not claim a measured business result.",
    image: proposalImg.url,
    caption: "A form starts branching proposal and invoice paths, with spreadsheet lookups, document creation, email, and Drive actions.",
    evidence: "Actual n8n workflow screenshot.",
  },
  {
    id: "lead-prospect-board",
    icon: BriefcaseBusiness,
    title: "Lead Prospect Management Board",
    category: "Project & Lead Management",
    role: "Virtual Assistant & Project Support Specialist",
    period: "Project board screenshot · November 2026",
    short: "A project board organizing prospect research, qualification, outreach planning, and follow-up tasks by status and timeline.",
    overview: "The board screenshot shows Planning and Execution groups with tasks such as researching potential clients, creating lead qualification criteria, developing a contact strategy, preparing proposal templates, and scheduling demonstrations.",
    problem: "Prospecting work is easier to coordinate when research, qualification, outreach, and follow-ups are visible together.",
    solution: "Organize the work into project stages and track task owners, statuses, priorities, timelines, and dependencies in one board.",
    skills: ["Lead Research", "Task Management", "Project Coordination", "Timeline Tracking", "Follow-up Organization"],
    tools: ["Monday.com"],
    deliverables: ["Planning and execution groups", "Prospect research tasks", "Lead qualification and contact strategy tasks", "Status and priority tracking", "Timeline and dependency fields"],
    result: "The screenshot shows a structured prospecting board with planning and execution tasks, statuses, priorities, and timelines.",
    image: leadBoardImg.url,
    caption: "A prospecting board lays out research, qualification, contact strategy, proposal preparation, and follow-up tasks.",
    evidence: "Actual project-board screenshot.",
  },
  {
    id: "linkedin-content-buffer",
    icon: Share2,
    title: "LinkedIn Content to Buffer",
    category: "Social Media & Automation",
    role: "Social Media & Automation Specialist",
    period: "Workflow screenshot · October 2026",
    short: "A scheduled content workflow that generates a topic and post content, then connects to Buffer for publishing.",
    overview: "The n8n screenshot shows a schedule trigger followed by topic-generation and post-content steps, an AI agent, and an HTTP request to Buffer. The visible sequence connects content preparation to a social scheduling platform.",
    problem: "Preparing and scheduling social posts involves repeated topic planning, drafting, and publishing steps.",
    solution: "Connect a scheduled trigger to AI-assisted topic and post creation, then pass the content into Buffer through an HTTP request.",
    skills: ["LinkedIn Content Support", "Content Planning", "AI-Assisted Writing", "Social Media Scheduling", "Workflow Automation"],
    tools: ["n8n", "Buffer", "Groq Chat Model"],
    deliverables: ["Schedule trigger", "Topic generation step", "Post-content step", "AI agent", "Buffer HTTP request"],
    result: "The screenshot shows the scheduled content sequence connected to Buffer; no reach or engagement figures are claimed.",
    image: linkedinBufferImg.url,
    caption: "A scheduled workflow creates a topic and post, then sends the content to Buffer.",
    evidence: "Actual n8n workflow screenshot.",
  },
  {
    id: "customer-service-assistant",
    icon: MessageCircle,
    title: "Customer Service Assistant",
    category: "Customer Support & AI",
    role: "AI Automation Specialist & Virtual Assistant",
    period: "Workflow screenshot · November 2026",
    short: "A customer-service assistant workflow connected to FAQ, product, order, and pricing information, with a human handover path.",
    overview: "The n8n screenshot shows incoming chat messages reaching a customer agent connected to a Groq chat model, Google Sheets for orders, products, prices, and customer data, an FAQ document, and a Gmail human-handover action.",
    problem: "Answering common customer questions can require checking information across FAQs, product details, prices, and orders.",
    solution: "Connect the customer agent to those information sources and include a human handover action for situations that need personal support.",
    skills: ["Customer Support", "AI Assistant Setup", "Knowledge Organization", "Workflow Automation", "Human Handover Design"],
    tools: ["n8n", "Groq Chat Model", "Google Sheets", "Google Docs", "Gmail"],
    deliverables: ["Incoming chat trigger", "Customer-service agent", "FAQ document connection", "Order, product, price, and customer data connections", "Gmail handover action"],
    result: "The screenshot shows the customer agent connected to support information and a human handover action.",
    image: customerServiceImg.url,
    caption: "A customer chat reaches an AI agent with FAQ, order, product, and price information, plus a human handover path.",
    evidence: "Actual n8n workflow screenshot.",
  },
  {
    id: "smart-inbox-assistant",
    icon: Mail,
    title: "Smart Inbox Assistant",
    category: "Email Management & Automation",
    role: "Virtual Assistant & Automation Specialist",
    period: "Workflow screenshot · October 2026",
    short: "An inbox workflow that connects Gmail, AI-assisted triage, labeling, Slack notification, and draft creation.",
    overview: "The n8n screenshot shows incoming Gmail messages routed through AI-agent steps and conditions, with Slack notification, a Gmail label action, spreadsheet updates, and draft creation also visible.",
    problem: "Sorting messages, applying labels, notifying the right people, and preparing draft replies can involve repetitive inbox work.",
    solution: "Connect Gmail to AI-assisted classification and conditional steps, then route messages to relevant notification, labeling, record, and draft actions.",
    skills: ["Inbox Management", "Email Triage", "AI-Assisted Drafting", "Workflow Automation", "Administrative Support"],
    tools: ["n8n", "Gmail", "Slack", "Groq Chat Model"],
    deliverables: ["Gmail trigger", "AI-agent and conditional steps", "Slack notification action", "Gmail label action", "Gmail draft creation"],
    result: "The screenshot shows an inbox workflow connecting Gmail triage steps with notifications, labels, and draft creation.",
    image: inboxImg.url,
    caption: "Incoming Gmail messages pass through AI-assisted checks, with Slack notification, labeling, and draft actions in the flow.",
    evidence: "Actual n8n workflow screenshot.",
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
            I combine virtual assistance, administrative support, AI, and automation to organize information
            and reduce repetitive work. Explore my own workflow screenshots alongside selected portfolio demonstrations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card
              key={p.id}
              className="group overflow-hidden rounded-2xl border-border/60 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <Button variant="ghost" type="button" onClick={() => setActive(p)} className="text-left w-full block h-auto p-0 whitespace-normal rounded-none" aria-label={`View ${p.title}`}>
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} interface demonstration`}
                    loading="lazy"
                    className="block w-full aspect-[16/10] object-contain"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 rounded-full text-[11px] backdrop-blur bg-background/80">
                    {p.category}
                  </Badge>
                </div>
              </Button>
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
                <div className="text-sm font-semibold text-accent mb-4">{p.evidence ? "Built workflow · Actual screenshot" : p.result}</div>
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
                <Button
                  variant="ghost"
                  type="button"
                  onClick={() => setZoom(active.image)}
                  className="relative block w-full h-auto p-0 group rounded-2xl overflow-hidden border border-border/60"
                  aria-label="Enlarge screenshot"
                >
                  <img src={active.image} alt={`${active.title} interface demonstration`} className="w-full" />
                  <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/85 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </Button>
                {active.caption && <p className="text-sm text-muted-foreground leading-relaxed mt-3">{active.caption}</p>}
                <div className="text-xs text-muted-foreground mt-2">{active.evidence ?? "Recreated interface preview."}</div>
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