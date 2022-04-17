import { CSSObject } from "@emotion/react";

const datetimeStyle: CSSObject = {
  color: "var(--main)",
  textTransform: "uppercase"
};

const Datetime = (props: { value: string }) => (
  <span css={datetimeStyle}>{props.value}</span>
);

export default Datetime;
