import { ArrowUpRight } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#111111] px-6 py-10 text-white sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="inline-block">
            <span className="font-serif text-2xl tracking-wide text-[#C8A45D]">
              Sanaaz Catering
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-white/50">
              Demo Concept
            </span>
          </a>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#C8A45D]"
          >
            Back to top
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs leading-6 text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Website concept created for demonstration purposes only.
          </p>
          <p>© {new Date().getFullYear()} Sanaaz Catering — Demo</p>
        </div>

        <p className="mt-3 text-xs leading-6 text-white/40">
          Not the official business website. Business details, menu prices,
          images, and contact information require verification and approval.
        </p>
      </div>
    </footer>
  )
}

export default Footer