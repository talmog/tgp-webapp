import { call, put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import requestHelper from 'helpers/requestHelper';
import { getCookie, setCookie } from 'helpers/cookieHelper';
import selectDistrict from 'containers/intro/ZipFinderPage/selectors';
import selectCandidate from 'containers/elections/PresidentialCandidatePage/selectors';

import tgpApi from 'api/tgpApi';
import types from './constants';
import actions from './actions';

import selectUser from './selectors';

function* register(action) {
  try {
    const { email, name, comments } = action;
    const zip = yield getZipFromStateOrCookie();
    const presidentialRank = yield getPresidentialRankFromStateOrCookie();
    const payload = {
      email,
      name,
      zip,
      feedback: comments,
      presidentialRank,
    };
    const api = tgpApi.register;
    const response = yield call(requestHelper, api, payload);
    const { user } = response;
    yield put(actions.registerActionSuccess(user));
    yield put(push('/you/confirmation-sent'));
    setCookie('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
    yield put(actions.registerActionError(error));
  }
}

function* getZipFromStateOrCookie() {
  const districtState = yield select(selectDistrict);
  let zip = false;
  if (districtState && districtState.zipWithDistricts) {
    zip = districtState.zipWithDistricts.zip;
  } else {
    let cookieZip = getCookie('zip');
    if (cookieZip) {
      cookieZip = JSON.parse(cookieZip);
      zip = cookieZip.zip;
    }
  }
  return zip;
}

function* getPresidentialRankFromStateOrCookie() {
  const candidateState = yield select(selectCandidate);
  if (candidateState && candidateState.presidentialRank) {
    return JSON.stringify(candidateState.presidentialRank);
  }
  const cookieRank = getCookie('presidentialRank');
  if (cookieRank) {
    return cookieRank;
  }
  return null;
}

function* resendEmail(action) {
  try {
    const actionEmail = action.email;
    const api = tgpApi.resendEmail;
    let email;
    if (actionEmail) {
      email = actionEmail;
    } else {
      email = yield getEmailFromStateOrCookie();
    }
    const payload = {
      email,
    };
    yield call(requestHelper, api, payload);
  } catch (error) {
    console.log(error);
  }
}

function* getEmailFromStateOrCookie() {
  const userState = yield select(selectUser);
  if (userState && userState.user) {
    return userState.user.email;
  } else {
    let cookieUser = getCookie('user');
    if (cookieUser) {
      console.log('cookieUser', cookieUser);
      return JSON.parse(cookieUser).email;
    }
  }
  return null;
}

function* confirmEmail(action) {
  try {
    const { email, token } = action;
    const api = tgpApi.confirmEmail;
    const payload = {
      email,
      token,
    };
    console.log('payload', payload);
    const response = yield call(requestHelper, api, payload);
    const { user } = response;
    const access_token = response.token;
    yield put(actions.confirmEmailActionSuccess(user, access_token));
    Router.push('/you/share');
    setCookie('user', JSON.stringify(user));
    setCookie('token', access_token);
  } catch (error) {
    yield put(actions.confirmEmailActionError(error.response));
  }
}

// Individual exports for testing
export default function* saga() {
  const registerAction = yield takeLatest(types.REGISTER, register);
  const resendAction = yield takeLatest(types.RESEND_EMAIL, resendEmail);
  const confirmAction = yield takeLatest(types.CONFIRM_EMAIL, confirmEmail);
}
