import { CSSObject } from "@emotion/react";

const logoStyle: CSSObject = {
  textAlign: "center",
  fontSize: "x-large",
};

const Logo = () => (
  <div css={logoStyle}>
    <a href="/">blake sim</a>
  </div>
);

export default Logo;
