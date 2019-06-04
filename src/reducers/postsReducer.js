import { POSTS_FAIL, POSTS_REQUEST, POSTS_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  posts: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: action.payload
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...action.payload]
      }
    case POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}