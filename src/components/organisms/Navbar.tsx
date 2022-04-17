import { CSSObject } from "@emotion/react";
import { Link } from "gatsby";

const navStyles: CSSObject = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid var(--main)",
  a: {
    listStyle: "none",
  },
};

const Navbar = () => (
  <nav css={navStyles}>
    <ul>
      <Link to="/about">about</Link>
    </ul>
  </nav>
);

export default Navbar;
