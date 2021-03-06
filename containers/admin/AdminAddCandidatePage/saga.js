import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-next-router';

import requestHelper from 'helpers/requestHelper';
import tgpApi from 'api/tgpApi';
import snackbarActions from 'containers/shared/SnackbarContainer/actions';
import types from './constants';

function* createCandidate({ candidate }) {
  try {
    yield put(snackbarActions.showSnakbarAction('Creating Candidate'));
    const api = tgpApi.newCandidate.create;
    const payload = { candidate };
    yield call(requestHelper, api, payload);
    yield put(push('/admin'));
  } catch (error) {
    console.log(error);
    yield put(
      snackbarActions.showSnakbarAction('Error creating candidate', 'error'),
    );
  }
}

function* editCandidate({ candidate }) {
  try {
    console.log('at saga');
    yield put(snackbarActions.showSnakbarAction('Creating Candidate'));
    const api = tgpApi.newCandidate.update;
    const payload = { candidate };
    yield call(requestHelper, api, payload);
    yield put(push('/admin'));
  } catch (error) {
    console.log(error);
    yield put(
      snackbarActions.showSnakbarAction('Error creating candidate', 'error'),
    );
  }
}

// Individual exports for testing
export default function* saga() {
  let action = yield takeLatest(types.CREATE_CANDIDATE, createCandidate);
  action = yield takeLatest(types.EDIT_CANDIDATE, editCandidate);
}
