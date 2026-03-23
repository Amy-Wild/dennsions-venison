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
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-forest to-brand-forest/80 flex items-center justify-center shadow-[0_20px_60px_-20px_rgba(45,59,45,0.4)]">
                  <svg className="w-16 h-16 text-brand-copper" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-bold text-brand-charcoal mb-6">
                Get in Touch
              </motion.h1>
              <motion.p variants={fadeInUp} className="font-serif text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
                Discuss your venison or deer management needs
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
              className="bg-gradient-to-br from-brand-forest to-brand-forest/90 p-12 md:p-16 lg:p-20 rounded-[2.5rem] shadow-[0_25px_100px_-20px_rgba(45,59,45,0.3)]"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-cream mb-12 text-center">
                Lee Dennison - Founder, Dennisons Venison
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Address:",
                    value: "Bradshaw Trees Farm, Mellor, Stockport, SK6 5NF",
                    link: null
                  },
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Phone:",
                    value: "07774 710025",
                    link: "tel:07774710025"
                  },
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Email:",
                    value: "dennisonsvenison@gmail.com",
                    link: "mailto:dennisonsvenison@gmail.com"
                  },
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 3C9.5 3 8 6 8 12C8 18 9.5 21 12 21M12 3C14.5 3 16 6 16 12C16 18 14.5 21 12 21M12 3V21M3 12H21M4.5 7.5H19.5M4.5 16.5H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    label: "Web:",
                    value: "www.dennisonsvenison.co.uk",
                    link: null
                  },
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ),
                    label: "Facebook:",
                    value: "Dennisons Venison",
                    link: "https://www.facebook.com/share/18NwAMn6Eu/"
                  },
                  {
                    icon: (
                      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ),
                    label: "Instagram:",
                    value: "@dennisons.venison",
                    link: "https://www.instagram.com/dennisons.venison?utm_source=qr&igsh=MXEyemU2eW9xb2gxdQ=="
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl hover:bg-brand-cream/10 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-copper flex items-center justify-center flex-shrink-0 text-brand-cream">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="block font-semibold text-brand-copper text-lg mb-2">{item.label}</span>
                      {item.link ? (
                        <a
                          href={item.link}
                          {...(item.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="font-serif block text-brand-cream hover:text-brand-copper transition-colors text-xl md:text-2xl underline decoration-brand-copper/30 hover:decoration-brand-copper"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-serif block text-brand-cream text-xl md:text-2xl">{item.value}</span>
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
                <p className="font-serif text-3xl md:text-4xl font-bold text-brand-cream tracking-wide">Wild - Honest - Fair</p>
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal mb-8">
                Service Areas
              </h2>
              <p className="font-serif text-xl md:text-2xl text-gray-700 mb-6 font-light max-w-4xl mx-auto">
                Providing professional deer management services across:
              </p>
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-8">
                {["Scottish Borders", "Northumberland", "Cumbria", "Derbyshire", "Staffordshire", "Shropshire", "Herefordshire", "Worcestershire", "Gloucestershire", "Northamptonshire"].map((region, i) => (
                  <span key={i} className="px-4 py-2 bg-brand-sage text-brand-cream rounded-full text-sm font-medium">
                    {region}
                  </span>
                ))}
              </div>
              <p className="text-lg text-gray-600 mt-8 italic">
                Not in the listed areas? Get in touch – we may be able to help or provide recommendations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 md:py-24 bg-brand-stone">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Deer Management",
                  desc: "Professional, ethical deer population control and habitat protection",
                  image: "/scottish scene 3.jpeg",
                  link: "/services"
                },
                {
                  title: "Wild Venison",
                  desc: "Premium wild venison products, fully traceable from hill to plate",
                  image: "/Venison Meat - hero image",
                  link: "/products"
                },
                {
                  title: "Fully Qualified",
                  desc: "DSC1, DSC2, NatureScot approved with 10+ years experience",
                  image: "/lee with deer.jpeg",
                  link: "/about"
                }
              ].map((card, i) => (
                <motion.a
                  key={i}
                  href={card.link}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group block rounded-3xl overflow-hidden shadow-[0_20px_60px_-20px_rgba(45,59,45,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(45,59,45,0.35)] border border-brand-forest/10 hover:border-brand-copper/30 transition-all duration-500 hover:-translate-y-2 bg-brand-stone"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-bottom group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{card.desc}</p>
                    <div className="mt-4 inline-flex items-center text-brand-copper font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn more →
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
