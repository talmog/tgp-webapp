import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  getCookie,
  setUserCookie,
  setCookie,
} from 'helpers/cookieHelper';
import requestHelper from 'helpers/requestHelper';
import { getUuid, getUserFromStateOrCookie } from 'helpers/userHelper';
import makeSelectUser from 'containers/you/YouPage/selectors';
import youActions from 'containers/you/YouPage/actions';

import tgpApi from 'api/tgpApi';
import types from './constants';
import actions from './actions';
import snackbarActions from '../shared/SnackbarContainer/actions';

function* loadContent() {
  try {
    const api = tgpApi.content;
    const content = yield call(requestHelper, api, null);
    yield put(actions.loadContentActionSuccess(content));
  } catch (error) {
    console.log(error);
    yield put(actions.loadContentActionError(error));
  }
}

function* sendArticleFeedback(action) {
  try {
    const user = yield call(getUserFromStateOrCookie, makeSelectUser);
    const uuid = getUuid(user);
    const { id, title, isHelpful, feedback } = action;
    const api = tgpApi.articleFeedback;
    const payload = {
      id,
      title,
      isHelpful,
      feedback,
      uuid,
    };
    yield call(requestHelper, api, payload);
    snackbarActions.showSnakbarAction('Thank you for your feedback');
  } catch (error) {
    console.log(error);
    snackbarActions.showSnakbarAction('Error sending your feedback', 'error');
  }
}
function* refreshToken() {
  try {
    const api = tgpApi.refreshToken;
    const currentToken = getCookie('token');
    const { token, user } = yield call(requestHelper, api, {
      token: currentToken,
    });
    yield put(youActions.registerActionSuccess(user, token));
    setUserCookie(user);
    setCookie('token', token);
  } catch (error) {
    console.log(error);
    yield put(actions.loadContentActionError(error));
  }
}
function* logError(action) {
  try {
    const user = yield call(getUserFromStateOrCookie);
    const uuid = getUuid(user);
    const { error, message } = action;
    const api = tgpApi.logError;
    const payload = {
      message,
      error: typeof error === 'string' ? error : JSON.stringify(error),
      uuid,
    };
    yield call(requestHelper, api, payload);
  } catch (error) {
    console.log(error);
  }
}

// Individual exports for testing
export default function* saga() {
  yield takeLatest(types.LOAD_CONTENT, loadContent);
  yield takeLatest(types.SEND_ARTICLE_FEEDBACK, sendArticleFeedback);
  yield takeLatest(types.LOG_ERROR, logError);
  yield takeLatest(types.REFRESH_TOKEN, refreshToken);
}
