"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    const { data: session } = useSession()

    return (
        <>
            <nav className='bg-[#0a0909] flex justify-around  text-white h-14 items-center'>
                <Link href={'/'}>
                    <div className='logo font-bold flex justify-start items-center text-2xl'>GetMeaChai!<span><img src="/tea.gif" alt="tea" width={'40px'} /></span></div></Link>

                <div>
                    {session && <Link href={'/bashboard'}>
                        <button className=" top-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                dashboard
                            </span>
                        </button>
                    </Link>
                    }
                    {session && <button onClick={() => { signOut("github") }} className=" top-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            logout
                        </span>
                    </button>
                    }

                    {!session &&
                        <Link href={'/login'}>
                            <button className=" top-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Login
                                </span>
                            </button>
                        </Link>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar