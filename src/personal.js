import React, { Component } from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

const infoStyles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "5%",
    justifyContent: "space-around"
  },
  formDiv: {
    border: "0.5px solid grey",
    width: "20%",
    paddingBottom: 50,
    marginLeft: 5
  },
  currentStep: {
    textAlign: "center",
    marginTop: 15,
    opacity: 0.5,
    fontSize: 15
  },
  textField: {
    marginTop: 5
  },
  button: {
    marginTop: 30,
    width: 200,
    fontWeight: "lighter",
    marginBottom: -20
  },
  phone: {
    marginTop: 100
  }
});

class Personal extends Component {
  constructor(props) {
    console.log("props in PERSONAL:", props);
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.formDiv}>
        <div className={classes.currentStep}>
          Step {this.props.currentStep} of 3
        </div>
        <form className={classes.container} noValidate autoComplete="on">
          <TextField
            required
            label="Full Name"
            className={classes.textField}
            defaultValue={this.props.fullName}
            onChange={this.props.handleInput("fullName")}
          />

          <TextField
            required
            label="Email"
            className={classes.textField}
            defaultValue={this.props.email}
            onChange={this.props.handleInput("email")}
          />

          <MuiPhoneNumber
            defaultCountry={"de"}
            className={classes.textField}
            defaultValue={this.props.phoneNumber}
            onChange={this.props.handlePhoneNumber}
          />

          <Button
            variant="outlined"
            className={classes.button}
            onClick={this.props.nextStep}
          >
            Next Step
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(infoStyles)(Personal);
