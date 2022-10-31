import React, {useState} from 'react'
import './style.min.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import CompareView from './views/CompareView';
import SearchView from './views/SearchView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import CategoriesView from './views/CategoriesView';
import ShopNowView from './views/ShopNowView';
import FlasheSaleView from './views/FlasheSaleView'
import FooterSection from './sections/FooterSection';
import MainMenuSection from './sections/MainMenuSection';
import ShowCase from './sections/ShowCase';
import TopPicks from './sections/TopPicks';
import Discount from './sections/Discount';
import SecondDiscount from './sections/SecondDiscount';
import SupportSection from './sections/SupportSection';
import { ProductContext } from './contexts/contexts'

function App() {
  const [featuredProducts, setFeaturedProducts] = useState ([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4946413/pexels-photo-4946413.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914030/pexels-photo-13914030.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914029/pexels-photo-13914029.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/13914028/pexels-photo-13914028.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ])



  return (
    <BrowserRouter>
      <ProductContext.Provider value={featuredProducts}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/shopnow" element={<ShopNowView />} />
        <Route path="/flashesale" element={<FlasheSaleView />} />

        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
