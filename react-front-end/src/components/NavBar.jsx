import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToggleBtn from "./Darkmode/ToggleBtn";
import { stateContext } from "../contextProviders/stateContext";
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
  },
  menuButton: {
    color: "white",
    marginRight: theme.spacing(1),
  },
  title: {
    color: "white",
    flexGrow: 1,
  },
  login: {
    color: "white",
    float: "right",
  },
}));

function NavBar() {
  const classes = useStyles();
  const { state, setState } = useContext(stateContext);
  const setModeToMain = () => {
    if (state.mode !== "main") {
      setState((prev) => {
        return { ...prev, mode: "main" };
      });
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        color="transparent"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar className="navbarApp">
        <div className="mainGroup">
          <Typography variant="h6">
            <Button className={classes.title} onClick={setModeToMain}>
              <img
                className={classes.menuButton}
                src="/images/orange-logo.svg"
                alt="icon"
                style={{ height: 30 }}
              />
              Hypocenter
            </Button>
          </Typography>
          <Button className={classes.login}>Login</Button>
            </div>
          <ToggleBtn />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
