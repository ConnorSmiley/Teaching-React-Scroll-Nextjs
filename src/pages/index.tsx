import React from "react";
import PageOne from "@/pages/PageOne";
import PageTwo from "@/pages/PageTwo";
import PageThree from "@/pages/PageThree";
import PageFour from "@/pages/PageFour";
import PageFive from "@/pages/PageFive";
import Navbar from "@/components/Navbar";

export interface IindexProps {

}

const index: React.FunctionComponent<IindexProps> = () => {

    return(
       <>
         <Navbar />
         <PageOne />
         <PageTwo />
         <PageThree />
         <PageFour />
         <PageFive />
       </>
    )
}

export default index
