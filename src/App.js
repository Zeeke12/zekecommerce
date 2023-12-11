import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Topbar from './component/topbar/Topbar';
import Feed from './pages/Home/Feed';
import { ProductContextProvider } from './db/ProductContext';
import About from './pages/About';
import ProductDetails from './pages/Products/ProductDetails';
import Cart from './component/Cart/Cart';
import SearchResults from './component/SearchResults/SearchResults';
import { ApiDataProvider } from './db/ApiDataContext';
import TestPage from './component/TestPage';
import Products from './pages/Products/Shared';


function App() {
  return (
    <div>
    <ProductContextProvider>
      <ApiDataProvider>
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:title' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/result' element={<SearchResults />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </BrowserRouter>
    </ApiDataProvider>
    </ProductContextProvider>
    </div>
  );
}

export default App;
