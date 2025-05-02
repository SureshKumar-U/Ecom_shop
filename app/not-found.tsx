"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"

const NotFoundPage = ()=>{
  const router = useRouter()
    return(
       <>
       <div className="flex flex-col items-center justify-center min-h-screen">
          <Image src="/images/logo.svg" width="48" height="48" alt="logo.png"/>
          <div className="shadow-lg rounded-lg">
          <p className="text-destructive font-bold text-2xl my-3 text-center">Requested resource was not existed</p>
        
          <Button variant="outline"   className="block mx-auto mt-2" onClick={()=>router.push("/")}>Go to Home</Button>
          
          </div>
       </div>
       </>
    )
}


export default NotFoundPage