export const getPhoto = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PHOTO_REQUEST" });
    fetch(`https://picsum.photos/v2/list`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_PHOTO_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "GET_PHOTO_ERROR", payload: error }));
  };
};

export const getComments = (number) => {
  return (dispatch) => {
    dispatch({ type: "GET_COMMENTS_REQUEST" });
    fetch(`https://jsonplaceholder.typicode.com/posts/${number}/comments`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_COMMENT_SUCCESS", payload: data }))
      .catch((error) =>
        dispatch({ type: "GET_COMMENT_ERROR", payload: error })
      );
  };
};

export const addComment = (post, id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "ADD_NEW_COMMENT", payload: data }))
      .catch((error) => console.log(error));
  };
};
