import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import home from "./pages/home";
import signup from "./pages/signup";
import login from "./pages/login";
import Navbar from "./components/Navbar";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createTheme from "@material-ui/core/styles/createMuiTheme";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6a1b9a",
      light: "#8748ae",
      dark: "#4a126b",
    },
    secondary: {
      main: "#e040fb",
      light: "##e666fb",
      dark: "##9c2caf",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

firebase.initializeApp({
  //need to change for actual database
  apiKey: "AIzaSyBBIadzRt2wlinGVim1mWHrRh5hYJDDpJs",
  authDomain: "home-monitor-6b0f2.firebaseapp.com",
});

class App extends Component {
  //user Auth stuff
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {this.state.isSignedIn ? (
            <Router>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home} />
                </Switch>
              </div>
            </Router>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

/*
    <Route exact path="/login" component={login} />
    <Route exact path="/signup" component={signup} />


*/
