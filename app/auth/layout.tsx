import { ReactNode } from "react";

interface AuthLayoutProps{
    children:ReactNode;
}
const page=({children}:AuthLayoutProps)=>{
    return(
        <>
        {/* <div className="bg-white pl-1 md:pl-32 py-8 rounded-md">
        {children}
        </div> */}
        <div>
        {children}
        </div>
        </>
    )
}

export default page;