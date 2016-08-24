import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import DebugSettings from '../Config/DebugSettings'

import lookup from './LookupSaga';
import quote from './QuoteSaga';


const api = DebugSettings.useFixtures ? FixtureAPI : API.create()

// start the daemons
export default function * root () {
  yield fork(lookup(api).watcher)
  yield fork(quote(api).watcher)
}
