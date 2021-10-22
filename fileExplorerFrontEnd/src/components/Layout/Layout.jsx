import { makeStyles, Tab, Tabs } from "@material-ui/core";
import { useEffect, useState } from "react";
import clsx from "clsx";
import FileList from "../FileList";

const useStyles = makeStyles(() => ({
  layout: {
    display: "flex",
    flexDirection: "column",
  },
  layout__tabs: {
    width: "100%",
  },
  root: {
    borderBottom: "1px solid #e8e8e8",
    textTransform: "none !important",
  },
}));

const Layout = ({ folders }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [folder, setFolder] = useState({});

  useEffect(() => {
    if (folders) {
      setFolder(folders.find((f) => f.id === value) || {});
    } else {
      setFolder({});
    }
  }, [value, folders]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFolder(folders.find((f) => f.id === newValue));
  };

  return (
    <div className={classes.layout}>
      <Tabs
        className={clsx(classes.root, classes.layout__tabs)}
        TabIndicatorProps={{ style: { background: "#3f51b5" } }}
        value={value}
        onChange={handleChange}
        aria-label="List of file explorer"
      >
        {folders &&
          folders.map((folder) => (
            <Tab className={classes.root} key={folder.id} label={folder.path} />
          ))}
      </Tabs>
      <FileList files={folder.files} />
    </div>
  );
};

export default Layout;
