import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import Category from "../atoms/Category";
import Datetime from "../atoms/DateTime";

type subheadingType = {
  categories: string[];
  datetime: string;
};

const subheadingStyles: CSSObject = {
  width: "100%",
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "aside > div": {
    width: "100%",
    padding: "15px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Subheading = (props: subheadingType) => {
  return (
    <aside css={subheadingStyles}>
      <Datetime value={props.datetime} />
      <div>
        {props.categories.map((category, index) => (
          <Category key={index} value={category} color="" />
        ))}
      </div>
    </aside>
  );
};

export default Subheading;
