import { Link } from "gatsby";
import { mq } from "../../styles/breakpoints";
import Logo from "../atoms/Logo";
import "../templates/PostList";

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
    <Logo />
    <Link to="/about">about</Link>
  </header>
);

export default Header;
