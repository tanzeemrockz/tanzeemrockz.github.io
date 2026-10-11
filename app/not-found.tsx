import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="inferago-page not-found-page" id="top">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-orange" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-blue" aria-hidden="true" />
      <header className="inferago-header">
        <Link href="/" className="inferago-brand">
          <span className="brand-mark" aria-hidden="true">⌬</span>
          <span>CyberSlayerCorpz</span>
        </Link>
        <nav className="inferago-nav" aria-label="Primary navigation">
          <Link href="/#about">About</Link>
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="start-button" href="/#contact">
          Start a project <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </header>

      <section className="not-found-hero" aria-labelledby="not-found-title">
        <div className="hero-grid-texture" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="not-found-content">
          <span className="not-found-code">404 / ROUTE NOT FOUND</span>
          <h1 id="not-found-title">This page took a <span>wrong turn.</span></h1>
          <p>The page you&apos;re looking for moved, disappeared, or was never shipped.</p>
          <Link className="not-found-link" href="/">
            <ArrowLeft size={15} aria-hidden="true" /> Back to the homepage
          </Link>
        </div>
      </section>

      <footer className="inferago-footer">
        <span>CyberSlayerCorpz - Indie Software Studio</span>
        <span>© {new Date().getFullYear()} CyberSlayerCorpz</span>
      </footer>
    </main>
  )
}
