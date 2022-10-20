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

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
