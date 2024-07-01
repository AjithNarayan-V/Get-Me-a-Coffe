"use client"
import { signIn, useSession } from "next-auth/react";
import Head from 'next/head';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Login() {

    const { data: session } = useSession()
    console.log(session)
    if(session) {
        const router=useRouter()
        router.push('/dashboard')
      
    }
   
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  p-4">
            <Head>
                <title>Login</title>
            </Head>
            <p className='text-3xl font-bold text-white my-5'>Login here</p>

            <button className="flex items-center bg-white border rounded-lg shadow-md w-64 p-2 mb-2 text-gray-800 hover:bg-gray-200">
                <div className="h-6 w-6 mr-2" >
                    <Image width={20} height={20} src="/google.png" alt="google" />
                </div>
                <span>Continue with Google</span>
            </button>

            <button className="flex items-center bg-white border rounded-lg shadow-md w-64 p-2 mb-2 text-gray-800 hover:bg-gray-200">
                <div className="h-6 w-6 mr-2" >
                    <Image width={20} height={20} src="/linkedin.png" alt="linkedin" />
                </div>
                <span>Continue with LinkedIn</span>
            </button>

            <button className="flex items-center bg-white border rounded-lg shadow-md w-64 p-2 mb-2 text-gray-800 hover:bg-gray-200">
                <div className="h-6 w-6 mr-2" >
                    <Image width={20} height={20} src="/twitter.png" alt="twitter" />
                </div>
                <span>Continue with Twitter</span>
            </button>

            <button className="flex items-center bg-white border rounded-lg shadow-md w-64 p-2 mb-2 text-gray-800 hover:bg-gray-200">
                <div className="h-6 w-6 mr-2" > 
                    <Image width={20} height={20} src="/facebook.png" alt="facebook" />
                </div>
                <span>Continue with Facebook</span>
            </button>
            <button onClick={() => signIn("github")} className="flex items-center bg-white border rounded-lg shadow-md w-64 p-2 mb-2 text-gray-800 hover:bg-gray-200">
                <div className="h-6 w-6 mr-2" >
                    <Image width={20} height={20} src="/Github.png" alt="facebook" />
                </div>
                <span>Continue with GitHub</span>
            </button>


            <div className="relative my-4 w-64 text-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full  border-gray-300"></div>
                </div>
                <div className="relative  px-4 text-gray-500">or</div>
            </div>

            <form className="w-64 space-y-4">
                <div className=''>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                        Email address
                    </label>
                    <input type="email" name="email" id="email" required className="h-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-white">
                        Password
                    </label>
                    <input type="password" name="password" id="password" required className="h-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm" />
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center ">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-white border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="text-white hover:text-gray-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                    Sign in
                </button>
            </form>

            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                    Don’t have an account? <a href="#" className="text-white hover:text-gray-500">Sign up</a>
                </p>
            </div>
        </div>
    );
}
