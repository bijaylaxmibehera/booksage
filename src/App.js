import "./App.css";
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";
import { Home } from "./pages/Home/Home";
import { Header } from "./component/Header/Header";
import { Products } from "./pages/ProductList/Products";
import { Cart } from "./pages/Cart/Cart";


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
     <Route path="/mockman" element={<Mockman />} />
     <Route path="/" element={<Home/>} />
     <Route path="/products" element={<Products/>} />
     <Route path="/cart" element={<Cart/>}/>

     </Routes>
    </div>
  );
}

export default App;
