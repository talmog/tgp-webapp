import { call, put, takeLatest } from 'redux-saga/effects';

import requestHelper from 'helpers/requestHelper';
import tgpApi from 'api/tgpApi';
import snackbarActions from 'containers/shared/SnackbarContainer/actions';
import types from './constants';
import actions from './actions';

function* loadCandidates(action) {
  try {
    yield put(snackbarActions.showSnakbarAction('Loading Candidates'));
    const { chamber } = action;
    const api = tgpApi.admin.candidates;
    const payload = { chamber };
    const { candidates } = yield call(requestHelper, api, payload);
    yield put(actions.loadCandidatesSuccess(candidates));
  } catch (error) {
    console.log(error);
    yield put(
      snackbarActions.showSnakbarAction('Error Loading Candidates', 'error'),
    );
    yield put(actions.loadCandidatesError(error));
  }
}

function* updateCandidate(action) {
  try {
    yield put(snackbarActions.showSnakbarAction('Updating Candidate'));
    const { id, updatedFields, chamber, isIncumbent } = action;
    const api = tgpApi.admin.updateCandidate;
    const payload = { id, updatedFields, chamber, isIncumbent };
    const { candidate } = yield call(requestHelper, api, payload);
    console.log('candidate', candidate);
    yield put(actions.updateCandidateSuccess(candidate));
  } catch (error) {
    console.log(error);
    yield put(
      snackbarActions.showSnakbarAction('Error Loading Candidates', 'error'),
    );
    yield put(actions.loadCandidatesError(error));
  }
}

// Individual exports for testing
export default function* saga() {
  const candAction = yield takeLatest(types.LOAD_CANDIDATES, loadCandidates);
  const updateCandAction = yield takeLatest(
    types.UPDATE_CANDIDATE,
    updateCandidate,
  );
}