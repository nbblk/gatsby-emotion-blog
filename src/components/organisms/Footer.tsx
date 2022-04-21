import { CSSObject } from "@emotion/react";

const footerStyles: CSSObject = {
  width: "100%",
  height: "50px",
  position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--main)",
};

const Footer = () => (
  <footer css={footerStyles}>
    <span>Ⓒ {new Date().getFullYear()} Blake Sim</span>
  </footer>
);

export default Footer;
