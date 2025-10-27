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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.dennisonsvenison.co.uk',
    title: "Dennison's Venison | Wild, Honest, Fair",
    description: 'Premium wild venison and professional deer management services. Ethical, sustainable, and traceable from hill to plate.',
    siteName: "Dennison's Venison",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dennison's Venison | Wild, Honest, Fair",
    description: 'Premium wild venison and professional deer management services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
