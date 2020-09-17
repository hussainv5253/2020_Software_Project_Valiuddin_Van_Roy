import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import firebase from "firebase";
import AddRoom from "../components/AddRoom";
import Room from "../components/room";
import "../App.css";

export class home extends Component {
  constructor() {
    super();
    this.state = {
      room: undefined,
      temp: undefined,
      humidity: undefined,
      serial: undefined,
      error: false,
    };
  }

  getData = async (e) => {
    e.preventDefault();
    const s_no = e.target.elements.Serial.value;

    if (s_no) {
      //get data from firebase
      const temp_response = 30;
      const humidity_response = 15;
      const room_response = "My Room";

      this.setState({
        temp: temp_response,
        humidity: humidity_response,
        room: room_response,
        serial: s_no,
        error: false,
      });
    } else {
      this.setState({ error: true });
    }
  };

  //need to implement the remove button which im not sure how to implement yet

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid items={8} xs={8}>
            <Room
              roomname={this.state.room}
              templevel={this.state.temp}
              humiditylevel={this.state.humidity}
              serialnumber={this.state.serial}
            />
            <AddRoom loadsensor={this.getData} error={this.state.error}>
              console.log(loadsensor);
            </AddRoom>
          </Grid>
          <Grid items={4} xs={4}>
            <div className="App">
              <img
                className="photo"
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
              <h3 className="mt-0">Welcome</h3>
              <h3>{firebase.auth().currentUser.displayName}</h3>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
