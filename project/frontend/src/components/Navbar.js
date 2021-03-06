import React, { Component } from "react";
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import firebase from "firebase";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <IconButton edge="start" color="inherit" aria-label=""></IconButton>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/weatherAPI">
            City Weather
          </Button>
          <Button color="inherit" onClick={() => firebase.auth().signOut()}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default Navbar;

/*
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
*/
