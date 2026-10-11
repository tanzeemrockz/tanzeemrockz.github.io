import { ArrowUpRight, Check, ChevronDown, Globe2, Menu, MessageCircle, Search, Sparkles, X } from "lucide-react"

const projects = [
  { type: "Fashion / Editorial", name: "Princy Boutique", copy: "A quiet, image-led bridal lookbook that lets every silhouette speak for itself.", href: "https://demo.cyberslayercorpz.dev/princy-boutique", color: "bg-[#d8c7b4]", mark: "PB" },
  { type: "Food / Hospitality", name: "Jailani Biryani Feast", copy: "A menu experience built for appetite, local discovery, and direct catering orders.", href: "https://demo.cyberslayercorpz.dev/jailani-catering", color: "bg-[#d96c3f]", mark: "JB" },
  { type: "Industrial / B2B", name: "Sri Ganesh Packaging", copy: "A clear product catalog that turns technical packaging specs into confident enquiries.", href: "https://demo.cyberslayercorpz.dev/sri-ganesh-cartons", color: "bg-[#8aa99d]", mark: "SG" },
]

const services = [
  ["01", "Digital storefronts", "Lookbooks, catalogs, and service pages that make your best work easy to understand."],
  ["02", "Direct conversion paths", "WhatsApp, calls, and enquiry flows placed exactly where a ready customer needs them."],
  ["03", "Search foundations", "Fast semantic pages with the structure local customers and search engines can read."],
  ["04", "Launch infrastructure", "Domain, hosting, SSL, analytics, and handover handled without the usual friction."],
]

const faqs = [
  ["What should I send before we start?", "Your logo, photos, product or service details, contact information, and any examples you like. A WhatsApp message is enough to begin."],
  ["Do I own the website and domain?", "Yes. The domain is registered for your business and you receive the access details and source files after launch."],
  ["Can I request changes?", "Absolutely. We use a focused mobile preview review to refine copy, images, links, and spacing before the site goes live."],
  ["What happens after launch?", "You can manage the site yourself, or keep us on call for updates, new pages, and annual renewals."],
]

function Logo() { return <svg className="h-8 w-8 shrink-0" viewBox="0 0 500 500" aria-hidden="true"><rect width="500" height="500" rx="100" fill="#111827"/><g strokeWidth="16" strokeLinecap="square"><polygon points="250,110 360,180 360,320 250,390 140,320 140,180" stroke="#f8fafc" fill="none"/><path d="M 250 110 V 250 M 360 180 L 250 250 M 140 180 L 250 250" stroke="#93c5fd" strokeWidth="10" fill="none"/></g></svg> }
function Label({ children }: { children: string }) { return <p className="eyebrow">{children}</p> }

export default function Page() {
  return <main className="site-shell">
    <header className="site-header"><a href="#top" className="brand"><Logo /><span>CyberSlayer<span className="brand-accent">Corpz</span></span></a><nav className="desktop-nav"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#pricing">Pricing</a></nav><a href="#contact" className="header-cta">Start a project <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Open menu"><Menu size={21}/></button></header>

    <section id="top" className="hero">
      <div className="hero-copy"><div className="availability"><span /> Accepting projects for October</div><h1>Websites with<br /><em>something to say.</em></h1><p>We build focused, fast-loading websites for ambitious local businesses. Clear enough to understand. Beautiful enough to remember.</p><div className="hero-actions"><a href="#contact" className="button button-dark">Start a conversation <ArrowUpRight size={17}/></a><a href="#work" className="text-link">See selected work <ArrowUpRight size={16}/></a></div></div>
      <div className="hero-art" aria-label="Abstract composition"><div className="art-circle" /><div className="art-card art-card-one"><span>01</span><strong>Make it clear.</strong></div><div className="art-card art-card-two"><span>02</span><strong>Make it work.</strong></div><div className="art-caption">CYBERSLAYER<br />DIGITAL STUDIO</div></div>
    </section>

    <section className="intro-band"><p>We are a small digital studio for businesses ready to look the part.</p><div className="intro-rule" /><span>Based in India / Working everywhere</span></section>

    <section id="services" className="section services-section"><div className="section-heading"><div><Label>What we do</Label><h2>Less noise.<br /><span>More momentum.</span></h2></div><p>From first impression to final enquiry, we shape every screen around what your customer needs to do next.</p></div><div className="services-grid">{services.map(([number, title, copy]) => <article className="service-card" key={number}><span className="service-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight className="service-arrow" size={19}/></article>)}</div></section>

    <section id="work" className="section work-section"><div className="section-heading compact"><div><Label>Selected work</Label><h2>Made for real<br /><span>businesses.</span></h2></div><p>Three examples of how a thoughtful website can make a practical difference.</p></div><div className="project-grid">{projects.map((project, i) => <article className={`project-card project-${i}`} key={project.name}><div className={`project-visual ${project.color}`}><div className="project-shape" /><span>{project.mark}</span><small>CYBERSLAYER / 0{i + 1}</small></div><div className="project-info"><Label>{project.type}</Label><h3>{project.name}</h3><p>{project.copy}</p><a href={project.href} target="_blank" rel="noreferrer" className="project-link">View live prototype <ArrowUpRight size={16}/></a></div></article>)}</div></section>

    <section id="process" className="section process-section"><div className="process-intro"><Label>The process</Label><h2>Good work moves<br /><span>at the speed of trust.</span></h2><p>One clear brief. One mobile preview. One launch-ready site in 48 hours.</p></div><div className="process-list"><div><span>01</span><div><h3>Send the essentials</h3><p>Share your story, images, offer, and contact details.</p></div></div><div><span>02</span><div><h3>Shape the first draft</h3><p>Review a working mobile preview within 24 hours.</p></div></div><div><span>03</span><div><h3>Go live with confidence</h3><p>We connect your domain, SSL, and enquiry routes.</p></div></div></div></section>

    <section id="pricing" className="pricing-section"><div><Label>Simple by design</Label><h2>Everything you need<br />to get moving.</h2><p>One focused build. No surprise invoices. No unnecessary layers between you and your customers.</p></div><div className="price-card"><div className="price-top"><span>Launch package</span><Sparkles size={20}/></div><div className="price">₹7,000 <small>total</small></div><p>₹3,500 advance to reserve your slot</p><div className="check-list">{["Custom mobile-first design", "1-year domain and hosting", "SSL security and WhatsApp button", "48-hour delivery"] .map(x => <span key={x}><Check size={16}/>{x}</span>)}</div><a href="#contact" className="button button-light">Reserve your slot <ArrowUpRight size={16}/></a></div></section>

    <section className="section faq-section"><div><Label>Good to know</Label><h2>Questions,<br /><span>answered.</span></h2></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></section>

    <section id="contact" className="contact-section"><div className="contact-copy"><Label>Start here</Label><h2>Tell us what<br /><em>you&apos;re building.</em></h2><p>Give us the rough version. We&apos;ll come back with a clear, useful next step.</p><a href="mailto:hello@cyberslayercorpz.dev">hello@cyberslayercorpz.dev <ArrowUpRight size={16}/></a></div><form action="https://api.web3forms.com/submit" method="POST" className="contact-form"><input type="hidden" name="access_key" value="865e56af-935b-4a9e-a6e5-ae7bad6ce9c1"/><input type="hidden" name="subject" value="New CyberSlayerCorpz inquiry"/><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>WhatsApp / phone<input required name="phone" placeholder="+91 00000 00000" /></label><label>Business name<input required name="business" placeholder="Your business" /></label><label>What do you need?<textarea required name="message" rows={4} placeholder="A new website, a better catalog, a launch page..." /></label><button type="submit" className="button button-dark">Send enquiry <ArrowUpRight size={17}/></button></form></section>

    <footer className="footer"><a href="#top" className="brand"><Logo /><span>CyberSlayer<span className="brand-accent">Corpz</span></span></a><span>© 2026 CyberSlayerCorpz</span><div><a href="#work">Work</a><a href="#contact">Contact</a><a href="mailto:hello@cyberslayercorpz.dev">Email</a></div></footer>
  </main>
}
