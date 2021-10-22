import { connect } from "react-redux";
import {
  setInitialState,
  updateFolder,
} from "../../store/actions/folder.actions";
import WebSocketHandler from "./WebSocketHandler";

const mapDispatchToProps = (dispatch) => ({
  setInitialState: (initState) => dispatch(setInitialState(initState)),
  updateFolder: (folder) => dispatch(updateFolder(folder)),
});

export default connect(null, mapDispatchToProps)(WebSocketHandler);
