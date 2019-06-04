import { POSTS_FAIL, POSTS_REQUEST, POSTS_SUCCESS } from './types';

export const postsRequest = () => {
  return {
    type: POSTS_REQUEST,
    payload: true
  }
}

export const postsSuccess = (posts) => {
  return {
    type: POSTS_SUCCESS,
    payload: posts
  }
}

export const postsFail = (error) => {
  return {
    type: POSTS_FAIL,
    payload: error
  }
}