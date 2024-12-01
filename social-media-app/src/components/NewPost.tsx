import { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleColor, setTitleColor] = useState("");

  return (
    <>
      <div className="card p-0">
        <div className="card-header">Create Post</div>
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
            <button type="button" className="btn btn-primary w-25">
              Publish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPost;
