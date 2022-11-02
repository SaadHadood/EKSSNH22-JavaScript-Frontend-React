import React, { useContext, useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import PageProductSection from '../sections/PageProductSection'


const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  const [pageProducts, setPageProducts] = useState ([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ])

  return (
    <>
      <MainMenuSection />
      <PageProductSection tittle="Products" products={pageProducts} />
      <FooterSection />
    </>
  )
}

export default ProductsView