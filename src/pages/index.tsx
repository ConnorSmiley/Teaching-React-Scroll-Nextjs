import { NextPage } from "next";
import Counter from "@/pages/Counter";
import Posts from "@/pages/Posts";


const IndexPage: NextPage = () => {
  return (
    <>
      <Posts />
    </>
  );
};

export default IndexPage;
