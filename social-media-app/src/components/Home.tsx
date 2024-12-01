import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/api";
import { Post } from "../models/post";
import PostTile from "./PostTile";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(ROUTES.NEW_POST);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}posts`);
        const result = await response.json();
        setPosts(result);
      } catch (error) {
        console.error("Error posts fetching", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container d-flex row m-auto mt-3 row-gap-5">
      <button
        type="button"
        className="btn btn-primary w-25"
        onClick={handleNavigation}
      >
        Create New Post
      </button>
      <div className=" d-flex row justify-content-center align-items-center row-gap-3">
        {posts.map((post: Post) => (
          <PostTile key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
