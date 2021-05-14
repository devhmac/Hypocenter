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
import "./NavBar.css";
import axios from "axios";

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
  usergreeting: {
    color: "white",
    float: "right",
    button: "disabled",
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

  const loginUser3 = () => {
    setState((prev) => {
      return {
        ...prev,
        user: {
          id: 3,
          first_name: "John",
          username: "johnsmith",
          email: "hypocentermail@gmail.com",
        },
      };
    });
  };

  const logout = () => {
    setState((prev) => {
      return { ...prev, user: false };
    });
  };

  const enterNotifications = () => {
    setState((prev) => {
      return { ...prev, mode: "notifications" };
    });
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
            {state.user === false && (
              <Button className={classes.login} onClick={loginUser3}>
                Login
              </Button>
            )}
            {state.user !== false && (
              <p
                id="welcome"
                class="MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-login-4"
              >
                {" "}
                Welcome back, {state.user.first_name}{" "}
              </p>
            )}
            {state.user !== false && (
              <Button className={classes.login} onClick={logout}>
                Log Out
              </Button>
            )}
          </div>
          <div className="rightNavGroup">
            {state.user !== false && (
              <Button className={classes.login} onClick={enterNotifications}>
                Notifications
              </Button>
            )}
            <ToggleBtn />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
