import { GET_PLAYER_SUCCESSED } from './constants';

const initialState = {};

const footballerInfoReducer = (state = initialState, action) => {
  if (action.type === GET_PLAYER_SUCCESSED) {
    return {
      ...action.player,
    };
  }

  return state;
};

export default footballerInfoReducer;
