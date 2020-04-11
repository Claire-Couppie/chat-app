import { call, put, select, takeLatest } from 'redux-saga/effects'
import api from '../api.js';
import { currentPage } from '../selectors';

const PER_PAGE = 15;

function* getMessages() {
   try {
      const page = yield select(currentPage);
      const result = yield call(api, page, PER_PAGE);
      yield put({type: "ADD_OLD_MESSAGES", messages: result.messages});
      yield put({type: "NEXT_PAGE"});
   } catch (e) {
      console.error(e);
   }
}

function* getMessagesSaga() {
  yield takeLatest("SAGA/FETCH_MESSAGES", getMessages);
}

export default getMessagesSaga;
