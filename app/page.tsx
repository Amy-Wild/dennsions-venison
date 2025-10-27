'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-olive via-brand-olive to-[#4a4a38] text-brand-cream overflow-hidden"
        >
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
                From the hills<br />to your plate.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl mb-6 max-w-3xl mx-auto font-light leading-relaxed opacity-90"
            >
              Founded by Lee Dennison, built on honesty, respect for the countryside, and the belief that everyone deserves access to good, natural food.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-12 italic opacity-75 font-light"
            >
              "I believe in feeding people real food, responsibly sourced, and giving back to the land that provides it."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-brand-cream text-brand-olive px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white"
              >
                Get in Touch
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center justify-center border-2 border-brand-cream text-brand-cream px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-brand-cream/10 hover:scale-105 backdrop-blur-sm"
              >
                Our Venison
              </Link>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm"
            >
              <Link href="/about" className="hover:opacity-70 transition-opacity">
                🌲 Our Story
              </Link>
              <Link href="/services" className="hover:opacity-70 transition-opacity">
                🎯 Deer Management
              </Link>
              <Link href="/products" className="hover:opacity-70 transition-opacity">
                🥩 Wild Venison
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <Link href="/about">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-brand-cream/40 rounded-full flex justify-center pt-2 cursor-pointer hover:border-brand-cream/70 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-brand-cream/60 rounded-full"></div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.section>

        {/* Quick Overview Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-olive mb-6">
                🦌 Wild • Honest • Fair
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  emoji: "🌲",
                  title: "About Us",
                  desc: "Over 10 years' experience in ethical deer management across the UK",
                  link: "/about"
                },
                {
                  emoji: "🥩",
                  title: "Our Venison",
                  desc: "Wild, locally sourced, and processed to the highest food-hygiene standards",
                  link: "/products"
                },
                {
                  emoji: "🎯",
                  title: "Services",
                  desc: "Professional deer management for estates, farms, and woodland owners",
                  link: "/services"
                }
              ].map((card, i) => (
                <Link
                  key={i}
                  href={card.link}
                  className="group block bg-white p-10 rounded-3xl shadow-[0_20px_60px_-20px_rgba(91,91,71,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(91,91,71,0.35)] border border-brand-olive/10 hover:border-brand-olive/30 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {card.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-olive mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center text-brand-olive font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
