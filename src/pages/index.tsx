import { CSSObject } from "@emotion/react";
import Header from "../components/organisms/Header";
import PostList from "../components/templates/PostList";
import { mq } from "../styles/breakpoints";
import "../styles/global.css";

const wrapperStyles: CSSObject = {
  padding: "50px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [mq[0]]: {
    flexDirection: "column-reverse",
    "img": {
      marginBottom: "30px"
    }
  },
};

const IndexPage = () => (
  <main>
    <Header />
    <div css={wrapperStyles}>
      <PostList />
      <img src="main.jpg" width={"40%"}></img>
    </div>
    <footer />
  </main>
);

export default IndexPage;
