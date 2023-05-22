"use client"
import { getMe } from '@/redux/Slices/userSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux';
import { RiDashboardLine } from "react-icons/ri"



const Header = () => {

    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector(state => state.user);


    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='h-28 flex justify-between items-center text-sm  font-opensans mx-16 cursor-pointer'>
                <div className='flex items-center gap-x-9'>
                    <p className='font-extrabold text-lg'>Tax<span className='text-blue-700'>Pal</span></p>
                    <p className='hover:text-pink-400 hidden md:block'><Link href={"/"}>Shop</Link></p>
                    <p className='hover:text-pink-400 hidden md:block'><Link href={"/about"}>About</Link></p>
                </div>
                {isAuthenticated ? (
                    <div className='flex gap-x-9 items-center  '>
                        {user && user.role === 'admin' && (<button className=' text-blue-600  text-2xl font-semibold px-4 py-[0.5rem] rounded-full'><Link href={"/admin"}><RiDashboardLine /></Link></button>)}
                        <p className='hover:text-pink-400 hidden text-xl md:block'><Link href={"/me"}><CgProfile /></Link></p>
                        <button className=' text-blue-600  text-2xl font-semibold px-4 py-[0.5rem] rounded-full'><Link href={"/cart"}><AiOutlineShoppingCart /></Link></button>
                    </div>
                ) : (
                    <div className='flex gap-x-9 items-center  '>
                        <p className='hover:text-pink-400 hidden md:block'><Link href={"/register"}>Sign in</Link></p>
                        <p className='hover:text-pink-400 hidden md:block'><Link href={"/login"}>Login</Link></p>
                        <button className=' text-blue-600  text-2xl font-semibold px-4 py-[0.5rem] rounded-full'><Link href={"/cart"}><AiOutlineShoppingCart /></Link></button>
                    </div>
                )
                }
            </div>
            <div aria-controls="mobile-menu" onClick={() => setIsOpen(!isOpen)} className='text-2xl absolute top-11 right-5 cursor-pointer md:hidden'>
                <RxHamburgerMenu className={`${isOpen ? 'hidden' : 'block'}`} />
                <RxCross1 className={`${isOpen ? 'block' : 'hidden'}`} />
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}  flex justify-center md:hidden`} id='mobile-menu' >
                <div className=' bg-white w-[90vw] h-[14rem] text-[1.1rem] font-opensans mx-auto shadow-md rounded-2xl border border-[#ebe1e1]'>
                    <div onClick={() => setIsOpen(!isOpen)} className='mx-6 cursor-pointer'>
                        <p className='mt-5 hover:bg-[#410f34] hover:text-white py-1 rounded-lg'><Link href={"/"}>Shop</Link></p>
                        <p className='mt-5 hover:bg-[#410f34] hover:text-white py-1 rounded-lg mb-3'><Link href={"/about"}>About</Link></p>
                        <hr />
                        {isAuthenticated ? (
                            <div>
                                <p className='mt-4 mb-4 text-2xl hover:bg-[#410f34] hover:text-white py-1 rounded-lg'><Link href={"/me"}><CgProfile /></Link></p>
                            </div>
                        ) : (
                            <div>
                                <p className='mt-4 hover:bg-[#410f34] hover:text-white py-1 rounded-lg'><Link href={"/register"}>Sign in</Link></p>
                                <p className='mt-4 hover:bg-[#410f34] hover:text-white py-1 rounded-lg'><Link href={"/login"}>Login</Link></p>
                            </div>
                        )
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header