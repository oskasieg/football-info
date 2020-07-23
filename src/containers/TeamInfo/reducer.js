import { SET_CURRENT_TEAM } from './constants';

const initialState = {
  team: {},
};

const teamInfoReducer = (state = initialState, action) => {
  if (action.type === SET_CURRENT_TEAM) {
    return { ...state, team: action.team };
  }

  return state;
};

export default teamInfoReducer;
