"use client"
import { fetchPayment, fetchUser, initiate } from '@/actions/useraction';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentPage = ({ username }) => {
    const { data: session } = useSession()

    const [paymentform, setpaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    })
    const [currentUser, setCurrentUser] = useState({})
    const [payment, setpayment] = useState([])
    const SearchParams=useSearchParams()

    useEffect(() => {   
        getData()
    }, [])

    useEffect(() => {
        if(SearchParams.get("Paymentdone")=="true"){
        toast('Payment has been made:)', {
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
        }
    }, [session])
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setpaymentform(prevState => ({
            ...prevState,
            [name]: value
        }));
        // console.log({ ...paymentform, [name]: value });
    }

    const getData = async () => {
        let user = await fetchUser(username);
        setCurrentUser(user);
        let payment = await fetchPayment(username)
        setpayment(payment);
        // console.log(user, payment);
    }

    const pay = async (amount) => {
        try {
            // Log payment initiation data
            // console.log('Initiating payment with:', { amount, username, paymentform });

            // Get the order id from the initiate function
            let response = await initiate(amount, username, paymentform);
            let orderId = response.id;

            // Log the received orderId
            // console.log('Received orderId:', orderId);

            // Configure Razorpay options
            var options = {
                "key": currentUser.razorpayid, // Use NEXT_PUBLIC for client-side environment variables process.env.NEXT_PUBLIC_KEY_ID  currentUser.razorpayid
                "amount": amount, // Amount in currency subunits (100 paise = 1 INR)
                "currency": "INR",
                "name": "get me a chai",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": orderId, // Dynamic orderId
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": {
                    "name": paymentform.name,
                    "email": session.user.email || "",
                    "contact": "9790263765"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                },
                "config": {
                    display: {
                        blocks: {
                            banks: {
                                name: 'Most Used Methods',
                                instruments: [
                                    {
                                        method: 'wallet',
                                        wallets: ['freecharge']
                                    },
                                    {
                                        method: 'upi'
                                    },
                                ],
                            },
                        },
                        sequence: ['block.banks'],
                        preferences: {
                            show_default_blocks: true,
                        },
                    },
                }
            };


            var rzp1 = new Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment initiation failed", error);
        }


    }
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className=" bg-cover bg-center h-screen flex flex-col gap-2 justify-center items-center relative" style={{ backgroundImage: `url('/background.jpg')` }}>
                <h1 className=" mt-5 font-bold text-center p-4 text-2xl top-10  ">Your profile </h1>
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
                    @{username}
                </div>

                <div className="flex  gap-5 w-full md:w-[80%]  mb-2 flex-col justify-center items-center md:flex-row">
                    <div className="bg-black bg-opacity-80 rounded-lg text-center w-[80%] md:w-1/2   flex flex-col gap-2 p-10  ">
                        <h2 className='mb-5 '>Supporters</h2>
                        {payment.map((p, i) => {
                            return <div key={i} className='flex'><Image width={25} height={20} src={"/work.png"} alt='profile' /><p>{p.name} Donated <span className="font-bold">₹{p.amount} </span> with a message {p.message}</p></div>

                        })}


                    </div>
                    <div className="bg-black bg-opacity-80 rounded-lg text-center w-[80%] h-full md:w-1/2 mb-10   p-10">
                        <h2 className='pb-5'>Make a payment</h2>
                        <input onChange={handleChange} value={paymentform.name} name='name' type="text" id='username' className='rounded-md  w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter your name' />
                        <input onChange={handleChange} value={paymentform.message} name='message' type="text" id='message' className='rounded-md w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter the message' />
                        <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" id='amount' className='rounded-md  w-full bg-gray-800 bg-opacity-50 p-2 m-1.5' placeholder='Enter amount' />
                        <button disabled={paymentform.name.length < 3 || paymentform.message.length < 3 || paymentform.amount.length < 1} onClick={() => pay(Number.parseInt(paymentform.amount * 100))} type="number" className="disabled:bg-slate-600 w-full m-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>
                        <div className="payamount">
                            <button onClick={() => pay(1000)} className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹10</button>
                            <button onClick={() => pay(2000)} className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹20</button>
                            <button onClick={() => pay(3000)} className="m-1.5 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">pay ₹30</button>

                        </div>
                    </div>
                </div>
                        

            </div>
        </>)
}

export default PaymentPage