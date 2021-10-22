const express = require("express");
const watchPath = require("./services/fileWatcher");
const folderManager = require("./services/folderManager");
const app = express();
const expressWs = require("express-ws")(app);

let paths = process.argv.slice(2);
if (paths.length === 0) {
  paths = ["./"];
}

app.ws("/", function (ws, req) {
  const initialState = folderManager.buildInitialState(paths);
  ws.send(JSON.stringify({ type: "initialState", content: initialState }));
  watchPath(paths, (path) =>
    ws.send(
      JSON.stringify({
        type: "updateFolder",
        content: folderManager.updatePathFolder(path),
      })
    )
  );
  ws.on("message", function (msg) {
    console.log(msg);
  });
});

app.listen(3001);
