import { CSSObject } from "@emotion/react";
import Layout from "../components/Layout";
import { mq } from "../styles/breakpoints";

const aboutStyles: CSSObject = {
  width: "100%",
  height: "auto",
  padding: "200px",
  "& > p": {
    width: "50%",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  lineHeight: "170%",
  [mq[0]]: {
    padding: "50px 0",
    "& > p": {
      width: "100%",
    },
  },
};

const About = () => {
  return (
    <Layout>
      <section css={aboutStyles}>
        <h1>hello!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </Layout>
  );
};

export default About;
