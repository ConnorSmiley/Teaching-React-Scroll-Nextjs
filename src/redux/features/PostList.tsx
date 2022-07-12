import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { allPosts } from "@/redux/features/postSlice";
import AddPostForm from "@/redux/features/AddPostForm";

const MappedContainer = styled.div`
  ${tw`
  bg-black
  w-screen
  h-screen
  flex
  justify-center
  items-center
    
    `}
`;

const MappedStyles = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    `}
`;

const ListStyles = styled.div`
  ${tw`
  text-white
  text-4xl 
  uppercase
  font-extrabold
    
    `}
`;

export default function PostList() {
  const posts = useSelector(allPosts);

  const mapped = posts.map(x => (
    <article key={x.id}>
      <h3>{x.title}</h3>
      <p>{x.content}</p>
    </article>
  ));


  return (
    <>
      <MappedContainer>
        <MappedStyles>
          <ListStyles>
            <AddPostForm />
            {mapped}
          </ListStyles>
        </MappedStyles>
      </MappedContainer>
    </>
  );
}
