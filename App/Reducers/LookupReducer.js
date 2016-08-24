import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  input: '',
  results: [],
  fetching: false,
  error: null
})

// request lookup
const request = (state, action) =>
  state.merge({
    fetching: true,
    input: action.input
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
    results: []
  })


const ACTION_HANDLERS = {
  [Types.LOOKUP_REQUEST]: request,
  [Types.LOOKUP_RECEIVE]: receive,
  [Types.LOOKUP_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
