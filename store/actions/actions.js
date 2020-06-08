import {
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGES_SUCCESS,
} from '../constans';

import API from '../../utils/API';

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
    const { data } = await API.get('/');
    dispatch(fetchImageSuccess(data));
  } catch (error) {
    dispatch(fetchImageFailure(error));
  }
};
