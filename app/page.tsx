'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'

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

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-stone pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-brand-cream overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/scottish scene.jpeg')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal/75 via-brand-charcoal/55 to-brand-forest/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,rgba(26,26,24,0.4)_70%,rgba(26,26,24,0.7)_100%)]"></div>

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
            <motion.div
              whileInView={{ scale: [0.95, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 mt-16 md:mt-20"
            >
              <div className="relative inline-block group">
                <div className="absolute inset-0 rounded-full bg-brand-copper/20 blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="relative bg-brand-forest rounded-full p-4 md:p-5 lg:p-6 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5)] transition-all duration-500 border-2 border-brand-copper/30">
                  <img
                    src="/Venison.png"
                    alt="Dennisons Venison Logo"
                    className="h-24 md:h-28 lg:h-32 w-24 md:w-28 lg:w-32 rounded-full object-cover mx-auto"
                  />
                </div>
              </div>
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
              From the hills<br />to your plate.
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-6 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
              Founded by Lee Dennison, built on honesty, respect for the countryside, and the belief that everyone deserves access to good, natural food.
            </p>

            <p className="text-lg md:text-xl mb-12 italic opacity-75 font-light">
              "I believe in feeding people real food, responsibly sourced, and giving back to the land that provides it."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="font-serif group inline-flex items-center justify-center bg-brand-copper text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-brand-copper/90"
              >
                Get in Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/products"
                className="font-serif group inline-flex items-center justify-center border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-brand-cream/10 hover:scale-105 backdrop-blur-sm"
              >
                Our Venison
              </Link>
            </div>
          </div>
        </section>

        {/* Photo Showcase - The Land & The Food */}
        <section className="py-20 bg-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {/* Bento-style photo grid */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              {/* Large left - Scotland landscape */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/scotland1.jpg"
                  alt="Scottish Highlands landscape"
                  loading="lazy"
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl md:text-3xl font-bold font-serif">From the Scottish Highlands</p>
                </div>
              </motion.div>

              {/* Right - venison meat */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/Venison Meat - hero image"
                  alt="Wild venison meat"
                  loading="lazy"
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl md:text-2xl font-bold font-serif">Wild Venison</p>
                </div>
              </motion.div>
            </div>

            {/* Second row - 3 equal columns */}
            <div className="grid md:grid-cols-3 gap-5 mb-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/venison stew - hero"
                  alt="Venison stew"
                  loading="lazy"
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl font-bold font-serif">Organic & Delicious</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/lee with deer.jpeg"
                  alt="Lee Dennison with deer"
                  loading="lazy"
                  className="w-full h-[280px] object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl font-bold font-serif">Ethical & Sustainable</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/pie - eaten"
                  alt="Venison pie"
                  loading="lazy"
                  className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl font-bold font-serif">From Field to Your Plate</p>
                </div>
              </motion.div>
            </div>

            {/* Third row - BBQ stall + Scotland */}
            <div className="grid md:grid-cols-3 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-17 at 15.35.25_be617f51.jpg"
                  alt="Dennisons Venison pop-up BBQ stall"
                  loading="lazy"
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl md:text-2xl font-bold font-serif">Pop-Up BBQs</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(45,59,45,0.3)] group"
              >
                <img
                  src="/scottish scene2.jpeg"
                  alt="Scottish countryside"
                  loading="lazy"
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl md:text-3xl font-bold font-serif">Countryside Management</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Do - Cards */}
        <section className="py-20 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
                Wild - Honest - Fair
              </h2>
            </div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                {
                  title: "About Us",
                  desc: "Over 10 years experience in ethical deer management across the UK",
                  link: "/about",
                  image: "/Lee1.jpg"
                },
                {
                  title: "Our Venison",
                  desc: "Wild, locally sourced, and processed to the highest food-hygiene standards",
                  link: "/products",
                  image: "/Butchers pack - fillets haunch"
                },
                {
                  title: "Our Food",
                  desc: "Pop-up BBQs, freezer packs, and venison for your next event",
                  link: "/events",
                  image: "/pie - cut"
                },
                {
                  title: "Shooting Days",
                  desc: "Mentored introduction to shooting for complete beginners",
                  link: "/shooting-days",
                  image: "/hunter - man sunset .jpeg"
                },
                {
                  title: "Services",
                  desc: "Professional deer management for estates, farms, and woodland owners",
                  link: "/services",
                  image: "/scotland4.jpg"
                }
              ].map((card, i) => (
                <Link
                  key={i}
                  href={card.link}
                  className="group block rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(45,59,45,0.35)] border border-brand-forest/10 hover:border-brand-copper/30 transition-all duration-500 hover:-translate-y-2 bg-brand-stone"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {card.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center text-brand-copper font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn more →
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-brand-charcoal text-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="font-serif text-2xl font-bold mb-4">Dennisons Venison</p>
            <p className="text-brand-cream/70 mb-6">Wild - Honest - Fair</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              <Link href="/about" className="text-brand-copper hover:text-brand-copper/80 transition-colors">About</Link>
              <Link href="/products" className="text-brand-copper hover:text-brand-copper/80 transition-colors">Venison</Link>
              <Link href="/events" className="text-brand-copper hover:text-brand-copper/80 transition-colors">Our Food</Link>
              <Link href="/shooting-days" className="text-brand-copper hover:text-brand-copper/80 transition-colors">Shooting Days</Link>
              <Link href="/services" className="text-brand-copper hover:text-brand-copper/80 transition-colors">Services</Link>
              <Link href="/contact" className="text-brand-copper hover:text-brand-copper/80 transition-colors">Contact</Link>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/share/18NwAMn6Eu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-brand-cream/60 hover:text-brand-copper transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dennisons.venison?utm_source=qr&igsh=MXEyemU2eW9xb2gxdQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-cream/60 hover:text-brand-copper transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
