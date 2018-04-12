// Actions
export const START_DRAFT = 'START_DRAFT'
export const FINISH_DRAFT = 'FINISH_DRAFT'
export const FINISH_EDIT = 'FINISH_EDIT'

// Other constants
export const EditModes = {
  DRAFT: 'draft',
  EDIT: 'edit',
  COMPLETE: 'complete'
}

export const changeMode = currentMode => {
  switch (currentMode) {
    case 'draft':
      return { type: FINISH_DRAFT }
    case 'edit':
      return { type: FINISH_EDIT }
    case 'complete':
      return { type: START_DRAFT }
    default:
      return
  }
}