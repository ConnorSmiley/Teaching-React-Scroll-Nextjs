import React from "react";
import styled from "styled-components";
import tw from "twin.macro"
import { scrollToTop } from "react-scroll/modules"

const PageTwoContainer = styled.div`
    ${tw`
    flex
    w-screen
    h-screen
    bg-green-500
    
    `}
`

const PageTwoStyle = styled.div`
    ${tw`
       text-9xl
    w-screen
    h-screen
    text-black
    flex
    items-center
    justify-center
    text-center
    font-extrabold
    uppercase
 
    `}
`

export interface IPageTwoProps {

}

const PageTwo: React.FunctionComponent<IPageTwoProps> = () => {

    return(
       <>
        <PageTwoContainer id="page2">
            <PageTwoStyle >
page 2
            </PageTwoStyle>
        </PageTwoContainer>
       </>
    )
}

export default PageTwo
