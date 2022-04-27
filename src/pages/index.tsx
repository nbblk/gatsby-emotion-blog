import { CSSObject } from "@emotion/react";
import PostList from "../components/templates/PostList";
import { mq } from "../styles/breakpoints";
import "../styles/global.css";

import Layout from "../components/Layout";

const wrapperStyles: CSSObject = {
  padding: "50px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  img: {
    display: "block",
  },
  [mq[0]]: {
    flexDirection: "column-reverse",
    img: {
      display: "none",
    },
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <div css={wrapperStyles}>
        <PostList />
        <img src="./main.jpg" width="500px" height="800px"></img>
      </div>
    </Layout>
  );
};

export default IndexPage;
