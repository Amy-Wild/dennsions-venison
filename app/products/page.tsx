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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Wild Venison Products',
            description: 'Premium wild venison burgers, sausages, and gourmet sausage rolls. Ethically sourced, fully traceable, processed to highest hygiene standards.',
            brand: {
              '@type': 'Organization',
              name: "Dennisons Venison",
            },
            offers: {
              '@type': 'AggregateOffer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'GBP',
              lowPrice: '5.00',
              highPrice: '25.00',
              seller: {
                '@type': 'Organization',
                name: "Dennisons Venison",
              },
            },
            category: 'Wild Venison',
            image: 'https://www.dennisonsvenison.co.uk/og-image-products.jpg',
          }),
        }}
      />
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
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold text-brand-charcoal mb-6">
                Our Venison
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-serif text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Wild, locally sourced, and processed with full food-hygiene standards
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-gradient-to-br from-brand-cream to-white p-12 md:p-16 rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(45,59,45,0.3)] border border-brand-forest/10">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-8">
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
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.4)] group"
              >
                <img
                  src="/Raw butcher pack - burgers and sausage.jpeg"
                  alt="Raw wild venison burgers and sausages"
                  loading="lazy"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent flex items-end p-10">
                  <div>
                    <p className="font-serif text-white text-3xl font-bold mb-2">Wild Venison</p>
                    <p className="text-brand-cream text-lg">Ethically sourced from the UK countryside</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.4)] group"
              >
                <img
                  src="/venison stew - hero"
                  alt="Venison stew"
                  loading="lazy"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/40 to-transparent flex items-end p-10">
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
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Wild & Natural",
                  desc: "No farming, no hormones – just wild deer from the UK countryside"
                },
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Full Hygiene Standards",
                  desc: "Processed to the highest food safety and hygiene regulations"
                },
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Fair Pricing",
                  desc: "Quality, sustainable meat that's accessible to everyone"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-8 bg-brand-forest rounded-2xl border border-brand-forest/20 hover:border-brand-copper/30 transition-all duration-300 hover:shadow-[0_20px_60px_-20px_rgba(45,59,45,0.25)] hover:-translate-y-2"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-copper flex items-center justify-center text-brand-cream shadow-[0_10px_30px_-10px_rgba(193,127,62,0.3)]">
                      <div className="w-8 h-8">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-cream mb-3">{feature.title}</h3>
                  <p className="text-brand-cream/80 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Interested in our venison?
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 mb-10 font-light">
                Get in touch to discuss availability and orders
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
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
