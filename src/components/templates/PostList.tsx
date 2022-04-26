import { MouseEvent, useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import Category from "../atoms/Category";
import ListItem from "../molecules/ListItem";
import { useMdxListQuery } from "../../hooks/use-all-mdx-list";
import Button from "../atoms/Button";

import "./listItem.css";

export type categoryTypes = "all posts" | "thought" | "technology" | "arts";

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

const PostList = () => {
  const categories = ["all posts", "thoughts", "technology", "arts"];
  const fullList: [] = useMdxListQuery();

  const [list, setList] = useState({
    items: [],
    filtered: [],
    filter: "all posts",
  });

  const [loadMore, setLoadMore] = useState(false);

  const [hasMore, setHasMore] = useState(list.items.length > 10);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

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
    return found;
  };

  useEffect(() => {
    if (list.filter === "all posts") {
      setList({ ...list, items: [...fullList.slice(0, 10)] });
    } else {
      const found = filterPostsByCategory();
      setList({ ...list, filtered: [...found.slice(0, 10)] });
    }
  }, [list.filter]);

  useEffect(() => {
    if (loadMore && hasMore) {
      let items, currentLength, total;
      if (list.filter === "all posts") {
        items = list.items;
        currentLength = items.length;
        total = fullList;
      } else {
        items = list.filtered;
        currentLength = items.length;
        total = filterPostsByCategory();
      }
      const isMore = currentLength < total.length;
      const nextResults = isMore
        ? total.slice(currentLength, currentLength + 10)
        : [];

      list.filter === "all posts"
        ? setList({ ...list, items: [...items, ...nextResults] })
        : setList({ ...list, filtered: [...items, ...nextResults] });
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMore = list.items.length < fullList.length;
    setHasMore(isMore);
  }, [list.items]);

  const items = (edge: any) => (
    <CSSTransition key={edge.node.id} timeout={500} classNames="listItem">
      <ListItem
        key={edge.node.id}
        text={edge.node.frontmatter.title}
        datetime={edge.node.frontmatter.date}
        url={edge.node.slug}
      />
    </CSSTransition>
  );

  return (
    <section css={listStyles}>
      <div className="categories">
        {categories.map((item, index) => (
          <Category key={index} value={item} click={clickFilter} />
        ))}
      </div>
      <TransitionGroup component={null}>
        {list.filter === "all posts"
          ? list.items.map(items)
          : list.filtered.map(items)}
      </TransitionGroup>
      {hasMore ? (
        <Button
          value={"LOAD MORE"}
          color={"transparent"}
          click={handleLoadMore}
          style={{
            margin: "1rem",
            width: "200px",
            "&:hover": { backgroundColor: "var(--main)", color: "white" },
            [mq[0]]: { width: "100%" },
          }}
        />
      ) : (
        <p>- END -</p>
      )}
    </section>
  );
};

export default PostList;
