import useWebSocket, { ReadyState } from "react-use-websocket";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import socketUrl from "../../constants/socketUrl";

const useStyles = makeStyles(() => ({
  webSocketHandler__header: {
    fontSize: "1rem",
  },
  webSocketHandler__title: {
    flexGrow: 1,
  },
}));

/**
 * Handles the WebSocket connection.
 * @param {function} setInitialState Action to set the initial state
 * @param {function} updateFolder Action to update a specific folder
 */
const WebSocketHandler = ({ setInitialState, updateFolder }) => {
  const classes = useStyles();
  const { readyState } = useWebSocket(socketUrl, {
    onMessage: (msg) => {
      const message = JSON.parse(msg.data);
      switch (message.type) {
        case "initialState":
          setInitialState(message.content);
          break;
        case "updateFolder":
          updateFolder(message.content);
          break;
        default:
          console.warn("unhandled message");
      }
    },
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" className={classes.webSocketHandler__header}>
          File Explorer
        </Typography>
        <Typography variant="h6" className={classes.webSocketHandler__title}>
          The WebSocket is currently {connectionStatus}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default WebSocketHandler;
