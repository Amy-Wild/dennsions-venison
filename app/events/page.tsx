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

export default function OurFood() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-stone pt-20">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-brand-cream overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Venison Meat - hero image')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/80 via-brand-charcoal/60 to-brand-forest/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,rgba(26,26,24,0.4)_65%,rgba(26,26,24,0.7)_100%)]"></div>

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10 py-24">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.h1
                variants={fadeInUp}
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
              >
                Our Food
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl md:text-3xl mb-10 max-w-3xl mx-auto font-light leading-relaxed opacity-90"
              >
                Wild venison  - cooked fresh at your event or packed for your freezer at home
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#events"
                  className="font-serif inline-flex items-center justify-center bg-brand-copper text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
                >
                  Pop-Up Events
                </a>
                <a
                  href="#freezer-packs"
                  className="font-serif inline-flex items-center justify-center border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-brand-cream/10 hover:scale-105 backdrop-blur-sm"
                >
                  Freezer Packs
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Food Photo Showcase */}
        <section className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Wild Venison, Done Properly
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
                From hill to plate  - burgers, sausages, sausage rolls, and more. All wild, all traceable, all ours.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/pie filling - raw"
                  alt="Raw venison pie filling"
                  loading="lazy"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl font-bold font-serif">Wild & Traceable</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-17 at 15.35.25_be617f51.jpg"
                  alt="Dennisons Venison pop-up BBQ stall"
                  loading="lazy"
                  className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl font-bold font-serif">Cooked Fresh for You</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────── */}
        {/* SECTION 1: Pop-Up Events */}
        {/* ──────────────────────────────────────────── */}
        <section id="events" className="py-16 md:py-24 bg-brand-forest text-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-5 py-2 bg-brand-copper/20 border border-brand-copper/40 rounded-full text-brand-copper font-medium text-sm tracking-wide uppercase mb-6">
                Events
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Pop-Up BBQs & Events
              </h2>
              <p className="font-serif text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
                Book Lee's branded gazebo and drum BBQ setup for your next event
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-17 at 15.35.25_be617f51.jpg"
                  alt="Dennisons Venison pop-up BBQ stall"
                  loading="lazy"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                  What You Get
                </h3>
                <ul className="space-y-5">
                  {[
                    "Branded Dennisons Venison gazebo and full BBQ setup",
                    "Drum BBQ cooking fresh venison burgers, sausages & more",
                    "Perfect for private parties, pub gardens & beer festivals",
                    "Farmers' markets, country shows & community events",
                    "Lee runs the stall  - friendly, authentic, and hands-on"
                  ].map((item, i) => (
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
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
              >
                Book a BBQ →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────────────────────────────── */}
        {/* SECTION 2: Freezer Packs */}
        {/* ──────────────────────────────────────────── */}
        <section id="freezer-packs" className="py-16 md:py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-5 py-2 bg-brand-forest/10 border border-brand-forest/20 rounded-full text-brand-forest font-medium text-sm tracking-wide uppercase mb-6">
                Freezer Packs
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Venison Freezer Packs
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 font-light max-w-3xl mx-auto">
                Wild venison packs for home delivery or collection  - premium quality, straight from the hill
              </p>
            </motion.div>

            {/* Product Cards */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {[
                {
                  title: "Venison Burgers",
                  desc: "Handmade wild venison burgers, perfect for the BBQ or grill",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 11H21M3 13H21M5 11C5 7 8 5 12 5C16 5 19 7 19 11M5 13C5 15 6 17 12 17C18 17 19 15 19 13M8 17V19M16 17V19M6 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Venison Sausages",
                  desc: "Traditional recipe venison sausages  - lean, flavourful, versatile",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 8C6 8 8 6 12 6C16 6 18 8 18 8M6 8V16C6 16 8 18 12 18C16 18 18 16 18 16V8M6 8C6 8 8 10 12 10C16 10 18 8 18 8M6 12C6 12 8 14 12 14C16 14 18 12 18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  title: "Sausage Rolls",
                  desc: "Wild venison sausage rolls  - a proper crowd-pleaser",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="8" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 8V16M12 8V16M16 8V16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                    </svg>
                  )
                },
                {
                  title: "Mixed Packs",
                  desc: "A selection of the best  - burgers, sausages, and more in one pack",
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )
                }
              ].map((product, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-brand-stone p-8 rounded-3xl border border-brand-forest/10 hover:border-brand-copper/30 transition-all duration-500 hover:shadow-[0_20px_60px_-20px_rgba(45,59,45,0.25)] hover:-translate-y-2 text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-forest flex items-center justify-center text-brand-copper shadow-[0_10px_30px_-10px_rgba(45,59,45,0.3)]">
                      <div className="w-10 h-10">
                        {product.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{product.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Recipes Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-brand-stone border-2 border-brand-sage/30 p-12 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-20px_rgba(45,59,45,0.2)] mb-16"
            >
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-charcoal mb-6 text-center">
                Venison Recipes
              </h3>
              <p className="text-center text-gray-700 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                Ideas and inspiration for cooking with wild venison
              </p>
              {/* Featured Recipes - large hero images */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {[
                  { title: "Homemade Venison Pie", image: "/pie - eaten", alt: "Homemade venison pie" },
                  { title: "Slow-Cooked Venison Stew", image: "/venison stew - hero", alt: "Slow-cooked venison stew" }
                ].map((recipe, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="relative h-80 md:h-96 rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent flex items-end p-8">
                      <p className="font-serif text-brand-cream text-3xl font-bold">{recipe.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* More Recipes - 4-column grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "McDenni Wraps", image: "/McDenni.jpg", alt: "McDenni venison wraps" },
                  { title: "Venison Fillet", image: "/venison fillet .jpg", alt: "Venison fillet" },
                  { title: "Sausage Rolls", image: "/sauage rolls .jpg", alt: "Venison sausage rolls" },
                  { title: "Venison Ragu", image: "/ragu.jpg", alt: "Venison ragu" }
                ].map((recipe, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative h-64 rounded-2xl overflow-hidden group"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                      <p className="font-serif text-brand-cream text-xl font-bold">{recipe.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-copper text-brand-cream px-12 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
              >
                Order a Freezer Pack →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 md:py-24 bg-brand-charcoal text-brand-cream">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Got an event coming up?
              </h2>
              <p className="font-serif text-xl md:text-2xl mb-10 font-light opacity-90">
                Whether it's a BBQ booking or a freezer pack order, get in touch
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
