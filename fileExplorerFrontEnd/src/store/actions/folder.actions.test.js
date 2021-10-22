import {
  folderActionTypes,
  setInitialState,
  updateFolder,
} from "./folder.actions";

it("should return the initial state action", () => {
  expect(setInitialState("test")).toEqual({
    type: folderActionTypes.SET_INITIAL_STATE,
    payload: "test",
  });
});

it("should return the update folder action", () => {
  expect(updateFolder("test")).toEqual({
    type: folderActionTypes.UPDATE_FOLDER,
    payload: "test",
  });
});
