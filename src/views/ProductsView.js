import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
    const productContext = useContext(ProductContext)

  return (
    <>
      <MainMenuSection />
      <ProductGridSection tittle="Products" items={productContext.all} />
      <FooterSection />
    </>
  )
}

export default ProductsView