import { MouseEvent } from "react";
import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";

type categoryType = {
  value: string;
  click?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Category = (props: categoryType) => {
  const categoryType: CSSObject = {
    padding: "15px 30px",
    marginRight: "5px",
    border: "1px solid var(--main)",
    borderRadius: "100px",
    color: "var(--main)",
    backgroundColor: "transparent",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "var(--main)",
    },
    "&:visited": {
      color: "white",
      backgroundColor: "var(--main)",
    },
    [mq[0]]: {
      padding: "10px 15px",
      margin: "5px",
    },
  };

  return (
    <div
      className="category"
      css={categoryType}
      onClick={(event) => props.click!(event)}
      data-category={props.value}
    >
      {props.value}
    </div>
  );
};

export default Category;
