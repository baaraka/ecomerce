// app/Categories.js
import React from "react";

export async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  return res.json();
}

const Categories = async () => {
  const data = await getData();

  return (
    <div>
      {data.map((category, index) => (
        <p key={index} className="p-5 bg-green-500 cursor-pointer capitalize">
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
