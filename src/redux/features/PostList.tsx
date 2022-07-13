import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { allPosts } from "@/redux/features/postSlice";
import AddPostForm from "@/redux/features/AddPostForm";

const Container = styled.div`
  ${tw`
  bg-black
  w-screen
  h-screen
  flex
  justify-center
  items-center
    `}
`;

const Styles = styled.div`
  ${tw`
  text-white
  flex
  flex-col
  items-center
    
    `}
`;

const MappedContainer = styled.div`
  ${tw`
  flex
  items-center
  border-2
  border-white
  w-[40em]
    
    `}
`;

const MappedStyles = styled.div`
  ${tw`
  flex
  p-4
    `}
`;

const ListStyles = styled.div`
  ${tw`
  text-white
  text-2xl 
  uppercase
  font-extrabold
    
    `}
`;

export default function PostList() {
  const posts = useSelector(allPosts);

  const mapped = posts.map(x => (
    <MappedContainer>
      <MappedStyles>
        <ListStyles>
        <article key={x.id}>
          <h3>{x.title}</h3>
          <p>{x.content}</p>
        </article>
        </ListStyles>
      </MappedStyles>
    </MappedContainer>
  ));


  return (
    <>
      <Container>
        <Styles>
          <AddPostForm />
          {mapped}
        </Styles>
      </Container>
    </>
  );
}
