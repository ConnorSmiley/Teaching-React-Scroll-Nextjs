import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageFourContainer = styled.div`
    ${tw`
    flex
    w-screen
    h-screen
    bg-purple-500
    
    `}
`

const PageFourStyle = styled.div`
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

export interface IPageFourProps {

}

const PageFour: React.FunctionComponent<IPageFourProps> = () => {

    return(
       <>
        <PageFourContainer id="page4">
            <PageFourStyle>
                page 4

            </PageFourStyle>
        </PageFourContainer>
       </>
    )
}

export default PageFour
