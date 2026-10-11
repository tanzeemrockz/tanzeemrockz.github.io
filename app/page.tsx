import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

const capabilities = [
  { number: "01", icon: Layers3, title: "Digital lookbooks & catalogs", text: "Product-led pages that make collections, menus, and specifications easy to browse on every phone." },
  { number: "02", icon: MessageCircle, title: "Direct inquiry funnels", text: "Turn intent into a WhatsApp conversation, phone call, or quote request with fewer clicks." },
  { number: "03", icon: Search, title: "Search-ready foundations", text: "Semantic structure, local schema, and clear content that helps the right customers find you." },
  { number: "04", icon: Globe2, title: "Edge hosting & managed TLS", text: "Fast delivery, automatic HTTPS, and a launch setup that stays simple to own and maintain." },
]

const stack = ["HTML5 / Semantic Web", "Modern CSS", "Tailwind CSS", "TypeScript", "React + Next.js", "Astro", "Vite", "Node.js APIs"]

const pipeline = [
  ["01", "HOUR 00–04", "Intake & DNS reservation", "We organise your photos, details, contact routes, and domain requirements into a focused build brief."],
  ["02", "HOUR 04–24", "Core build & staging", "The complete experience is designed, assembled, compressed, and published to a private preview link."],
  ["03", "HOUR 24–36", "Mobile review & polish", "You review the real site on your phone. We tighten copy, spacing, links, and the details that matter."],
  ["04", "HOUR 36–48", "Production cutover", "Your domain, SSL, inquiry routes, and launch checklist are connected before we hand over the keys."],
]

const deployments = [
  ["BRIDAL STUDIO", "Princy Boutique", "A calm, editorial lookbook that gives brides an elegant way to browse silhouettes and start a conversation.", "https://demo.cyberslayercorpz.dev/princy-boutique"],
  ["HOSPITALITY", "Jailani Biryani Feast", "A menu-first ordering portal that turns local discovery into direct catering enquiries and custom orders.", "https://demo.cyberslayercorpz.dev/jailani-catering"],
  ["INDUSTRIAL B2B", "Sri Ganesh Packaging", "A practical product catalog for corrugated packaging, built to make specifications and RFQs effortless.", "https://demo.cyberslayercorpz.dev/sri-ganesh-cartons"],
]

const faqs = [
  ["Who owns the domain and website?", "You do. We register the domain in your name, provide access, and hand over the source files and hosting details after launch."],
  ["What do I need to send to get started?", "Your logo, best photos, products or services, contact details, and a short note about the customers you want to reach."],
  ["How many changes are included?", "One focused staging review is included, covering content, spacing, links, and mobile polish before launch."],
  ["What happens after the first year?", "You can renew the domain and hosting directly, or ask us to manage the renewal and ongoing updates for you."],
]

function BrandMark() {
  return (
    <svg className="h-7 w-7 shrink-0 rounded-[7px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" aria-hidden="true">
      <rect width="500" height="500" rx="100" fill="#18181B" />
      <g strokeWidth="16" strokeLinecap="square">
        <polygon points="250,110 360,180 360,320 250,390 140,320 140,180" stroke="#FFFFFF" fill="none" />
        <path d="M 250 110 V 250 M 360 180 L 250 250 M 140 180 L 250 250" stroke="#A1A1AA" strokeWidth="10" fill="none" />
      </g>
    </svg>
  )
}

function SectionLabel({ children }: { children: string }) {
  return <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">{children}</p>
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#09090b]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-white"><BrandMark /><span>CyberSlayerCorpz</span></a>
          <nav className="hidden items-center gap-7 text-[13px] text-zinc-400 lg:flex">
            {["Capabilities", "Stack", "Pipeline", "Deployments", "Pricing"].map((item) => <a key={item} className="transition-colors hover:text-white" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200">Start Project</a>
        </div>
      </header>

      <div id="top" className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <section className="border-x border-white/[0.06] px-0 pb-20 pt-24 sm:pb-28 sm:pt-36 lg:px-16 lg:pt-44">
          <div className="max-w-5xl">
            <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> PRODUCTION ENGINE · 48-HOUR DEPLOYMENT</div>
            <h1 className="max-w-5xl text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">Digital infrastructure engineered for <span className="text-sky-300">growing businesses.</span></h1>
            <p className="mt-9 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">High-converting mobile lookbooks, B2B catalogs, and zero-latency inquiry systems — designed to turn search traffic into a clear next action.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200">Reserve 48h Slot <ArrowUpRight className="ml-2 h-4 w-4" /></a><a href="#deployments" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]">View Deployments</a></div>
          </div>
        </section>

        <section className="grid border border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
          {[["48 Hours", "From intake to DNS live"], ["₹7,000", "Transparent flat setup"], ["Sub-1s", "Mobile edge load time"], ["100%", "Touch viewport compliance"]].map(([value, label], i) => <div key={value} className={`px-6 py-7 ${i > 0 ? "border-t border-white/[0.09] sm:border-l sm:border-t-0" : ""}`}><div className="text-2xl font-semibold tracking-tight text-white">{value}</div><div className="mt-1 text-xs text-zinc-500">{label}</div></div>)}
        </section>

        <section id="capabilities" className="border-x border-white/[0.06] px-0 py-24 sm:py-32 lg:px-16">
          <SectionLabel>01 · Capabilities</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="max-w-xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">A sharper digital presence, without the bloat.</h2><p className="max-w-sm text-sm leading-6 text-zinc-500">Every surface has a job: explain the offer, build trust, and make the next action obvious.</p></div>
          <div className="grid border-l border-t border-white/[0.09] sm:grid-cols-2">{capabilities.map(({ number, icon: Icon, title, text }) => <article key={number} className="group relative overflow-hidden border-b border-r border-white/[0.09] bg-[#111114]/80 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#17171c] sm:p-8"><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400/0 via-sky-400/70 to-sky-400/0 opacity-0 transition group-hover:opacity-100" /><div className="flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10"><Icon className="h-5 w-5 text-sky-300 transition group-hover:text-white" strokeWidth={1.5} /></div><span className="font-mono text-[11px] text-zinc-600">{number}</span></div><h3 className="mt-14 max-w-xs text-xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">{text}</p></article>)}</div>
        </section>

        <section id="stack" className="border-t border-white/[0.08] py-24 sm:py-32"><div className="max-w-2xl"><SectionLabel>02 · Stack</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Modern tools. Considered choices.</h2><p className="mt-5 text-base leading-7 text-zinc-500">Lightweight, zero-bloat stacks tailored for speed, search visibility, and long-term ownership.</p></div><div className="mt-10 grid grid-cols-1 border-l border-t border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">{stack.map((item) => <div key={item} className="border-b border-r border-white/[0.09] bg-[#111114]/60 p-5 text-sm text-zinc-300 transition hover:bg-[#16161a] hover:text-white"><Code2 className="mb-8 h-4 w-4 text-zinc-600" />{item}</div>)}</div></section>

        <section id="pipeline" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>03 · Pipeline</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">From brief to browser in two days.</h2><span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">01 — 04 / Dispatch</span></div><div className="grid border-l border-t border-white/[0.09] md:grid-cols-2 lg:grid-cols-4">{pipeline.map(([num, time, title, text]) => <article key={num} className="border-b border-r border-white/[0.09] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xl text-white">{num}</span><span className="font-mono text-[10px] text-zinc-600">{time}</span></div><h3 className="mt-16 text-lg font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p></article>)}</div></section>

        <section id="deployments" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>04 · Deployments</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">Work built to be used.</h2><p className="max-w-sm text-sm leading-6 text-zinc-500">Focused launch experiences for businesses that need their website to pull its weight.</p></div><div className="grid gap-4 lg:grid-cols-3">{deployments.map(([tag, title, text, href]) => <article key={title} className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111114] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:shadow-2xl hover:shadow-sky-950/20 sm:p-7"><div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-400/[0.08] to-transparent opacity-0 transition group-hover:opacity-100" /><span className="relative w-fit rounded-full border border-sky-300/20 bg-sky-300/[0.06] px-2.5 py-1 font-mono text-[10px] tracking-widest text-sky-200">{tag}</span><h3 className="mt-auto text-2xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p><a href={href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center text-sm font-medium text-white hover:text-zinc-300">Launch Prototype <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a></article>)}</div></section>

        <section className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>05 · Standards</SectionLabel><h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">The difference is in what we leave out.</h2><div className="mt-12 divide-y divide-white/[0.09] border-y border-white/[0.09]">{[[Zap, "Zero plugin bloat", "Pure hand-built components keep the experience quick, maintainable, and easy to extend."], [MessageCircle, "Direct lead routing", "Inquiries move straight to your phone or inbox, with no opaque CRM middle layer."], [ShieldCheck, "100% client ownership", "Your domain, DNS, source files, and account access stay with your business."]].map(([Icon, title, text]) => { const FeatureIcon = Icon as typeof Zap; return <div key={title as string} className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:gap-8"><FeatureIcon className="h-5 w-5 shrink-0 text-zinc-400" strokeWidth={1.5} /><div className="w-56 shrink-0 text-lg font-medium text-white">{title as string}</div><p className="max-w-xl text-sm leading-6 text-zinc-500">{text as string}</p></div> })}</div></section>

        <section id="pricing" className="border-t border-white/[0.08] py-24 sm:py-32"><div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#111114] p-7 shadow-2xl shadow-black/20 sm:p-10"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><SectionLabel>06 · Pricing</SectionLabel><h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">₹7,000 <span className="text-zinc-500">setup.</span></h2><p className="mt-4 text-sm text-zinc-500">₹3,500 advance to reserve your staging slot.</p></div><div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"><Sparkles className="h-5 w-5 text-zinc-300" /></div></div><div className="my-10 h-px bg-white/[0.09]" /><div className="grid gap-4 sm:grid-cols-2">{["Custom mobile-first layout", "1-year .in or .com domain", "1-year edge hosting + SSL", "Direct WhatsApp inquiry routing", "48-hour delivery guarantee"].map((feature) => <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300"><Check className="h-4 w-4 text-emerald-400" />{feature}</div>)}</div><a href="#contact" className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition hover:bg-zinc-200">Start your project <ArrowUpRight className="ml-2 h-4 w-4" /></a></div></section>

        <section id="faq" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>07 · FAQ</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">A few useful answers.</h2><div className="mt-10 grid gap-3 md:grid-cols-2">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-white/[0.09] bg-[#111114]/70 p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white"><span>{question}</span><ChevronDown className="h-4 w-4 shrink-0 text-zinc-500 transition group-open:rotate-180" /></summary><p className="max-w-lg pt-4 text-sm leading-6 text-zinc-500">{answer}</p></details>)}</div></section>

        <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-32"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>08 · Contact desk</SectionLabel><h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Bring the brief.<br /><span className="text-sky-300">We’ll bring the build.</span></h2><p className="mt-6 max-w-sm text-base leading-7 text-zinc-500">Share a few details and we’ll reply with the clearest next step for your business.</p></div><form action="https://api.web3forms.com/submit" method="POST" className="space-y-5"><input type="hidden" name="access_key" value="865e56af-935b-4a9e-a6e5-ae7bad6ce9c1" /><input type="hidden" name="subject" value="New CyberSlayerCorpz project inquiry" /><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-zinc-500">Full name<input required name="name" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="Your name" /></label><label className="text-xs text-zinc-500">WhatsApp / phone<input required name="phone" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="+91 00000 00000" /></label></div><label className="block text-xs text-zinc-500">Business name<input required name="business" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="Your business" /></label><label className="block text-xs text-zinc-500">Project scope<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#111114] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="What should we build?" /></label><button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition hover:bg-zinc-200">Dispatch Inquiry <ArrowUpRight className="ml-2 h-4 w-4" /></button></form></div></section>

        <footer className="flex flex-col gap-6 border-t border-white/[0.08] py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="flex items-center gap-3 font-medium text-zinc-300"><BrandMark />CyberSlayerCorpz</a><div className="flex flex-wrap gap-5"><a href="#capabilities" className="hover:text-white">Capabilities</a><a href="#deployments" className="hover:text-white">Work</a><a href="#contact" className="hover:text-white">Contact</a><span>© 2026 CyberSlayerCorpz</span></div></footer>
      </div>
    </main>
  )
}
