"use client";
import CategoriesDummyData from "../data/dummy-data/CategoriesDummyData";
import React from "react";
import { RxCaretRight } from "react-icons/rx";
import Image from "next/image";
const CategorySection = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-10 flex flex-col items-center justify-center">
      <div className="categoryTitle w-full flex flex-col 2xl:md:p-12 xl:md:p-12 lg:md:p-12 md:p-12 p-5 items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-bold">
        </h1>
        <p className="text-gray-700  leading-relaxed">
          See Our latest discounted products from here and get a special
          discount product
        </p>
      </div>
      <div className="categoryList w-full grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 items-center justify-center md:px-6 px-3 ">
        {CategoriesDummyData.map((category, index) => (
          <div key={index+1} className="categoryItem flex space-x-4 p-3 shadow-lg rounded-md">
            <div className="categoryImage rounded-lg w-16 h-16 block items-center justify-center">
            <Image height={100} width={100}
                src={category.image}
                alt=""
                className="rounded-lg w-16 h-16 object-cover cursor-pointe"
              />
            </div>
            <div className="categoryName w-full flex flex-col">
              <h1 className="text-sm font-bold">{category.name}</h1>
              <div className="subCategories w-full flex flex-col">
                {category.sub_categories.map((subCategory, index) => (
                  <div key={index+1} className="text-xs flex items-center my-auto">
                    <RxCaretRight className="text-xs font-medium" />
                    <span className="ml-2">{subCategory.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;