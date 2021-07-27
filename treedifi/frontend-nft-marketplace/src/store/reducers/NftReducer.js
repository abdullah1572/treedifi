import { PURGE } from "redux-persist";
import { setToken } from '../axios';

var initialState =
{
    getAllNft:[]
}

const Nft = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'SET_ALLNFT_API':
        return {
            ...state,
            getAllNft:payload
        }

    default:
      return state;
  }
};
export default Nft;
