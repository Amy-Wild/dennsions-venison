import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wild Venison Products | Dennison's Venison | UK Wild Deer Meat",
  description: "Premium wild venison burgers, sausages, and gourmet sausage rolls. Ethically sourced, fully traceable, processed to highest hygiene standards. Order from Mellor, Stockport.",
  keywords: 'wild venison, venison burgers, venison sausages, wild deer meat, UK venison, sustainable meat, ethical meat, venison products, Stockport',
  alternates: {
    canonical: 'https://www.dennisonsvenison.co.uk/products',
  },
  openGraph: {
    title: "Wild Venison Products | Dennison's Venison",
    description: "From classic burgers to handmade sausage rolls with Stilton and chestnuts. Wild, natural flavour at fair prices.",
    url: 'https://www.dennisonsvenison.co.uk/products',
    images: [
      {
        url: 'https://www.dennisonsvenison.co.uk/og-image-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Wild Venison Products from Dennison\'s Venison',
      },
    ],
  },
}
