import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = () => {
  return (
    <div className="col">
    <div className="card h-100">
        <ul className="card-menu">

            <li><button><i className="fa-regular fa-heart"></i></button></li>
            <li><button><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button></li>
            <li><button><i className="fa-regular fa-bag-shopping"></i></button></li>
            
        </ul>
        <NavLink to="/products" className="quick-button"><button >QUICK VIEW</button></NavLink>
        <div className="card-background"></div>
    </div>
    <div className="card-body">
        <p>Category</p>
        <h1>Modern Black Blouse</h1>
        <div className="text-theme">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        
        <div className="d-flex justify-content-center align-items-center w-100">
            <p className="card-discount-price">$35.00</p>
        </div>   
    </div>
</div>
  )
}

export default ProductCard