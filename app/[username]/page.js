"use client"
import { useSession } from "next-auth/react";
import Image from 'next/image';

const Page = ({ params }) => {
  const { data: session } = useSession()
  return (
    <>
      <div className=" bg-cover bg-center h-screen flex flex-col gap-2 justify-center items-center" style={{ backgroundImage: `url('/background.jpg')` }}>
      <h1 className=" mt-5 font-bold text-center p-4 text-2xl">Your profile </h1>
      {session && session.user && (
        <div className="mx-2 rounded-full ">
          {session.user.image && (
            <Image
              className="rounded-full"
              width={128}
              height={128}
              src={session.user.image}
              alt="User Image"
              unoptimized // Add this if the image is animated  
            />
          )}
        </div>
      )}
      <div className="text-lg font-bold text-center">
        @{params.username}
      </div>

        <div className="flex  gap-5 w-[80%] h[90%]  mb-2">
          <div className="bg-black bg-opacity-80 rounded-lg text-center w-1/2  flex flex-col gap-2 p-10  ">
            <h2 className='mb-5 '>Supporters</h2>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>
            <div className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>ajith doanted <span className="font-bold">$20 </span> with a message i support you bro</p></div>


          </div>
          <div className="bg-black bg-opacity-80 rounded-lg text-center w-1/2   p-10">
            <h2 className='pb-5'>Make a payment</h2>
            <input type="text" id='username' className='rounded-md  w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter your name' />
            <input type="text" id='message' className='rounded-md w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter the message' />
            <input type="text" id='amount' className='rounded-md  w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter amount' />
            <button type="number" className=" w-full m-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>
            <div className="payamount">
            <button className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹10</button>
            <button className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹20</button>
            <button className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹30</button>

            </div>
          </div>
        </div>
        

      </div>

    </>
  )
}

export default Page