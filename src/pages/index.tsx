import { CSSObject } from "@emotion/react";
import Post from "../components/molecules/Post";
import Footer from "../components/organisms/Footer";
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
    img: {
      display: "none",
    },
  },
};

const dummyText = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
];
const IndexPage = () => (
  <main>
    <Header />
    <div css={wrapperStyles}>
      {/* <PostList /> */}
      {/* <img src="main.jpg" width={"40%"}></img> */}
      <Post
        subject={"sample post 1"}
        datetime={new Date().toString()}
        imgUrl={"tea.jpg"}
        categories={["slice-of-life", "thoughts"]}
        content={dummyText[0]}
      />
    </div>
    <Footer />
  </main>
);

export default IndexPage;
