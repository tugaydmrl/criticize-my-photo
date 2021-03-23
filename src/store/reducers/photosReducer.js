const initialState = {
	data: [],
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHOTO_REQUEST":
      return {
        ...state,
      };
    case "GET_PHOTO_SUCCESS":
      return {
        ...state,
		data: [...state.data, action.payload],
      };
    case "GET_PHOTO_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
