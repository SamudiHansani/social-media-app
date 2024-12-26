import { useState } from "react";
import { BASE_URL } from "../constants/api";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const titleColors = ["#039dfc", "#fcf803", "#e35840"];

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await fetch(`${BASE_URL}posts`, {
        method: "post",
        body: JSON.stringify({
          title,
          description,
          titleColor,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error("Error post creation", error);
    }
  };

  return (
    <>
      <div className="card container d-flex p-0 m-auto mt-3">
        <div className="card-header fs-4 text-center">Create Post</div>
        <div className="card-body">
          <div className="row row-gap-3 p-3">
            <div className="col-12">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="title"
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="description"
              />
            </div>
            <div className="col-12">
              <label htmlFor="titleColor" className="form-label">
                Title Color
              </label>
              <div className="container d-flex justify-content-end gap-5">
                {titleColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setTitleColor(color)}
                    style={{
                      background: color,
                      width: 50,
                      height: 50,
                      borderColor: color === titleColor ? "#000" : color,
                      borderWidth: 2,
                    }}
                    className="btn"
                  ></button>
                ))}
              </div>
            </div>
            <div className="col-12">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary w-100"
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
