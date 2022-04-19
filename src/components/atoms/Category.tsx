import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";

type categoryType = {
  value: string;
  color: string;
};

const Category = (props: categoryType) => {
  const categoryType: CSSObject = {
    padding: "15px 30px",
    marginRight: "5px",
    border: "1px solid var(--main)",
    borderRadius: "100px",
    color: props.color,
    backgroundColor: props.color,
    [mq[0]]: {
      padding: "10px 15px",
      margin: "5px",
    },
  };

  return <div css={categoryType}>{props.value}</div>;
};

export default Category;
