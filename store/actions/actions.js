import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGES_SUCCESS,
  URL_API,
} from '../constans';

export const fetchImageRequest = () => {
  return {
    type: FETCH_IMAGE_REQUEST,
    isFetching: true,
  };
};

export const fetchImageSuccess = (imagesData) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    isFetching: false,
    payload: imagesData,
  };
};

export const fetchImageFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    isFetching: false,
    payload: error,
  };
};

export const fetchImages = () => async (dispatch) => {
  dispatch(fetchImageRequest());
  try {
    const response = await fetch(URL_API);
    const json = await response.json();
    dispatch(fetchImageSuccess(json));
  } catch (error) {
    dispatch(fetchImageFailure(error));
  }
};
