import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Brain, Workflow, Sparkles, GraduationCap, PenTool, Rocket,
  Clock, TrendingUp, DollarSign, Zap, Lightbulb, MessageCircle,
  Mail, Phone, Linkedin, Calendar, Menu, X, ArrowRight, Check,
  Briefcase, Megaphone, Database, Share2, ClipboardList,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-ai.jpg";
import { ProjectsSection } from "@/components/ProjectsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dikeledi Khoza — AI Productivity & Automation Specialist" },
      { name: "description", content: "I help entrepreneurs and small businesses save time, automate repetitive work, and boost productivity using practical AI solutions." },
      { property: "og:title", content: "Dikeledi Khoza — AI Productivity & Automation Specialist" },
      { property: "og:description", content: "Practical AI consulting, workflow automation, and training for entrepreneurs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#tools", label: "Tools" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">
          Dikeledi<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex">
          <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">Book a Call</Button>
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button size="sm" className="rounded-full w-full">Book a Call</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-subtle)" }} />
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-accent)" }} />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3 w-3 mr-1.5" /> AI Productivity & Automation Specialist
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Helping Entrepreneurs <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>Work Smarter</span> with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I help businesses save time, automate repetitive work, and improve productivity using practical AI solutions.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#contact"><Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg">Book a Consultation <ArrowRight className="h-4 w-4 ml-1" /></Button></a>
            <a href="#services"><Button size="lg" variant="outline" className="rounded-full">View My Services</Button></a>
          </div>
          <div className="flex gap-6 pt-6 text-sm text-muted-foreground">
            <div><span className="text-2xl font-bold text-foreground">50+</span><div>Hours saved/week</div></div>
            <div><span className="text-2xl font-bold text-foreground">9+</span><div>AI tools mastered</div></div>
            <div><span className="text-2xl font-bold text-foreground">100%</span><div>No-code friendly</div></div>
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <img src={heroImg} alt="AI neural network illustration" width={1024} height={1024} className="relative rounded-3xl shadow-2xl w-full" style={{ boxShadow: "var(--shadow-elegant)" }} />
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">{eyebrow}</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

const skills = ["AI Productivity", "Workflow Automation", "Prompt Engineering", "ChatGPT", "AI Research", "Business Process Optimization", "AI Strategy"];

function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Bridging AI and everyday business." subtitle="I specialize in helping entrepreneurs understand and implement AI tools — without needing technical expertise. My approach is practical, hands-on, and focused on outcomes that matter to your bottom line.">
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="md:col-span-2 p-8 rounded-2xl border-border/60">
          <p className="text-muted-foreground leading-relaxed mb-6">
            From solo founders to growing teams, I translate AI buzzwords into clear, repeatable workflows you can rely on. We start with your real bottlenecks, choose the right tools, and build automations that just work.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="secondary" className="rounded-full px-3 py-1.5 text-xs">{s}</Badge>
            ))}
          </div>
        </Card>
        <Card className="p-8 rounded-2xl text-primary-foreground border-0" style={{ background: "var(--gradient-hero)" }}>
          <Brain className="h-8 w-8 mb-4" />
          <h3 className="font-bold text-xl mb-2">My Mission</h3>
          <p className="text-sm opacity-90 leading-relaxed">Help entrepreneurs and small businesses use AI to work smarter, automate the repetitive, and reclaim hours every week.</p>
        </Card>
      </div>
    </Section>
  );
}

const services = [
  {
    icon: Briefcase,
    title: "Virtual Assistant & Executive Support",
    desc: "Help business owners and professionals stay organized and focused on their priorities.",
    items: [
      "Administrative support",
      "Email management",
      "Calendar & meeting management",
      "Scheduling & follow-ups",
      "Data entry",
      "Customer support",
      "Internet research",
      "CRM management",
    ],
  },
  {
    icon: Brain,
    title: "AI Solutions & AI Consulting",
    desc: "Help businesses identify practical ways to use AI to improve productivity and reduce repetitive work.",
    items: [
      "AI tool implementation",
      "AI workflow design",
      "AI consulting",
      "Prompt engineering",
      "AI-powered business solutions",
      "AI productivity systems",
      "AI process optimization",
    ],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Build simple systems that automate repetitive business processes and save valuable time.",
    items: [
      "Workflow automation",
      "Zapier automation",
      "Lead management automation",
      "Email automation",
      "Customer support automation",
      "Automated follow-ups",
      "Connecting business applications",
      "Data collection & processing",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Help businesses maintain a consistent and professional social media presence.",
    items: [
      "Social media management",
      "Content planning",
      "Content creation",
      "Social media scheduling",
      "LinkedIn management",
      "Social media captions & copywriting",
      "Engagement & community support",
      "AI-assisted content creation",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & LinkedIn Support",
    desc: "Help businesses strengthen their digital presence and generate new opportunities.",
    items: [
      "LinkedIn content creation",
      "LinkedIn profile support",
      "Lead research",
      "Lead generation",
      "Prospecting",
      "Outreach message creation",
      "Digital marketing support",
      "Marketing content creation",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Help businesses keep projects organized, on track, and moving forward.",
    items: [
      "Project planning",
      "Task management",
      "Timeline & deadline tracking",
      "Team coordination",
      "Meeting coordination",
      "Project documentation",
      "Progress tracking",
      "Workflow organization",
    ],
  },
  {
    icon: Database,
    title: "Data Entry & Research",
    desc: "Provide reliable support for businesses that need accurate information and organized data.",
    items: [
      "Data entry",
      "Data cleaning",
      "Spreadsheet management",
      "Web research",
      "Lead research",
      "CRM data management",
      "Information gathering",
      "Data organization",
    ],
  },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I Can Help Your Business"
      subtitle="I help businesses save time, stay organized, improve their online presence, and work more efficiently by combining virtual assistance, AI, automation, digital marketing, and project management."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group p-7 rounded-2xl border-border/60 hover:border-accent/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <ul className="space-y-2 mb-6 mt-auto">
              {s.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact">
              <Button variant="outline" size="sm" className="rounded-full w-full group-hover:border-accent group-hover:text-accent transition-colors">
                Get Started <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </a>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 md:mt-16 rounded-3xl p-8 md:p-12 text-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Need help getting more done?</h3>
        <p className="text-sm md:text-base opacity-90 max-w-2xl mx-auto mb-6 leading-relaxed">
          Whether you need reliable support, better systems, social media management, or help bringing a project to completion, I can help you build a more organized and efficient workflow.
        </p>
        <a href="#contact">
          <Button size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Let's Work Together <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </a>
      </div>
    </Section>
  );
}

const tools = ["ChatGPT", "Claude", "Gemini", "Perplexity", "Notion AI", "Canva AI", "Microsoft Copilot", "Zapier", "Make"];

function Tools() {
  return (
    <Section id="tools" eyebrow="AI Tools I Use" title="A toolkit built for results." subtitle="The right tool for the right job — picked from a stack I use daily.">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
        {tools.map((t) => (
          <Card key={t} className="aspect-square rounded-2xl border-border/60 flex flex-col items-center justify-center text-center p-3 hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 transition-all">
            <div className="h-10 w-10 rounded-xl mb-2 flex items-center justify-center text-primary-foreground font-bold text-sm" style={{ background: "var(--gradient-accent)" }}>
              {t.charAt(0)}
            </div>
            <div className="text-xs font-medium leading-tight">{t}</div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const benefits = [
  { icon: Clock, label: "Save Time" },
  { icon: TrendingUp, label: "Increase Productivity" },
  { icon: DollarSign, label: "Reduce Costs" },
  { icon: Zap, label: "Automate Repetitive Tasks" },
  { icon: Lightbulb, label: "Practical AI Solutions" },
  { icon: MessageCircle, label: "Easy-to-understand Guidance" },
];

function WhyMe() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="max-w-7xl mx-auto px-6 text-primary-foreground">
        <div className="max-w-2xl mb-12">
          <div className="text-sm font-semibold uppercase tracking-wider opacity-80 mb-3">Why Work With Me</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Benefits you can measure.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div key={b.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
              <div className="h-11 w-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sarah Mokoena", role: "Founder, Bloom Studio", quote: "Dikeledi saved our team 20 hours a week with smart automations. We finally have time to focus on growth." },
  { name: "James van der Merwe", role: "CEO, Lattice Co.", quote: "She demystified AI for our entire team. Practical, patient, and incredibly knowledgeable." },
  { name: "Thandi Nkosi", role: "Marketing Lead, Northwave", quote: "Our content output tripled in a month. The prompt library alone is worth its weight in gold." },
];

function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Testimonials" title="What clients say.">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="p-7 rounded-2xl border-border/60">
            <div className="flex gap-0.5 mb-4 text-accent">{"★★★★★"}</div>
            <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full flex items-center justify-center text-primary-foreground font-bold" style={{ background: "var(--gradient-hero)" }}>
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const posts = [
  { tag: "Tools", title: "10 AI Tools Every Entrepreneur Should Use", desc: "A curated stack for solo founders and small teams." },
  { tag: "Productivity", title: "How AI Saves Small Businesses Hours Every Week", desc: "Real examples of measurable time wins." },
  { tag: "Guide", title: "Beginner's Guide to ChatGPT", desc: "Get started in 15 minutes — no jargon." },
  { tag: "Automation", title: "AI Automation Ideas for Businesses", desc: "Practical workflows you can implement this week." },
];

function Blog() {
  return (
    <Section id="blog" eyebrow="Blog" title="AI tips & insights." subtitle="Bite-sized articles to help you stay sharp.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.map((p) => (
          <Card key={p.title} className="p-6 rounded-2xl border-border/60 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
            <Badge variant="secondary" className="rounded-full text-xs mb-4">{p.tag}</Badge>
            <h3 className="font-bold text-base mb-2 leading-snug">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
            <div className="text-sm font-medium text-accent inline-flex items-center gap-1">Read more <ArrowRight className="h-3 w-3" /></div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together." subtitle="Book a free consultation or send a message — I respond within 24 hours.">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <Card className="p-6 rounded-2xl border-border/60 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}><Phone className="h-5 w-5" /></div>
            <div><div className="text-xs text-muted-foreground">Phone / WhatsApp</div><a href="tel:0673802975" className="font-semibold hover:text-accent">067 380 2975</a></div>
          </Card>
          <Card className="p-6 rounded-2xl border-border/60 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}><Mail className="h-5 w-5" /></div>
            <div className="min-w-0"><div className="text-xs text-muted-foreground">Email</div><a href="mailto:dikeledibongiwe04@gmail.com" className="font-semibold hover:text-accent break-all">dikeledibongiwe04@gmail.com</a></div>
          </Card>
          <Card className="p-6 rounded-2xl border-border/60 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}><Linkedin className="h-5 w-5" /></div>
            <div><div className="text-xs text-muted-foreground">LinkedIn</div><a href="https://www.linkedin.com/in/dikeledi-khoza?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="font-semibold hover:text-accent">dikeledikhoza</a></div>
          </Card>
          <a href="https://calendly.com" target="_blank" rel="noreferrer" className="block">
            <Button size="lg" className="w-full rounded-2xl h-14 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              <Calendar className="h-5 w-5 mr-2" /> Book on Calendar
            </Button>
          </a>
        </div>
        <Card className="p-7 rounded-2xl border-border/60">
          <form onSubmit={onSubmit} className="space-y-4">
            <div><label className="text-sm font-medium mb-1.5 block">Name</label><Input required name="name" placeholder="Your name" className="rounded-xl h-11" /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Email</label><Input required type="email" name="email" placeholder="you@example.com" className="rounded-xl h-11" /></div>
            <div><label className="text-sm font-medium mb-1.5 block">Message</label><Textarea required name="message" placeholder="Tell me about your project..." rows={5} className="rounded-xl" /></div>
            <Button type="submit" size="lg" className="w-full rounded-xl bg-primary hover:bg-primary/90">Send Message <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">Dikeledi Khoza<span className="text-accent">.</span></div>
          <p className="text-sm text-muted-foreground">AI Productivity & Automation Specialist helping businesses work smarter.</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Navigate</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.slice(0, 5).map(l => <li key={l.href}><a href={l.href} className="hover:text-foreground">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold mb-3">Connect</div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/dikeledi-khoza?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:dikeledibongiwe04@gmail.com" aria-label="Email" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"><Mail className="h-4 w-4" /></a>
            <a href="https://wa.me/27673802975" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"><Phone className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-border/60 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Dikeledi Khoza. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <ProjectsSection />
        <WhyMe />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
