import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <MainMenuSection />
      <ProductGridSection tittle="Featured Products" />
      <FooterSection />
    </>
  )
}

export default ProductsView