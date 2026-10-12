import { ArrowDown, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] items-center overflow-hidden bg-[#111111] sm:min-h-[720px]"
    >
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
        alt="Elegant dining setup for a special occasion"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-[#111111]/80 to-[#111111]/25" />
      <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-[#111111]/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C8A45D]" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#C8A45D]">
              A Catering Website Concept
            </p>
          </div>

          <h1 className="font-serif text-5xl leading-[1.12] text-[#F7F2E8] sm:text-6xl lg:text-7xl">
            Exceptional Catering
            <span className="mt-2 block italic text-[#C8A45D]">
              for Your Special Moments
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
            Explore a premium website concept for weddings, engagements,
            birthdays, and memorable gatherings.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 bg-[#C8A45D] px-7 py-4 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#dfc184]"
            >
              Explore Our Menu
              <ArrowRight size={17} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-white/40 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Discuss Your Event
              <ArrowRight size={17} />
            </a>
          </div>

          <p className="mt-8 text-xs leading-5 text-white/50">
            Concept preview only. Menu details, pricing, imagery, and business
            information require owner approval.
          </p>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to learn about the catering concept"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-[#C8A45D] transition-transform hover:translate-y-1 sm:block"
      >
        <ArrowDown size={23} />
      </a>
    </section>
  )
}

export default Hero