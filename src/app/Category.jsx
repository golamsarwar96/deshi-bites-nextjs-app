"use client";
const Category = async () => {
  const res = await fetch("/categories.json");
  const data = await res.json();
  console.log(data);
  return <div></div>;
};

export default Category;
