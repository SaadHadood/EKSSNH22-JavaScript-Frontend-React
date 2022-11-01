import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ShowCase from '../sections/ShowCase'
import ProductGridSection from '../sections/ProductGridSection'
import TopPicks from '../sections/TopPicks'
import Discount from '../sections/Discount'
import SecondDiscount from '../sections/SecondDiscount'
import SupportSection from '../sections/SupportSection'
import { ProductContext } from '../contexts/contexts'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)
  return (
    <>
      <MainMenuSection />
      <ShowCase />
      <ProductGridSection tittle="Featured Products" items={productContext.featuredProducts} />
      <TopPicks />
      <Discount tittle="Featured Products" items={productContext.discountProducts} />
      <SecondDiscount tittle="Featured Products" items={productContext.discountProducts} />
      <SupportSection />
      <FooterSection />
    </>
  )
}

export default HomeView