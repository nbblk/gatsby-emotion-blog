import { ReactNode } from "react";
import { mq } from "../styles/breakpoints";
import GoBack from "./atoms/Goback";

type Props = {
  children: ReactNode;
};

const postStyles = {
  padding: "0 200px",
  [mq[0]]: {
    padding: 0,
  },
};

const PostLayout = ({ children }: Props) => {
  return (
    <article css={postStyles}>
      {children}
      <GoBack />
    </article>
  );
};

export default PostLayout;
