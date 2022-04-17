import { CSSObject } from "@emotion/react";
import Datetime from "../atoms/DateTime";

type itemType = {
  text: string;
  datetime: string;
};

const itemStyles: CSSObject = {
  width: "100%",
  padding: "20px 0",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  borderTop: "1px solid var(--main)",
  cursor: "pointer",
  "&:last-of-type": {
    borderBottom: "1px solid var(--main)",
  },
  color: "RGB(39, 28, 82, 0.8)",
  h1: {
    width: "70%",
    margin: 0,
    fontSize: "48px",
    fontWeight: "400",
    textAlign: "left",
    textTransform: "uppercase",
  },
  "& > span": {
    width: "30%",
  },
  "&:hover": {
    fontStyle: "italic",
    color: "var(--main)"
  },
};

const ListItem = (props: itemType) => (
  <div css={itemStyles}>
    <Datetime value={props.datetime} />
    <h1>{props.text}</h1>
  </div>
);

export default ListItem;
