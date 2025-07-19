import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='h-[70px] bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#4b5563] flex items-center justify-center'>
            <div className='text-white container mx-auto flex items-center justify-between'>
                <div>
                    <Link href={"/"}>
                        <span className='font-bold text-3xl cursor-pointer'>Logo</span>
                    </Link>
                </div>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link href={"/"}>
                            <span className='hover:text-white text-gray-300 transition-colors duration-300'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/comments"}>
                            <span className='hover:text-white text-gray-300 transition-colors duration-300'>Comments</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/recipes"}>
                            <span className='hover:text-white text-gray-300 transition-colors duration-300'>Recipes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/users"}>
                            <span className='hover:text-white text-gray-300 transition-colors duration-300'>Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header