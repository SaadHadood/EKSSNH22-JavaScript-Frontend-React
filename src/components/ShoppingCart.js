import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart ()

  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabindex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
            <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h4>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            cartItems.map(product => (<ShoppingCartItem key={product.articleNumber} product={product} />))
          }
        </div>
    </div>
  )
}

export default ShoppingCart