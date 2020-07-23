import { SET_CURRENT_TEAM, GET_CURRENT_TEAM_REQUEST } from './constants';

export const getCurrentTeam = (id) => ({
  type: GET_CURRENT_TEAM_REQUEST,
  id,
});

export const setCurrentTeam = (team) => ({
  type: SET_CURRENT_TEAM,
  team,
});
