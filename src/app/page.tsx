import Bottom from '@/components/Bottom'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HeroText from '@/components/HeroText'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroText />
      <Cards />
      <Bottom />
      <Footer />
    </div>
  )
}

export default Home