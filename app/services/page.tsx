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

export default function Services() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-stone pt-20">
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brand-cream to-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-brand-forest flex items-center justify-center shadow-[0_20px_60px_-20px_rgba(45,59,45,0.4)] p-6">
                  <img src="/Venison.png" alt="Dennisons Venison Deer Logo" className="w-full h-full object-contain" />
                </div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold text-brand-charcoal mb-6">
                Deer Management Services
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-serif text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Professional deer management for estates, farms, and woodland owners
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 md:py-24 bg-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-brand-cream to-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(45,59,45,0.3)] border border-brand-forest/10 mb-20"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-8 text-center">
                Coverage Across the UK
              </h2>
              <p className="font-serif text-center text-xl md:text-2xl text-gray-800 leading-relaxed font-light mb-6">
                Lee provides professional deer-management services for estates, farms, and woodland owners across:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Scottish Borders", "Northumberland", "Cumbria", "Derbyshire", "Staffordshire", "Shropshire", "Herefordshire", "Worcestershire", "Gloucestershire", "Northamptonshire"].map((region, i) => (
                  <span key={i} className="px-4 py-2 bg-brand-forest text-brand-cream rounded-full text-sm font-medium">
                    {region}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Scotland Landscapes - Where We Work */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] hover:shadow-[0_30px_80px_-20px_rgba(45,59,45,0.4)] transition-all duration-500"
              >
                <img
                  src="/scotland4.jpg"
                  alt="Scottish Highland landscape"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.6)_100%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-brand-cream">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Scottish Borders</h3>
                  <p className="text-base md:text-lg font-light opacity-90">Working across diverse highland terrain</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative h-80 md:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] hover:shadow-[0_30px_80px_-20px_rgba(45,59,45,0.4)] transition-all duration-500"
              >
                <img
                  src="/scotland6.jpg"
                  alt="Scottish countryside"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.6)_100%)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-brand-cream">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Northern England</h3>
                  <p className="text-base md:text-lg font-light opacity-90">Estates, farms, and woodlands</p>
                </div>
              </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-2 gap-10 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-stone border-2 border-brand-sage/30 p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-20px_rgba(45,59,45,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(45,59,45,0.3)] transition-all duration-500"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-10">Services Include:</h3>
                <ul className="space-y-6">
                  {[
                    "Ethical culling and population control",
                    "Habitat and crop protection",
                    "Carcass handling and venison supply",
                    "Reporting and cull-plan data",
                    "Woodland deer-impact assessments"
                  ].map((service, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start text-lg md:text-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-copper flex items-center justify-center flex-shrink-0 mr-4 text-brand-cream">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-800 leading-relaxed">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-brand-charcoal to-brand-charcoal/90 text-brand-cream p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-center shadow-[0_30px_80px_-20px_rgba(26,26,24,0.5)]"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                  Professional Standards
                </h3>
                <p className="font-serif text-xl md:text-2xl leading-relaxed font-light mb-6">
                  All work is carried out professionally, insured, and in line with best-practice deer-management standards.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-brand-copper">
                  DSC1 • DSC2 • Trained Hunter • Quad Trained • NatureScot Fit & Competent Approved (Ref 3999)
                </p>
              </motion.div>
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="mt-24"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal text-center mb-16">
                Why Choose Dennisons Venison?
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "10+ Years Experience",
                    desc: "Over a decade of professional deer management across diverse UK landscapes"
                  },
                  {
                    title: "Fully Qualified",
                    desc: "All certifications including DSC1, DSC2, and NatureScot approval"
                  },
                  {
                    title: "Ethical Approach",
                    desc: "Every decision prioritizes animal welfare, habitat conservation, and sustainability"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="text-center p-8 md:p-10 bg-brand-cream rounded-2xl border border-brand-sage/20 hover:border-brand-copper/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(45,59,45,0.25)] hover:-translate-y-2"
                  >
                    <h4 className="font-serif text-2xl font-bold text-brand-forest mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-forest text-brand-cream">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Need professional deer management?
              </h2>
              <p className="font-serif text-xl md:text-2xl mb-10 font-light opacity-90">
                Get in touch to discuss your requirements
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
              >
                Contact Lee →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
