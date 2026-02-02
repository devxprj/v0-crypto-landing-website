'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ContractSection from '@/components/contract-section'
import AboutSection from '@/components/about-section'
import CharitySection from '@/components/charity-section'
import EmbedSection from '@/components/embed-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ContractSection />
      <AboutSection />
      <CharitySection />
      <EmbedSection />
      <Footer />
    </main>
  )
}
