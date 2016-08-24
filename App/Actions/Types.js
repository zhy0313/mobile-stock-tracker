// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`

  STARTUP

  LOOKUP_REQUEST
  LOOKUP_RECEIVE
  LOOKUP_FAILURE

  QUOTE_REQUEST
  QUOTE_RECEIVE
  QUOTE_FAILURE

`)
