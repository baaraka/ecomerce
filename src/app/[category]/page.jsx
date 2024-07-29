import Image from "next/image";
import React from "react";

const getData = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const CategoryPage = async ({ params }) => {
  const { category } = params;

  const data = await getData(category);

  return (
    <div className="container max-w-6xl mx-auto">
      <h1 className="text-center my-5 text-4xl capitalize">
        {category} Products
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex p-5 flex-col gap-5 shadow-md bg-green-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-xl">Price: {item.price}</p>
            <p className="text-base">{item.description}</p>
            <p className="font-semibold text-xl">{item.category}</p>
            <h1 className="text-xl font-medium">Rating</h1>
            <div>
              <p className="text-lg font-bold">Rate: {item.rating.rate}</p>
              <p className="text-lg font-bold"> Count: {item.rating.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
