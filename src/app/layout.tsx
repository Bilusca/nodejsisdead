import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Node is dead?! 🪦',
  description: 'Yaeh! After the new major update of Bun this site chek daily if Node.js is dead.',
  openGraph: {
    images: [
      {
        url: `${process.env.VERCEL_URL}/og`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>

      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W49LPL8C"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
        </iframe>
      </noscript>
    </html >
  )
}
