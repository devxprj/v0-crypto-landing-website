import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Fredoka, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka" });
const _poppins = Poppins({ weight: ["400", "600", "700", "900"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: 'BTC',
  description: 'Donating 100% of the fees to charity',
  generator: 'v0.app',
  icons: {
    icon: '/images/btc.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_fredoka.variable} ${_poppins.variable}`}>
      <body className={`font-poppins antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
