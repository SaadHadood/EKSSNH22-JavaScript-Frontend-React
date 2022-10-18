import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = () => {
  return (
    <section className="product-grid">
        <div className="container">
            <div className="section-title">
                <h1>Featured Product</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <ProductCard />
            </div>    
        </div>
    </section>
  )
}

export default ProductGridSection