import React from 'react'
import ProductCard from '../components/ProductCard'

const SecondDiscount = ({tittle, products}) => {
  return (

    <section className="discount">
      <div className="container">
        <div id="discount-row" className="row row-cols-1 row-cols-md-4 g-4">
            {
              products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>

        <div id="discount-box" className="box">
            <div className="box-body">
                <h1>2 FOR USD $49</h1>
                <a href="#" className="btn btn-lg btn-white">FLASE SALE</a>
            </div>
        </div>
      </div>
    </section>


  )
}

export default SecondDiscount