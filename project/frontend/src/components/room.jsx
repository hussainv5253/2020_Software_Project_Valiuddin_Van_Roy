import { CssBaseline } from "@material-ui/core";
import React, { Component } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const room = (props) => {
  const classes = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <div className="roomcard">
        {props.serialnumber ? (
          <h1>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h2>{props.roomname}</h2>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Serial #: {props.serialnumber}
                </Typography>
                <Typography variant="body2" component="p">
                  <h3>Humidity: {props.humiditylevel}</h3>
                  <h3>Temperature: {props.templevel}&deg;</h3>
                </Typography>
              </CardContent>
              <div className="removebutton">
                <CardActions>
                  <Button size="small">Remove</Button>
                </CardActions>
              </div>
            </Card>
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default room;
