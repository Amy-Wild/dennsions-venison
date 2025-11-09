import Link from 'next/link'
import Navigation from './components/Navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-brand-gray pt-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-8">
            <h1 className="font-serif text-8xl md:text-9xl font-bold text-brand-olive mb-4">
              404
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-olive mb-6">
              Page Not Found
            </h2>
            <p className="font-serif text-xl md:text-2xl text-gray-700 mb-10 font-light">
              Sorry, the page you're looking for has wandered off into the hills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand-olive text-brand-cream px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              ← Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-cream text-brand-olive border-2 border-brand-olive px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
