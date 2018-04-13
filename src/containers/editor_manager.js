import { connect } from 'react-redux'
import { changeMode } from '../actions'
import Editor from '../components/editor'

const mapStateToProps = state => ({
  editorState: state.editorState
})

const mapDispatchToProps = dispatch => ({
  onSaveEditorState: editorState => dispatch(changeMode(currentMode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)