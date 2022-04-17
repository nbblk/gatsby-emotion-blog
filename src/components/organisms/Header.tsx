import { Link } from "gatsby";
import HamburgerIcon from "../atoms/HamburgerIcon";
import Logo from "../atoms/Logo";

const headerStyle = {
  width: "100%",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  a: {
    textDecoration: "none",
    color: "var(--main)",
  },
};

const Header = () => (
  <header css={headerStyle}>
    <HamburgerIcon />
    <Logo />
    {/* <div id="mobileMenu">about</div> */}
    <Link to="/about">about</Link>
  </header>
);

export default Header;
