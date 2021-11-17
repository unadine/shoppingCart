import React, { useContext } from "react";
import Shop from "../components/Shop";
import { productContext } from "../Context";

const List = () => {

  const [shopItem] = useContext(productContext);
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200 text-center">All products</h4>
      <div className="mt-8 grid md:grid-cols-3 gap-10">
        {shopItem.map((item) => (
          <Shop key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default List;