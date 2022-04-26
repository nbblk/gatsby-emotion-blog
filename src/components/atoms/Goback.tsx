import { Link } from "gatsby";

const GoBack = () => {
  return (
    <Link
      to="/"
      css={{
        color: "var(--main)",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
          color: "rgba(39, 27, 81, 0.7)",
        },
      }}
    >
      go back
    </Link>
  );
};

export default GoBack;
