"use client"
import { fetchUser, updateProfile } from "@/actions/useraction";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: "",
    userrole: "",
    userlocation: ""
  })

  // const getdata = async () => {  //checkpoint 1
  //   if (session) {
  //     let user = await fetchUser(session.user.name);
  //     setForm(user);
  //     // session.user = user.username;
  //     console.log("setform", form)
  //   }
  // };
  const getdata = async () => {
    if (session) {
      try {
        let user = await fetchUser(session.user.name);
        if (user) {
          setForm(user);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };


  useEffect(() => {
    getdata();
  }, [session])

  useEffect(() => {
    // getdata();
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  if (!session) {
    return "Login to access"; // Show nothing or a loader while redirecting
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
    // console.log({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(form, session.user.name);
      session.user.name = form.username
      // alert(session.user.name) 
      // console.log(session.user.name);
      toast('Profile updated!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast('Failed to update profile', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };


  const handleDonate = () => {
    // Handle the donation logic here 
    // console.log(form.username  )
    router.push(`/${form.username}`);

  };
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

  const isValidURL = (url) => {
    return url && (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://'));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="flex flex-col justify-center items-center m-6 md:m-0">

        <h1 >Welcome,!</h1>
        <p className="mb-10 sm:mx-4">This is your personal dashboard where you can view and manage your donations.</p>
        <ProfileCard className="text-white">
          <div className="flex justify-center"><img className="rounded-full" width={95} height={95} src={isValidURL(form.profilepic) ? form.profilepic : "/work.png"} alt="profile" />
          </div>
          <UserName>{form.username}</UserName>
          <UserDetails>{form.userrole}</UserDetails>
          <UserDetails>{form.userlocation}</UserDetails>
          <DonateButton onClick={handleDonate}>Donate</DonateButton>
        </ProfileCard>
      </div>
      <div className="detalisCollection  md:w-full m-6 md:m-0 ">
        <form onSubmit={handleSubmit} className="mx-auto max-w-lg flex flex-col gap-2" >
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input onChange={handleChange} value={form.name ? form.name : ""} name="name" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input onChange={handleChange} value={form.email ? form.email : ""} name="email" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input onChange={handleChange} value={form.username ? form.username : ""} name="username" type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
            <input onChange={handleChange} value={form.profilepic ? form.profilepic : ""} name="profilepic" type="text" id="profilepic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input onChange={handleChange} value={form.coverpic ? form.coverpic : ""} name="coverpic" type="text" id="coverpic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="Razorpayid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Id</label>
            <input onChange={handleChange} value={form.razorpayid ? form.razorpayid : ""} name="razorpayid" type="text" id="Razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="Razorpaysecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Razorpay Secret</label>
            <input onChange={handleChange} value={form.razorpaysecret ? form.razorpaysecret : ""} name="razorpaysecret" type="text" id="Razorpaysecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="userrole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
            <input onChange={handleChange} value={form.userrole ? form.userrole : ""} name="userrole" type="text" id="userrole" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div>
            <label htmlFor="userlocation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input onChange={handleChange} value={form.userlocation ? form.userlocation : ""} name="userlocation" type="text" id="userlocation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
          </div>
          <div className="text-center">
            <button type="submit" className="my-3 w-fit  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
          </div>
        </form>
      </div>

    </>)
}

export default Dashboard