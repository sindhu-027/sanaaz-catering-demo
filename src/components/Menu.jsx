import { ArrowRight, Leaf, Drumstick } from 'lucide-react'

const menus = [
  {
    id: 'vegetarian',
    label: 'Vegetarian Selection',
    title: 'Vegetarian Combos',
    description:
      'A vegetarian menu concept featuring biryani, traditional accompaniments, and sweet treats.',
    icon: Leaf,
    accent: 'Veg',
    combos: [
      {
        name: 'Veg Biryani Combo',
        price: '₹180',
        unit: 'per leaf',
        items: [
          'Veg biryani',
          'Gobi 65',
          'Onion raita',
          'Brinjal gravy',
          'Special bread halwa',
        ],
      },
      {
        name: 'Mushroom Biryani Combo',
        price: '₹220',
        unit: 'per leaf',
        items: [
          'Mushroom biryani',
          'Gobi 65',
          'Onion raita',
          'Brinjal gravy',
          'Special bread halwa',
        ],
      },
    ],
  },
  {
    id: 'non-vegetarian',
    label: 'Non-Vegetarian Selection',
    title: 'Signature Biryani Combos',
    description:
      'A non-vegetarian menu concept featuring chicken or mutton biryani and complementary dishes.',
    icon: Drumstick,
    accent: 'Non-Veg',
    combos: [
      {
        name: 'Chicken Biryani Combo',
        price: '₹275',
        unit: 'per leaf',
        items: [
          'Chicken biryani',
          'Chicken 65',
          'Onion raita',
          'Brinjal gravy',
          'Special bread halwa',
        ],
      },
      {
        name: 'Mutton Biryani Combo',
        price: '₹420',
        unit: 'per leaf',
        items: [
          'Mutton biryani',
          'Chicken 65',
          'Onion raita',
          'Brinjal gravy',
          'Special bread halwa',
        ],
      },
    ],
  },
]

function Menu() {
  return (
    <section id="menu" className="bg-[#F7F2E8] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7735]">
            <span className="h-px w-8 bg-[#C8A45D]" />
            A Taste of the Menu
            <span className="h-px w-8 bg-[#C8A45D]" />
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#111111] sm:text-5xl">
            Catering Menu
            <span className="mt-2 block italic text-[#9A7735]">
              Made for Every Occasion
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#655F55] sm:text-base">
            Explore sample menu combinations based on the information supplied
            for this demo. Final dishes, inclusions, and pricing must be
            confirmed with the business owner.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {menus.map((menu) => {
            const Icon = menu.icon

            return (
              <div
                key={menu.id}
                className="border border-[#D9D0BF] bg-white"
              >
                <div className="bg-[#111111] px-6 py-7 text-white sm:px-8">
                  <div className="flex items-center gap-3">
                    <Icon size={22} className="text-[#C8A45D]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C8A45D]">
                      {menu.label}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl">
                    {menu.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {menu.description}
                  </p>
                </div>

                <div className="space-y-0 px-6 sm:px-8">
                  {menu.combos.map((combo, index) => (
                    <article
                      key={combo.name}
                      className={`py-7 ${
                        index !== menu.combos.length - 1
                          ? 'border-b border-[#E8E1D5]'
                          : ''
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h4 className="font-serif text-xl text-[#111111]">
                          {combo.name}
                        </h4>

                        <div className="text-right">
                          <span className="block text-xl font-semibold text-[#9A7735]">
                            {combo.price}
                          </span>
                          <span className="text-xs text-[#777066]">
                            {combo.unit}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {combo.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-[#5D584F]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A45D]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 border border-[#D8C8A8] bg-[#EFE6D4] p-5 sm:p-6">
          <p className="text-sm font-semibold text-[#5F4A26]">
            Important: Historical demo prices
          </p>
          <p className="mt-2 text-sm leading-6 text-[#655F55]">
            The displayed prices come from a menu dated September 5, 2024.
            They are shown for demonstration only and are not confirmed current
            prices. Menu availability, serving inclusions, minimum order
            requirements, and final rates require confirmation from the owner.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm leading-6 text-[#655F55]">
            Looking for something different? Menu customization can be discussed
            according to your event requirements.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 bg-[#111111] px-7 py-4 text-sm font-semibold text-[#C8A45D] transition-colors hover:bg-[#292929]"
          >
            Discuss Menu Options
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu