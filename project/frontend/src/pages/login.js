import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppIcon from "../images/home.png";
import Typography from "@material-ui/core/Typography";
import Image from "react-image-resizer";

const styles = {
  form: {
    textAlign: "center",
  },
  image: {
    margin: "20px auto 20px auto",
    alignSelf: "center",
  },
};

class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={styles.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h2">Login</Typography>
          <Image
            src={AppIcon}
            height={"240"}
            width={"240"}
            alt="Home Monitor"
            className={styles.image}
          />
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default login;
