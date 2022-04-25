import { MouseEvent, useEffect, useState } from "react";
import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import Category from "../atoms/Category";
import ListItem from "../molecules/ListItem";
import { useMdxListQuery } from "../../hooks/use-all-mdx-list";

export const categories = ["all posts", "thoughts", "technology", "arts"];

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

export type categoryTypes = "all posts" | "thought" | "technology" | "arts";

const PostList = () => {
  const [list, setList] = useState({
    items: [],
    filtered: [],
    filter: "all posts",
  });
  const fullList = useMdxListQuery();

  const clickFilter = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      setList({
        ...list,
        items: [...list.items],
        filter: event.target.dataset.category!.toString(),
      });
    }
  };

  const filterPostsByCategory = () => {
    const found = list.items.filter(
      (edge: any) => edge.node.frontmatter.category === list.filter
    );
    setList({ ...list, items: [...list.items], filtered: found });
  };

  const items = (edge: any) => (
    <ListItem
      key={edge.node.id}
      text={edge.node.frontmatter.title}
      datetime={edge.node.frontmatter.date}
      url={edge.node.slug}
    />
  );

  useEffect(() => {
    if (list.filter === "all posts") {
      setList({ ...list, items: fullList });
    } else {
      filterPostsByCategory();
    }
  }, [list.filter]);

  return (
    <section css={listStyles}>
      <div className="categories">
        {categories.map((item, index) => (
          <Category key={index} value={item} click={clickFilter} />
        ))}
      </div>
      {list.filter === "all posts"
        ? list.items.map(items)
        : list.filtered.map(items)}
    </section>
  );
};

export default PostList;
