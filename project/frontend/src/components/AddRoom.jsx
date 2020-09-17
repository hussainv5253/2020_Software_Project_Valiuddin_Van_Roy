import React, { Component } from "react";
import "./form.style.css";

const AddRoom = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.loadsensor}>
        <div>{props.error ? error() : null}</div>
        <div className="row py-2">
          <div className="col-md-6 py-2 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="Serial"
              autoComplete="off"
              placeholder="Sensor Serial#"
            />
          </div>
          <div className="col-md-3-md-0 py-2 text-md-4-left">
            <button className="btn btn-warning">Get Data</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter a Valid Serial Number
    </div>
  );
}

export default AddRoom;
