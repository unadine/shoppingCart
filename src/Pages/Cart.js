import React from "react";
import { useCart} from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if(isEmpty) return <p>Your cart is empty</p>
    return(
        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200 text-center">Cart</h4>
            <section className="py-4">
                <div className="row-auto justify-center">
                    <div className="grid grid-cols-auto mx-auto">
                        <h2> Total items in the cart: {totalItems}</h2>
                    </div>
                    <div className="flex">
                
                    <table className="table-fixed border border-black ">
                    <tr>
                        <td className="border border-black  ">Picture</td>
                        <td className="border border-black ">Name</td>
                        <td className="border border-black  ">Category</td>
                        <td className=" border border-black ">Quantity</td>
                        <td className=" border border-black ">Price</td>
                        <td className=" border border-black ">Total Price</td>
                        <td className=" border border-black ">edit</td>
                    </tr>
                    <tbody>
                    {items.map((item)=> {
                        return(
                        <tr key={item.id}>
                            <td className=" border border-black ">
                                <img src={"https://picsum.photos/200/300.jpg"} alt={item.name} className="h-10"/>
                            </td>
                            <td className=" border border-black ">{item.name}</td>
                            <td className=" border border-black ">{item.category}</td>
                            <td className=" border border-black ">{item.quantity}</td>
                            <td className=" border border-black ">{item.price}</td>
                            <td className=" border border-black ">{(item.quantity) * (item.price)} </td>
                            <td className=" flex border border-black ">
                            <button className=" p-2 bg-blue-400 font-bold cursor-pointer m-1"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                        -
                        </button>
                        <button className=" p-2 bg-blue-400 font-bold cursor-pointer  m-1"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                        +
                        </button>
                        <button className=" p-2 bg-blue-400 font-bold cursor-pointer  m-1"
                        onClick={() => removeItem(item.id)}>
                            remove
                        </button>
                        </td>
                            
                        </tr>
                        )

                    })}
                    </tbody>
                        
                    </table>

                    </div>
                    <div className="grid grid-cols-auto mx-auto">
                        <h2> Your total price: ${cartTotal}</h2>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default Cart;