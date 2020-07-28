import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_PLAYER_REQUEST } from './constants';
import { getPlayerSuccessed } from './actions';

export default function* FootballerInfoSaga() {
  yield takeEvery(GET_PLAYER_REQUEST, getPlayer);
}

function* getPlayer(action) {
  const url = `https://api.football-data.org/v2/players/${action.id}`;
  try {
    const response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': 'd7b5d73c478f422c838ae37adefd594a',
      },
    });

    const json = yield response.json();

    yield put(getPlayerSuccessed(json));
  } catch (e) {
    throw new Error(e);
  }
}
