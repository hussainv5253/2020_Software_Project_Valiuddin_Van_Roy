import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API_key = "444b02dc65121bd6b7bb6818a77f905f";

export class weatherAPI extends Component {
  render() {
    return (
      <div className="container">
        <div className="cards">
          <h1>City Weather</h1>
        </div>
      </div>
    );
  }
}

export default weatherAPI;
