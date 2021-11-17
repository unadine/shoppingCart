import { useCart } from "react-use-cart";


const Shop =(props)=>{
    const{name,price,category} = props.item;
    const { addItem } = useCart();
    return(
    <> 
        <div className="bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg"> 
          <img src={"https://picsum.photos/200/300.jpg"} alt={name} className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-4">
          <div className="flex justify-between mb-2">
            <span className="font-bold">{name}</span>
            <span className="block text-gray-500 text-sm">${price}</span>
            </div>
            <span className="block text-gray-500 text-sm mb-2"><i className="font-bold">category</i>: {category}</span>
            <button onClick={() =>addItem(props.item)}
            className="rounded-full bg-blue-400 py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider"> Add to cart</button>
          </div>
        </div>
      </>
    )

}

export default Shop;