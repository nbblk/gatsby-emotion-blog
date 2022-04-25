import { Link } from "gatsby";
import { keyframes } from "@emotion/react";
import { mq } from "../../styles/breakpoints";
import HamburgerIcon from "../atoms/HamburgerIcon";
import Logo from "../atoms/Logo";

const headerStyle = {
  width: "100%",
  padding: "30px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  a: {
    textDecoration: "none",
    color: "var(--main)",
  },
  [mq[0]]: {
    padding: "0",
  },
};

const Header = () => (
  <header css={headerStyle}>
    <HamburgerIcon />
    <Logo />
    <Link to="/about">about</Link>
  </header>
);

export default Header;
