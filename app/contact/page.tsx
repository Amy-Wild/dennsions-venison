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
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-olive to-brand-olive/80 flex items-center justify-center shadow-[0_20px_60px_-20px_rgba(91,91,71,0.4)]">
                  <svg className="w-16 h-16 text-brand-cream" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
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
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-6 p-6 rounded-2xl hover:bg-brand-gray/70 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-olive flex items-center justify-center flex-shrink-0 text-brand-cream">
                      {item.icon}
                    </div>
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
                <div className="inline-flex items-center gap-4 bg-brand-olive text-brand-cream px-10 py-6 rounded-[2rem]">
                  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 20 L45 15 L42 20 M50 20 L55 15 L58 20 M50 20 L50 30 M50 30 C45 32 40 35 40 42 C40 50 43 55 50 60 C57 55 60 50 60 42 C60 35 55 32 50 30 M35 45 L30 50 M65 45 L70 50 M50 60 L50 75 M45 70 L40 80 M55 70 L60 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="font-serif text-3xl md:text-4xl font-bold">Wild • Honest • Fair</p>
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
        <section className="py-16 md:py-24 bg-brand-gray">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L10 1L8 2M12 2L14 1L16 2M12 2V4M12 4C10.5 4.5 9 5.5 9 7C9 9 10.5 10 12 11C13.5 10 15 9 15 7C15 5.5 13.5 4.5 12 4M7 7L5 8M17 7L19 8M12 11V18M10 15L8 17M14 15L16 17M5 22H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: "Deer Management",
                  desc: "Professional, ethical deer population control and habitat protection"
                },
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="7" y="6" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M7 10H17M7 14H17" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                      <circle cx="12" cy="8" r="0.5" fill="currentColor"/>
                      <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
                      <circle cx="12" cy="16" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                  title: "Wild Venison",
                  desc: "Premium wild venison products, fully traceable from hill to plate"
                },
                {
                  icon: (
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
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
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-brand-olive flex items-center justify-center text-brand-cream shadow-[0_10px_30px_-10px_rgba(91,91,71,0.3)]">
                      <div className="w-10 h-10">
                        {card.icon}
                      </div>
                    </div>
                  </div>
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
