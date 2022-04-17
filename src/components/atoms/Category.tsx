import { CSSObject } from "@emotion/react";

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
    color: `${props.color !== "transparent" ? "#ffffff" : "var(--main)"}`,
    backgroundColor: `${props.color}`,
  };

  return <div css={categoryType}>{props.value}</div>;
};

export default Category;
