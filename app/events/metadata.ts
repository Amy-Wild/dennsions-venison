import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Food | Dennisons Venison | Pop-Up BBQs & Freezer Packs",
  description: "Wild venison cooked fresh at your event or packed for your freezer. McDenni wraps, venison fillet, sausage rolls, ragu, pies and more. Book a BBQ or order a freezer pack.",
  keywords: 'venison BBQ, pop-up BBQ, venison freezer packs, venison burgers, venison sausage rolls, venison ragu, McDenni wraps, wild venison food, venison catering, Stockport',
  alternates: {
    canonical: 'https://www.dennisonsvenison.co.uk/events',
  },
  openGraph: {
    title: "Our Food | Dennisons Venison",
    description: "Wild venison cooked fresh at your event or packed for your freezer. Burgers, sausages, sausage rolls, pies and more.",
    url: 'https://www.dennisonsvenison.co.uk/events',
    images: [
      {
        url: 'https://www.dennisonsvenison.co.uk/Venison Meat - hero image',
        width: 1200,
        height: 630,
        alt: 'Dennisons Venison - Our Food',
      },
    ],
  },
}
