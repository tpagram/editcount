import { combineReducers } from 'redux'
import mode from './mode'
import { editorState } from './editor'


const editCount = combineReducers({
  mode,
  editorState
  // draft,
  // edited,
  // diff
})

export default editCount