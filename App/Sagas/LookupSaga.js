import { take, call, put } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';

export default (api) => {
  function * worker (input) {
    // call will
    const response = yield call(api.lookup, input)

    console.log(response);
    if(response.ok) {
      const results = response.data;
      yield put(Actions.receiveLookup({ results }))
    }
  }

  function * watcher () {
    while(true) {
      const { input } = yield take(Types.LOOKUP_REQUEST)
      yield call(worker, input)
    }
  }

  return {
    watcher,
    worker
  }
}
