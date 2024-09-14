'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TfiMinus } from 'react-icons/tfi'
import { LiaPlusSolid } from 'react-icons/lia'
import { MdDelete } from "react-icons/md";
import { Checkbox } from 'antd'
import { Button } from 'antd/es/radio'
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link'
import MainLayout from '../MainLayout'
const Page = () => {
    const [countProduct, setCountProduct] = useState(1);
    const HandleCount = (() => {
        setCountProduct(countProduct + 1)
    })
    const HandleRemoveCount = (() => {
        setCountProduct(countProduct - 1)
    })
    return (
        <MainLayout>
        <div className='w-full'>
            <div className='w-full lg:w-[70%] px-5 lg:px-0 lg:m-auto md:flex gap-5'>
                <div className='w-full md:w-[70%] bg-white   mt-6 p-3'>
                    <div className='flex justify-between border border-gray-200 shadow-md'><h1 className='p-5'>Selcted Product (2 items)</h1> <h1 className='text-lg font-medium p-5'>Total: <span className='text-orange-500'>50 products</span></h1></div>
                    <div className='flex gap-5 border border-gray-200 shadow-md p-5'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className='mr-5' />

                        </div>
                        <Image
                            src="/med5.jpg"
                            width={80}
                            height={80}
                            alt="Picture of the Logo" className='border border-orange-300 p-1 rounded-sm' />
                            {/* <div className='flex items-center space-x-2'> */}
                        <p className='mt-5 sm:mt-10 w-[20rem]'>Banana Juice suited product</p>
                        <div className=' sm:flex items-center space-x-4'>
                            <div className='flex gap-2 pl-3 border w-24 bg-gray-300 mt-5 sm:mt-2 rounded-sm' >
                                <button disabled={countProduct <= 1} onClick={HandleRemoveCount} className=''><TfiMinus size={18} className='' /></button>
                                <span className=''>{countProduct}</span>
                                <button onClick={HandleCount}><LiaPlusSolid className='' size={18} /></button>
                            </div>
                        <div className='bg-orange-100 ml-7 pt-[5px] pl-[5px] mt-10 sm:mt-2 rounded-full hover:bg-red-300  cursor-pointer h-8 w-8'><MdDelete color='orange' size={20} /></div>
                        </div>
                        {/* <div className='mt-10 '><p>388</p></div> */}
                        </div>
                    {/* </div> */}
                    {/* <div className='flex gap-5 border border-gray-200 shadow-md p-5'>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" className='mr-5' />

                        </div>
                        <Image
                            src={product}
                            width={80}
                            height={80}
                            alt="Picture of the Logo" className='border border-orange-300  p-1 rounded-sm' />
                        <p className='mt-10 w-[20rem]'>Banana Juice suited product</p>
                        <div className=' mt-8'>
                            <div className='flex gap-2 pl-3 border w-24 bg-gray-300 mt-2 rounded-sm' >
                                <button disabled={countProduct <= 1} onClick={HandleRemoveCount} className=''><TfiMinus size={18} className='' /></button>
                                <span className=''>{countProduct}</span>
                                <button onClick={HandleCount}><LiaPlusSolid className='' size={18} /></button>
                            </div>
                        </div>
                        <div className='mt-10 '><p>388</p></div>
                        <div className='bg-orange-100 hover:bg-red-300  pt-[5px] pl-[5px] mt-9 rounded-full h-8 w-8 cursor-pointer '><MdDelete color='orange' size={20} /></div>

                    </div> */}

                </div>
                <div className='w-full md:w-[30%] h-fit bg-white rounded-md shadow-md mt-6 p-3'>
                    <div className='divide-y-2'>
                    <h1 className='py-3 font-semibold text-lg '>Payment Details</h1>
                    <p className='py-2 text-gray-500 flex justify-between'>Sub Total <span>3000</span></p>
                    <p className='py-2 text-gray-500 flex justify-between'>Tax <span>3000</span></p>
                    <p className='py-2 text-gray-500 flex justify-between'>Bonus <span>10%</span></p>
                    <p className='py-2 text-gray-500 flex justify-between'>Shipping <span>3000</span></p>
                    <p className='py-2 text-gray-500 flex justify-between'>Total <span>3200 Rfw</span></p>
                    </div>
                    <div className='mt-28'>
                       <Link href={"checkout"} > <Button className='w-full bg-orange-400 text-base cursor-pointer hover:bg-blue-500'>Proceed to Checkout</Button></Link>
                       <Link href={"/"} >  <div className='flex gap-2 mt-10 '><IoIosArrowRoundBack color='orange' size={35}/><p className='pt-1 text-orange-400 hover:text-blue-500 cursor-pointer'> Return to shipping</p></div></Link>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
        </MainLayout>
    )
}

export default Page