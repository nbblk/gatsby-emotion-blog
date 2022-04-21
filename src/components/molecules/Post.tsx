import { CSSObject } from "@emotion/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { mq } from "../../styles/breakpoints";
import Layout from "../Layout";
import Heading from "./Heading";
import Subheading from "./Subheading";
import { MDXRenderer } from "gatsby-plugin-mdx";

type postType = {
  subject: string;
  datetime: string;
  imgUrl: string;
  categories: string[];
  content: string;
};

const postStyles: CSSObject = {
  width: "100%",
  padding: "0px 200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  p: {
    lineHeight: "170%",
  },
  button: {
    position: "absolute",
    backgroundColor: "transparent",
    borderRadius: "100%",
    width: "150px",
    height: "150px",
    right: 0,
  },
  "#goBack": {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid var(--main)",
    borderRadius: "100%",
  },
  "#goBack > a": {
    textDecoration: "none",
    color: "var(--main)",
    cursor: "pointer",
  },
  "#goBack > a:hover": {
    color: "rgba(39, 27, 81, 0.7)",
  },
  [mq[0]]: {
    padding: 0,
    "#contentWrapper": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

const query = useStaticQuery(graphql`
  {
    mdx(id: {}) {
      frontmatter {
        title
        date
      }
      id
      body
    }
  }
`);
console.log(query);

const Post = (props: postType) => (
  <Layout>
    <article css={postStyles}>
      <Heading text={props.subject} datetime={props.datetime} />
      <div
        id="contentWrapper"
        css={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Subheading
          categories={["thoughts"]}
          datetime={new Date().toDateString()}
        />
        <div>
          <MDXRenderer>{query.mdx.body}</MDXRenderer>
          <div id="goBack">
            <Link to="/">Go back</Link>
          </div>
        </div>
      </div>
    </article>
  </Layout>
);

export default Post;
