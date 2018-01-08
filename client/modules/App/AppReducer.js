// Import Actions
import { TOGGLE_ADD_POST, TOGGLE_EDIT_POST, TOGGLE_THUMB_UP_POST, TOGGLE_THUMB_DOWN_POST } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
  showEditPost: false,
  thumbUpPost: false,
  thumbDownPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };
      
    case TOGGLE_EDIT_POST:
      return {
        ...state,
        showEditPost: !state.showEditPost,
      };

    case TOGGLE_THUMB_UP_POST:
      return {
        ...state,
        thumbUpPost: !state.thumbUpPost,
      };

    case TOGGLE_THUMB_DOWN_POST:
      return {
        ...state,
        thumbDownPost: !state.thumbUpPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;
export const getShowEditPost = state => state.app.showEditPost;
export const thumbUpPost = state => state.app.thumbUpPost;
export const thumbDownPost = state => state.app.thumbDownPost;

// Export Reducer
export default AppReducer;
