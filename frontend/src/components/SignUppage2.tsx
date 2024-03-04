import React from 'react' 
import Pineconelogo from '@/images/Pineconelogo' 
import ToLeft from '@/images/ToLeft' 

const SignUppage2 = () => { 
    return ( 
    <div className='flex flex-col justify-center items-center gap-[100px] py-[30px] px-[30px]'> 
        <div className='flex justify-start items-start text-start w-[100%]'> 
            <Pineconelogo/> 
        </div> 
        <ul className='steps w-[900px]'> 
            <li className='step step-neutral'>Дэлгүүрийн нэр</li> 
            <li className='step'>Бүс нутаг</li> 
            <li className='step'>Нэмэлт мэдээлэл</li> 
        </ul> 
        <div className='flex flex-col gap-12 w-96'> 
            <div className='flex flex-col gap-3'> 
                <h1 className='font-bold text-3xl'>Дэлгүүрийн мэдээлэл</h1> 
                <div className='flex flex-col gap-2'> 
                    <h1 className='font-bold'>Танай дэлгүүрийн нэр юу вэ?</h1> 
                    <input type="text" placeholder='Дэлгүүрийн нэр' className='p-3 border rounded-lg w-full'/> 
                </div> 
            </div> 
            <div className='flex justify-between'> 
                <button className='flex justify-center items-center h-10 w-10 bg-gray-100 rounded-[50%]'><ToLeft /></button> 
                <button className='bg-gray-200 p-3 rounded-lg text-gray-400'>Дараах</button> 
            </div> 
        </div> 
    </div> 
    ) 
} 
export default SignUppage2