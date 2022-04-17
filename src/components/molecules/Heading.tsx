import { CSSObject } from "@emotion/react";
import Datetime from "../atoms/DateTime";

type headingType = {
  text: string;
  datetime: string;
};

const headingStyles: CSSObject = {
  padding: "5px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderTop: "1px solid var(--main)",
  cursor: "pointer",
  "&:last-of-type": {
      borderBottom: "1px solid var(--main)"
  },
  h1: {
    padding: 0,
    fontSize: "48px",
    textTransform: "uppercase",
  },
  "&:hover": {
    fontStyle: "italic",
    color: "rgba(0, 0, 0, 0.7)",
  }
};

const Heading = (props: headingType) => (
  <div css={headingStyles}>
    <Datetime value={props.datetime} />
    <h1>{props.text}</h1>
  </div>
);

export default Heading;
