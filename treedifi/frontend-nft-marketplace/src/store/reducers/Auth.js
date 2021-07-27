import { PURGE } from "redux-persist";
import { setToken } from '../axios';

var initialState =
{
  isModal: false,
  // auth: '',
  blockchainData: {},
  buyToken: {},
  isLogin: false,
  isSignup: false,
  isBuyTokens: true,
  isSendEmail: true,
  isBuyModal: false,
  isContactUs: false,
  blockchainData: {},
  isSignupInfo: false,
  isSwitchModal: false,
  transactionHistory: [],
  isConnectedModal: false,
  isTransactionModal: false,
  auth: localStorage.getItem('token'),
  address: localStorage.getItem('publicAddress'),
  isPolicyModal: localStorage.getItem('cookies') == 'false' ? false : true,
}

const Auth = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'TOGGLE_POLICY_MODAL':
      localStorage.setItem('cookies', 'false');
      return {
        ...state,
        isPolicyModal: !state.isPolicyModal,
      };

    case 'SET_ADDRESS':
      localStorage.setItem('publicAddress', payload);
      return {
        ...state,
        address: payload,
      };

    case 'LOGIN_TOKEN':
      setToken(payload);
      localStorage.setItem('token', payload);
      return {
        ...state,
        auth: payload,
      };

    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLogin: payload,
      };

    case 'LOGOUT':
      localStorage.removeItem('publicAddress');
      localStorage.removeItem('token');
      return {
        ...state,
        address: '',
        auth: '',
      };

    case 'TOGGLE_SIGN_UP':
      return {
        ...state,
        isSignup: !state.isSignup,
      };

    case 'TOGGLE_SIGNUP_INFO':
      return {
        ...state,
        isSignupInfo: !state.isSignupInfo,
      };

    case 'TOGGLE_CONNECT_MODAL':
      return {
        ...state,
        isConnectedModal: payload,
      };

    case 'TOGGLE_SWITCH_MODAL':
      return {
        ...state,
        isSwitchModal: payload,
      };

    case 'TOGGLE_BUY_MODAL':
      return {
        ...state,
        isBuyModal: !state.isBuyModal,
      };

    case 'SET_BLOCKCHAIN_DATA':
      return {
        ...state,
        blockchainData: payload,
      };

    case 'SET_TRANSACTIONS_DATA':
      return {
        ...state,
        buyToken: payload,
      };

    case 'SET_BUY_TOKENS':
      return {
        ...state,
        isBuyTokens: !state.isBuyTokens,
      };

    case 'VIEW_TRANSACTION_MODAL':
      return {
        ...state,
        isTransactionModal: !state.isTransactionModal,
      };

    case 'TOGGLE_EMAIL_LOADER':
      return {
        ...state,
        isSendEmail: !state.isSendEmail,
      };

    case 'RESET_CONTACT_US':
      return {
        ...state,
        isContactUs: !state.isContactUs,
      };

    case 'SET_TRANSACTION_HISTORY':
      return {
        ...state,
        transactionHistory: payload,
      };

    default:
      return state;
  }
};
export default Auth;
