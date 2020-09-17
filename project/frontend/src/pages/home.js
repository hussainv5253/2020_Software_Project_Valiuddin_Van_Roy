import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import firebase from "firebase";

export class home extends Component {
  state = {
    room: null,
  };
  /*componentDidMount() {
    Info about this can be found on https://youtu.be/m_u6P5k0vP0 timestamp 4:51:30
    basically get info from firebase
    axios.get(firebase room function url);
      .then(res => {
        this.setState({
        rooms:res.data
      })
  }
  */
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid items={8} xs={8}>
            <p>Rooms...</p>
          </Grid>
          <Grid items={4} xs={4}>
            <p>Profile...</p>
            <img
              className="photo"
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
