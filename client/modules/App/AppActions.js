// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_EDIT_POST = 'TOGGLE_EDIT_POST';
export const TOGGLE_THUMB_UP_POST = 'TOGGLE_THUMB_UP_POST';
export const TOGGLE_THUMB_DOWN_POST = 'TOGGLE_THUMB_DOWN_POST';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleEditPost() {
  return {
    type: TOGGLE_EDIT_POST,
  };
}

export function toggleThumbUpPost() {
  return {
    type: TOGGLE_THUMB_UP_POST,
  };
}

export function toggleThumbDownPost() {
  return {
    type: TOGGLE_THUMB_DOWN_POST,
  };
}
