"use client"
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const RecipesView = ({ data }: { data: any }) => {
    const router = useRouter()
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                data?.map((i: any) => (
                    <div key={i.id} className='border h-[300px] relative flex flex-col items-center py-4 px-2'>
                        <div className='w-full h-[180px] '>
                            <img src={i?.image} className='object-contain w-full h-full' alt="" />
                        </div>
                        <p className='text-center text-lg font-semibold mt-2 mb-1.5' style={{ height: "50px" }}>{i?.name }</p>
                        <Button onClick={() => router.push(`recipes/${i.id}`)} style={{ width: "100%" }} type='primary'>Details</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipesView