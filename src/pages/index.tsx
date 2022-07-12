import { NextPage } from "next";
import { useSelector } from "react-redux";
import { allPosts } from "@/redux/features/postSlice";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PostList from "@/redux/features/PostList";



const IndexPage: NextPage = () => {

  return (
    <>
      <PostList />
    </>
  );
};

export default IndexPage;
