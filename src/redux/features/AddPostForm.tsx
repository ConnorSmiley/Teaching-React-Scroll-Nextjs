import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postsAdded } from "@/redux/features/postSlice";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";
import tw from "twin.macro";


const FormContainer = styled.div`
  ${tw`
    `}
`;

const H2 = styled.h2`
    ${tw`
    font-extrabold
    text-2xl
    uppercase
    pb-2
    
    `}
`

const FormStyles = styled.div`
  ${tw`
  flex
  items-center
  flex-col
    `}
`;

const Section = styled.section`
    ${tw`
    flex
    flex-col
    justify-center
    items-center
    
    `}
`
const Form = styled.form`
    ${tw`
    flex
    items-center
    flex-col
    `}
`

const Input = styled.input`
    ${tw`
    w-80
    h-10
    rounded-md
    py-4
    text-black
    px-2
    
    `}
`

const Textarea = styled.textarea`
    ${tw`
    w-80
    h-28
    mt-2
    text-black
    px-2
    rounded-md
    
    `}
`

const Button = styled.button`
    ${tw`
    text-white
    bg-pink-500
    px-20
    py-1
    rounded-md
    uppercase
    text-xl
    font-extrabold
    my-4
    
    `}
`

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const changeTitle = (e: any) => setTitle(e.target.value);
  const changeContent = (e: any) => setContent(e.target.value);

  const onSave = () => {
    if (title && content) {
      dispatch(
        postsAdded({
          id: nanoid(),
          title,
          content
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <FormContainer>
      <FormStyles>
        <Section>
          <H2> Add New post</H2>
          <Form>
            <Input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={changeTitle}
            />
            <Textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={changeContent}
            />
            <Button type="button" onClick={onSave}>save</Button>
          </Form>
        </Section>
      </FormStyles>
    </FormContainer>
  );
}
