'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import ContractSection from '@/components/contract-section'
import AboutSection from '@/components/about-section'
import CharitySection from '@/components/charity-section'
import TransactionsSection from '@/components/transactions-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ContractSection />
      <AboutSection />
      <CharitySection />
      <TransactionsSection />
      <Footer />
    </main>
  )
}
