import { connect } from 'react-redux'
import { changeMode } from '../actions'
import Button from '../components/button'

const mapStateToProps = state => ({
  mode: state.mode
})

const mapDispatchToProps = dispatch => ({
  onClick: currentMode => dispatch(changeMode(currentMode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)