import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageThreeContainer = styled.div`
    ${tw`
    flex
    w-screen
    h-screen
    bg-blue-500
    
    `}
`

const PageThreeStyle = styled.div`
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

export interface IPageThreeProps {

}

const PageThree: React.FunctionComponent<IPageThreeProps> = () => {

    return(
       <>
        <PageThreeContainer id="page3">
            <PageThreeStyle>
                page 3

            </PageThreeStyle>
        </PageThreeContainer>
       </>
    )
}

export default PageThree
