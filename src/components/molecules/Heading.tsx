import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import Datetime from "../atoms/DateTime";

type headingType = {
  text: string;
  datetime: string;
};

const headingStyles: CSSObject = {
  width: "50%",
  marginBottom: "30px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  cursor: "pointer",
  borderTop: "1px solid var(--main)",
  borderBottom: "1px solid var(--main)",
  h1: {
    margin: "20px 0",
    padding: 0,
    fontSize: "48px",
    textTransform: "uppercase",
  },
  [mq[0]]: {
    width: "100%",
    textAlign: "center",
  },
};

const Heading = (props: headingType) => (
  <div css={headingStyles}>
    <h1>{props.text}</h1>
  </div>
);

export default Heading;
