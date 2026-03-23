'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function ShootingDays() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-stone pt-20">
        {/* Hero  - Atmospheric dawn shot */}
        <section className="relative min-h-screen flex items-center justify-center text-brand-cream overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hunter - man sunset .jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/90 via-brand-charcoal/75 to-brand-forest/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,rgba(26,26,24,0.5)_65%,rgba(26,26,24,0.8)_100%)]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-block px-5 py-2 bg-brand-copper/20 border border-brand-copper/40 rounded-full text-brand-copper font-medium text-sm tracking-wide uppercase backdrop-blur-sm">
                  Experience Days
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]"
              >
                An Introduction<br />to Shooting
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-90"
              >
                Mentored shooting and stalking experiences for complete beginners  - safe, supported, and set in the Peak District
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="/contact"
                  className="font-serif inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
                >
                  Get in Touch to Book
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-24 bg-brand-forest text-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                What's Included
              </h2>
              <p className="font-serif text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
                Everything you need for a safe, enjoyable introduction to shooting
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8 mb-16"
            >
              {[
                {
                  title: "Safety Briefing",
                  desc: "Comprehensive firearms safety and countryside awareness before anything else. Your safety is the top priority.",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "1-to-1 Mentoring",
                  desc: "Personal guidance from Lee throughout the day. Learn at your own pace with no pressure  - just honest, hands-on teaching.",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 21V18C3 16.3431 4.34315 15 6 15H12C13.6569 15 15 16.3431 15 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M17 15C18.6569 15 20 16.3431 20 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )
                },
                {
                  title: "Target Practice",
                  desc: "Get comfortable with a rifle on the range before heading out. Build confidence with proper technique and marksmanship.",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
                      <path d="M12 4V7M12 17V20M4 12H7M17 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-8 md:p-10 bg-brand-charcoal/40 rounded-2xl border border-brand-cream/10 hover:border-brand-copper/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-copper/20 border border-brand-copper/40 flex items-center justify-center text-brand-copper">
                      <div className="w-10 h-10">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-brand-cream/80 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">
                  Who It's For
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                  These days are designed for complete beginners  - people who are curious about shooting or stalking but have never tried it.
                </p>
                <ul className="space-y-5">
                  {[
                    "No previous experience needed  - we start from scratch",
                    "All equipment and rifles provided",
                    "Perfect as a gift or a unique experience day",
                    "Small groups or 1-to-1 sessions available",
                    "Set in the Peak District countryside"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start text-lg"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-copper flex items-center justify-center flex-shrink-0 mr-4 text-brand-cream mt-0.5">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-800 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/gun in the peaks.jpeg"
                  alt="Rifle in the Peak District"
                  loading="lazy"
                  className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-brand-cream">
                  <p className="font-serif text-2xl font-bold">Peak District</p>
                  <p className="text-lg font-light opacity-90">Where your experience takes place</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Led by Lee */}
        <section className="py-16 md:py-24 bg-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.3)] group order-2 lg:order-1"
              >
                <img
                  src="/mentor.jpeg"
                  alt="Lee Dennison mentoring"
                  loading="lazy"
                  className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center order-1 lg:order-2"
              >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">
                  Led by Lee Dennison
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                  With over 10 years of professional deer management experience, Lee holds both DSC1 and DSC2 qualifications and is NatureScot Fit & Competent approved.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                  He's worked across Scotland and England managing wild deer populations  - and now he's passing on that knowledge to people who want to learn.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["DSC1", "DSC2", "Trained Hunter", "NatureScot Approved", "10+ Years"].map((qual, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-forest text-brand-cream rounded-full text-sm font-medium">
                      {qual}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scotland Landscapes */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Where It Happens
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
                Set against the stunning landscape of the Peak District
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)]"
              >
                <img
                  src="/scotland4.jpg"
                  alt="Peak District landscape"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)]"
              >
                <img
                  src="/scotland6.jpg"
                  alt="Peak District countryside"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 md:py-24 bg-brand-charcoal text-brand-cream">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Interested in a shooting day?
              </h2>
              <p className="font-serif text-xl md:text-2xl mb-4 font-light opacity-90">
                All bookings are by enquiry  - get in touch and we'll find a date that works
              </p>
              <p className="text-lg mb-10 opacity-70">
                Perfect as a gift, a day out, or the start of something new
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
              >
                Get in Touch to Book →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
