import { CSSObject } from "@emotion/react";

const footerStyles: CSSObject = {
  width: "100%",
  height: "100px",
  position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--main)",
};

const Footer = () => (
  <footer css={footerStyles}>
    <span>2022 blake sim</span>
  </footer>
);

export default Footer;
