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

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-gray pt-20">
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brand-cream to-brand-gray">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-[#5b5b47] flex items-center justify-center shadow-[0_20px_60px_-20px_rgba(91,91,71,0.4)] p-6">
                  <img src="/Venison.png" alt="Dennison's Venison Deer Logo" className="w-full h-full object-contain" />
                </div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-brand-olive mb-6">
                About Us
              </motion.h1>
              <motion.div variants={fadeInUp} className="w-24 h-1 bg-brand-olive mx-auto rounded-full"></motion.div>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-olive mb-6">
                  From the hills to your plate
                </h2>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  Every animal is taken ethically, handled with care, and used in full – ensuring nothing goes to waste.
                </p>
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  By keeping prices fair, Lee aims to make wild, sustainable venison accessible to local people during a time when so many are being priced out by a broken system.
                </p>
                <blockquote className="border-l-4 border-brand-olive pl-6 italic text-xl text-gray-700 mt-8">
                  "I believe in feeding people real food, responsibly sourced, and giving back to the land that provides it."
                </blockquote>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-brand-cream to-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_80px_-20px_rgba(91,91,71,0.25)] border border-brand-olive/10 hover:shadow-[0_30px_100px_-20px_rgba(91,91,71,0.35)] transition-all duration-500"
              >
                {/* Lee's Image with circular fade */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-full bg-brand-olive/20 blur-2xl scale-110"></div>

                  {/* Image container with circular mask and gradient fade */}
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-brand-olive/30 ring-offset-4 ring-offset-transparent shadow-[0_20px_60px_-15px_rgba(91,91,71,0.4)]">
                    <img
                      src="/Lee1.jpg"
                      alt="Lee Dennison"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle vignette fade on the circular image */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(91,91,71,0.15)_100%)]"></div>
                  </div>
                </div>

                <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-olive mb-6 text-center">Lee Dennison</h3>
                <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Lee Dennison is a qualified deer manager with over 10 years' experience stalking and managing wild deer across the UK.
                  </p>
                  <p>
                    He's DSC1, DSC2, Trained Hunter, Quad trained, and NatureScot Fit & Competent Approved (Ref 3999).
                  </p>
                  <p>
                    Working from Bradshaw Trees Farm in Mellor, Dennison's Venison supplies traceable, sustainable wild venison direct from the countryside to local customers, restaurants, and friends of the land.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-24"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-brand-olive text-center mb-16">
                What We Stand For
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Respect for Wildlife", subtitle: "& habitat conservation", desc: "Every decision is made with the welfare of the land and its wildlife at heart." },
                  { title: "Full Traceability", subtitle: "From hill to plate", desc: "Know exactly where your venison comes from and how it was handled." },
                  { title: "Honest Prices", subtitle: "For honest food", desc: "Fair pricing that makes quality, sustainable meat accessible to all." },
                  { title: "Responsible Management", subtitle: "For future generations", desc: "Deer management practices that protect ecosystems for the long term." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="group text-center p-8 bg-brand-cream rounded-2xl border border-brand-olive/10 hover:border-brand-olive/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(91,91,71,0.25)] hover:-translate-y-2"
                  >
                    <h4 className="font-serif font-bold text-brand-olive mb-2 text-xl group-hover:scale-105 transition-transform duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-olive text-brand-cream">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to learn more?
              </h2>
              <p className="text-xl md:text-2xl mb-10 font-light opacity-90">
                Discover our wild venison and professional deer management services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-brand-cream text-brand-olive px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white"
                >
                  Our Venison
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-brand-cream/10 hover:scale-105"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
