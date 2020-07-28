import { GET_ALL_COMPETITIONS_REQUEST, SET_TEAMS_FROM_COMPETITION, CLEAR_TEAMS } from './constants';

const initialState = { items: [], itemsType: '', allCompetitions: [], competitionInfo: {} };

const listItemsReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_COMPETITIONS_REQUEST) {
    const availableCompetitions = action.competitions.competitions.filter((competition) => {
      if (competition.id === 2020) return false;
      if (competition.id >= 2000 && competition.id <= 2003) return true;
      if (competition.id >= 2013 && competition.id <= 2021) return true;
      return false;
    });

    return { ...state, allCompetitions: availableCompetitions };
  }

  if (action.type === SET_TEAMS_FROM_COMPETITION) {
    return {
      ...state,
      items: action.items,
      competitionInfo: action.competitionInfo,
      season: action.season,
      itemsType: 'teams',
    };
  }

  if (action.type === CLEAR_TEAMS) {
    return { ...state, items: [], itemsType: '', competitionInfo: {} };
  }

  return state;
};

export default listItemsReducer;
