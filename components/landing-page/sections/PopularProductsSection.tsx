'use client'
import React from 'react'
import DummyProducts from '../data/dummy-data/DummyProducts';
import { BsFillCartPlusFill } from "react-icons/bs";
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

const PopularProductsSection = () => {
  const { locale } = useParams();
  const route=useRouter();
  const handleRedirect=(()=>{
      route.push(`/${locale}/product_details`)
  })
  return (
    <div className="PopularProducts w-full max-w-screen-2xl mx-auto px-3 sm:px-10 flex flex-col items-center justify-center">
      <div className="productsTitle w-full flex flex-col 2xl:p-12 xl:p-12 lg:p-12 md:p-12 p-6 md:items-center items-start md:justify-center justify-center">
        <h1 className="md:text-3xl text-2xl font-bold">Popular Products</h1>
        <p className="text-gray-700  leading-relaxed">See Our latest discounted products from here and get a special discount product</p>
        <p className='text-gray-700  leading-relaxed'>RWAMED makes it easy to find the best products for you</p>
      </div>
      <div className="productsList w-full grid-cols-2 grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4  sm:grid-cols-2 gap-2 items-center justify-center md:px-6 px-3 ">
        {DummyProducts.map((product, index) => (
          <div key={index+1} className="productItem shadow-md rounded-md md:p-5 p-3 flex flex-col space-y-2 items-center justify-center h-72" onClick={handleRedirect}>
          <div className='flex w-full space-x-1'>
              <div className='stock'>
                <p className='text-sm font-normal text-blue-600'>Stock:</p>
              </div>
              <div className='price'>
                <p className='text-sm font-medium text-orange-600'>{product.stock}</p>
              </div>
            </div>
            <div className='image flex w-full'>
              <img src={product.image} alt='product' className='w-full h-44 object-cove transform hover:scale-110 transition-transform duration-500' />
            </div>
            <div className='flex w-full mt-2'>
              <div className='name'>
                <p className='text-sm font-bold'>{product.name}</p>
              </div>
            </div>
            <div className='flex w-full justify-between'>
              <div className='flex w-full space-x-1 pb-1'>
                <div className='price'>
                  <p className='text-sm font-bold'>{product.price}</p>
                </div>
                <div className='discount'>
                  <p className='text-sm font-bold line-through text-gray-400'>{product.discount}</p>
                </div>
              </div>
              <div className='flex w-full float-end justify-end'>
              <BsFillCartPlusFill className='bg text-blue-600 text-2xl -mt-2 flex cursor-pointer' />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularProductsSection