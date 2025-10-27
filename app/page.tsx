export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-olive text-brand-cream py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive/90 to-brand-olive"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From the hills to your plate.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Founded by Lee Dennison, Dennison's Venison is built on honesty, respect for the countryside,
            and the belief that everyone deserves access to good, natural food.
          </p>
          <p className="text-lg md:text-xl mb-4 italic">
            "I believe in feeding people real food, responsibly sourced, and giving back to the land that provides it."
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-brand-cream text-brand-olive px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/90 transition"
            >
              Get in Touch
            </a>
            <a
              href="#products"
              className="inline-block border-2 border-brand-cream text-brand-cream px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream/10 transition"
            >
              Our Venison
            </a>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section id="about" className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-olive mb-4">🌲 About Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                Every animal is taken ethically, handled with care, and used in full – ensuring nothing goes to waste.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                By keeping prices fair, Lee aims to make wild, sustainable venison accessible to local people during
                a time when so many are being priced out by a broken system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-brand-olive/20">
              <h3 className="text-2xl font-bold text-brand-olive mb-4">Lee Dennison</h3>
              <p className="text-gray-800 mb-4">
                Lee Dennison is a qualified deer manager with over 10 years' experience stalking and managing
                wild deer across the UK.
              </p>
              <p className="text-gray-800 mb-4">
                He's DSC1, DSC2, Trained Hunter, Quad trained, and NatureScot Fit & Competent Approved (Ref 3999).
              </p>
              <p className="text-gray-800">
                Working from Bradshaw Trees Farm in Mellor, Dennison's Venison supplies traceable, sustainable
                wild venison direct from the countryside to local customers, restaurants, and friends of the land.
              </p>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg border-2 border-brand-olive/20">
              <h4 className="font-bold text-brand-olive mb-2">Respect for Wildlife</h4>
              <p className="text-sm text-gray-700">& habitat conservation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-brand-olive/20">
              <h4 className="font-bold text-brand-olive mb-2">Full Traceability</h4>
              <p className="text-sm text-gray-700">From hill to plate</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-brand-olive/20">
              <h4 className="font-bold text-brand-olive mb-2">Honest Prices</h4>
              <p className="text-sm text-gray-700">For honest food</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-brand-olive/20">
              <h4 className="font-bold text-brand-olive mb-2">Responsible Management</h4>
              <p className="text-sm text-gray-700">For future generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-olive mb-4">🥩 Our Venison</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              All of our venison is wild, locally sourced, and processed with full food-hygiene standards.
            </p>
          </div>

          <div className="bg-brand-cream p-8 md:p-12 rounded-lg border-2 border-brand-olive/20 mb-8">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              From classic burgers and sausages to handmade sausage rolls with black pudding, Stilton,
              apple and roasted chestnuts – every recipe celebrates wild, natural flavour.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              We believe good food shouldn't be a luxury, and everyone deserves the chance to eat healthy,
              sustainable meat at a fair price.
            </p>
          </div>

          <div className="text-center bg-brand-olive text-brand-cream p-8 rounded-lg">
            <p className="text-2xl font-bold">🦌 Nothing wasted. Everything respected.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-olive mb-4">🎯 Deer Management Services</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Lee provides professional deer-management services for estates, farms, and woodland owners across:
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-lg mb-8 border-2 border-brand-olive/20">
            <p className="text-center text-lg text-gray-800 mb-6 leading-relaxed">
              <strong>Scottish Borders • Northumberland • Cumbria • Derbyshire • Staffordshire •
              Shropshire • Herefordshire • Worcestershire • Gloucestershire • Northamptonshire</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-brand-olive/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-olive mb-6">Services Include:</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-brand-olive mr-3">✓</span>
                  <span>Ethical culling and population control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-olive mr-3">✓</span>
                  <span>Habitat and crop protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-olive mr-3">✓</span>
                  <span>Carcass handling and venison supply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-olive mr-3">✓</span>
                  <span>Reporting and cull-plan data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-olive mr-3">✓</span>
                  <span>Woodland deer-impact assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-olive text-brand-cream p-8 rounded-lg flex items-center">
              <p className="text-lg leading-relaxed">
                All work is carried out professionally, insured, and in line with best-practice
                deer-management standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-olive mb-4">📞 Get in Touch</h2>
          </div>

          <div className="bg-brand-cream p-8 md:p-12 rounded-lg border-2 border-brand-olive/20">
            <h3 className="text-2xl font-bold text-brand-olive mb-6 text-center">
              Lee Dennison – Founder, Dennison's Venison
            </h3>

            <div className="space-y-4 text-lg">
              <div className="flex items-start">
                <span className="font-semibold text-brand-olive w-24 flex-shrink-0">📍 Address:</span>
                <span className="text-gray-800">Bradshaw Trees Farm, Mellor, Stockport, SK6 5NF</span>
              </div>

              <div className="flex items-start">
                <span className="font-semibold text-brand-olive w-24 flex-shrink-0">📞 Phone:</span>
                <a href="tel:07774710025" className="text-brand-olive hover:opacity-70 underline">
                  07774 710025
                </a>
              </div>

              <div className="flex items-start">
                <span className="font-semibold text-brand-olive w-24 flex-shrink-0">✉️ Email:</span>
                <a href="mailto:dennisonsvenison@gmail.com" className="text-brand-olive hover:opacity-70 underline">
                  dennisonsvenison@gmail.com
                </a>
              </div>

              <div className="flex items-start">
                <span className="font-semibold text-brand-olive w-24 flex-shrink-0">🌐 Web:</span>
                <span className="text-gray-800">www.dennisonsvenison.co.uk</span>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-2xl font-bold text-brand-olive mb-2">🦌 Wild • Honest • Fair</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-cream py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Dennison's Venison. All rights reserved.
          </p>
          <p className="text-xs opacity-60 mt-2">
            Wild venison • Deer management • Ethical hunting • Sustainable food
          </p>
        </div>
      </footer>
    </main>
  )
}
