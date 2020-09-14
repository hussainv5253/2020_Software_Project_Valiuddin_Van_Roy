import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

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
      <Grid container spacing={2}>
        <Grid items={8} xs={8}>
          <p>Rooms...</p>
        </Grid>
        <Grid items={4} xs={4}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
