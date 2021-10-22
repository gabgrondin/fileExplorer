import { makeStyles } from "@material-ui/core";
import React from "react";
import File from "../File";

const useStyles = makeStyles(() => ({
  files: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: "20px",
    gap: "10px",
  },
}));

/**
 * Renders a list of files/folders
 * @param {Array} files The files to render
 */
const FileList = ({ files }) => {
  const classes = useStyles();
  if (!files || files.length === 0) return "Empty List";
  return (
    <div className={classes.files}>
      {files.map((file, i) => (
        <File key={i} file={file} />
      ))}
    </div>
  );
};

export default FileList;
