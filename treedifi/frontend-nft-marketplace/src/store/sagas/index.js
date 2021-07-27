import { all } from 'redux-saga/effects';
import authSagas from './Auth.js';
import nft from './Nft.js';


export default function* rootSaga() {
  yield all([
    authSagas(),
    nft()
  ]);
}

