import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"

const services = [
  { number: "01", icon: Layers3, title: "Digital lookbooks & catalogs", text: "Product-led pages that make every collection, menu, and specification easy to browse on a phone." },
  { number: "02", icon: MessageCircle, title: "Direct inquiry funnels", text: "Short paths from intent to WhatsApp, phone, or a clear request for quote — without the friction." },
  { number: "03", icon: Search, title: "Search-ready foundations", text: "Semantic structure, local schema, and thoughtful page copy built to help the right customers find you." },
  { number: "04", icon: Globe2, title: "Edge hosting & managed TLS", text: "Fast global delivery, automatic HTTPS, and a stable launch setup that stays simple to own." },
]

const stack = ["HTML5 / Semantic Web", "Modern CSS", "Tailwind CSS", "TypeScript", "React + Next.js", "Astro", "Vite", "Node.js APIs"]

const pipeline = [
  ["01", "HOUR 00–04", "Asset intake & scope audit", "We organise your photos, details, contact routes, and domain requirements into a focused build brief."],
  ["02", "HOUR 04–24", "Core assembly & staging", "The first complete experience is designed, built, compressed, and published to a private preview link."],
  ["03", "HOUR 24–36", "Mobile review & refinements", "You review the real site on your phone. We tighten copy, spacing, links, and the details that matter."],
  ["04", "HOUR 36–48", "Production cutover & handover", "Your domain, SSL, inquiry routes, and launch checklist are connected before we hand over the keys."],
]

const work = [
  ["BRIDAL STUDIO", "Princy Boutique", "A refined lookbook for a bridal studio, giving visitors a calm way to browse silhouettes and start a conversation.", "https://demo.cyberslayercorpz.dev/princy-boutique"],
  ["HOSPITALITY", "Jailani Biryani Feast", "A warm, menu-first ordering portal that turns local discovery into direct catering enquiries and custom orders.", "https://demo.cyberslayercorpz.dev/jailani-catering"],
  ["INDUSTRIAL B2B", "Sri Ganesh Packaging", "A practical product catalog for corrugated packaging, built to make specifications and RFQs feel effortless.", "https://demo.cyberslayercorpz.dev/sri-ganesh-cartons"],
]

const faqs = [
  ["Who owns the domain and website?", "You do. We register the domain in your name, provide access, and hand over the source files and hosting details after launch."],
  ["What do I need to send to get started?", "A logo if you have one, your best photos, services or products, contact details, and a short note about the customers you want to reach."],
  ["How many changes are included?", "The staging review is designed for practical refinements. We include one focused round covering content, spacing, links, and mobile polish."],
  ["Can you help after launch?", "Yes. We can keep the site maintained, update catalogs, add pages, or help with a future campaign whenever your business is ready."],
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
  return <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">{children}</p>
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-100 selection:bg-white selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#09090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-white"><BrandMark /><span>CyberSlayerCorpz</span></a>
          <nav className="hidden items-center gap-7 text-[13px] text-zinc-400 lg:flex">
            {["Services", "Stack", "Pipeline", "Work", "Pricing", "FAQ"].map((item) => <a key={item} className="transition-colors hover:text-white" href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200">Start Project</a>
        </div>
      </header>

      <div id="top" className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <section className="border-x border-white/[0.06] px-0 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-16 lg:pt-40">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-zinc-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> PRODUCTION READY // 48-HOUR PIPELINE</div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[88px]">Fast-turnaround digital engineering for <span className="text-zinc-500">growing enterprises.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">Custom mobile lookbooks, B2B catalogs, and booking systems that turn search traffic into confident enquiries — designed, built, and ready to launch in 48 hours.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200">Reserve 48h Slot <ArrowUpRight className="ml-2 h-4 w-4" /></a><a href="#deployments" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/[0.04]">View Deployments</a></div>
          </div>
        </section>

        <section className="grid border border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
          {[['48 Hours','Turnaround speed guarantee'],['₹7,000','Transparent flat setup'],['Sub-1s','Mobile edge load time'],['100%','Touch viewport compliance']].map(([value,label], i) => <div key={value} className={`px-6 py-6 ${i > 0 ? 'border-t border-white/[0.09] sm:border-l sm:border-t-0' : ''}`}><div className="text-2xl font-semibold tracking-tight text-white">{value}</div><div className="mt-1 text-xs text-zinc-500">{label}</div></div>)}
        </section>

        <section id="services" className="border-x border-white/[0.06] px-0 py-24 sm:py-32 lg:px-16">
          <SectionLabel>01 / Capabilities</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A sharper digital presence, without the bloat.</h2><p className="max-w-sm text-sm leading-6 text-zinc-500">Every surface has a job: explain the offer, build trust, and make the next action obvious.</p></div>
          <div className="grid border-l border-t border-white/[0.09] sm:grid-cols-2">{services.map(({number, icon: Icon, title, text}) => <article key={number} className="group border-b border-r border-white/[0.09] bg-[#111114]/70 p-6 transition hover:bg-[#151519] sm:p-8"><div className="flex items-start justify-between"><Icon className="h-5 w-5 text-zinc-400 transition group-hover:text-white" strokeWidth={1.5} /><span className="font-mono text-[11px] text-zinc-600">{number}</span></div><h3 className="mt-14 text-xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">{text}</p></article>)}</div>
        </section>

        <section id="stack" className="border-t border-white/[0.08] py-24 sm:py-28"><div className="max-w-2xl"><SectionLabel>02 / Stack</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Engineered with modern tooling.</h2><p className="mt-5 text-base leading-7 text-zinc-500">Lightweight, zero-bloat stacks tailored for load speed, search visibility, and reliability.</p></div><div className="mt-10 grid grid-cols-1 border-l border-t border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">{stack.map((item) => <div key={item} className="border-b border-r border-white/[0.09] bg-[#111114]/60 p-5 text-sm text-zinc-300 transition hover:bg-[#16161a] hover:text-white"><Code2 className="mb-8 h-4 w-4 text-zinc-600" />{item}</div>)}</div></section>

        <section id="pipeline" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>03 / Pipeline</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">From brief to browser in two days.</h2><span className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">01 — 04 / Dispatch</span></div><div className="grid border-l border-t border-white/[0.09] md:grid-cols-2 lg:grid-cols-4">{pipeline.map(([num,time,title,text]) => <article key={num} className="border-b border-r border-white/[0.09] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="font-mono text-xl text-white">{num}</span><span className="font-mono text-[10px] text-zinc-600">{time}</span></div><h3 className="mt-16 text-lg font-medium text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p></article>)}</div></section>

        <section id="deployments" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>04 / Selected deployments</SectionLabel><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Work built to be used.</h2><p className="max-w-sm text-sm leading-6 text-zinc-500">Focused launch experiences for businesses that need their website to pull its weight.</p></div><div className="grid gap-4 lg:grid-cols-3">{work.map(([tag,title,text,href]) => <article key={title} className="flex min-h-[360px] flex-col rounded-2xl border border-white/[0.1] bg-[#111114] p-6 transition hover:-translate-y-1 hover:border-white/25 sm:p-7"><span className="w-fit rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] tracking-widest text-zinc-500">{tag}</span><h3 className="mt-auto text-2xl font-medium tracking-tight text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p><a href={href} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center text-sm font-medium text-white hover:text-zinc-300">Launch Prototype <ArrowUpRight className="ml-2 h-4 w-4" /></a></article>)}</div></section>

        <section className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>05 / Standards</SectionLabel><h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">The difference is in what we leave out.</h2><div className="mt-12 divide-y divide-white/[0.09] border-y border-white/[0.09]">{[[Zap,'Zero plugin bloat','Pure hand-built components keep the experience quick, maintainable, and easy to extend.'],[MessageCircle,'Direct lead routing','Inquiries move straight to your phone or inbox, with no opaque CRM middle layer.'],[ShieldCheck,'100% client ownership','Your domain, DNS, source files, and account access stay with your business.']].map(([Icon,title,text]) => { const FeatureIcon = Icon as typeof Zap; return <div key={title as string} className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:gap-8"><FeatureIcon className="h-5 w-5 shrink-0 text-zinc-400" strokeWidth={1.5} /><div className="w-56 shrink-0 text-lg font-medium text-white">{title as string}</div><p className="max-w-xl text-sm leading-6 text-zinc-500">{text as string}</p></div> })}</div></section>

        <section id="pricing" className="border-t border-white/[0.08] py-24 sm:py-32"><div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#111114] p-7 sm:p-10"><div className="flex flex-col justify-between gap-8 sm:flex-row"><div><SectionLabel>06 / Pricing</SectionLabel><h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">₹7,000 <span className="text-zinc-500">setup.</span></h2><p className="mt-4 text-sm text-zinc-500">₹3,500 advance to reserve your staging slot.</p></div><div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"><Sparkles className="h-5 w-5 text-zinc-300" /></div></div><div className="my-10 h-px bg-white/[0.09]" /><div className="grid gap-4 sm:grid-cols-2">{['Custom mobile-first layout','1-year .in or .com domain','1-year edge hosting + SSL','Direct WhatsApp inquiry routing','48-hour delivery guarantee'].map((feature) => <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300"><Check className="h-4 w-4 text-zinc-500" />{feature}</div>)}</div><a href="#contact" className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition hover:bg-zinc-200">Start your project <ArrowUpRight className="ml-2 h-4 w-4" /></a></div></section>

        <section id="faq" className="border-t border-white/[0.08] py-24 sm:py-32"><SectionLabel>07 / FAQ</SectionLabel><h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">A few useful answers.</h2><div className="mt-10 grid gap-3 md:grid-cols-2">{faqs.map(([question,answer]) => <details key={question} className="group rounded-xl border border-white/[0.09] bg-[#111114]/70 p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white"><span>{question}</span><ChevronDown className="h-4 w-4 shrink-0 text-zinc-500 transition group-open:rotate-180" /></summary><p className="max-w-lg pt-4 text-sm leading-6 text-zinc-500">{answer}</p></details>)}</div></section>

        <section id="contact" className="border-t border-white/[0.08] py-24 sm:py-32"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionLabel>08 / Contact desk</SectionLabel><h2 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">Bring the brief.<br /><span className="text-zinc-500">We’ll bring the build.</span></h2><p className="mt-6 max-w-sm text-base leading-7 text-zinc-500">Share a few details and we’ll reply with the clearest next step for your business.</p></div><form action="https://api.web3forms.com/submit" method="POST" className="space-y-5"><input type="hidden" name="access_key" value="865e56af-935b-4a9e-a6e5-ae7bad6ce9c1" /><input type="hidden" name="subject" value="New CyberSlayerCorpz project inquiry" /><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-zinc-500">Full name<input required name="name" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="Your name" /></label><label className="text-xs text-zinc-500">WhatsApp / phone<input required name="phone" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="+91 00000 00000" /></label></div><label className="block text-xs text-zinc-500">Business name<input required name="business" className="mt-2 h-12 w-full rounded-lg border border-white/10 bg-[#111114] px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="Your business" /></label><label className="block text-xs text-zinc-500">Project scope<textarea required name="message" rows={5} className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#111114] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-white/35" placeholder="What should the website help your business do?" /></label><button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black transition hover:bg-zinc-200">Dispatch Inquiry <ArrowUpRight className="ml-2 h-4 w-4" /></button></form></div></section>

        <footer className="flex flex-col gap-6 border-t border-white/[0.08] py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="flex items-center gap-3 font-medium text-zinc-300"><BrandMark />CyberSlayerCorpz</a><div className="flex flex-wrap gap-5"><a href="#services" className="hover:text-white">Services</a><a href="#deployments" className="hover:text-white">Work</a><a href="#contact" className="hover:text-white">Contact</a><span>© 2026 CyberSlayerCorpz</span></div></footer>
      </div>
    </main>
  )
}
