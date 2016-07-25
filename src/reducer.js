import {isFulltime, isParttime, keyword} from './FilterableJobList/reducers.js'

const reducer = Redux.combineReducers({
  isFulltime,
  isParttime,
  keyword
})

export default reducer