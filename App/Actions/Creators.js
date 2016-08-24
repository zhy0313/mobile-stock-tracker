import Types from './Types'


const startup = () => ({ type: Types.STARTUP })


// lookup
const requestLookup = input => ({
  type: Types.LOOKUP_REQUEST,
  input
});
const receiveLookup = results => ({
  type: Types.LOOKUP_RECEIVE,
  ...results
});
const receiveLookupFailure = error => ({
  type: Types.LOOKUP_FAILURE,
  error
});



// quote
const requestQuote = symbol => ({
  type: Types.QUOTE_REQUEST,
  symbol
});
const receiveQuote = results => ({
  type: Types.QUOTE_RECEIVE,
  ...results
});
const receiveQuoteFailure = error => ({
  type: Types.QUOTE_FAILURE,
  error
})


/**
 Makes available all the action creators we've created.
 */
export default {
  startup,
  requestLookup,
  receiveLookup,
  receiveLookupFailure,
  requestQuote,
  receiveQuote,
  receiveQuoteFailure
}
