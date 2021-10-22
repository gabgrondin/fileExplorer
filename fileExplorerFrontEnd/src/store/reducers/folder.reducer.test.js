import { folderActionTypes } from "../actions/folder.actions";
import folderReducer from "./folder.reducer";

it("should do nothing on all other actions", () => {
  expect(folderReducer({}, { type: "test" })).toEqual({});
});

it("should use the payload on initial state", () => {
  expect(
    folderReducer(
      {},
      { type: folderActionTypes.SET_INITIAL_STATE, payload: "test" }
    )
  ).toEqual("test");
});

it("should update the state on update folder", () => {
  expect(
    folderReducer([{ id: 0, path: "test" }], {
      type: folderActionTypes.UPDATE_FOLDER,
      payload: { path: "test", files: [] },
    })
  ).toEqual([{ id: 0, path: "test", files: [] }]);
});
