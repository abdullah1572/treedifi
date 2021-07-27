export const togglePolicyModal = () => ({
    type: 'TOGGLE_POLICY_MODAL',
  });
  
  export const setAddress = (data) => ({
    type: 'SET_ADDRESS',
    payload: data,
  });

  export const login = (data) => ({
    type: 'LOGIN',
    payload: data,
  });
  
  export const isLoggedIn= (data) => ({
    type: 'IS_LOGGED_IN',
    payload: data
  });
  
  export const loginToken = (data) => ({
    type: 'LOGIN_TOKEN',
    payload: data,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  export const toggleSignupInfo = () => ({
    type: 'TOGGLE_SIGNUP_INFO',
  });
  
  export const signup = (data) => (console.log('signup ==',data),{
    type: 'SIGN_UP',
    payload: data,
  });
  
  export const toggleSignup = () => ({
    type: 'TOGGLE_SIGN_UP',
  });
  
  export const toggleConnectModal = (data) => ({
    type: 'TOGGLE_CONNECT_MODAL',
    payload: data,
  });
  
  export const toggleSwitchModal = (data) => ({
    type: 'TOGGLE_SWITCH_MODAL',
    payload: data,
  })
  
  export const toggleBuyModal = () => ({
    type: 'TOGGLE_BUY_MODAL',
  });
  
  export const viewTransactionModal = () => ({
    type: 'VIEW_TRANSACTION_MODAL',
  });
  
  export const setBuyTokens = () => ({
    type: 'SET_BUY_TOKENS',
  });
  
  export const getBlockchainData = () => ({
    type: 'GET_BLOCKCHAIN_DATA',
  });
  
  export const setBlockchainData = (data) => ({
    type: 'SET_BLOCKCHAIN_DATA',
    payload: data,
  });
  
  export const sendTransactionsData = (data) => ({
    type: 'REQUEST_BUY_TOKEN_DATA',
    payload: data
  });
  
  export const setTransactionsData = (data) => ({
    type: 'SET_TRANSACTIONS_DATA',
    payload: data
  });
  
  export const toggleEmailLoader = () => ({
    type: 'TOGGLE_EMAIL_LOADER',
  });
  
  export const sendContactUs = (data) => ({
    type: 'SEND_CONTACT_US',
    payload: data
  });
  
  export const resetContactus = () => ({
    type: 'RESET_CONTACT_US',
  });
  
  export const getTransactionHistory = () => ({
    type: 'GET_TRANSACTION_HISTORY',
  });
  
  export const setTransactionHistory = (data) => ({
    type: 'SET_TRANSACTION_HISTORY',
    payload: data
  });