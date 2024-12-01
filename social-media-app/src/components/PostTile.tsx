import { Post } from "../models/post";

const PostTile = ({ post }: { post: Post }) => {
  return (
    <div className="card p-0">
      <div className="card-header" style={{ color: post.titleColor }}>
        {post.title}
      </div>
      <div className="card-body">
        <p className="card-text">{post.description}</p>
      </div>
      <div className="card-footer">{post.commentsCount} comments</div>
    </div>
  );
};

export default PostTile;
