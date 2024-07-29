import React from "react";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
};

const Product = async () => {
  const data = await getData();
  return (
    <div className="container max-w-6xl mx-auto">
      <h1 className="text-center text-4xl">Product List</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 shadow-md bg-green-100"
          >
            <img src={item.image} alt="" className="w-full h-40 object-cover" />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <h1>Rating</h1>
            <div>
              <p>{item.rating.rate}</p>
              <p>{item.rating.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
