import React from 'react'
import { ShippingAddressForm } from './shippingAddressForm'
import { PaymentMethodForm } from './paymentMethodForm'
import Image from 'next/image'
import MainLayout from '@/app/MainLayout'
const Page = () => {
  return (
    <MainLayout>
    <div className='w-full'>
            <hr />
            <div className=' w-full xl:w-[80%] bg-white gap-4 m-auto lg:flex flex-row-reverse mt-5 relative'>
            <div className='w-full lg:w-[40%] p-3 sm:right-4 bg-gray-100 '>
                <div className='md:flex gap-5 p-5'>
                    <div className='relative '>
                        <Image
                            src="/med5.jpg"
                            width={200}
                            height={200}
                            alt="Picture of the Logo" className='border border-orange-400 p-1 rounded-sm w-full'/>
                            <div className='w-6 h-6 rounded-full bg-gray-500 text-center absolute top-[-7px] right-[-7px]'><span className='text-[12px] text-white'>30</span></div>
                        </div>
                        <div className='mt-2 w-[20rem]'>
                            <p >Banana Juice suited product</p>
                            <p className='text-[#030229B2] text-sm pt-2'>product details</p>
                        </div>
                        <div className=' mt-3'>
                        </div>
                        <div className='mt-5 '><p>388</p></div>
                    </div>
                    <div className='mt-5 ml-5 mr-10'>
                        <h1 className='py-3 font-semibold text-lg '>Payment Details</h1>
                        <p className='py-2 text-gray-500 flex justify-between pr-12'>Sub Total <span>3000</span></p>
                        <p className='py-2 text-gray-500 flex justify-between pr-12'>Shipping <span>3000</span></p>
                        <p className='py-2 text-gray-500 flex justify-between pr-12'>Total <span>3000 Rfw</span></p>
                    </div>
                </div>
                <div className=' w-full lg:w-[60%] bg-white border px-2 sm:px-20 py-4 '>
                    <div>
                        <h1 className='text-lg font-semibold py-4'>Delivery Address</h1>
                        <div>
                            <ShippingAddressForm />
                        </div>
                        <div className='mt-5'>
                            <PaymentMethodForm />
                        </div>
                    </div>
                </div>
               
                </div>
                </div>
                </MainLayout>
  )
}

export default Page