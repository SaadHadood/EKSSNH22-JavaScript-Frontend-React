import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import ProductGridSection from '../sections/ProductGridSection'
import TopPicks from '../sections/TopPicks'
import Discount from '../sections/Discount'
import SecondDiscount from '../sections/SecondDiscount'
import SupportSection from '../sections/SupportSection'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <MainMenuSection />
      <ShowCase />
      <ProductGridSection tittle="Featured Products" />
      <TopPicks />
      <Discount tittle="Featured Products" />
      <SecondDiscount tittle="Featured Products" />
      <SupportSection />
      <FooterSection />
    </>
  )
}

export default HomeView