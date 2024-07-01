"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from 'styled-components';


const ProfileCard = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 100%;
`;


const UserName = styled.h2`
  margin: 10px 0;
`;

const UserDetails = styled.p`
  margin: 10px 0;
`;

const DonateButton = styled.button`
  background-color: #ff5a5f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;

  &:hover {
    background-color: #ff4040;
  }
`;
const Dashboard = () => {
  const { data: session } = useSession()
  console.log(session)
  if (!session) {
    const router = useRouter()
    router.push('/login')
  }
  const handleDonate = () => {
    // Handle the donation logic here
    alert('Thank you for your donation!');
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center">

        <h1 >Welcome,!</h1>
        <p className="mb-10">This is your personal dashboard where you can view and manage your donations.</p>
        <ProfileCard className="text-white">
          <div className="flex justify-center"><Image width={75} height={75} src="/work.png" alt="profile  " /></div>
          <UserName>John Doe</UserName>
          <UserDetails>Software Developer at XYZ Company</UserDetails>
          <UserDetails>Location: San Francisco, CA</UserDetails>
          <DonateButton onClick={handleDonate}>Donate</DonateButton>
        </ProfileCard>
      </div>
      <div className="detalisCollection  w-full">
        <form action="" className="mx-auto max-w-lg flex flex-col gap-2">
          <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="profilepic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
            <input type="text" id="profilepic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="coverpic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input type="text" id="coverpic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="Razorpayid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
            <input type="text" id="Razorpayid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div>
            <label for="Razorpaysecret" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
            <input type="text" id="Razorpaysecret" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          </div>
          <div className="text-center">
          <button type="number" className="my-3 w-fit  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
          </div>
        </form>
      </div>

    </>)
}

export default Dashboard