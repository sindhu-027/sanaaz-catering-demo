import { ArrowUpRight, Check } from 'lucide-react'

const highlights = [
  'Wedding catering',
  'Vegetarian and non-vegetarian menus',
  'Biryani-focused menu options',
  'Customizable catering packages',
]

function About() {
  return (
    <section id="about" className="bg-[#F7F2E8] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85"
            alt="An elegant catered dining table"
            loading="lazy"
            className="h-[360px] w-full object-cover sm:h-[480px]"
          />

          <div className="absolute -bottom-5 right-4 border border-[#C8A45D] bg-[#111111] px-5 py-4 text-center sm:right-8">
            <p className="font-serif text-2xl text-[#C8A45D]">Demo</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">
              Concept Preview
            </p>
          </div>
        </div>

        <div className="pt-3 lg:pt-0">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7735]">
            <span className="h-px w-8 bg-[#C8A45D]" />
            About the Catering Concept
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
            Thoughtful Menus.
            <span className="mt-2 block italic text-[#9A7735]">
              Memorable Gatherings.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#555047]">
            This website concept presents Sanaaz Catering Company as a catering
            service for weddings, engagements, birthdays, and other special
            occasions, based on the business profile information provided.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#6D675E]">
            Explore vegetarian and non-vegetarian menu ideas, discover catering
            options, and consider a menu tailored to your event requirements.
            All business details in this preview remain subject to confirmation
            by the owner.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={18} className="mt-1 shrink-0 text-[#9A7735]" />
                <span className="text-sm leading-6 text-[#292720]">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#services"
            className="mt-9 inline-flex items-center gap-2 border-b border-[#9A7735] pb-2 text-sm font-semibold text-[#111111] transition-colors hover:text-[#9A7735]"
          >
            Discover Catering Services
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-5 text-xs leading-5 text-[#777066]">
            Concept copy only — final wording requires owner approval.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About