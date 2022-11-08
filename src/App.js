import React, {useEffect, useState} from 'react'
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
import PageProductSection from './sections/PageProductSection';
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
import { ProductContext } from './contexts/contexts';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

function App() {
  const [products, setProducts] = useState({
    featuredProducts: []
  })
  
    useEffect(() => {
      const fetchFeaturedProducts = async () => {
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setProducts({...products, featuredProducts: await result.json()})
      }
      fetchFeaturedProducts()

  }, [setProducts])


  return (
    <BrowserRouter>
      <ShoppingCartProvider>
      <ProductContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
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
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
