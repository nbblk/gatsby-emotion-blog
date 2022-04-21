import { CSSObject } from "@emotion/react";
import { graphql, useStaticQuery } from "gatsby";
import { mq } from "../../styles/breakpoints";
import Category from "../atoms/Category";
import ListItem from "../molecules/ListItem";

export const categories = ["All posts", "thoughts", "technology", "arts"];

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
  const query = useStaticQuery(graphql`
    query MdxListQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            slug
          }
        }
      }
    }
  `);

  const filterPost = () => {};

  return (
    <section css={listStyles}>
      <div className="categories">
        {categories.map((item, index) => (
          <Category
            key={item}
            value={item}
            color={index == 0 ? "var(--main)" : "transparent"}
          />
        ))}
      </div>
      {query.allMdx.edges.map((edge: any) => (
        <ListItem
          key={edge.node.id}
          text={edge.node.frontmatter.title}
          datetime={edge.node.frontmatter.date}
          url={edge.node.slug}
        />
      ))}
    </section>
  );
};

export default PostList;
