import { put, takeEvery } from 'redux-saga/effects';
import { GET_TEAMS_FROM_COMPETITION_REQUEST } from './constants';
import { setTeamsFromCompetition } from './actions';

export default function* listItemsSaga() {
  yield takeEvery(GET_TEAMS_FROM_COMPETITION_REQUEST, fetchTeamsFromCompetition);
}

function* fetchTeamsFromCompetition(action) {
  const url = `http://api.football-data.org/v2/competitions/${action.competitionId}/teams`;
  try {
    const response = yield fetch(url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': 'd7b5d73c478f422c838ae37adefd594a',
      },
    });
    const json = yield response.json();
    yield put(
      setTeamsFromCompetition({
        competitionInfo: json.competition,
        teams: json.teams,
        season: json.season,
      })
    );
  } catch (e) {
    throw new Error(e);
  }
}
