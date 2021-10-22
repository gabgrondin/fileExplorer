import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import DescriptionIcon from "@material-ui/icons/Description";
import { makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  file: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
    border: "1px solid #3f51b5",
    borderRadius: "4px",
    padding: "12px",
    width: "10vw",
  },
  file__icon: {
    height: "75px",
    width: "75px",
  },
  file__name: {
    width: "100%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

/**
 * Show a file.
 * @param {Object} file The file containing the name and the isDirectory
 */
const File = ({ file }) => {
  const classes = useStyles();
  return (
    <div key={file.id} className={classes.file}>
      {file.isDirectory ? (
        <FolderIcon
          data-testid="directory-icon"
          className={classes.file__icon}
        />
      ) : (
        <DescriptionIcon
          data-testid="file-icon"
          className={classes.file__icon}
        />
      )}
      <Tooltip title={file.name}>
        <span className={classes.file__name}>{file.name}</span>
      </Tooltip>
    </div>
  );
};

export default File;
