import React from 'react'
import Hero from '../components/Hero'
import SearchSection from '../components/Searchsection'
import Categories from '../components/Categories'
import FeaturedVendors from '../components/FeaturedVendors'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import BecomeVendor from '../components/BecomeVendor'


const Home = () => {
  return (
    <>
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedVendors />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Gallery />
      <BecomeVendor />
     
    </>
  )
}

export default Home