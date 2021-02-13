import formatDate from "./helpers/format-date";

export default function Post({ post, className }) {
  return (
    <div className={`p-5 border rounded ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="font-bold text-lg">{post.title}</div>
        <div className="text-gray-500 pl-4">{post.createdAt}</div>
      </div>
      <div>{post.text}</div>
    </div>
  );
}
