  "use client"
  import PageNotFound from "@/components/pageNotFound";
import PaymentPage from "@/components/PaymentPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
  const Page = ({ params }) => {

    const { data: session } = useSession()
    useEffect(() => {
      document.title= `Payment Page for ${params.username}`,
      document.description= `Payment page for ${params.username}`
    }, [])
    
    // If session is not loaded yet, return null or loading indicator
    const router = useRouter();

    // If session is not loaded yet, return a loading indicator or null
    if (!session) return "Loading session...";
  
    // Return null if no username is provided in the URL
    if (!params.username) return "No username provided in the URL";
  
    // Check if the logged-in user matches the username in params
    if (!session.user || session.user.name !== params.username) {
      // Redirect to a 404 page or handle unauthorized access
      return <PageNotFound />;
    }
    return (
      <>
        <PaymentPage username={params.username}/>

      </>
    )
  }

  export default Page

  
