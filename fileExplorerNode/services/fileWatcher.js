const fs = require("fs");

/**
 * Watch the list of paths and update them when they changes.
 * @param {Array} paths List of path to watch
 * @param {function} update Function to call when the path changes
 */
const watchPath = (paths, update) => {
  paths.forEach((path) => {
    fs.watch(path, () => {
      if (update) {
        update(path);
      }
    });
  });
};

module.exports = watchPath;
