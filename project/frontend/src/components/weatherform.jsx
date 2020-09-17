import React, { Component } from "react";
import "./form.style.css";

const weatherform = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : null}</div>
        <div className="row py-2">
          <div className="col-md-3 py-2 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
            />
          </div>
          <div className="col-md-3 py-2">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3-md-0 py-2 text-md-4-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country ..!
    </div>
  );
}

export default weatherform;
