'use client'
import { Footer, NavbarUser, PathUser, ProductUser } from '@/components'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const page = () => {
    const { data, error } = useSWR('http://localhost:8000/products/product', fetcher)

    const allProduct = data?.getAll
    
    if (error) return <div>Error fetching</div>
    if (!data) return <div>Loading...</div>

  return (
    <div>
        <NavbarUser />
        <PathUser />
        <div className='flex flex-col w-[1440px] mx-auto gap-10 mb-32'>
            <div className='flex flex-col gap-1 mt-20'>
                <h1 className='text-xl text-[#151886] font-bold'>Электрон бараа</h1>
                <p className='text-[#8A8FB9]'>125 бүтээгдэхүүн</p>
            </div>
            <div className='flex flex-wrap justify-between gap-10s'>
                { allProduct.map((val:any) => {
                    return (
                        <div className='flex flex-col gap-2 items-center'>
                            <img src={val.images} alt="" className='w-[290px] h-[290px]'/>
                            <div className='flex flex-col items-center'>
                                <h1 className='font-semibold text-[#151875]'>{val.productName}</h1>
                                <div className='flex gap-1'>
                                    <div className='h-2 w-2 bg-yellow-500 rounded-3xl'></div>
                                    <div className='h-2 w-2 bg-red-500 rounded-3xl'></div>
                                    <div className='h-2 w-2 bg-blue-500 rounded-3xl'></div>
                                </div>
                                <p className='text-[#151875] font-medium'>{val.price}₮</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default page