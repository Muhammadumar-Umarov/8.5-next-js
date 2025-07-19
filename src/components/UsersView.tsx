"use client"
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const UsersView = ({ data }: { data: any }) => {
  const router = useRouter()
  return (
    <div className='container mx-auto grid grid-cols-4 gap-6'>
      {
        data?.map((i:any) => (
          <div key={i.id} className='border h-[300px] relative flex flex-col items-center py-4 px-2'>
            <div className='w-full h-[150px] mb-[20px]'>
              <img src={i?.image} className='object-contain w-full h-full' alt="" />
            </div>
            <p className='font-bold'>{i?.firstName} {i.lastName}</p>
            <p className='flex-1/2 text-[14px]'>{i.email}</p>
            <Button onClick={() => router.push(`/users/${i.id}`)} style={{ width: "100%" }} type='primary'>Save</Button>
          </div>
        ))
      }
    </div>
  )
}

export default UsersView