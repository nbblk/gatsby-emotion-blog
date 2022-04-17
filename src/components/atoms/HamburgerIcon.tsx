import { CSSObject } from "@emotion/react";
import { mq } from "../../styles/breakpoints";

const HamburgerStyles: CSSObject = {
  width: "30px",
  height: "30px",
  display: "none",
  position: "relative",
  flexDirection: "column",
  "& > div": {
    width: "100%",
    height: "10px",
    borderBottom: "1px solid var(--main)",
  },
  "& > #toggle": {
    width: "30px",
    height: "30px",
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: 0,
  },
  cursor: "pointer",
  [mq[0]]: {
    display: "flex",
  },
};

const HamburgerIcon = () => (
  <div css={HamburgerStyles}>
    <input type="checkbox" id="toggle" />
    <div />
    <div />
    <div />
  </div>
);

export default HamburgerIcon;
