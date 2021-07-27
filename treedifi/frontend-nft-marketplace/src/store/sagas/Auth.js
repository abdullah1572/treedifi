import axios from 'axios';
import jwt_decode from 'jwt-decode';
import EventBus from 'eventing-bus';
import { web3 } from '../web3.js';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import {
  setAddress, loginToken, toggleSignup, toggleSignupInfo, setBlockchainData, setTransactionsData, setBuyTokens,
  toggleBuyModal, viewTransactionModal, toggleEmailLoader, resetContactus, setTransactionHistory
} from '../actions/Auth';


function* login({ payload }) {
    try {
      const { error, response }  = yield call(postCall, { path: `/users/login`, payload: payload });
        if(response){
          yield put(setAddress(payload['publicAddress']));
          EventBus.publish("success", response['data']['message'])

                  // yield put(loginToken(token));
        }else{
          EventBus.publish("error", error['data']['message'])
        }
    } catch (e) { yield put({ type: "IS_LOGGED_IN", payload: false }); }
};


function* signupUser({ payload, history }) {
  const { error, response } = yield call(postCall, { path: '/users/signup', payload });
  if (error) {
    yield put({ type: "IS_LOGIN_DISABLED" });
    EventBus.publish("error", error['response']['data']['message']);
  }
  else if (response) {

     yield put({
      type: 'LOGIN', payload: {
        type: 'signup',
        publicAddress: payload['publicAddress']
      }
    });
    EventBus.publish("success", response['data']['message']);
    // setTimeout(() => history.push('/home'), 1000);
  }
  yield put(toggleSignup());
  yield put(toggleSignupInfo());
};


function* actionWatcher() {
  yield takeEvery('SIGN_UP', signupUser);
  yield takeEvery('LOGIN', login);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}

function postCall({ path, payload }) {
  return axios
    .post(path, payload)
    .then(response => ({ response }))
    .catch(error => {
      if (error.response.status === 401) EventBus.publish("tokenExpired");
      return { error };
    });
}

function getCall(path) {
  return axios
    .get(path)
    .then(response => ({ response }))
    .catch(error => {
      if (error.response.status === 401) EventBus.publish("tokenExpired");
      return { error };
    });
}

function deleteCall(path) {
  return axios
    .delete(path)
    .then(response => ({ response }))
    .catch(error => {
      if (error.response.status === 401) EventBus.publish("tokenExpired");
      return { error };
    });
}

function putCall({ path, payload }) {
  return axios
    .put(path, payload)
    .then(response => ({ response }))
    .catch(error => {
      if (error.response.status === 401) EventBus.publish("tokenExpired");
      return { error };
    });
}
