import { useParams } from "react-router-dom";
import PostTile from "./PostTile";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/api";
import { Post } from "../models/post";
import { Comment } from "../models/comment";

const OpenPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[] | any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleComment = async () => {
    try {
      await fetch(`${BASE_URL}posts/${id}/comments`, {
        method: "post",
        body: JSON.stringify({
          comment: newComment,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setRefresh((prev) => !prev);
      setNewComment("");
    } catch (error) {
      console.error("Error post creation", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}posts/${id}`);
        const result = await response.json();
        setPost(result);
        setComments(result.comments);
      } catch (error) {
        console.error("Error comments fetching", error);
      }
    };

    fetchPost();
  }, [refresh]);

  return (
    <>
      {post ? (
        <div className="card container d-flex p-0 m-auto mt-3">
          <div className="card-header fs-4 text-center">{post.title}</div>
          <div className="card-body d-flex flex-column row-gap-4">
            <PostTile key={post.id} post={post} />
            <div className="col-6 d-flex flex-column row-gap-2">
              {comments.map((content: Comment) => (
                <div
                  key={content.id}
                  className="p-2 border border-secondary-subtle rounded"
                >
                  {content.comment}
                </div>
              ))}
            </div>
            <div className="d-flex flex-column row-gap-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
                className="p-2"
              />
              <button
                type="button"
                onClick={handleComment}
                className="btn btn-primary w-100"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h3>No Post Found</h3>
      )}
    </>
  );
};

export default OpenPost;
