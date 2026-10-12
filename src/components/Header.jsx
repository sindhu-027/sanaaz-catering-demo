import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="group flex flex-col" onClick={() => setIsMenuOpen(false)}>
          <span className="font-serif text-xl tracking-wide text-[#C8A45D] sm:text-2xl">
            Sanaaz Catering
          </span>
          <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-white/60">
            Demo Concept
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/75 transition-colors duration-200 hover:text-[#C8A45D]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-[#C8A45D] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] transition-colors hover:bg-[#C8A45D] hover:text-[#111111] lg:inline-flex"
        >
          Discuss Your Event
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded border border-white/20 p-2 text-[#C8A45D] lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-[#111111] px-5 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-white/5 py-3 text-sm text-white/80 transition-colors hover:text-[#C8A45D]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-[#C8A45D] px-4 py-3 text-sm font-semibold text-[#111111]"
          >
            Discuss Your Event
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header