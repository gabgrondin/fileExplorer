const fs = require("fs");
const getFilesFromPath = require("./fileReader");

/**
 * Takes the paths and build the initial state for each of them
 * @param {Array} paths Array of requested path
 * @returns the initial state
 */
const buildInitialState = (paths) => {
  if (!paths || paths.length === 0) {
    paths = ["./"];
  }
  const content = [];
  paths.forEach((path, i) => {
    if (fs.existsSync(path)) {
      content.push({ id: i, path, files: getFilesFromPath(path) });
    }
  });
  return content;
};

/**
 * The state containing all the files of the folder
 * @param {String} path The path to update
 * @returns The state for the path
 */
const updatePathFolder = (path) => ({
  type: "updateFolder",
  path,
  files: getFilesFromPath(path),
});

module.exports = {
  buildInitialState,
  updatePathFolder,
};
