import { Post } from "../models/post";
import { useNavigate } from "react-router-dom";

const PostTile = ({ post }: { post: Post }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div
      onClick={handleNavigation}
      onKeyDown={(e) => e.key === "Enter" && handleNavigation()}
      role="button"
      tabIndex={0}
      className="card p-0"
    >
      <div className="card-header" style={{ color: post.titleColor }}>
        {post.title}
      </div>
      <div className="card-body">
        <p className="card-text">{post.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-end">
        {post.commentsCount} comment{post.commentsCount == 1 ? "" : "s"}
      </div>
    </div>
  );
};

export default PostTile;
