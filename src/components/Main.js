import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Sidebar from "./Sidebar";
import List from "../Pages/List";
import Cart from '../Pages/Cart';

import AddProduct from "../Pages/AddProduct";


const MainContent = () => {
    return(
        <CartProvider>
            <Router>
                <div className="text-gray-700 font-body">
                    <div className="grid md:grid-cols-3">
                    <Sidebar/>
                    <Routes>
                    <Route path ="/" element={<List/>}/>
                    <Route path ="/cart" element={<Cart/>}/>
                    <Route path ="/addProduct" element={<AddProduct/>}/>
                    </Routes>
                </div>
                </div>
            </Router>
        </CartProvider>
 )
}

export default MainContent;