import { CSSObject } from "@emotion/react";

type buttonType = {
  value: string;
  color: string;
};

const Button = (props: buttonType) => {
  const buttonStyle: CSSObject = {
    padding: "15px 30px",
    border: "1px solid var(--main)",
    borderRadius: "100px",
    color: "var(--main)",
    backgroundColor: `${props.color}`,
  };

  return <button css={buttonStyle}>{props.value}</button>;
};

export default Button;
