"use client"
import { IProduct } from '@/types'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface Props {
  data: IProduct[]
}

const ProductView: FC<Props> = ({ data }) => {
  const router = useRouter()
  return (
    <div className='grid grid-cols-4 gap-6'>
      {
        data?.map((i: any) => (
          <div key={i.id} className='border h-[300px] relative flex flex-col items-center py-4 px-2'>
            {
              i?.thumbnail &&
              <div className='w-full h-[180px] '>
                <img src={i?.thumbnail} className='object-contain w-full h-full' alt="" />
              </div>
            }
            <p className='text-center text-lg font-semibold mt-2 mb-1.5' style={{ height: "50px" }}>
              {
                i?.title
              }
            </p>
            <Button onClick={() => router.push(`product/${i.id}`)} style={{ width: "100%" }} type='primary'>Details</Button>
          </div>
        ))
      }
    </div>
  )
}

export default ProductView