import axios from 'axios';
import jwt_decode from 'jwt-decode';
import EventBus from 'eventing-bus';
import { web3 } from '../web3.js';
import { all, takeEvery, call, put } from 'redux-saga/effects';

import {
  setAllNftFromAPi
} from '../actions/nftActions';


// function* getNft({ payload }) {
    
//     try {
//       const { error, response }  = yield call(getCall, { path: `/nft/getall/` });
//       console.log('get all nft ======',payload,response)
//         if(response){ 
//           yield put(setAllNft());
//           EventBus.publish("success", response['data']['message'])

//                   // yield put(loginToken(token));
//         }else{
//           EventBus.publish("error", error['data']['message'])
//         }
//     } catch (e) { yield put({ type: "SET_ALLNFT", payload: false }); }
// };


function* getNft({ payload }) {
    const { error, response } = yield call(getCall, `/nft/getall/`);
    console.log('response ====',response['data']['body'])
    if (error) EventBus.publish("error", error["response"]["data"]["message"]);
    else if (response){ 
        yield put(setAllNftFromAPi(response['data']['body']));
        // EventBus.publish("success", response['data']['message'])
    };
  }


function* actionWatcher() {
//   yield takeEvery('SIGN_UP', signupUser);
//   yield takeEvery('SET_ALLNFT', login);

  yield takeEvery('SET_ALLNFT', getNft);
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
    console.log('get apis call', path)
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
