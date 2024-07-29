// app/CategoryList.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CategoryList = ({ categories }) => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/${category}`);
  };

  return (
    <div className="flex flex-wrap gap-5 items-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className="p-5 bg-green-500 rounded-md cursor-pointer capitalize"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
