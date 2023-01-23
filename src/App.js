
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Products from './Components/products/Products';
import Shop from './Components/Shop';
import ShopDetail from './Components/ShopDetelis';
import ShoppingCard from './Components/ShoppingCard/Index';

function App() {
  return (
     <BrowserRouter>
         <Routes>
           <Route path='/' element={ <Home /> }></Route>
           <Route path='/shop' element={ <Shop /> }></Route>
           <Route path='/contact' element={ <Contact /> }></Route>
           <Route path='/detail' element={ <ShopDetail /> }></Route>
           <Route path='/card' element={ <ShoppingCard /> }></Route>
           <Route path='/checkout' element={ <ShopDetail /> }></Route>
           <Route path='/products' element={ <Products /> }></Route>
         </Routes>
     </BrowserRouter>
    
  );
}

export default App;
