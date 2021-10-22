export const folderActionTypes = {
  SET_INITIAL_STATE: "FOLDER - Set Init State",
  UPDATE_FOLDER: "FOLDER - Update Folder",
};

export const setInitialState = (initialState) => ({
  type: folderActionTypes.SET_INITIAL_STATE,
  payload: initialState,
});

export const updateFolder = (folder) => ({
  type: folderActionTypes.UPDATE_FOLDER,
  payload: folder,
});
