import { useContext, useRef } from "react";
import { productContext } from "../Context";


const AddProduct = () => {

const [shopItem, setshopItem] = useContext(productContext);

const nameRef= useRef();
const priceRef=useRef();
const categoryRef= useRef();
const formRef= useRef();

const formSubmit =(e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const category = categoryRef.current.value
    const newProduct = {
        id:shopItem.length+1,
        img:"https://picsum.photos/200/300.jpg",
        name:name,
        price:price,
        category:category
    }

    const updatedData = [...shopItem, newProduct];
    setshopItem(updatedData);

    formRef.current.reset();

}
return(
    <main class="px-16 py-6 bg-gray-100 md:col-span-2">
    <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 text-center">Add Product</h4>
    <div className="mt-8 ">
      <form onSubmit={formSubmit}ref={formRef}>
      <label htmlFor="name">Name:</label>
          <input type="text" 
          className="ml-7 p-2 ml-2 mb-3 border border-black w-1/2"
          id="itemName"
          ref={nameRef}
          required/>
          <br/>
       <label htmlFor="price">Price:</label>
          <input type="number" 
          className="ml-9 p-2 ml-2 mb-3 border border-black w-1/2"
          id="price"
          ref={priceRef}
          required/>
          <br/>
        <label htmlFor="category">Category:</label>
        <select className="p-2 ml-2 mb-3 border border-black w-1/2" ref={categoryRef}>
            <option>Food</option>
            <option>Furniture</option>
            <option>Clothing</option>
            <option>Cosmetics</option>
        </select>
        <div>
        <button 
            className="rounded-full bg-blue-400 py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider"> Add Product</button>
        </div>
      </form>
    </div>
    </main>
)
}
export default AddProduct;