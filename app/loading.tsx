

import Image from "next/image"

const LoadingPage = ()=>{

    return(
        <div className="h-screen flex justify-center items-center">
            <Image src={"/loader.gif"} width="50" height="50" alt="loader.gif"/>
        </div>
    )
}
export default LoadingPage