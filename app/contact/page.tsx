'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

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

export default function Contact() {
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
                <span className="font-serif text-7xl">📞</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold text-brand-olive mb-6">
                Get in Touch
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-serif text-2xl md:text-3xl text-gray-700 max-w-3xl mx-auto font-light">
                Let's discuss your venison or deer management needs
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-brand-cream to-white p-12 md:p-16 lg:p-20 rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(91,91,71,0.3)] border border-brand-olive/10"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-olive mb-12 text-center">
                Lee Dennison – Founder, Dennison's Venison
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: "📍",
                    label: "Address:",
                    value: "Bradshaw Trees Farm, Mellor, Stockport, SK6 5NF",
                    link: null
                  },
                  {
                    icon: "📞",
                    label: "Phone:",
                    value: "07774 710025",
                    link: "tel:07774710025"
                  },
                  {
                    icon: "✉️",
                    label: "Email:",
                    value: "dennisonsvenison@gmail.com",
                    link: "mailto:dennisonsvenison@gmail.com"
                  },
                  {
                    icon: "🌐",
                    label: "Web:",
                    value: "www.dennisonsvenison.co.uk",
                    link: null
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl hover:bg-white/70 transition-colors duration-300"
                  >
                    <span className="font-serif text-4xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1">
                      <span className="block font-semibold text-brand-olive text-lg mb-2">{item.label}</span>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-serif block text-gray-800 hover:text-brand-olive transition-colors text-xl md:text-2xl underline decoration-brand-olive/30 hover:decoration-brand-olive"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-serif block text-gray-800 text-xl md:text-2xl">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 text-center"
              >
                <div className="inline-block bg-brand-olive text-brand-cream px-10 py-6 rounded-[2rem]">
                  <p className="font-serif text-3xl md:text-4xl font-bold">🦌 Wild • Honest • Fair</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Coverage Map Info */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-8">
                Service Areas
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 mb-6 font-light max-w-4xl mx-auto">
                Providing professional deer management services across:
              </p>
              <p className="text-lg md:text-xl text-brand-olive font-semibold leading-relaxed max-w-5xl mx-auto">
                Scottish Borders • Northumberland • Cumbria • Derbyshire • Staffordshire • Shropshire • Herefordshire • Worcestershire • Gloucestershire • Northamptonshire
              </p>
              <p className="text-lg text-gray-600 mt-8 italic">
                Not in the listed areas? Get in touch – we may be able to help or provide recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🌲",
                  title: "Deer Management",
                  desc: "Professional, ethical deer population control and habitat protection"
                },
                {
                  emoji: "🥩",
                  title: "Wild Venison",
                  desc: "Premium wild venison products, fully traceable from hill to plate"
                },
                {
                  emoji: "✓",
                  title: "Fully Qualified",
                  desc: "DSC1, DSC2, NatureScot approved with 10+ years experience"
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center p-8 bg-brand-cream rounded-2xl border border-brand-olive/10 hover:border-brand-olive/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(91,91,71,0.25)] hover:-translate-y-2"
                >
                  <div className="font-serif text-6xl mb-6">{card.emoji}</div>
                  <h3 className="font-serif text-2xl font-bold text-brand-olive mb-4">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
