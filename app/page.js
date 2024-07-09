import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative top-5 bottom-5 text-white  h-[44vh] m-6 md:m-0 items-center">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="absolute  top-5 flex flex-col justify-center items-center gap-y-5">
            <div className=" text-3xl flex">Buy Me a Chai <span><img src="/tea.gif" alt="tea" width={'40px'} /></span></div>
            <p className="text-xl">A crowdfunding for creators, Get funded by the fans and followers. Start now!</p>
            <div className="">
              <Link href={"/dashboard"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Start Now!
                  </span>
                </button>
              </Link>
              <Link href={"/about"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Read More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-10 sm:top-0; w-full h-0.5 bg-gray-700"></div>
      <div className=" gap-y-5  container mx-auto py-14  ">
        <p className="text-white text-center pb-9 text-2xl font-bold">Your Fans can buy you a Chai</p>
        <div className="flex justify-around items-center m-6 md:m-0 gap-2 md:gap-0 text-xs md:text-xl">
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold  md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold  md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>

        </div>

      </div>
      <div className="w-full h-0.5 bg-gray-700"></div>
      <div className=" gap-y-5  container mx-auto py-14  ">
        <p className="text-white text-center pb-9 text-2xl font-bold">Your Fans can buy you a Chai</p>
        <div className="flex justify-around items-center m-6 md:m-0 gap-2 md:gap-0 text-xs md:text-xl">
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold  md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <Image src="/work.png" alt="tea" width={80} height={80} />
            <p className="font-bold  md:text-xl" >Fans want to help</p>
            <p className="text-center">You fans are available to support you</p>
          </div>

        </div>

      </div>

    </>

  );

}
export const metadata = {
  title: 'Home-Get Me A Chai',
  description: 'Home page   -Get Me A Chai'
}
