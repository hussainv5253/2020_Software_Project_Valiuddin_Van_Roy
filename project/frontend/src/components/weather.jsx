import { CssBaseline } from "@material-ui/core";
import React, { Component } from "react";
import "../App.css";

const Weather = (props) => {
  return (
    <div className="container">
      <div className="cards">
        <h1> </h1>
        {props.countryname ? (
          <h2>
            {props.cityname}, {props.countryname}
          </h2>
        ) : null}
        <h1 className="py-4">
          <i className={props.weatherIcon} />
        </h1>
        {props.temp_celcius ? (
          <h1 className="py-2">{props.temp_celcius}&deg;</h1>
        ) : null}
        {/** show max and min temp **/}
        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
