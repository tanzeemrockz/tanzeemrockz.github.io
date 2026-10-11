import { ArrowUpRight, Check, ChevronDown, Code2, Globe2, Layers3, Menu, MessageCircle, Search, Sparkles, Workflow } from "lucide-react"

const work = [
  { domain: "princy-boutique.com", name: "Princy Boutique", detail: "Bridal Studio · Lookbook", tone: "rose", href: "https://demo.cyberslayercorpz.dev/princy-boutique" },
  { domain: "jailani-feast.com", name: "Jailani Biryani Feast", detail: "Hospitality · Catering Portal", tone: "amber", href: "https://demo.cyberslayercorpz.dev/jailani-catering" },
  { domain: "sriganeshpackaging.com", name: "Sri Ganesh Packaging", detail: "Industrial · Product Catalog", tone: "blue", href: "https://demo.cyberslayercorpz.dev/sri-ganesh-cartons" },
]

const services = [
  ["01", "Websites & digital products", "High-clarity websites, catalogs, and product experiences engineered around how your customers actually buy."],
  ["02", "Growth & search", "Local SEO foundations, landing pages, and conversion paths that turn attention into qualified enquiries."],
  ["03", "Automation & AI", "Useful workflows and integrations that remove repetitive work from day-to-day business operations."],
]

const faqs = [
  ["Who owns the domain and website?", "You do. We register the domain for your business and hand over the access details and source files when the project is complete."],
  ["What do I need to provide?", "Your logo, photos, offer or catalog details, contact information, and any references you like. A simple WhatsApp message is enough to start."],
  ["How many revisions are included?", "The build includes a focused review on a live mobile preview. We refine the important details before connecting your domain and launching."],
  ["What happens after the first year?", "You keep full ownership. We can handle annual domain and hosting renewals for you, or give you everything needed to manage them directly."],
]

function Logo() {
  return <svg className="brand-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" aria-hidden="true"><rect width="500" height="500" rx="100" fill="#18181B"/><g strokeWidth="16" strokeLinecap="square"><polygon points="250,110 360,180 360,320 250,390 140,320 140,180" stroke="#FFFFFF" fill="none"/><path d="M 250 110 V 250 M 360 180 L 250 250 M 140 180 L 250 250" stroke="#A1A1AA" strokeWidth="10" fill="none"/></g></svg>
}

function Eyebrow({ children }: { children: string }) { return <span className="eyebrow">{children}</span> }

export default function Page() {
  return <main className="inferago-page">
    <header className="inferago-header">
      <a className="inferago-brand" href="#top"><Logo /><span>CyberSlayer<span className="brand-muted">Corpz</span></span></a>
      <nav className="inferago-nav" aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <a className="start-button" href="#contact">Start a project <ArrowUpRight size={15}/></a><button className="mobile-nav-button" aria-label="Open navigation"><Menu size={20}/></button>
    </header>

    <section id="top" className="inferago-hero">
      <div className="hero-grid-texture" />
      <div className="hero-inner"><Eyebrow>CYBERSLAYERCORPZ · DIGITAL STUDIO</Eyebrow><h1>We build <span className="hero-blue">digital</span> products<br className="desktop-break" /> that move businesses forward.</h1><p>Websites, catalogs, and custom digital systems designed and built to help growing businesses get found, trusted, and chosen.</p><div className="hero-buttons"><a className="start-button" href="#contact">Start a project <ArrowUpRight size={15}/></a><a className="outline-button" href="#work">View our work <ArrowUpRight size={15}/></a></div></div>
      <div className="hero-scroll">Scroll <span>↓</span></div>
      <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
    </section>

    <div className="service-marquee" aria-label="Services"><span>Websites</span><i>·</i><span>Digital products</span><i>·</i><span>Custom software</span><i>·</i><span>Marketing</span><i>·</i><span>SEO</span><i>·</i><span>AI integration</span></div>

    <section id="about" className="inferago-section intro-section"><div className="section-kicker">BUILD · GROW · SCALE</div><p className="intro-copy">We combine design, engineering, and digital strategy to help businesses create better digital experiences and stronger digital operations.</p><div className="intro-cards">{services.map(([num, title, text]) => <article key={num} className="intro-card"><div className="intro-card-top"><span>{num}</span><Layers3 size={20}/></div><h3>{title}</h3><p>{text}</p><span className="card-link">Explore capability <ArrowUpRight size={14}/></span></article>)}</div></section>

    <section id="work" className="inferago-section work-section"><div className="section-head"><div><Eyebrow>PORTFOLIO</Eyebrow><h2>Selected<span>work.</span></h2></div><p>A look at what we have built for ambitious local businesses.</p><a className="text-arrow" href="#contact">Start a project <ArrowUpRight size={15}/></a></div><div className="work-grid">{work.map((item) => <a className="work-card" href={item.href} target="_blank" rel="noreferrer" key={item.name}><div className={`work-preview ${item.tone}`}><span>{item.domain}</span><div className="preview-art"><div className="preview-line"/><div className="preview-circle"/></div></div><div className="work-meta"><h3>{item.name}</h3><p>{item.detail}</p><ArrowUpRight size={18}/></div></a>)}</div></section>

    <section id="services" className="inferago-section capabilities-section"><div className="section-head"><div><Eyebrow>WHAT WE DO</Eyebrow><h2>Technology built around<span> your business.</span></h2></div><a className="text-arrow" href="#contact">All services <ArrowUpRight size={15}/></a></div><div className="capability-grid"><article><Code2 size={22}/><Eyebrow>01 · BUILD</Eyebrow><h3>Web & software development</h3><p>Websites, apps, and custom software engineered to be fast, resilient, and easy to evolve.</p></article><article><Search size={22}/><Eyebrow>02 · GROW</Eyebrow><h3>Marketing & SEO</h3><p>Search-ready foundations and focused campaigns that turn visibility into useful traffic and enquiries.</p></article><article><Workflow size={22}/><Eyebrow>03 · AUTOMATE</Eyebrow><h3>AI & workflows</h3><p>Practical automation that gives your team more time for the work only humans can do.</p></article></div></section>

    <section id="process" className="inferago-section process-section"><div className="section-head"><div><Eyebrow>OUR PROCESS</Eyebrow><h2>Simple process.<br /><span>Serious results.</span></h2></div><p>Clarity from first conversation to final handover. No unnecessary layers between the brief and the launch.</p></div><div className="process-rows"><div><strong>01</strong><h3>Discover</h3><p>We understand the business, audience, and outcome before choosing a direction.</p></div><div><strong>02</strong><h3>Design</h3><p>We turn the strategy into a clear, polished experience your customers can use.</p></div><div><strong>03</strong><h3>Deliver</h3><p>We build, test, launch, and give your team everything it needs to move forward.</p></div></div></section>

    <section id="pricing" className="inferago-section pricing-section"><div><Eyebrow>PRICING</Eyebrow><h2>One clear price.<br /><span>Zero surprises.</span></h2><p>Everything a growing business needs to look credible online and make it easy for customers to enquire.</p></div><div className="price-panel"><div className="price-panel-top"><span>Launch package</span><Sparkles size={18}/></div><div className="price-value">₹7,000 <small>total</small></div><p>₹3,500 advance to reserve your slot.</p><div className="price-list">{["Custom mobile-first layout", "One-year domain and hosting", "SSL security and WhatsApp button", "48-hour delivery"].map((item) => <span key={item}><Check size={16}/>{item}</span>)}</div><a className="light-button" href="#contact">Reserve your slot <ArrowUpRight size={15}/></a></div></section>

    <section className="inferago-section faq-section"><div><Eyebrow>FAQ</Eyebrow><h2>Good to<br /><span>know.</span></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18}/></summary><p>{answer}</p></details>)}</div></section>

    <section id="contact" className="inferago-section contact-section"><div><Eyebrow>START A PROJECT</Eyebrow><h2>Let&apos;s make<br /><span>something useful.</span></h2><p>Tell us where you are today and what you want to improve. We will reply with a clear next step.</p><a className="text-arrow" href="mailto:hello@cyberslayercorpz.dev">hello@cyberslayercorpz.dev <ArrowUpRight size={15}/></a></div><form className="contact-form" action="https://api.web3forms.com/submit" method="POST"><input type="hidden" name="access_key" value="865e56af-935b-4a9e-a6e5-ae7bad6ce9c1"/><input type="hidden" name="subject" value="New CyberSlayerCorpz inquiry"/><label>Name<input required name="name" placeholder="Your name" /></label><label>WhatsApp / phone<input required name="phone" placeholder="+91 00000 00000" /></label><label>Business name<input required name="business" placeholder="Your business" /></label><label>Project details<textarea required name="message" rows={5} placeholder="What are you hoping to build?" /></label><button className="light-button" type="submit">Send enquiry <ArrowUpRight size={15}/></button></form></section>

    <footer className="inferago-footer"><a className="inferago-brand" href="#top"><Logo /><span>CyberSlayer<span className="brand-muted">Corpz</span></span></a><span>© 2026 CyberSlayerCorpz</span><nav><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></nav></footer>
  </main>
}
