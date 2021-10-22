import { folderActionTypes } from "../actions/folder.actions";

const initialState = [];

/**
 * The folder reducer
 * @param {Array} state The folder state array
 * @param {Object} action The redux action
 * @returns The updated state
 */
const folderReducer = (state = initialState, action) => {
  switch (action.type) {
    case folderActionTypes.SET_INITIAL_STATE:
      return action.payload;
    case folderActionTypes.UPDATE_FOLDER:
      return state.map((folder) =>
        folder.path === action.payload.path
          ? { ...action.payload, id: folder.id }
          : folder
      );
    default:
      return state;
  }
};

export default folderReducer;
