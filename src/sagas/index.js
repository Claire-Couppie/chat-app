import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../api.js';

function* getMessages({ page, perPage }) {
   try {
      const result = yield call(api, page, perPage);
      yield put({type: "ADD_OLD_MESSAGES", messages: result.messages});
   } catch (e) {
      console.error(e);
   }
}

function* getMessagesSaga() {
  yield takeEvery("SAGA/FETCH_MESSAGES", getMessages);
}

export default getMessagesSaga;
