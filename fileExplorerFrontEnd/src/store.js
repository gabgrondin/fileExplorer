import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "./store/reducers/folder.reducer";

export default configureStore({
  reducer: { folder: folderReducer },
});
