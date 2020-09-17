import { CssBaseline } from "@material-ui/core";
import React, { Component } from "react";
import "../App.css";

const room = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <h1> </h1>
        {props.serialnumber ? (
          <h2>
            {props.roomname}
            <h3>{props.serialnumber}</h3>
          </h2>
        ) : null}

        {props.templevel ? (
          <h4 className="py-2">
            {" "}
            {props.humiditylevel} {props.templevel}&deg;
          </h4>
        ) : null}
      </div>
    </div>
  );
};

export default room;
