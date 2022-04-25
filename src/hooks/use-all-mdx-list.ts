import { graphql, useStaticQuery } from "gatsby";

export const useMdxListQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    query MdxListQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              date
              category
            }
            slug
          }
        }
      }
    }
  `);
  return allMdx.edges;
};
