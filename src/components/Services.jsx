import { ArrowUpRight, Heart, CakeSlice, Sparkles, Users } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Wedding Catering',
    description:
      'Explore catering concepts for wedding celebrations, with menu options designed around the occasion.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Engagements',
    description:
      'Discover menu ideas for engagement ceremonies and intimate family celebrations.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Birthday Celebrations',
    description:
      'Consider catering options for birthday parties, from family gatherings to larger celebrations.',
    icon: CakeSlice,
  },
  {
    number: '04',
    title: 'Special Gatherings',
    description:
      'Explore flexible menu concepts for other occasions, with choices tailored to your event requirements.',
    icon: Users,
  },
]

function Services() {
  return (
    <section id="services" className="bg-[#111111] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
            <span className="h-px w-8 bg-[#C8A45D]" />
            What We Cater For
            <span className="h-px w-8 bg-[#C8A45D]" />
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#F7F2E8] sm:text-5xl">
            Made for Your
            <span className="mt-2 block italic text-[#C8A45D]">
              Special Occasions
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
            A preview of catering possibilities for celebrations that bring
            people together. Final service availability is subject to owner confirmation.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.number}
                className="group border border-white/10 bg-[#1B1B1B] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8A45D]/60 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#C8A45D]/70">
                    {service.number}
                  </span>

                  <Icon
                    size={25}
                    strokeWidth={1.4}
                    className="text-[#C8A45D] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-10 font-serif text-2xl text-[#F7F2E8]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {service.description}
                </p>

                <a
                  href="#menu"
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] transition-colors hover:text-[#F7F2E8]"
                >
                  Explore Menu
                  <ArrowUpRight size={15} />
                </a>
              </article>
            )
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-white/40">
          Website concept demo — service details have not yet been approved by the business owner.
        </p>
      </div>
    </section>
  )
}

export default Services