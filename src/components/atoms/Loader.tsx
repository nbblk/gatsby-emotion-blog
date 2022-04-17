import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100%: {
    transform: rotate(360deg);
  }
`;

const loaderStyles = {
  border: "16px solid #f3f3f3",
  borderTop: "16px solid var(--main)",
  borderRadius: "50%",
  width: "120px",
  height: "120px",
  animation: `${spin} 2s linear infinite`,
};

const Loader = () => <div css={css`
border: 16px solid #f3f3f3;
border-top: 16px solid var(--main);
border-radius: 50%;
width: 120px;
height: 120px;
animation: ${spin} 2s linear infinite;
`}></div>;

export default Loader;
