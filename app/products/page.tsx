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

export default function Products() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brand-cream to-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4">
                <span className="font-serif text-7xl">🥩</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold text-brand-olive mb-6">
                Our Venison
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-serif text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-light">
                Wild, locally sourced, and processed with full food-hygiene standards
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-gradient-to-br from-brand-cream to-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(91,91,71,0.3)] border border-brand-olive/10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-olive mb-8">
                  From the highlands to your table
                </h2>
                <div className="font-serif space-y-6 text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                  <p>
                    From classic burgers and sausages to handmade sausage rolls with black pudding, Stilton, apple and roasted chestnuts – every recipe celebrates wild, natural flavour.
                  </p>
                  <p>
                    We believe good food shouldn't be a luxury, and everyone deserves the chance to eat healthy, sustainable meat at a fair price.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(91,91,71,0.4)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-17 at 15.35.25_be617f51.jpg"
                  alt="Wild venison from Dennison's Venison"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-brand-olive/40 to-transparent flex items-end p-10">
                  <div>
                    <p className="font-serif text-white text-3xl font-bold mb-2">Premium Quality</p>
                    <p className="text-brand-cream text-lg">Wild venison, ethically sourced</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(91,91,71,0.4)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-19 at 10.39.24_5ad32a1d.jpg"
                  alt="Ethical deer management"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/90 via-brand-olive/40 to-transparent flex items-end p-10">
                  <div>
                    <p className="font-serif text-white text-3xl font-bold mb-2">Fully Traceable</p>
                    <p className="text-brand-cream text-lg">From hill to plate</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8 mb-20"
            >
              {[
                {
                  icon: "✓",
                  title: "Wild & Natural",
                  desc: "No farming, no hormones – just wild deer from the UK countryside"
                },
                {
                  icon: "✓",
                  title: "Full Hygiene Standards",
                  desc: "Processed to the highest food safety and hygiene regulations"
                },
                {
                  icon: "✓",
                  title: "Fair Pricing",
                  desc: "Quality, sustainable meat that's accessible to everyone"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-8 bg-brand-cream rounded-2xl border border-brand-olive/10 hover:border-brand-olive/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(91,91,71,0.25)] hover:-translate-y-2"
                >
                  <div className="font-serif text-4xl text-brand-olive font-bold mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-brand-olive mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-brand-olive text-brand-cream p-16 rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(91,91,71,0.5)]"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-4">
                🦌 Nothing wasted.<br />Everything respected.
              </p>
              <p className="font-serif text-xl md:text-2xl font-light opacity-90">
                Wild • Honest • Fair
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-6">
                Interested in our venison?
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Get in touch to discuss availability and orders
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-olive text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Contact Us →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
