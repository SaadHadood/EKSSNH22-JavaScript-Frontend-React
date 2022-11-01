import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log("added to wish list")
    }

    const addToCompare = (e) => {
        console.log("added to compare")
    }

    const addToCart = (e) => {
        console.log("added to shopping cart")
    }


  return (
    <div className="col">
    <div className="card h-100">
        <img src={product.imageName} alt={product.name} />
        <ul className="card-menu">
            <li><button onClick={addToWishList}><i className="fa-regular fa-heart"></i></button></li>
            <li><button onClick={addToCompare}><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button></li>
            <li><button onClick={addToCart}><i className="fa-regular fa-bag-shopping"></i></button></li>
        </ul>
        <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="quick-button"><button >QUICK VIEW</button></NavLink>
        <div className="card-background"></div>
    </div>
    <div className="card-body">
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <div className="text-theme">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        
        <div className="d-flex justify-content-center align-products-center w-100">
            <p className="card-discount-price">{product.price}</p>
        </div>   
    </div>
</div>
  )
}

export default ProductCard