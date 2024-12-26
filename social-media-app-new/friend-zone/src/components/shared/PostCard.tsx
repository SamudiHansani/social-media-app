import { IPost } from "@/types";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: IPost;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`}>
        <div className="flex flex-col gap-3 small-medium lg:base-medium py-5">
          <p style={{ color: post.titleColor }}>{post.title}</p>
          <p className="text-light-3 small-regular">{post.description}</p>
          <Separator className="bg-light-4" />
          <p className="flex items-center justify-end subtle-semibold lg:small-regular text-light-3">
            {post.commentsCount} comment{post.commentsCount === 1 ? "" : "s"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
