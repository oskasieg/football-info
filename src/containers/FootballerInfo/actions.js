import { GET_PLAYER_REQUEST, GET_PLAYER_SUCCESSED } from './constants';

export const getPlayerAction = (id) => ({
  type: GET_PLAYER_REQUEST,
  id,
});

export const getPlayerSuccessed = (player) => ({
  type: GET_PLAYER_SUCCESSED,
  player,
});
