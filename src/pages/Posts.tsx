import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useDispatch, useSelector } from "react-redux";

const HomeContainer = styled.div`
  ${tw`
    bg-black
    w-screen
    h-screen
    `}
`;

const MappedContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    
    `}
`;

const MappedStyles = styled.div`
  ${tw`
    text-white
    text-xl
    uppercase
    w-80
    
    `}
`;


export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts);


  const mapped = posts.map(x => (
    <>
      <MappedContainer>
      <MappedStyles>
        <h1>{x.title}</h1>
        <p>{x.content}</p>
      </MappedStyles>
      </MappedContainer>
    </>
  ));

  return (
    <>
      <HomeContainer>
          {mapped}
      </HomeContainer>
    </>
  );
}
