import { call, put, takeLatest } from 'redux-saga/effects';

import requestHelper from 'helpers/requestHelper';
import { validateEmail } from 'helpers/emailHelper';
import tgpApi from 'api/tgpApi';
import snackbarActions from 'containers/shared/SnackbarContainer/actions';
import types from './constants';
import actions from './actions';

function* loadChallengers() {
  try {
    const api = tgpApi.goodChallengers;
    const { goodChallengers } = yield call(requestHelper, api, null);
    yield put(actions.loadChallengersActionSuccess(goodChallengers));
  } catch (error) {
    console.log(error);
    yield put(actions.loadChallengersActionError(error));
  }
}

function* subscribeEmail(action) {
  try {
    yield put(snackbarActions.showSnakbarAction('Subscribing Your Email'));
    const { email } = action;
    if (validateEmail(email)) {
      const api = tgpApi.subscribeEmail;
      const payload = { email };
      yield call(requestHelper, api, payload);
      yield put(
        snackbarActions.showSnakbarAction(
          'You have subscribed to our mailing list successfully',
        ),
      );
    } else {
      yield put(
        snackbarActions.showSnakbarAction('Invalid Email', 'error'),
      );
    }
  } catch (error) {
    console.log(error);
    yield put(
      snackbarActions.showSnakbarAction('Error Subscribing Email', 'error'),
    );
  }
}

// Individual exports for testing
export default function* saga() {
  yield takeLatest(types.LOAD_CHALLENGERS, loadChallengers);
  yield takeLatest(types.SUBSCRIBE_EMAIL, subscribeEmail);
}
