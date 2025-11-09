import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Dennison's Venison | Wild, Honest, Fair | Sustainable Venison from the UK",
  description: 'Premium wild venison and professional deer management services across the UK. Ethical, sustainable, and traceable from hill to plate. Based at Bradshaw Trees Farm, Mellor.',
  keywords: 'venison, wild venison, deer management, sustainable meat, UK venison, Scottish venison, Mellor, Stockport, ethical hunting, deer stalking, wild game',
  authors: [{ name: "Dennison's Venison" }],
  alternates: {
    canonical: 'https://www.dennisonsvenison.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.dennisonsvenison.co.uk',
    title: "Dennison's Venison | Wild, Honest, Fair",
    description: 'Premium wild venison and professional deer management services. Ethical, sustainable, and traceable from hill to plate.',
    siteName: "Dennison's Venison",
    images: [
      {
        url: 'https://www.dennisonsvenison.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Dennison's Venison - Wild, Honest, Fair",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dennison's Venison | Wild, Honest, Fair",
    description: 'Premium wild venison and professional deer management services.',
    images: ['https://www.dennisonsvenison.co.uk/og-image.jpg'],
  },
  robots: 'index, follow',
  metadataBase: new URL('https://www.dennisonsvenison.co.uk'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: "Dennison's Venison",
              description: 'Premium wild venison and professional deer management services',
              url: 'https://www.dennisonsvenison.co.uk',
              logo: 'https://www.dennisonsvenison.co.uk/logo.png',
              email: 'dennisonsvenison@gmail.com',
              telephone: '+44-7774-710025',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bradshaw Trees Farm',
                addressLocality: 'Mellor',
                addressRegion: 'Stockport',
                postalCode: 'SK6 5NF',
                addressCountry: 'GB',
              },
              sameAs: [
                'https://www.facebook.com/dennisonsvenison',
                'https://www.instagram.com/dennisonsvenison',
              ],
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 53.37,
                  longitude: -2.05,
                },
                geoRadius: '200000',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
