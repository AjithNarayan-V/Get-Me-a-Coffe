"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Navbar = () => {

    const { data: session } = useSession()
    const [showdropdown, setshowdropdown] = useState(false)

    return (
        <>
            <nav className='bg-[#0a0909] flex justify-around  text-white h-14 items-center'>
                <Link href={'/'}>
                    <div className='logo font-bold flex justify-start items-center text-2xl'>GetMeaChai!<span><Image height={40}  src="/tea.gif" alt="tea" width={40} /></span></div></Link>

                <div>
                    {session && <><div
                        className="relative inline-block"
                        onMouseEnter={() => setshowdropdown(true)}
                        onMouseLeave={() => setshowdropdown(false)}
                    >
                        <button
                            id="dropdownInformationButton"
                            data-dropdown-toggle="dropdownInformation"
                            className="relative mx-4 my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            <div className="w-6 mx-2 rounded-full">
                                <Image width={25} height={25}  src={session.user.image } alt="Image  " />
                            </div>
                            Account
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        <div
                            id="dropdownInformation"
                            className={`z-10 ${showdropdown ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                        >
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div>{session.user.name}</div>
                                <div className="font-medium truncate">{session.user.email}</div>
                            </div>
                            <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownInformationButton"
                            >
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Earnings
                                    </Link>
                                </li>
                            </ul>
                            <div className="py-2">
                                <Link
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    onClick={() => {
                                        signOut("github");
                                    }}
                                >
                                    Sign out
                                </Link>
                            </div>
                        </div>
                    </div></>


                    }
                    {/* {session && <button onClick={() => { signOut("github") }} className=" top-1 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            logout
                        </span>
                    </button>
                    } */}

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