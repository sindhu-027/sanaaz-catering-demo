import { ArrowUpRight } from 'lucide-react'

const galleryItems = [
  {
    title: 'Wedding Celebrations',
    category: 'WEDDING CATERING',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Biryani Specials',
    category: 'SIGNATURE FLAVORS',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Beautiful Dining',
    category: 'EVENT EXPERIENCES',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Special Occasions',
    category: 'CELEBRATE TOGETHER',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85',
  },
]

function Gallery() {
  return (
    <section id="gallery" className="bg-[#111111] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              A Visual Feast
            </p>

            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Moments Worth
              <span className="block italic text-[#C8A45D]">
                Celebrating
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            A visual preview of the celebrations, food, and dining experiences
            this catering website concept is designed to showcase.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative overflow-hidden bg-[#292929]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#C8A45D] text-[#111111]">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#C8A45D]">
                {item.category}
              </p>

              <h3 className="mt-2 font-serif text-xl text-white">
                {item.title}
              </h3>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-white/50">
          Demo gallery: these are illustrative stock images, not verified
          photographs of Sanaaz Catering's events or dishes.
        </p>
      </div>
    </section>
  )
}

export default Gallery