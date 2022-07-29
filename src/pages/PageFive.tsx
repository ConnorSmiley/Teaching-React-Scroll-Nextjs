import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageFiveContainer = styled.div`
    ${tw`
    flex
    w-screen
    h-screen
    bg-pink-500
    
    `}
`

const PageFiveStyle = styled.div`
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

export interface IPageFiveProps {

}

const PageFive: React.FunctionComponent<IPageFiveProps> = () => {

    return(
       <>
        <PageFiveContainer id="page5">
            <PageFiveStyle>
                page 5
            </PageFiveStyle>
        </PageFiveContainer>
       </>
    )
}

export default PageFive
