'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-gray pt-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative min-h-screen flex items-center justify-center text-brand-cream overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/WhatsApp Image 2025-10-22 at 17.58.00_dc48d23d.jpg')" }}
          ></div>

          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-olive/80 via-brand-olive/75 to-black/60"></div>

          {/* Vignette Effect - darker edges, lighter center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,rgba(0,0,0,0.5)_65%,rgba(0,0,0,0.8)_100%)]"></div>

          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Zz4=')]"></div>

          <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mb-8 mt-16 md:mt-20"
            >
              <div className="relative inline-block group">
                {/* Layered glow effects */}
                <div className="absolute inset-0 rounded-full bg-brand-cream/20 blur-3xl scale-110 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute inset-0 rounded-full bg-brand-cream/10 blur-2xl scale-125 opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>

                {/* Circular platform with olive background - smaller size */}
                <div className="relative bg-brand-olive rounded-full p-4 md:p-5 lg:p-6 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.5),0_10px_40px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_40px_110px_-20px_rgba(0,0,0,0.6),0_15px_50px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 border-2 border-brand-cream/20 ring-1 ring-brand-cream/10 ring-offset-2 ring-offset-transparent">
                  <img
                    src="/Venison.png"
                    alt="Dennison's Venison Logo"
                    className="h-24 md:h-28 lg:h-32 w-24 md:w-28 lg:w-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
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
                className="font-serif group inline-flex items-center justify-center bg-brand-cream text-brand-olive px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white"
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
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 flex flex-wrap justify-center gap-6"
            >
              <Link
                href="/about"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-brand-cream/20 rounded-full hover:bg-white/20 hover:border-brand-cream/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L10 2L8 4M12 4L14 2L16 4M12 4V7M12 7C10.5 7.5 9 8.5 9 10.5C9 13 10.5 14.5 12 16C13.5 14.5 15 13 15 10.5C15 8.5 13.5 7.5 12 7M7 11L5 12M17 11L19 12M12 16V20M10 18L8 20M14 18L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-brand-cream font-medium">Our Story</span>
              </Link>

              <Link
                href="/services"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-brand-cream/20 rounded-full hover:bg-white/20 hover:border-brand-cream/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
                  <path d="M12 4V7M12 17V20M4 12H7M17 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-brand-cream font-medium">Deer Management</span>
              </Link>

              <Link
                href="/products"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-brand-cream/20 rounded-full hover:bg-white/20 hover:border-brand-cream/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" y="6" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 10H17M7 14H17" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                  <circle cx="12" cy="8" r="0.5" fill="currentColor"/>
                  <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
                  <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
                </svg>
                <span className="text-brand-cream font-medium">Wild Venison</span>
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

        {/* Image Showcase Section */}
        <section className="py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(91,91,71,0.4)] group"
              >
                <img
                  src="/scotland1.jpg"
                  alt="Wild venison from Dennison's Venison"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl font-bold">From the Scottish Highlands</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(91,91,71,0.4)] group"
              >
                <img
                  src="/WhatsApp Image 2025-10-19 at 10.39.24_5ad32a1d.jpg"
                  alt="Ethical deer management by Lee Dennison"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-olive/80 to-transparent flex items-end p-8">
                  <p className="text-white text-2xl font-bold">Ethical & Sustainable</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-24 bg-brand-cream">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-olive mb-6">
                Wild • Honest • Fair
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Deer silhouette */}
                      <path d="M50 20 L45 15 L42 20 M50 20 L55 15 L58 20 M50 20 L50 30 M50 30 C45 32 40 35 40 42 C40 50 43 55 50 60 C57 55 60 50 60 42 C60 35 55 32 50 30 M35 45 L30 50 M65 45 L70 50 M50 60 L50 75 M45 70 L40 80 M55 70 L60 80"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "About Us",
                  desc: "Over 10 years' experience in ethical deer management across the UK",
                  link: "/about"
                },
                {
                  icon: (
                    <img src="/Venison.png" alt="Deer logo" className="w-full h-full object-contain" />
                  ),
                  title: "Our Venison",
                  desc: "Wild, locally sourced, and processed to the highest food-hygiene standards",
                  link: "/products"
                },
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Target/management icon */}
                      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="50" cy="50" r="3" fill="currentColor"/>
                      <path d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: "Services",
                  desc: "Professional deer management for estates, farms, and woodland owners",
                  link: "/services"
                }
              ].map((card, i) => (
                <Link
                  key={i}
                  href={card.link}
                  className="group block bg-brand-gray p-10 rounded-3xl shadow-[0_20px_60px_-20px_rgba(91,91,71,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(91,91,71,0.35)] border border-brand-olive/10 hover:border-brand-olive/30 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Elegant line icon */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      {/* Background circle */}
                      <div className="w-28 h-28 rounded-full bg-[#5b5b47] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(91,91,71,0.3)] group-hover:shadow-[0_15px_40px_-10px_rgba(91,91,71,0.4)] transition-all duration-500 group-hover:scale-105 p-4">
                        {/* Icon */}
                        <div className="w-full h-full text-[#fffff0] group-hover:scale-110 transition-transform duration-500">
                          {card.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-brand-olive mb-4">
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
