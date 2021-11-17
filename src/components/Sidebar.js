import {Link } from "react-router-dom";


const sidebar = () => {
    return(
    <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100 ">
                <Link to="/" className="hover:text-gray-900" >SHOPPING CART</Link>
              </h1>
            </div>
            <ul className="text-sm mt-6 flex md:block">
              <li className=" text-gray-800 font-bold py-1">
                <Link to="/" className="px-4 flex justify-end">
                  <span>Home</span>
                </Link>
              </li>
              <li  className=" text-gray-800 font-bold py-1">
                <Link to="/addProduct" className="px-4 flex justify-end">
                  <span>Add Product</span>
                </Link>
              </li>
              <li  className=" text-gray-800 font-bold py-1">
                <Link to="/cart" className="px-4 flex justify-end">
                  <span>Cart</span>
                </Link>
              </li>
             
            </ul>
          </nav>
        </div>
    )

}

export default sidebar;