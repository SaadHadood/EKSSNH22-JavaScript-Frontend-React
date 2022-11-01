import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/contexts'

const SecondDiscount = ({tittle, items = []}) => {

  return (

    <section className="discount">
      <div className="container">
        <div id="discount-row" className="row row-cols-1 row-cols-md-4 g-4">
            {
              items.map(product => <ProductCard key={product.articleNumber} product={product} />)
            }
        </div>

        <div id="discount-box" className="box">
            <div className="box-body">
                <h1>2 FOR USD $49</h1>
                <NavLink className="btn btn-lg btn-white" to="/flashesale" end>FLASE SALE</NavLink>
            </div>
        </div>
      </div>
    </section>


  )
}

export default SecondDiscount