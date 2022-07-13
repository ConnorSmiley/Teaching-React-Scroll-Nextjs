import { NextPage } from "next";
import React from "react";
import PostList from "@/redux/features/PostList";

const IndexPage: NextPage = () => {

  return (
    <>
      <PostList />
    </>
  );
};

export default IndexPage;
