import { useState } from 'react'
import {
  ArrowUpRight,
  Phone,
  MessageCircle,
  Camera,
  MapPin,
} from 'lucide-react'

function Contact() {
  const [eventType, setEventType] = useState('Wedding')
  const [eventDate, setEventDate] = useState('')
  const [guestCount, setGuestCount] = useState('')
  const [menuPreference, setMenuPreference] = useState('Both')
  const [eventLocation, setEventLocation] = useState('')
  const [extraRequirements, setExtraRequirements] = useState('')

  const DEMO_WHATSAPP_NUMBER = '917548872502'

  function handleSubmit(event) {
    event.preventDefault()

    const message = `Hello! I would like to enquire about catering.

Event type: ${eventType}
Event date: ${eventDate}
Expected guests: ${guestCount}
Menu preference: ${menuPreference}
Event location: ${eventLocation.trim() || 'Not specified'}
Additional requirements: ${extraRequirements.trim() || 'None provided'}

I visited your catering demo website and would like to discuss the details.`

    const whatsappUrl = `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="contact"
      className="bg-[#F7F2E8] px-6 py-20 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7735]">
              Let’s Plan Something Special
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#111111] sm:text-6xl">
              Your Occasion,
              <span className="mt-2 block italic text-[#9A7735]">
                Our Inspiration.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#655F55] sm:text-base">
              Planning a wedding, birthday, engagement, or family gathering?
              Share your requirements using the inquiry form, and prepare a
              message to discuss your event on WhatsApp.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#E9DFC9] text-[#9A7735]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Demo Contact
                  </p>
                  <p className="mt-1 text-sm text-[#655F55]">
                    75488 72502
                  </p>
                  <p className="mt-1 text-xs text-[#82796B]">
                    Demo contact detail — verify before publishing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#E9DFC9] text-[#9A7735]">
                  <Camera size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/sanaazcatering/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-sm text-[#655F55] transition-colors hover:text-[#9A7735]"
                  >
                    @sanaazcatering
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#E9DFC9] text-[#9A7735]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">
                    Event Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#655F55]">
                    Location and service area to be confirmed with the business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] p-8 text-white sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              Start a Conversation
            </p>

            <h3 className="mt-5 font-serif text-3xl leading-snug sm:text-4xl">
              Tell us about your
              <span className="block italic text-[#C8A45D]">
                special day.
              </span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Share a few details to prepare your catering inquiry.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="eventType"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Event Type *
                </label>
                <select
                  id="eventType"
                  value={eventType}
                  onChange={(event) => setEventType(event.target.value)}
                  required
                  className="w-full border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none focus:border-[#C8A45D]"
                >
                  <option>Wedding</option>
                  <option>Engagement</option>
                  <option>Reception</option>
                  <option>Birthday</option>
                  <option>Corporate Event</option>
                  <option>Family Gathering</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="eventDate"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Event Date *
                </label>
                <input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(event) => setEventDate(event.target.value)}
                  min={new Date().toLocaleDateString('en-CA')}
                  required
                  className="w-full border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none focus:border-[#C8A45D]"
                />
              </div>

              <div>
                <label
                  htmlFor="guestCount"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Expected Number of Guests *
                </label>
                <input
                  id="guestCount"
                  type="number"
                  min="1"
                  max="100000"
                  step="1"
                  value={guestCount}
                  onChange={(event) => setGuestCount(event.target.value)}
                  placeholder="e.g. 200"
                  required
                  className="w-full border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D]"
                />
              </div>

              <div>
                <label
                  htmlFor="menuPreference"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Menu Preference *
                </label>
                <select
                  id="menuPreference"
                  value={menuPreference}
                  onChange={(event) => setMenuPreference(event.target.value)}
                  required
                  className="w-full border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none focus:border-[#C8A45D]"
                >
                  <option>Vegetarian</option>
                  <option>Non-Vegetarian</option>
                  <option>Both</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="eventLocation"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Event Location <span className="text-white/40">(Optional)</span>
                </label>
                <input
                  id="eventLocation"
                  type="text"
                  value={eventLocation}
                  onChange={(event) => setEventLocation(event.target.value)}
                  maxLength={150}
                  placeholder="City or event venue"
                  className="w-full border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D]"
                />
              </div>

              <div>
                <label
                  htmlFor="extraRequirements"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Additional Requirements{' '}
                  <span className="text-white/40">(Optional)</span>
                </label>
                <textarea
                  id="extraRequirements"
                  value={extraRequirements}
                  onChange={(event) =>
                    setExtraRequirements(event.target.value)
                  }
                  maxLength={1000}
                  rows={1}
                  placeholder="Any special requirements?"
                  className="w-full resize-y border border-white/20 bg-[#1B1B1B] px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#C8A45D]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-[#C8A45D] px-6 py-4 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#D8B977] sm:col-span-2"
              >
                <MessageCircle size={18} />
                WhatsApp Inquiry
                <ArrowUpRight size={16} />
              </button>

              <p className="text-xs leading-6 text-white/40 sm:col-span-2">
                Demo only. Your details are added to a WhatsApp message; this
                website does not store or automatically send your inquiry.
              </p>
            </form>

            <a
              href="https://www.instagram.com/sanaazcatering/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Visit Instagram
              <ArrowUpRight size={16} />
            </a>

            <p className="mt-6 text-xs leading-6 text-white/40">
              This is a demonstration website. Contact details, menu prices,
              and business information must be verified before public launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact