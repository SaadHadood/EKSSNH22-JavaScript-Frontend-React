import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {
  return (
    <>
      <MainMenuSection />
      <ProductGridSection tittle="Featured Product" />
      <FooterSection />
    </>
  )
}

export default HomeView