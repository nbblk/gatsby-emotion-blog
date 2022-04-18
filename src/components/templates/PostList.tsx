import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import Category from "../atoms/Category";
import ListItem from "../molecules/ListItem";

const category = ["All posts", "thoughts", "technology", "arts"];

const data = [
  {
    text: "first post",
    datetime: "April 22 2022",
  },
  {
    text: "second post",
    datetime: "April 22 2022",
  },
  {
    text: "third post",
    datetime: "April 22 2022",
  },
];

const listStyles: CSSObject = {
  width: "60%",
  marginRight: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > .categories": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "left",
    marginBottom: "30px",
  },
  [mq[0]]: {
    width: "100%",
    "& > .categories": {
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

const PostList = () => (
  <section css={listStyles}>
    <div className="categories">
      {category.map((item, index) => (
        <Category
          key={item}
          value={item}
          color={index === 0 ? "var(--main)" : "transparent"}
        />
      ))}
    </div>
    {data.map((item) => (
      <ListItem key={item.text} text={item.text} datetime={item.datetime} />
    ))}
  </section>
);

export default PostList;
