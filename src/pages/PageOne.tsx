import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageOneContainer = styled.div`
    ${tw`
    flex
    bg-gray-500
    w-screen
    h-screen
    
    `}
`

const PageOneStyle = styled.div`
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

export interface IPageOneProps {

}

const PageOne: React.FunctionComponent<IPageOneProps> = () => {

    return(
       <>
        <PageOneContainer id="page1">
            <PageOneStyle>
                Page 1

            </PageOneStyle>
        </PageOneContainer>
       </>
    )
}

export default PageOne
