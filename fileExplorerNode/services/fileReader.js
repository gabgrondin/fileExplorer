const fs = require("fs");

/**
 * Returns the folder content
 * @param {String} requestedPath Path to get the file from
 * @returns The folder content
 */
const getFilesFromPath = (requestedPath) => {
  const folderContent = [];
  const files = fs.readdirSync(requestedPath, { withFileTypes: true });
  files.forEach((file) => {
    folderContent.push({ name: file.name, isDirectory: file.isDirectory() });
  });
  return folderContent;
};

module.exports = getFilesFromPath;
