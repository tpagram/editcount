import { START_DRAFT, FINISH_DRAFT, FINISH_EDIT } from './actions'

const mode = (state = 'draft', action) => {
  switch (action.type) {
    case FINISH_DRAFT:
      return 'edit'
    case FINISH_EDIT:
      return 'complete'
    case START_DRAFT:
      return 'draft'
    default:
      return state
  }
}

export default mode