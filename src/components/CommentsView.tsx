"use client"
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const CommentsView = ({ data }: { data: any }) => {
    const router = useRouter()
    return (
        <div className='container mx-auto grid grid-cols-4 gap-6'>
            {
                data?.map((i: any) => (
                    <div key={i.id} className='border h-[300px] relative flex flex-col items-center py-4 px-2'>
                        <h2 className='font-bold text-[20px] italic line-clamp-2 h-full'>{i.body}</h2>
                        <div className='flex-1/3' />
                        {
                            <p>User: {i?.user?.fullName}</p>
                        }
                        {
                            <p className='flex-1/2'>User ID: {i?.user?.id}</p>
                        }
                        <Button onClick={() => router.push(`/comments/${i.id}`)} style={{ width: "100%" }} type='primary'>Save</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentsView