import { all, takeEvery, put, call } from 'redux-saga/effects';
import { POSTS_REQUEST } from '../actions/types';
import { postsSuccess, postsFail } from '../actions';
import axios from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* postsWorker() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield delay(1300)
    yield put(postsSuccess(response.data))
  } catch (e) {
    const error = 'Something went wrong!'
    yield put(postsFail(error))
  }
}

function* postsWatcher() {
  yield takeEvery(POSTS_REQUEST, postsWorker)
}

function* rootSaga() {
  yield all([
    postsWatcher()
  ])
}

export default rootSaga;