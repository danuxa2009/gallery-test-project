import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGE_REQUEST,
} from '../constans';

const initialState = {
  imagesData: [],
  isFetching: false,
  errorMessage: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        imagesData: action.payload,
      };
    }
    case FETCH_IMAGES_FAILURE: {
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
