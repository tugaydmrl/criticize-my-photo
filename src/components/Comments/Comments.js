import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { addComment, getComments } from "../../store/actions/actions";
import "./Comments.scss";

function Comments() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [photoUrl, setPhotoUrl] = useState();
  const comments = useSelector((state) => state.commentsReducer.data);
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    dispatch(getComments(location.state.id));
    setPhotoUrl(location.state.url);
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComment(newComment, location.state.id));
  };

  return (
    <>
      <h3>Comments</h3>
      <div className="comments">
        <img src={photoUrl} alt="a nice photo" id={location.state.id} />
        <div className="comments-section">
          <h4>Comments</h4>
          {comments.length > 0 ? (
            comments.map((item) => (
              <>
                <p className="comment">
                  <p className="user">{item.name}</p>
                  <p>{item.body}</p>
                </p>
              </>
            ))
          ) : (
            <p className="no-comment">
              There is no comment 🙁 Add first comment on this photo!
            </p>
          )}
          <form onSubmit={handleSubmit} className="form">
            <input
              onChange={(event) =>
                setNewComment({ name: "Commentator", body: event.target.value })
              }
              value={newComment.body}
            />
            <button type="submit">Add new comment</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Comments;
