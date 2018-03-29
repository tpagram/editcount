// Actions
export const START_DRAFT = 'change_mode'
export const FINISH_DRAFT = 'change_mode'
export const FINISH_EDIT = 'change_mode'

// Other constants
export const EditModes = {
  DRAFT: 'draft',
  EDIT: 'edit',
  COMPLETE: 'complete'
}

export function changeMode(currentMode) {
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