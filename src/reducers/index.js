import { combineReducers } from 'redux'
import mode from './mode'
// import { draft, edited, diff } from './texts'


const editCount = combineReducers({
  mode,
  // draft,
  // edited,
  // diff
})

export default editCount