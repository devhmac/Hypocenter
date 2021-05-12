import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        color="transparent"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src="/images/hypocenter.svg"
              alt="icon"
              style={{ height: 30 }}
            />
          </IconButton>
          <Typography variant="h6">
            <Button className={classes.title}>Hypocenter</Button>
          </Typography>
          <Button className={classes.login}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
