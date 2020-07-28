import { GET_ALL_COMPETITIONS_REQUEST, GET_TEAMS_FROM_COMPETITION_REQUEST, SET_TEAMS_FROM_COMPETITION, CLEAR_TEAMS } from './constants';

// redux-thunk
export const getAllCompetitionsRequest = () => {
  return async (dispatch) => {
    const response = await fetch('https://api.football-data.org/v2/competitions', {
      method: 'GET',
      headers: {
        'X-Auth-Token': 'd7b5d73c478f422c838ae37adefd594a',
      },
    });

    const competitions = await response.json();

    dispatch({
      type: GET_ALL_COMPETITIONS_REQUEST,
      competitions,
    });
  };
};

export const getTeamsFromCompetition = (competitionId) => ({
  type: GET_TEAMS_FROM_COMPETITION_REQUEST,
  competitionId,
});

export const setTeamsFromCompetition = ({ competitionInfo, teams, season }) => ({
  type: SET_TEAMS_FROM_COMPETITION,
  competitionInfo,
  items: teams,
  season,
});

export const clearTeams = () => ({
  type: CLEAR_TEAMS,
});
