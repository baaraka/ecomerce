import React from "react";
import CategoryList from "./categoryList/page";
import { getData } from "./categories/page";

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex container max-w-xl flex-col justify-center mx-auto gap-5">
      <h1 className="text-center text-4xl">Categories</h1>
      <CategoryList categories={data} />n
    </main>
  );
}
