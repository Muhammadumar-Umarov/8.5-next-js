import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='h-[70px] bg-[#1e293b] flex items-center justify-center'>
            <div className='text-white container mx-auto flex items-center justify-between'>
                <div>
                    <Link href={"/"}>
                        <span className='font-bold text-3xl cursor-pointer'>Logo</span>
                    </Link>
                </div>
                <ul className='flex items-center gap-4'>
                    <li>
                        <Link href={"/"}>
                            <span className='hover:text-white text-white transition-colors duration-300'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/comments"}>
                            <span className='hover:text-white text-white transition-colors duration-300'>Comments</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/recipes"}>
                            <span className='hover:text-white text-white transition-colors duration-300'>Recipes</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/users"}>
                            <span className='hover:text-white text-white transition-colors duration-300'>Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header