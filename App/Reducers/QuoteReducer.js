import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  symbol: '',
  results: {},
  fetching: false,
  error: null
})

const request = (state, action) =>
  state.merge({
    fetching: true,
    symbol: action.symbol
  })

const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    results: action.results
  })

const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    results: {}
  })

const ACTION_HANDLERS = {
  [Types.QUOTE_REQUEST]: request,
  [Types.QUOTE_RECEIVE]: receive,
  [Types.QUOTE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
