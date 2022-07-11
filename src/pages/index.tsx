import { NextPage } from 'next';
import tw from 'twin.macro';
import styled from "styled-components";


const HomeContainer = styled.div`
    ${tw`
    bg-black
    w-screen
    h-screen
    
    `}
`

const IndexPage: NextPage = () => {

  return (
    <HomeContainer>
    </HomeContainer>
  );
};

export default IndexPage;
