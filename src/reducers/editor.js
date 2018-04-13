import { NEW_DRAFT, START_EDIT, FINISH_EDIT, UPDATE_EDITOR_STATE } from './actions'
import { EditorState } from 'draft-js';


const emptyEditorState = {
  editorState: EditorState.createEmpty(),
};

export const editorState = (state = emptyEditorState, action) => {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      console.log('damn son')
      return {
        ...state,
        editorState: action.payload,
      }
    default:
      return state
  }
}

// export const draft = (state = '', action) => {
//   switch (action.type) {
//     case FINISH_DRAFT:
//       return
//     default:
//       return state
//   }
// }

// // export const edit = (state = '', action) => {
// //   switch (action.type) {
// //     case CHANGE_MODE:
// //       switch (state) {
// //         case 'edit':
// //           return action.text
// //         default:
// //           return state
// //       }
// //     default:
// //       return state
// //   }
// // }
// //
// // export const diff = (state = '', action) => {
// //   switch (action.type) {
// //     case CHANGE_MODE:
// //       switch (state) {
// //         case 'edit':
// //           return action.text
// //         default:
// //           return state
// //       }
// //     default:
// //       return state
// //   }
// // }