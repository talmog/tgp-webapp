import { call, put, takeLatest, select } from 'redux-saga/effects';

import requestHelper from 'helpers/requestHelper';

import tgpApi from 'api/tgpApi';
import types from './constants';
import actions from './actions';

function* loadCandidate(action) {
  try {
    const api = tgpApi.findCandidate;
    const { id, chamber, isIncumbent } = action;
    const payload = { id, chamber, isIncumbent };
    const candidate = yield call(requestHelper, api, payload);
    yield put(actions.loadCandidateActionSuccess(candidate));
  } catch (error) {
    console.log(error);
    yield put(actions.loadCandidateActionError(error));
  }
}

function* shareImage(action) {
  try {
    const api = tgpApi.shareImage;
    const { candidate } = action;
    const payload = { candidate };
    yield call(requestHelper, api, payload);
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* saga() {
  yield takeLatest(types.LOAD_CANDIDATE, loadCandidate);
  yield takeLatest(types.SHARE_IMAGE, shareImage)
}
