import Button from "../atoms/Button";
import Category from "../atoms/Category";
import Datetime from "../atoms/DateTime";
import Heading from "./Heading";

type postType = {
  subject: string;
  datetime: string;
  imgUrl: string;
  categories: [];
  content: string;
};

const Post = (props: postType) => (
  <article>
    <Heading text={props.subject} datetime={props.datetime} />
    <img src={props.imgUrl}></img>
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div>
        <Datetime value={props.datetime} />
        {props.categories.map((category) => (
          <Category value={category} color={"purple"} />
        ))}
      </div>
      <div>
        {" "}
        {props.content.split("\n").map((paragraph) => (
          <p>{paragraph}</p>
        ))}
        <Button value={"<- Go back"} color={"transparent"} />
      </div>
    </div>
  </article>
);

export default Post;
