'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import TransactionsSection from '@/components/transactions-section'
import CartoonDivider from '@/components/cartoon-divider'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CartoonDivider />
      <AboutSection />
      <CartoonDivider />
      <TransactionsSection />
      <Footer />
    </main>
  )
}
