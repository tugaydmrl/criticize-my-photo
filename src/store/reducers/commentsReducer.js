const initialState = {
  data: {},
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_COMMENT":
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case "GET_COMMENT_REQUEST":
      return {
        ...state,
      };
    case "GET_COMMENT_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_COMMENT_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
