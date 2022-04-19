import { CSSObject } from "@emotion/react";

const datetimeStyle: CSSObject = {
  margin: "15px",
  color: "var(--main)",
  textTransform: "uppercase",
};

const Datetime = (props: { value: string }) => (
  <span css={datetimeStyle}>{props.value}</span>
);

export default Datetime;
