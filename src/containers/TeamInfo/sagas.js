import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_CURRENT_TEAM_REQUEST } from './constants';
import { setCurrentTeam } from './actions';

export default function* teamInfoSaga() {
  yield takeEvery(GET_CURRENT_TEAM_REQUEST, getCurrentTeam);
}

function* getCurrentTeam(action) {
  const url = `https://api.football-data.org/v2/teams/${action.id}`;
  try {
    const response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': 'd7b5d73c478f422c838ae37adefd594a',
      },
    });

    const json = yield response.json();

    yield put(setCurrentTeam(json));
  } catch (e) {
    throw new Error(e);
  }
}
