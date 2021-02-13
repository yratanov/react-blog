import { Link } from "@reach/router";

export default function NavLink(props) {
  let className = "px-4 py-2 text-white block hover:bg-blue-600";

  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: [
            className,
            isCurrent ? "bg-blue-500" : "bg-blue-400",
          ].join(" "),
        };
      }}
    />
  );
}
